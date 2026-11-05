import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { AnswerFeedback, TeachSheet } from '@/components/learning';
import { PreviewPill } from '@/components/ui';
import type { McqItem, TrueFalseItem } from '@/content/schema';
import { uid } from '@/engine/random';
import { setStudyPaused } from '@/state/studyTimer';
import { useProgress } from '@/state/progress';
import type { GameId } from './registry';

/**
 * Focus-mode frame for every game: close, title, status and pause in one slim bar; optional
 * progress line; no tab bar. Pausing hides the board and stops study time.
 */
export function GameFrame({ gameId, title, status, progress, children, pausable = true }: { gameId: GameId; title: string; subtitle?: string; status?: ReactNode; progress?: number; children: ReactNode; pausable?: boolean }) {
  const [paused, setPaused] = useState(false);
  const emit = useProgress((s) => s.emit);
  const toggle = () => {
    const p = !paused;
    setPaused(p);
    setStudyPaused(p);
    emit({ type: p ? 'game_paused' : 'game_resumed', gameId });
  };
  return (
    <div style={{ maxWidth: 728, margin: '0 auto' }}>
      <div className="game-bar">
        <Link to="/arcade" className="icon-btn" aria-label="Close game">
          <Icon name="x" size={20} />
        </Link>
        <span className="title">{title}</span>
        <div className="row" style={{ gap: 8 }}>
          {status ?? <PreviewPill />}
          {pausable && (
            <button className="icon-btn" onClick={toggle} aria-pressed={paused} aria-label={paused ? 'Resume' : 'Pause'}>
              <Icon name={paused ? 'play' : 'pause'} size={18} />
            </button>
          )}
        </div>
      </div>
      {progress !== undefined && (
        <div className="progress-track" role="progressbar" aria-label="Progress" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
      )}
      {progress === undefined && <div style={{ height: 10 }} />}
      {paused ? (
        <div className="card empty stack" style={{ alignItems: 'center' }}>
          <h2>Paused</h2>
          <p className="small">Study time isn’t counted while paused.</p>
          <button className="btn btn-primary btn-lg" onClick={toggle}>
            <Icon name="play" size={16} /> Resume
          </button>
        </div>
      ) : (
        <div className="stack">{children}</div>
      )}
    </div>
  );
}

export interface Result {
  item: McqItem | TrueFalseItem;
  correct: boolean;
  chosenId: string;
}

/** End-of-round review: one row per answer; tap to open its full explanation. */
export function RoundReview({ results }: { results: Result[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [teach, setTeach] = useState<Result | null>(null);
  if (!results.length) return null;
  const wrong = results.filter((r) => !r.correct).length;
  return (
    <section>
      <div className="section-head">
        <h2>Your answers</h2>
        <span className="tiny muted">{wrong ? `${wrong} to learn from` : 'All correct'}</span>
      </div>
      <div className="card" style={{ padding: 0 }}>
        <ul className="list">
          {results.map((r, i) => (
            <li key={`${r.item.id}-${i}`}>
              <button className="list-row" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ color: r.correct ? 'var(--ok)' : 'var(--bad)', flex: 'none' }}>
                  <Icon name={r.correct ? 'check' : 'x'} size={18} title={r.correct ? 'Correct' : 'Incorrect'} />
                </span>
                <span className="grow small clamp-2">{r.item.kind === 'mcq' ? r.item.stem : r.item.statement}</span>
                <Icon name="chevron" size={18} className="chev" />
              </button>
              {open === i && (
                <div style={{ padding: '0 12px 12px' }}>
                  <AnswerFeedback correct={r.correct} item={r.item} chosenId={r.chosenId} onTeach={() => setTeach(r)} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {teach && <TeachSheet conceptId={teach.item.conceptIds[0]!} excludeItemId={teach.item.id} onClose={() => setTeach(null)} />}
    </section>
  );
}

/** Result hero. Actions go in the page's ActionBar. */
export function ScoreCard({ score, best, lines }: { score: number; best?: number; lines: ReactNode[]; children?: ReactNode }) {
  const isBest = best !== undefined && score > 0 && score > best;
  return (
    <section className="hero stack-sm fade-in" style={{ textAlign: 'center', padding: '28px 20px' }}>
      <span className="small" style={{ color: '#ff8a8e', fontWeight: 700 }}>
        {isBest ? 'New personal best' : 'Round complete'}
      </span>
      <div className="stat-value" style={{ fontSize: '3rem', color: '#fff' }}>
        {score.toLocaleString()}
      </div>
      <div className="small muted">{lines.filter(Boolean).map((l, i) => <span key={i}>{i ? ' · ' : ''}{l}</span>)}</div>
    </section>
  );
}

/** A game session id; the start event is idempotent so React's dev double-mount can't double-count. */
export function useGameSession(gameId: GameId, mode: string): string {
  const [sessionId] = useState(uid);
  const startGame = useProgress((s) => s.startGame);
  useEffect(() => {
    startGame(gameId, mode, sessionId);
  }, [gameId, mode, sessionId, startGame]);
  return sessionId;
}
