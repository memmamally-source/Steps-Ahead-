import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { TeachSheet } from '@/components/learning';
import { ActionBar, Empty, Sheet } from '@/components/ui';
import { content } from '@/content';
import type { ItemQuery } from '@/content/repo';
import type { CaseItem } from '@/content/schema';
import { dateKey, seeded, shuffle } from '@/engine/random';
import { useSeed } from '@/state/clock';
import { useProgress } from '@/state/progress';
import { useStudyContext } from '@/state/studyTimer';
import { GameFrame, ScoreCard, useGameSession } from '../GameFrame';
import { dailyCase, mysteryScore } from './logic';

export function MysteryGame({ daily, query, focusLabel }: { daily: boolean; query: ItemQuery; focusLabel?: string }) {
  const [round, setRound] = useState(0);
  const seedBase = useSeed();
  const today = dateKey();
  const kase = useMemo(() => {
    const cases = content.itemsOf('case', query);
    if (daily) return dailyCase(content.itemsOf('case'), today);
    return shuffle(cases.length ? cases : content.itemsOf('case'), seeded(`${seedBase}:${round}`))[0];
  }, [daily, query, round, today, seedBase]);
  if (!kase) return <Empty>No cases yet.</Empty>;
  return <Case key={`${kase.id}-${round}`} kase={kase} daily={daily ? `${today}:mystery` : undefined} focusLabel={focusLabel} onAgain={daily ? undefined : () => setRound((r) => r + 1)} />;
}

