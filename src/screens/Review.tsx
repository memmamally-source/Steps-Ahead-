import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { AnswerFeedback, QuestionCard, ReportButton, TeachSheet, expectedText, promptText } from '@/components/learning';
import { Empty, PageTitle, Segmented, Sheet, StatusBadge, StatusDot } from '@/components/ui';
import { content } from '@/content';
import type { McqItem, TrueFalseItem } from '@/content/schema';
import { DISCIPLINES, SYSTEMS } from '@/content/taxonomy';
import { estimate } from '@/engine/mastery';
import { mistakeResolved, type MistakeEntry } from '@/engine/progress';
import { getGame } from '@/features/games/registry';
import { useNow } from '@/state/clock';
import { useAnalysis } from '@/state/derived';
import { useProgress } from '@/state/progress';
import { useStudyContext } from '@/state/studyTimer';

type Sort = 'date' | 'frequency' | 'subject' | 'system' | 'game' | 'difficulty';

export function Review() {
  const a = useAnalysis();
  const mistakes = useProgress((s) => s.mistakes);
  const srs = useProgress((s) => s.srs);
  const saved = useProgress((s) => s.savedConcepts);
  const records = useProgress((s) => s.concepts);
  const [sort, setSort] = useState<Sort>('date');
  const [view, setView] = useState<'open' | 'corrected'>('open');
  const [open, setOpen] = useState<MistakeEntry | null>(null);
  useStudyContext({ activity: 'mistakes' });

  const all = Object.values(mistakes);
  const openCount = all.filter((m) => !mistakeResolved(m)).length;
  const list = useMemo(() => {
    const xs = Object.values(mistakes).filter((m) => (view === 'open' ? !mistakeResolved(m) : mistakeResolved(m)));
    const c0 = (m: MistakeEntry) => content.concept(m.conceptIds[0]!);
    const by: Record<Sort, (a: MistakeEntry, b: MistakeEntry) => number> = {
      date: (x, y) => y.lastAt - x.lastAt,
      frequency: (x, y) => y.count - x.count || y.lastAt - x.lastAt,
      subject: (x, y) => (c0(x)?.discipline ?? '').localeCompare(c0(y)?.discipline ?? ''),
      system: (x, y) => (c0(x)?.system ?? '').localeCompare(c0(y)?.system ?? ''),
      game: (x, y) => x.gameId.localeCompare(y.gameId),
      difficulty: (x, y) => y.difficulty - x.difficulty,
    };
    return xs.sort(by[sort]);
  }, [mistakes, sort, view]);

  const nextDue = Object.values(srs).filter((c) => c.due > a.now).sort((x, y) => x.due - y.due)[0];

  return (
    <div className="stack-lg">
      <div>
        <PageTitle title="Review" />
        {a.due.length ? (
          <section className="hero stack">
            <div className="stack-xs">
              <span className="small muted">Spaced repetition</span>
              <h2 style={{ color: '#fff', fontSize: '1.45rem' }}>
                {a.due.length} concept{a.due.length === 1 ? '' : 's'} due
              </h2>
              <span className="small muted">Each one asked a new way, so you recall the idea, not the question.</span>
            </div>
            <Link to="/play/review" className="btn btn-primary btn-lg btn-block">
              <Icon name="play" size={18} /> Start review
            </Link>
          </section>
        ) : (
          <section className="card row">
            <span className="game-icon sm dark">
              <Icon name="check" size={18} />
            </span>
            <div className="grow">
              <h3>All caught up</h3>
              <p className="small muted">
                {nextDue ? `Next review ${new Date(nextDue.due).toLocaleDateString(undefined, { weekday: 'long' })}.` : 'Concepts you play are scheduled here automatically.'}
              </p>
            </div>
            {openCount > 0 && (
              <Link to="/play/review" className="btn btn-dark btn-sm">
                Practise mistakes
              </Link>
            )}
          </section>
        )}
      </div>

      <section className="stack">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <h2>My Mistakes</h2>
          <select className="input" aria-label="Sort mistakes" style={{ minHeight: 34, width: 'auto', padding: '4px 8px', fontSize: 14 }} value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="date">Recent</option>
            <option value="frequency">Most missed</option>
            <option value="subject">Subject</option>
            <option value="system">Organ system</option>
            <option value="game">Game</option>
            <option value="difficulty">Hardest</option>
          </select>
        </div>
        <Segmented
          label="Mistake status"
          value={view}
          onChange={setView}
          options={[
            { id: 'open', label: `To fix · ${openCount}` },
            { id: 'corrected', label: `Corrected · ${all.length - openCount}` },
          ]}
        />
        {!list.length ? (
          <Empty>{view === 'open' ? (all.length ? 'Nothing left to fix.' : 'Wrong answers will collect here, with their explanations.') : 'Retry a mistake and get it right to see it here.'}</Empty>
        ) : (
          <div className="card" style={{ padding: 0 }}>
            <ul className="list">
              {list.map((m) => (
                <li key={m.itemId}>
                  <button className="list-row" onClick={() => setOpen(m)}>
                    <StatusDot status={estimate(m.conceptIds.map((id) => records[id]), a.now).status} />
                    <span className="grow stack-xs">
                      <span className="small clamp-2" style={{ fontWeight: 550 }}>
                        {m.prompt}
                      </span>
                      <span className="tiny muted" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        Answer: <strong style={{ color: 'var(--text)' }}>{m.expected}</strong>
                      </span>
                    </span>
                    {m.count > 1 && <span className="badge badge-bad">×{m.count}</span>}
                    <Icon name="chevron" size={18} className="chev" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {saved.length > 0 && (
        <section>
          <div className="section-head">
            <h2>Saved</h2>
          </div>
          <div className="row-wrap">
            {saved.map((id) => {
              const c = content.concept(id);
              return c ? (
                <Link key={id} to={`/learn/${id}`} className="chip">
                  <Icon name="bookmark" size={14} /> {c.title}
                </Link>
              ) : null;
            })}
          </div>
        </section>
      )}

      {open && <MistakeSheet m={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function MistakeSheet({ m, onClose }: { m: MistakeEntry; onClose: () => void }) {
  const records = useProgress((s) => s.concepts);
  const favourites = useProgress((s) => s.favouriteItems);
  const { toggleFavourite, scheduleReview, answer } = useProgress();
  const now = useNow();
  const concept = content.concept(m.conceptIds[0]!);
  const item = content.item(m.itemId);
  const quiz = item?.kind === 'mcq' || item?.kind === 'tf' ? (item as McqItem | TrueFalseItem) : null;
  const status = estimate(m.conceptIds.map((id) => records[id]), now).status;
  const fav = favourites.includes(m.itemId);
  const [mode, setMode] = useState<'view' | 'retry'>('view');
  const [res, setRes] = useState<{ id: string; correct: boolean } | null>(null);
  const [teach, setTeach] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  return (
    <Sheet title={mode === 'retry' ? 'Retry' : 'Mistake'} onClose={onClose}>
      {mode === 'retry' && quiz ? (
        <div className="stack">
          <QuestionCard
            item={quiz}
            answered={res?.id ?? null}
            onAnswer={(correct, response, id) => {
              if (res) return;
              setRes({ id, correct });
              answer({ gameId: 'review', item: quiz, correct, prompt: promptText(quiz), response, expected: expectedText(quiz) });
            }}
          />
          {res && <AnswerFeedback correct={res.correct} item={quiz} chosenId={res.id} onTeach={() => setTeach(true)} />}
        </div>
      ) : (
        <div className="stack">
          <div className="row-wrap">
            {concept && <span className="badge badge-red">{DISCIPLINES[concept.discipline].short}</span>}
            {concept && <span className="badge">{SYSTEMS[concept.system].short}</span>}
            <span className="badge">{getGame(m.gameId)?.title}</span>
            <StatusBadge status={status} />
          </div>
          <p className="question">{m.prompt}</p>
          <div className="card-flat" style={{ padding: '4px 14px' }}>
            <div className="row between small" style={{ padding: '10px 0', borderBottom: '1px solid var(--line)' }}>
              <span className="muted">You said</span>
              <span style={{ color: 'var(--bad)', fontWeight: 650, textAlign: 'right' }}>{m.response}</span>
            </div>
            <div className="row between small" style={{ padding: '10px 0' }}>
              <span className="muted">Answer</span>
              <strong style={{ textAlign: 'right' }}>{m.expected}</strong>
            </div>
          </div>
          {item && 'mini' in item && <p className="small">{item.mini}</p>}
          <p className="tiny muted">
            Missed {m.count}× · last {new Date(m.lastAt).toLocaleDateString()} · {m.history.length} attempt{m.history.length === 1 ? '' : 's'}
          </p>
          {quiz && (
            <button className="btn btn-primary btn-lg btn-block" onClick={() => setMode('retry')}>
              Retry question
            </button>
          )}
          <div className="grid-2">
            <button className="btn btn-soft" onClick={() => setTeach(true)}>
              <Icon name="bulb" size={16} /> Teach me
            </button>
            {concept && (
              <button
                className="btn btn-soft"
                disabled={scheduled}
                onClick={() => {
                  scheduleReview(concept.id, 1);
                  setScheduled(true);
                }}
              >
                {scheduled ? 'Tomorrow ✓' : 'Review tomorrow'}
              </button>
            )}
            {concept && (
              <Link className="btn btn-soft" to={`/play/survival?concept=${concept.id}`}>
                Related game
              </Link>
            )}
            <button className="btn btn-soft" aria-pressed={fav} onClick={() => toggleFavourite(m.itemId)}>
              <Icon name="star" size={16} className={fav ? 'red' : undefined} /> {fav ? 'Favourited' : 'Favourite'}
            </button>
          </div>
          <ReportButton itemId={m.itemId} conceptId={concept?.id} />
        </div>
      )}
      {teach && concept && <TeachSheet conceptId={concept.id} excludeItemId={m.itemId} onClose={() => setTeach(false)} />}
    </Sheet>
  );
}
