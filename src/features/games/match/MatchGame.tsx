import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { TeachSheet } from '@/components/learning';
import { ActionBar, Empty } from '@/components/ui';
import { content } from '@/content';
import type { ItemQuery } from '@/content/repo';
import { relevanceWeight, type MatchItem } from '@/content/schema';
import { seeded, shuffle, weightedShuffle } from '@/engine/random';
import { useSeed } from '@/state/clock';
import { useProgress } from '@/state/progress';
import { useStudyContext } from '@/state/studyTimer';
import { GameFrame, ScoreCard, useGameSession } from '../GameFrame';
import { isCorrectPair, matchScore } from './logic';

/** Match Up: tap a term, then its partner. */
export function MatchGame({ query, focusLabel }: { query: ItemQuery; focusLabel?: string }) {
  const [round, setRound] = useState(0);
  const seedBase = useSeed();
  const item = useMemo(() => {
    const pool = content.itemsOf('match', query);
    const all = pool.length ? pool : content.itemsOf('match');
    return weightedShuffle(all, relevanceWeight, seeded(`${seedBase}:${round}`))[0];
  }, [query, round, seedBase]);
  if (!item) return <Empty>No matching sets yet.</Empty>;
  return <Board key={`${item.id}-${round}`} item={item} seed={`${seedBase}:${round}`} focusLabel={focusLabel} onAgain={() => setRound((r) => r + 1)} />;
}

function Board({ item, seed, focusLabel, onAgain }: { item: MatchItem; seed: string; focusLabel?: string; onAgain: () => void }) {
  const { answer, completeGame } = useProgress();
  const best = useProgress((s) => s.games['match-up']?.best ?? 0);
  const sessionId = useGameSession('match-up', 'practice');
  const lefts = useMemo(() => shuffle(item.pairs.map((p) => p.left), seeded(`l:${seed}`)), [item, seed]);
  const rights = useMemo(() => shuffle(item.pairs.map((p) => p.right), seeded(`r:${seed}`)), [item, seed]);
  const [left, setLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState('');
  const [teach, setTeach] = useState(false);
  const [finalBest] = useState(best);
  const done = matched.length === item.pairs.length;
  useStudyContext({ gameId: 'match-up', activity: teach ? 'lesson' : done ? 'explanation' : 'play', conceptIds: item.conceptIds });
  const rightDone = (r: string) => item.pairs.some((p) => p.right === r && matched.includes(p.left));

  const pick = (right: string) => {
    if (!left) return setMessage('Pick a term on the left first');
    if (isCorrectPair(item.pairs, left, right)) {
      const next = [...matched, left];
      setMatched(next);
      setLeft(null);
      setMessage('');
      if (next.length === item.pairs.length) {
        answer({ gameId: 'match-up', sessionId, item, correct: mistakes === 0, prompt: `${item.title}: ${item.prompt}`, response: `${mistakes} mistakes`, expected: item.pairs.map((p) => `${p.left} → ${p.right}`).join('; ') });
        completeGame({ gameId: 'match-up', sessionId, score: matchScore(mistakes), correct: item.pairs.length, total: item.pairs.length });
      }
    } else {
      setMistakes(mistakes + 1);
      setMessage('Not a match');
    }
  };

  return (
    <GameFrame gameId="match-up" title="Match Up" progress={matched.length / item.pairs.length} status={<span className="small strong num">{mistakes} ✗</span>}>
      {done && <ScoreCard score={matchScore(mistakes)} best={finalBest} lines={[mistakes ? `${mistakes} wrong attempt${mistakes > 1 ? 's' : ''}` : 'no mistakes']} />}
      <section className="card">
        <span className="label">{item.title}{focusLabel ? ` · ${focusLabel}` : ''}</span>
        <p className="question" style={{ marginTop: 6 }}>{item.prompt}</p>
      </section>
      <div className="grid-2" style={{ gap: 8 }}>
        <div className="stack-sm">
          {lefts.map((l) => (
            <button key={l} className={`option${matched.includes(l) ? ' is-correct' : ''}`} disabled={matched.includes(l) || done} aria-pressed={left === l} onClick={() => setLeft(l)}>
              <span style={{ flex: 1 }}>{l}</span>
            </button>
          ))}
        </div>
        <div className="stack-sm">
          {rights.map((r) => (
            <button key={r} className={`option${rightDone(r) ? ' is-correct' : ''}`} disabled={rightDone(r) || done} onClick={() => pick(r)}>
              <span style={{ flex: 1 }}>{r}</span>
            </button>
          ))}
        </div>
      </div>
      {message && !done && <p className="small" style={{ textAlign: 'center' }}>{message}</p>}
      {done && (
        <section className="card">
          <p>{item.explanation}</p>
          <button className="btn btn-soft btn-sm" style={{ marginTop: 12 }} onClick={() => setTeach(true)}>
            <Icon name="bulb" size={16} /> Teach me this
          </button>
        </section>
      )}
      <ActionBar>
        <Link to="/" className="btn btn-soft btn-lg">Done</Link>
        {done && <button className="btn btn-primary btn-lg" onClick={onAgain}>Next set</button>}
      </ActionBar>
      {teach && <TeachSheet conceptId={item.conceptIds[0]!} onClose={() => setTeach(false)} />}
    </GameFrame>
  );
}
