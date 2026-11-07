import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { TeachSheet } from '@/components/learning';
import { ActionBar, Empty } from '@/components/ui';
import { content } from '@/content';
import type { ItemQuery } from '@/content/repo';
import { relevanceWeight, type SequenceItem } from '@/content/schema';
import { seeded, shuffle, weightedShuffle } from '@/engine/random';
import { useSeed } from '@/state/clock';
import { useProgress } from '@/state/progress';
import { useStudyContext } from '@/state/studyTimer';
import { GameFrame, ScoreCard, useGameSession } from '../GameFrame';
import { checkSequence } from './logic';

/** Mechanism Lab: rebuild a pathway by tapping its steps in order. */
export function MechanismGame({ query, focusLabel }: { query: ItemQuery; focusLabel?: string }) {
  const [round, setRound] = useState(0);
  const seedBase = useSeed();
  const item = useMemo(() => {
    const pool = content.itemsOf('sequence', query);
    const all = pool.length ? pool : content.itemsOf('sequence');
    return weightedShuffle(all, relevanceWeight, seeded(`${seedBase}:${round}`))[0];
  }, [query, round, seedBase]);
  if (!item) return <Empty>No pathways yet.</Empty>;
  return <Board key={`${item.id}-${round}`} item={item} seed={`${seedBase}:${round}`} focusLabel={focusLabel} onAgain={() => setRound((r) => r + 1)} />;
}

function Board({ item, seed, focusLabel, onAgain }: { item: SequenceItem; seed: string; focusLabel?: string; onAgain: () => void }) {
  const { answer, completeGame } = useProgress();
  const best = useProgress((s) => s.games.mechanism?.best ?? 0);
  const sessionId = useGameSession('mechanism', 'practice');
  const pool = useMemo(() => shuffle(item.steps, seeded(`steps:${seed}`)), [item, seed]);
  const [placed, setPlaced] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [teach, setTeach] = useState(false);
  const [finalBest] = useState(best);
  useStudyContext({ gameId: 'mechanism', activity: teach ? 'lesson' : checked ? 'explanation' : 'play', conceptIds: item.conceptIds });
  const result = checkSequence(placed, item.steps);

  const check = () => {
    setChecked(true);
    answer({
      gameId: 'mechanism', sessionId, item, correct: result.allCorrect,
      prompt: `${item.title}: ${item.prompt}`, response: placed.join(' → '), expected: item.steps.join(' → '),
    });
    completeGame({ gameId: 'mechanism', sessionId, score: result.score, correct: result.correct, total: item.steps.length });
  };

  return (
    <GameFrame gameId="mechanism" title="Mechanism Lab" progress={placed.length / item.steps.length}>
      {checked && <ScoreCard score={result.score} best={finalBest} lines={[`${result.correct} of ${item.steps.length} steps in place`]} />}
      <section className="card">
        <span className="label">{item.title}{focusLabel ? ` · ${focusLabel}` : ''}</span>
        <p className="question" style={{ marginTop: 6 }}>{item.prompt}</p>
        <ol className="stack-sm" style={{ margin: '10px 0 0', paddingLeft: 22 }}>
          {item.steps.map((step, i) => {
            const p = placed[i];
            const state = checked ? (result.positions[i] ? ' is-correct' : ' is-wrong') : '';
            return (
              <li key={i}>
                <button className={`option${state}`} disabled={checked || !p} onClick={() => setPlaced(placed.filter((x) => x !== p))} aria-label={p ? `Remove ${p}` : `Empty step ${i + 1}`}>
                  <span style={{ flex: 1 }}>{p ?? <span className="muted">Step {i + 1}</span>}</span>
                </button>
                {checked && !result.positions[i] && <div className="small" style={{ marginTop: 4 }}>Correct: <strong>{step}</strong></div>}
              </li>
            );
          })}
        </ol>
      </section>
      {!checked && (
        <section className="stack-sm">
          {pool.filter((s) => !placed.includes(s)).map((s) => (
            <button key={s} className="option" onClick={() => setPlaced([...placed, s])}>
              <span style={{ flex: 1 }}>{s}</span>
            </button>
          ))}
        </section>
      )}
      {checked && (
        <section className="card">
          <span className={`verdict ${result.allCorrect ? 'ok' : 'bad'}`}>
            <span className="mark"><Icon name={result.allCorrect ? 'check' : 'x'} size={18} /></span>
            {result.allCorrect ? 'Pathway rebuilt' : 'Not quite'}
          </span>
          <p style={{ marginTop: 10 }}>{item.explanation}</p>
          <button className="btn btn-soft btn-sm" style={{ marginTop: 12 }} onClick={() => setTeach(true)}>
            <Icon name="bulb" size={16} /> Teach me this
          </button>
        </section>
      )}
      <ActionBar>
        {checked ? (
          <>
            <Link to="/" className="btn btn-soft btn-lg">Done</Link>
            <button className="btn btn-primary btn-lg" onClick={onAgain}>Next pathway</button>
          </>
        ) : (
          <>
            <button className="btn btn-soft btn-lg" disabled={!placed.length} onClick={() => setPlaced([])}>Clear</button>
            <button className="btn btn-primary btn-lg" disabled={placed.length !== item.steps.length} onClick={check}>Check</button>
          </>
        )}
      </ActionBar>
      {teach && <TeachSheet conceptId={item.conceptIds[0]!} onClose={() => setTeach(false)} />}
    </GameFrame>
  );
}
