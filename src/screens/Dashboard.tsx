import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { Bar, PageTitle, Segmented, StatusDot, pct } from '@/components/ui';
import { content } from '@/content';
import { DISCIPLINES, SYSTEMS } from '@/content/taxonomy';
import { byTopic, coverage, improvement, retention, type Node } from '@/engine/analysis';
import { answeredTotals, lastDays, totalsBy } from '@/engine/stats';
import { formatDuration } from '@/engine/studyTime';
import { GAMES, getGame } from '@/features/games/registry';
import { playHref, useAnalysis, useTimeSummary } from '@/state/derived';
import { useProgress } from '@/state/progress';

/** Study dashboard: time first, then the separate learning metrics, then detail on demand. */
export function Dashboard() {
  const s = useProgress();
  const time = useTimeSummary();
  const a = useAnalysis();
  const [by, setBy] = useState<'discipline' | 'system' | 'topic'>('discipline');
  const days = lastDays(s.days, 14, a.now);
  const goalMs = s.profile.dailyGoalMin * 60_000;
  const max = Math.max(goalMs, ...days.map((d) => d.ms), 1);
  const totals = answeredTotals(s.counts);
  const ret = retention(s.concepts);
  const imp = improvement(s.concepts, a.now);
  const cov = coverage(content, s.concepts);
  const topics = byTopic(content, s.concepts, a.now).filter((n) => n.estimate.attempts > 0).sort((x, y) => (x.estimate.mastery ?? 0) - (y.estimate.mastery ?? 0));
  const nodes = by === 'discipline' ? a.disciplines : by === 'system' ? a.systems : topics;
  const heat = lastDays(s.days, 35, a.now);
  const level = (ms: number) => (ms <= 0 ? 0 : ms < 5 * 60_000 ? 1 : ms < 15 * 60_000 ? 2 : ms < 45 * 60_000 ? 3 : 4);

  return (
    <div className="stack-lg">
      <PageTitle title="Progress" back={true} />

      <section className="card stack" style={{ marginTop: -14 }}>
        <div className="row between" style={{ alignItems: 'flex-end' }}>
          <div>
            <span className="stat-label">Studied this week</span>
            <div className="stat-value" style={{ fontSize: '2rem' }}>
              {formatDuration(time.week)}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="small strong num">
              <Icon name="flame" size={14} /> {time.streak} day streak
            </div>
            <div className="tiny muted">{time.externalWeek ? `+ ${formatDuration(time.externalWeek)} logged elsewhere` : `Goal ${s.profile.dailyGoalMin} min a day`}</div>
          </div>
        </div>
        {time.week < 60_000 && days.every((d) => d.ms < 60_000) ? (
          <div className="empty" style={{ padding: '18px 8px', background: 'var(--surface-2)', borderRadius: 12 }}>
            <p className="small">Your chart fills in as you play.</p>
            <p className="tiny muted">Only active time counts: idle or background time never does.</p>
          </div>
        ) : (
          <>
        <div className="chart-bars" aria-hidden>
          {days.map((d, i) => (
            <div key={d.key} className={`b${i === days.length - 1 ? ' today' : d.ms >= goalMs ? ' goal-met' : ''}`} style={{ height: `${(d.ms / max) * 100}%` }} title={`${d.key}: ${formatDuration(d.ms)}`} />
          ))}
        </div>
        <div className="chart-axis" aria-hidden>
          {days.map((d, i) => (
            <span key={d.key}>{i % 2 === 1 || i === days.length - 1 ? Number(d.key.slice(8)) : ''}</span>
          ))}
        </div>
        <table className="sr-only">
          <caption>Daily study time, last 14 days</caption>
          <tbody>
            {days.map((d) => (
              <tr key={d.key}>
                <th scope="row">{d.key}</th>
                <td>{formatDuration(d.ms)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="tiny muted">Black bars met your goal; red is today. Only active time counts.</p>
          </>
        )}
      </section>

      <section className="grid-2">
        <Metric label="Accuracy" value={totals.answered ? pct(totals.correct / totals.answered) : '—'} note={`${totals.answered} answered`} />
        <Metric label="Retention" value={pct(ret.rate)} note={ret.attempts ? `${ret.attempts} revisits after a day+` : 'Revisit on later days'} />
        <Metric label="Coverage" value={`${cov.seen}/${cov.total}`} note="concepts encountered" />
        <Metric label="Improvement" value={imp ? `${imp.delta >= 0 ? '+' : ''}${Math.round(imp.delta * 100)}` : '—'} note={imp ? 'points vs last week' : 'needs 2 weeks of play'} />
      </section>
      <p className="tiny muted" style={{ marginTop: -18 }}>
        Each metric measures something different. None predicts your exam result.
      </p>

      {a.weak.length > 0 && (
        <section>
          <div className="section-head">
            <h2>Focus areas</h2>
          </div>
          <div className="card" style={{ padding: 0 }}>
            <ul className="list">
              {a.weak.map((w) => (
                <li key={w.id}>
                  <Link to={playHref({ gameId: 'survival', focus: w.level === 'concept' ? { concept: w.id } : { topic: w.id } })} className="list-row">
                    <span className="dot dot-bad" />
                    <span className="grow">
                      <span className="strong small" style={{ display: 'block' }}>
                        {w.title}
                      </span>
                      <span className="tiny muted">
                        {pct(w.estimate.accuracy)} over {w.estimate.attempts} answers
                      </span>
                    </span>
                    <span className="small red strong">Practise</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="stack-sm">
        <div className="section-head" style={{ marginBottom: 4 }}>
          <h2>Mastery</h2>
        </div>
        <Segmented
          label="Mastery by"
          value={by}
          onChange={setBy}
          options={[
            { id: 'discipline', label: 'Discipline' },
            { id: 'system', label: 'System' },
            { id: 'topic', label: 'Topic' },
          ]}
        />
        <MasteryList nodes={nodes.filter((n) => n.estimate.attempts)} />
      </section>

      <Collapse title="Time breakdown">
        <TimeList title="By game" data={totalsBy(s.days, 'byGame')} label={(k) => getGame(k)?.title ?? k} />
        <TimeList title="By discipline" data={totalsBy(s.days, 'byDiscipline')} label={(k) => DISCIPLINES[k as keyof typeof DISCIPLINES]?.title ?? k} />
        <TimeList title="By organ system" data={totalsBy(s.days, 'bySystem')} label={(k) => SYSTEMS[k as keyof typeof SYSTEMS]?.short ?? k} />
        <TimeList title="By activity" data={totalsBy(s.days, 'byActivity')} label={(k) => ({ play: 'Playing', explanation: 'Explanations', lesson: 'Lessons', review: 'Spaced review', mistakes: 'Mistakes' })[k] ?? k} />
        <div className="stack-sm">
          <h3>Last 5 weeks</h3>
          <div className="heat" role="img" aria-label={`Studied on ${heat.filter((d) => d.ms > 0).length} of the last 35 days`}>
            {heat.map((d) => (
              <span key={d.key} data-l={level(d.ms)} title={`${d.key}: ${formatDuration(d.ms)}`} />
            ))}
          </div>
          <p className="tiny muted">
            Today {formatDuration(time.today)} · month {formatDuration(time.month)} · lifetime {formatDuration(time.lifetime)} · average {formatDuration(time.averageDaily)} per study day
          </p>
        </div>
      </Collapse>

      <Collapse title="Games and personal bests">
        <ul className="list">
          {GAMES.filter((g) => s.games[g.id]?.completed).map((g) => {
            const st = s.games[g.id]!;
            return (
              <li key={g.id} className="row between small" style={{ padding: '10px 0' }}>
                <span>{g.title}</span>
                <span className="muted num">
                  {st.completed}× · best {st.best} · avg {Math.round(st.totalScore / Math.max(1, st.completed))}
                </span>
              </li>
            );
          })}
          {!Object.values(s.games).some((g) => g?.completed) && <li className="small muted">Finish a game to see scores.</li>}
        </ul>
        <p className="tiny muted">
          {a.due.length} due for review · {Object.values(s.mistakes).filter((m) => !m.history[m.history.length - 1]?.correct).length} open mistakes · {s.explanationsOpened} explanations opened
        </p>
      </Collapse>
    </div>
  );
}

function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="card" style={{ padding: 14 }}>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="tiny muted">{note}</div>
    </div>
  );
}

function Collapse({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="card">
      <summary className="row between" style={{ listStyle: 'none', cursor: 'pointer' }}>
        <h3>{title}</h3>
        <Icon name="chevron" size={18} />
      </summary>
      <div className="stack-lg" style={{ marginTop: 16, gap: 20 }}>
        {children}
      </div>
    </details>
  );
}

function TimeList({ title, data, label }: { title: string; data: Record<string, number>; label: (k: string) => string }) {
  const rows = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const max = rows[0]?.[1] ?? 1;
  return (
    <div className="stack-sm">
      <h3>{title}</h3>
      {rows.length ? (
        rows.slice(0, 5).map(([k, v]) => (
          <div key={k} className="stack-xs">
            <div className="row between small">
              <span>{label(k)}</span>
              <span className="muted num">{formatDuration(v)}</span>
            </div>
            <Bar value={v / max} label={`${label(k)} time`} dark />
          </div>
        ))
      ) : (
        <p className="small muted">No tracked time yet.</p>
      )}
    </div>
  );
}

function MasteryList({ nodes }: { nodes: Node[] }) {
  if (!nodes.length) return <p className="card small muted">Play a few games to see mastery here.</p>;
  return (
    <div className="card stack" style={{ gap: 12 }}>
      {nodes.map((n) => (
        <div key={n.id} className="stack-xs">
          <div className="row between small" style={{ gap: 8 }}>
            <span className="row" style={{ gap: 8, minWidth: 0 }}>
              <StatusDot status={n.estimate.status} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.title}</span>
            </span>
            <span className="num muted" style={{ flex: 'none' }}>
              {pct(n.estimate.mastery)} · {n.estimate.attempts}
            </span>
          </div>
          <Bar value={n.estimate.mastery ?? 0} label={`${n.title} mastery`} />
        </div>
      ))}
      <p className="tiny muted">Mastery weights difficulty and recency. Number after the dot: answers so far.</p>
    </div>
  );
}
