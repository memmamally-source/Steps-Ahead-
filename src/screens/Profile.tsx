import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { PageTitle, Segmented, Sheet } from '@/components/ui';
import { PLANS } from '@/config/plans';
import { DISCIPLINES } from '@/content/taxonomy';
import { dateKey } from '@/engine/random';
import { formatDuration } from '@/engine/studyTime';
import { cloudConfigured } from '@/lib/firebaseConfig';
import { exportProgress, useProgress } from '@/state/progress';
import { useTimeSummary } from '@/state/derived';

const RESOURCES = ['UWorld', 'AMBOSS', 'First Aid', 'Pathoma', 'Sketchy', 'Boards & Beyond', 'Anki', 'NBME / practice exam', 'Lectures', 'Other'];
const GOALS = [5, 10, 15, 30, 60];

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="stack-sm">
      <span className="label" style={{ paddingLeft: 4 }}>
        {title}
      </span>
      <div className="card" style={{ padding: 0 }}>
        <ul className="list">{children}</ul>
      </div>
    </section>
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <li>
      <label className="list-row">
        <span className="grow small">{label}</span>
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} style={{ width: 20, height: 20, accentColor: 'var(--red)' }} />
      </label>
    </li>
  );
}

export function Profile() {
  const profile = useProgress((s) => s.profile);
  const external = useProgress((s) => s.external);
  const { setProfile, resetAll } = useProgress();
  const time = useTimeSummary();
  const [sheet, setSheet] = useState<null | 'goal' | 'log' | 'plans' | 'delete'>(null);

  const download = () => {
    const blob = new Blob([exportProgress()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `steps-ahead-study-data-${dateKey()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="stack-lg">
      <PageTitle title="Profile" />
      <section className="card row" style={{ marginTop: -14 }}>
        <span className="game-icon dark" style={{ borderRadius: '50%' }}>
          <Icon name="profile" />
        </span>
        <div className="grow">
          <h3>Guest</h3>
          <p className="tiny muted">{cloudConfigured ? 'Accounts are configured but not switched on yet.' : 'Saved on this device. Accounts and sync are coming.'}</p>
        </div>
      </section>

      <Group title="Study">
        <li>
          <button className="list-row" onClick={() => setSheet('goal')}>
            <span className="grow small">Daily goal</span>
            <span className="small muted">{profile.dailyGoalMin} min</span>
            <Icon name="chevron" size={18} className="chev" />
          </button>
        </li>
        <li>
          <label className="list-row">
            <span className="grow small">Exam date</span>
            <input type="date" className="input" style={{ width: 'auto', minHeight: 36, padding: '4px 8px', boxShadow: 'none', textAlign: 'right', background: 'transparent' }} value={profile.examDate ?? ''} onChange={(e) => setProfile({ examDate: e.target.value || undefined })} />
          </label>
        </li>
        <li>
          <button className="list-row" onClick={() => setSheet('log')}>
            <span className="grow small">Study logged elsewhere</span>
            <span className="small muted">{formatDuration(time.externalWeek)} this week</span>
            <Icon name="chevron" size={18} className="chev" />
          </button>
        </li>
        <li>
          <div className="list-row" style={{ cursor: 'default' }}>
            <span className="grow small">Package</span>
            <span className="small muted">USMLE Step 1</span>
          </div>
        </li>
      </Group>

      <Group title="Appearance">
        <li style={{ padding: '12px 16px' }}>
          <Segmented
            label="Theme"
            value={profile.theme}
            onChange={(t) => setProfile({ theme: t })}
            options={[
              { id: 'system', label: 'Auto' },
              { id: 'light', label: 'Light' },
              { id: 'dark', label: 'Dark' },
            ]}
          />
        </li>
        <Toggle label="Reduce motion" checked={profile.reduceMotion} onChange={(v) => setProfile({ reduceMotion: v })} />
        <Toggle label="Appear on public leaderboards (when they launch)" checked={profile.leaderboardOptIn} onChange={(v) => setProfile({ leaderboardOptIn: v })} />
      </Group>

      <Group title="Data and app">
        <li>
          <Link to="/progress" className="list-row">
            <span className="grow small">Dashboard</span>
            <Icon name="chevron" size={18} className="chev" />
          </Link>
        </li>
        <li>
          <button className="list-row" onClick={download}>
            <span className="grow small">Export study history</span>
            <Icon name="download" size={18} className="chev" />
          </button>
        </li>
        <li>
          <Link to="/about" className="list-row">
            <span className="grow small">Content, sources and review status</span>
            <Icon name="chevron" size={18} className="chev" />
          </Link>
        </li>
        <li>
          <button className="list-row" onClick={() => setSheet('plans')}>
            <span className="grow small">Plans</span>
            <span className="small muted">Free during development</span>
            <Icon name="chevron" size={18} className="chev" />
          </button>
        </li>
        <li>
          <button className="list-row" onClick={() => setSheet('delete')} style={{ color: 'var(--bad)' }}>
            <span className="grow small strong">Delete all data</span>
          </button>
        </li>
      </Group>

      {sheet === 'goal' && (
        <Sheet title="Daily goal" onClose={() => setSheet(null)}>
          <div className="stack">
            <div className="grid-3">
              {GOALS.map((g) => (
                <button key={g} className="chip" aria-pressed={profile.dailyGoalMin === g} onClick={() => setProfile({ dailyGoalMin: g })} style={{ minHeight: 48 }}>
                  {g} min
                </button>
              ))}
              <input
                className="input"
                inputMode="numeric"
                aria-label="Custom goal in minutes"
                placeholder="Custom"
                defaultValue={GOALS.includes(profile.dailyGoalMin) ? '' : profile.dailyGoalMin}
                onBlur={(e) => {
                  const n = Number(e.target.value);
                  if (n >= 1 && n <= 600) setProfile({ dailyGoalMin: Math.round(n) });
                }}
              />
            </div>
            <button className="btn btn-dark btn-block" onClick={() => setSheet(null)}>
              Done
            </button>
          </div>
        </Sheet>
      )}
      {sheet === 'log' && <LogSheet onClose={() => setSheet(null)} entries={external} weekInApp={time.week} weekExternal={time.externalWeek} />}
      {sheet === 'plans' && (
        <Sheet title="Plans" onClose={() => setSheet(null)}>
          <div className="stack">
            <p className="small muted">Everything is free while Steps Ahead is in development. Explanations will always stay free.</p>
            {PLANS.map((p) => (
              <div key={p.id} className="card-flat pad">
                <h3>{p.title}</h3>
                <ul className="small" style={{ margin: '6px 0 0', paddingLeft: 18 }}>
                  {p.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Sheet>
      )}
      {sheet === 'delete' && (
        <Sheet title="Delete all data?" onClose={() => setSheet(null)}>
          <div className="stack">
            <p>This erases your study time, answers, mistakes, review schedule, external log and settings from this device. It can’t be undone.</p>
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={() => {
                resetAll();
                setSheet(null);
              }}
            >
              Delete everything
            </button>
            <button className="btn btn-soft btn-block" onClick={() => setSheet(null)}>
              Cancel
            </button>
          </div>
        </Sheet>
      )}
    </div>
  );
}

function LogSheet({ onClose, entries, weekInApp, weekExternal }: { onClose: () => void; entries: ReturnType<typeof useProgress.getState>['external']; weekInApp: number; weekExternal: number }) {
  const { addExternal, removeExternal } = useProgress();
  const [form, setForm] = useState({ resource: 'UWorld', minutes: '', subject: '', date: dateKey(), notes: '' });
  return (
    <Sheet title="Log study elsewhere" onClose={onClose}>
      <div className="stack">
        <p className="small muted">
          Kept separate from in-app time. This week: {formatDuration(weekInApp)} in-app + {formatDuration(weekExternal)} logged = {formatDuration(weekInApp + weekExternal)}.
        </p>
        <form
          className="stack-sm"
          onSubmit={(e) => {
            e.preventDefault();
            const minutes = Number(form.minutes);
            if (!(minutes > 0 && minutes <= 960)) return;
            addExternal({ resource: form.resource, minutes, subject: form.subject || undefined, date: form.date, notes: form.notes.trim() || undefined });
            setForm({ ...form, minutes: '', notes: '' });
          }}
        >
          <div className="grid-2">
            <label className="field">
              Resource
              <select className="input" value={form.resource} onChange={(e) => setForm({ ...form, resource: e.target.value })}>
                {RESOURCES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
            <label className="field">
              Minutes
              <input className="input" inputMode="numeric" required value={form.minutes} onChange={(e) => setForm({ ...form, minutes: e.target.value.replace(/\D/g, '') })} />
            </label>
            <label className="field">
              Subject
              <select className="input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                <option value="">Mixed</option>
                {Object.entries(DISCIPLINES).map(([k, d]) => (
                  <option key={k} value={k}>
                    {d.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              Date
              <input className="input" type="date" max={dateKey()} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </label>
          </div>
          <input className="input" aria-label="Notes (optional)" placeholder="Notes (optional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          <button className="btn btn-primary btn-block" type="submit" disabled={!Number(form.minutes)}>
            Add to log
          </button>
        </form>
        {entries.length > 0 && (
          <ul className="list">
            {[...entries]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 20)
              .map((e) => (
                <li key={e.id} className="row between" style={{ padding: '10px 0' }}>
                  <div className="small">
                    <strong>{e.resource}</strong> · {e.minutes} min
                    <div className="tiny muted">
                      {e.date}
                      {e.subject ? ` · ${DISCIPLINES[e.subject as keyof typeof DISCIPLINES]?.title ?? e.subject}` : ''}
                      {e.notes ? ` · ${e.notes}` : ''}
                    </div>
                  </div>
                  <button className="btn btn-text btn-sm" aria-label={`Delete ${e.resource} entry`} onClick={() => removeExternal(e.id)}>
                    <Icon name="trash" size={18} />
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </Sheet>
  );
}