function Case({ kase, daily, focusLabel, onAgain }: { kase: CaseItem; daily?: string; focusLabel?: string; onAgain?: () => void }) {
  const { answer, completeGame } = useProgress();
  const best = useProgress((s) => s.games.mystery?.best ?? 0);
  const sessionId = useGameSession('mystery', daily ? 'daily' : 'practice');
  const [revealed, setRevealed] = useState(1);
  const [choice, setChoice] = useState<string | null>(null);
  const [teach, setTeach] = useState(false);
  const [answering, setAnswering] = useState(false);
  const [finalBest] = useState(best);
  const correct = choice === kase.answerId;
  const done = choice !== null;
  useStudyContext({ gameId: 'mystery', activity: teach ? 'lesson' : done ? 'explanation' : 'play', conceptIds: kase.conceptIds });
  const score = mysteryScore(correct, revealed);
  const chosen = kase.options.find((o) => o.id === choice);
  const right = kase.options.find((o) => o.id === kase.answerId)!;

  const submit = (id: string) => {
    if (done) return;
    setAnswering(false);
    setChoice(id);
    const ok = id === kase.answerId;
    answer({ gameId: 'mystery', sessionId, item: kase, correct: ok, prompt: `${kase.title}: ${kase.question}`, response: kase.options.find((o) => o.id === id)!.text, expected: right.text, hintsUsed: revealed - 1 });
    completeGame({ gameId: 'mystery', sessionId, score: mysteryScore(ok, revealed), correct: ok ? 1 : 0, total: 1, daily });
  };

  const shown = done ? kase.stages : kase.stages.slice(0, revealed);
  const options = (
    <div className="stack-sm">
      {kase.options.map((o, i) => {
        const state = done ? (o.id === kase.answerId ? ' is-correct' : o.id === choice ? ' is-wrong' : ' dim') : '';
        return (
          <button key={o.id} className={`option${state}`} disabled={done} onClick={() => submit(o.id)}>
            <span className="key">{done && o.id === kase.answerId ? <Icon name="check" size={16} /> : done && o.id === choice ? <Icon name="x" size={16} /> : String.fromCharCode(65 + i)}</span>
            <span style={{ flex: 1 }}>{o.text}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <GameFrame
      gameId="mystery"
      title={daily ? 'Daily Mystery Patient' : 'Mystery Patient'}
      progress={revealed / kase.stages.length}
      status={!done ? <span className="small strong num">{mysteryScore(true, revealed)}</span> : undefined}
    >
      {done && <ScoreCard score={score} best={finalBest} lines={[correct ? `solved with ${revealed} of ${kase.stages.length} clues` : 'not solved']} />}
      {done ? (
        <>
          <section className="card">
            <div className="row between">
              <span className={`verdict ${correct ? 'ok' : 'bad'}`}>
                <span className="mark"><Icon name={correct ? 'check' : 'x'} size={18} /></span>
                {correct ? 'Correct' : 'Not quite'}
              </span>
            </div>
            {!correct && (
              <p style={{ marginTop: 10 }}>
                <span className="muted">Answer: </span>
                <strong>{right.text}</strong>
              </p>
            )}
            {!correct && chosen?.whyWrong && (
              <p className="small" style={{ marginTop: 10, color: 'var(--text-2)' }}>
                <strong>Why not “{chosen.text}”: </strong>
                {chosen.whyWrong}
              </p>
            )}
            <p style={{ marginTop: 10 }}>{kase.explanation}</p>
            <div className="takeaway" style={{ marginTop: 12 }}>
              <span className="label">Step 1 takeaway</span>
              {kase.takeaway}
            </div>
            <details className="more">
              <summary>
                Mechanism and differentials <Icon name="chevron" size={16} className="chev-down" />
              </summary>
              <div className="stack-sm small" style={{ marginTop: 10, color: 'var(--text-2)' }}>
                <p>
                  <strong>Mechanism. </strong>
                  {kase.mechanism}
                </p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {kase.differentials.map((d) => (
                    <li key={d.name}>
                      <strong>{d.name}:</strong> {d.why}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
            <button className="btn btn-soft btn-sm" style={{ marginTop: 12 }} onClick={() => setTeach(true)}>
              <Icon name="bulb" size={16} /> Teach me this
            </button>
          </section>
          <details className="card">
            <summary className="row between" style={{ listStyle: 'none', cursor: 'pointer' }}>
              <span className="strong small">The case and your answer</span>
              <Icon name="chevron" size={18} />
            </summary>
            <div className="stack" style={{ marginTop: 8 }}>
            <div>
              <span className="label">{kase.title}{focusLabel ? ` · ${focusLabel}` : ''}</span>
              {shown.map((s, i) => (
                <div key={s.label + i} className={`stage${i === shown.length - 1 && !done ? ' latest' : ''}`}>
                  <span className="label">{s.label}</span>
                  <p style={{ marginTop: 2 }}>{s.text}</p>
                </div>
              ))}
            </div>
              <div className="stack-sm">
                <p className="question">{kase.question}</p>
                {options}
              </div>
            </div>
          </details>
        </>
      ) : (
        <>
      <section className="card">
        <span className="label">{kase.title}{focusLabel ? ` · ${focusLabel}` : ''}</span>
        {shown.map((s, i) => (
          <div key={s.label + i} className={`stage${i === shown.length - 1 && !done ? ' latest' : ''}`}>
            <span className="label">{s.label}</span>
            <p style={{ marginTop: 2 }}>{s.text}</p>
          </div>
        ))}
      </section>
      {!done && (
        <p className="question" style={{ textAlign: 'center', padding: '0 8px' }}>
          {kase.question}
        </p>
      )}
        </>
      )}
      <ActionBar>
        {done ? (
          <>
            <Link to="/" className="btn btn-soft btn-lg">
              Done
            </Link>
            {onAgain && (
              <button className="btn btn-primary btn-lg" onClick={onAgain}>
                Next case
              </button>
            )}
          </>
        ) : (
          <>
            <button className="btn btn-soft btn-lg" disabled={revealed >= kase.stages.length} onClick={() => setRevealed(revealed + 1)}>
              Next clue
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => setAnswering(true)}>
              Answer
            </button>
          </>
        )}
      </ActionBar>
      {answering && !done && (
        <Sheet title="Your answer" onClose={() => setAnswering(false)}>
          <div className="stack">
            <p className="question">{kase.question}</p>
            {options}
          </div>
        </Sheet>
      )}
      {teach && <TeachSheet conceptId={kase.conceptIds[0]!} onClose={() => setTeach(false)} />}
    </GameFrame>
  );
}
