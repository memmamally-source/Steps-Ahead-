import { useState } from 'react';
import { Link } from 'react-router';
import { BrandMark, GAME_ICONS, Icon } from '@/components/Icon';
import { PreviewPill, Ring, pct } from '@/components/ui';
import { Brand } from '@/config/brand';
import { formatDuration } from '@/engine/studyTime';
import { getGame } from '@/features/games/registry';
import { useProgress } from '@/state/progress';
import { playHref, todayKey, useAnalysis, useDailyDone, useTimeSummary } from '@/state/derived';

const DAILIES = [
  { id: 'crossword', label: 'Mini' },
  { id: 'connections', label: 'Connections' },
  { id: 'mystery', label: 'Patient' },
] as const;

const LENGTHS = [5, 15, 30, 60];

function greeting(now: number) {
  const h = new Date(now).getHours();
  return h < 5 ? 'Late session' : h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
}

export function Home() {
  const profile = useProgress((s) => s.profile);
  const counts = useProgress((s) => s.counts);
  const time = useTimeSummary();
  const a = useAnalysis();
  const dailyDone = useDailyDone();
  const today = todayKey();
  const goalMs = profile.dailyGoalMin * 60_000;
  const [length, setLength] = useState<number | null>(null);
  const planMin = length ?? Math.max(5, Math.min(60, profile.dailyGoalMin));
  const plan = a.plan(planMin);
  const next = plan[0];
  const c = counts[today] ?? { answered: 0, correct: 0 };
  const goalMet = time.today >= goalMs;
  const weakest = a.weak[0];
  const examDays = profile.examDate ? Math.ceil((new Date(profile.examDate + 'T00:00').getTime() - new Date(a.now).setHours(0, 0, 0, 0)) / 86_400_000) : null;

  return (
    <div className="stack-lg">
      <div className="appbar">
        <span className="brand mobile-only">
          <BrandMark size={30} /> {Brand.name}
        </span>
        <div className="row" style={{ gap: 8 }}>
          <PreviewPill />
          <span className="badge" style={{ fontSize: '0.8rem', padding: '5px 10px' }} aria-label={`${time.streak} day streak`}>
            <Icon name="flame" size={15} /> {time.streak}
          </span>
        </div>
      </div>

      <section className="hero stack" style={{ marginTop: -14 }}>
        <div className="row between" style={{ alignItems: 'flex-start' }}>
          <div className="stack-xs grow">
            <span className="small muted">
              {greeting(a.now)}
              {examDays !== null && examDays >= 0 ? ` · ${examDays} days to Step 1` : ''}
            </span>
            <h1 style={{ color: '#fff', fontSize: '1.65rem' }}>{goalMet ? 'Goal reached' : 'Today’s session'}</h1>
            <span className="small muted">
              {formatDuration(time.today)} of {profile.dailyGoalMin} min
            </span>
          </div>
          <Ring value={time.today / goalMs} size={72} label={`${Math.round(Math.min(1, time.today / goalMs) * 100)}% of daily goal`}>
            <span className="strong num" style={{ fontSize: '0.95rem' }}>
              {Math.round(Math.min(1, time.today / goalMs) * 100)}%
            </span>
          </Ring>
        </div>
        {next && (
          <Link to={playHref(next)} className="btn btn-primary btn-lg btn-block" style={{ justifyContent: 'space-between' }}>
            <span className="row" style={{ gap: 10 }}>
              <Icon name="play" size={18} /> {getGame(next.gameId)?.title}
            </span>
            <span className="small" style={{ fontWeight: 600, opacity: 0.85 }}>
              {next.minutes} min
            </span>
          </Link>
        )}
        {next && <span className="tiny muted" style={{ marginTop: -6 }}>{next.reason}</span>}
      </section>

      <section>
        <div className="section-head">
          <h2>Daily</h2>
          <span className="tiny muted">Same for everyone today</span>
        </div>
        <div className="grid-3">
          {DAILIES.map((d) => {
            const done = dailyDone.has(`${today}:${d.id}`);
            return (
              <Link key={d.id} to={`/play/${d.id}?daily=1`} className="card tap daily" aria-label={`Daily ${getGame(d.id)?.title}${done ? ', done' : ''}`}>
                <span className={`game-icon sm${done ? ' dark' : ''}`}>
                  <Icon name={GAME_ICONS[d.id]!} size={18} />
                </span>
                <span className="strong small">{d.label}</span>
                {done && (
                  <span className="check">
                    <Icon name="check" size={14} />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="card" style={{ padding: 0 }}>
        <div className="stat-strip">
          <div>
            <div className="stat-value">{c.answered}</div>
            <div className="stat-label">answered today</div>
          </div>
          <div>
            <div className="stat-value">{c.answered ? pct(c.correct / c.answered) : '—'}</div>
            <div className="stat-label">accuracy</div>
          </div>
          <Link to="/review" style={{ textDecoration: 'none' }}>
            <div className="stat-value" style={{ color: a.due.length ? 'var(--red-ink)' : undefined }}>
              {a.due.length}
            </div>
            <div className="stat-label">due for review</div>
          </Link>
        </div>
        {weakest && (
          <Link to={playHref({ gameId: 'survival', focus: weakest.level === 'concept' ? { concept: weakest.id } : { topic: weakest.id } })} className="list-row" style={{ borderTop: '1px solid var(--line)' }}>
            <span className="dot dot-bad" />
            <span className="grow small">
              <span className="muted">Focus area: </span>
              <strong>{weakest.title}</strong>
              <span className="muted"> · {pct(weakest.estimate.accuracy)}</span>
            </span>
            <Icon name="chevron" size={18} className="chev" />
          </Link>
        )}
      </section>

      <section>
        <div className="section-head">
          <h2>Up next</h2>
          <label className="row small" style={{ gap: 6 }}>
            <span className="muted">Session</span>
            <select className="input" style={{ minHeight: 34, width: 'auto', padding: '4px 8px', fontSize: 14 }} value={planMin} onChange={(e) => setLength(Number(e.target.value))}>
              {[...new Set([...LENGTHS, planMin])].sort((x, y) => x - y).map((m) => (
                <option key={m} value={m}>
                  {m} min
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="card-flat" style={{ background: 'var(--surface)' }}>
          <ul className="list">
            {plan.slice(1, 4).map((b, i) => (
              <li key={i}>
                <Link to={playHref(b)} className="list-row">
                  <span className="game-icon sm dark">
                    <Icon name={GAME_ICONS[b.gameId]!} size={18} />
                  </span>
                  <span className="grow">
                    <span className="strong small" style={{ display: 'block' }}>
                      {getGame(b.gameId)?.title}
                    </span>
                    <span className="tiny muted clamp-2">{b.reason}</span>
                  </span>
                  <span className="small muted num">{b.minutes}m</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/progress" className="list-row">
                <span className="grow small strong">Your dashboard</span>
                <Icon name="chevron" size={18} className="chev" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
