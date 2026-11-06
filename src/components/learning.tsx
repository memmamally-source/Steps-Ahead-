/**
 * Shared teaching components: answer feedback ("every incorrect answer teaches something"),
 * Teach Me This mini lessons, the question card used by quiz-style games, and error reporting.
 */
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { content } from '@/content';
import type { Concept, McqItem, TrueFalseItem } from '@/content/schema';
import { getSource } from '@/content/sources';
import { DISCIPLINES, SYSTEMS } from '@/content/taxonomy';
import { useProgress } from '@/state/progress';
import { Icon } from './Icon';
import { Segmented, Sheet } from './ui';

type QItem = McqItem | TrueFalseItem;

export function expectedText(item: QItem): string {
  return item.kind === 'mcq' ? item.options.find((o) => o.id === item.answerId)!.text : item.isTrue ? 'Fact' : 'Fiction';
}

export function promptText(item: QItem): string {
  return item.kind === 'mcq' ? item.stem : item.statement;
}

/** Multiple-choice or Fact/Fiction question. Keyboard: 1–5 / A–E, or T / F. */
export function QuestionCard({ item, onAnswer, answered }: { item: QItem; onAnswer: (correct: boolean, response: string, choiceId: string) => void; answered: string | null }) {
  const choices = useMemo(
    () => (item.kind === 'mcq' ? item.options.map((o) => ({ id: o.id, text: o.text })) : [{ id: 'true', text: 'Fact' }, { id: 'false', text: 'Fiction' }]),
    [item],
  );
  const correctId = item.kind === 'mcq' ? item.answerId : item.isTrue ? 'true' : 'false';
  useEffect(() => {
    if (answered) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.metaKey || e.ctrlKey) return;
      const k = e.key.toLowerCase();
      let idx: number;
      if (item.kind === 'tf') idx = k === 't' || k === '1' ? 0 : k === 'f' || k === '2' ? 1 : -1;
      else idx = /^[1-9]$/.test(k) ? Number(k) - 1 : /^[a-e]$/.test(k) ? k.charCodeAt(0) - 97 : -1;
      const c = choices[idx];
      if (c) onAnswer(c.id === correctId, c.text, c.id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [answered, choices, correctId, item.kind, onAnswer]);

  return (
    <div className="stack">
      <p className="question">{promptText(item)}</p>
      <div className={item.kind === 'tf' ? 'grid-2' : 'stack-sm'}>
        {choices.map((c, i) => {
          const state = answered ? (c.id === correctId ? ' is-correct' : c.id === answered ? ' is-wrong' : ' dim') : '';
          return (
            <button
              key={c.id}
              className={`option${item.kind === 'tf' ? ' tf-option' : ''}${state}`}
              disabled={!!answered}
              aria-pressed={answered === c.id}
              onClick={() => onAnswer(c.id === correctId, c.text, c.id)}
            >
              {item.kind === 'mcq' && <span className="key">{answered && c.id === correctId ? <Icon name="check" size={16} /> : answered === c.id ? <Icon name="x" size={16} /> : String.fromCharCode(65 + i)}</span>}
              <span style={{ flex: item.kind === 'mcq' ? 1 : undefined }}>{c.text}</span>
              {item.kind === 'tf' && answered && c.id === correctId && <Icon name="check" size={20} title="Correct answer" />}
              {item.kind === 'tf' && answered === c.id && c.id !== correctId && <Icon name="x" size={20} title="Your answer" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Verdict({ correct }: { correct: boolean }) {
  return (
    <div className={`verdict ${correct ? 'ok' : 'bad'}`}>
      <span className="mark">
        <Icon name={correct ? 'check' : 'x'} size={18} />
      </span>
      {correct ? 'Correct' : 'Not quite'}
    </div>
  );
}

export interface FeedbackProps {
  correct: boolean;
  item: QItem;
  chosenId: string | null;
  onTeach?: () => void;
}

/**
 * Feedback after an answer. Visible at once: verdict, correct answer, why, why yours was wrong and
 * the takeaway. Mechanism and the detailed explanation are one tap away under "Mechanism and detail".
 */
export function AnswerFeedback({ correct, item, chosenId, onTeach }: FeedbackProps) {
  const concept = content.concept(item.conceptIds[0]!);
  const openExplanation = useProgress((s) => s.openExplanation);
  const chosen = item.kind === 'mcq' ? item.options.find((o) => o.id === chosenId) : null;
  const why = item.kind === 'mcq' ? chosen?.whyWrong : item.correction;
  const mechanism = item.kind === 'mcq' ? item.mechanism : concept?.mechanism;
  const takeaway = item.kind === 'mcq' ? item.takeaway : concept?.takeaway;
  return (
    <section className="card fade-in" aria-live="polite">
      <Verdict correct={correct} />
      {!correct && (
        <p style={{ marginTop: 10 }}>
          <span className="muted">Answer: </span>
          <strong>{expectedText(item)}</strong>
        </p>
      )}
      <p style={{ marginTop: 8 }}>{item.mini}</p>
      {!correct && why && (
        <p className="small" style={{ marginTop: 10, color: 'var(--text-2)' }}>
          <strong>{item.kind === 'tf' ? 'The accurate statement: ' : `Why not “${chosen?.text}”: `}</strong>
          {why}
        </p>
      )}
      {takeaway && (
        <div className="takeaway" style={{ marginTop: 12 }}>
          <span className="label">Step 1 takeaway</span>
          {takeaway}
        </div>
      )}
      <details className="more" onToggle={(e) => (e.currentTarget as HTMLDetailsElement).open && concept && openExplanation(concept.id, 'detailed', item.id)}>
        <summary>
          Mechanism and detail <Icon name="chevron" size={16} className="chev-down" />
        </summary>
        <div className="stack-sm small" style={{ marginTop: 10, color: 'var(--text-2)' }}>
          {mechanism && (
            <p>
              <strong>Mechanism. </strong>
              {mechanism}
            </p>
          )}
          {concept?.detailed.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ReportButton itemId={item.id} conceptId={concept?.id} />
        </div>
      </details>
      {onTeach && (
        <button className="btn btn-soft btn-sm" style={{ marginTop: 12 }} onClick={onTeach}>
          <Icon name="bulb" size={16} /> Teach me this
        </button>
      )}
    </section>
  );
}

export function ReportButton({ itemId, conceptId }: { itemId?: string; conceptId?: string }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);
  const report = useProgress((s) => s.report);
  return (
    <>
      <button className="btn btn-text btn-sm" style={{ alignSelf: 'flex-start', color: 'var(--muted)' }} onClick={() => setOpen(true)}>
        <Icon name="flag" size={15} /> Report an error
      </button>
      {open && (
        <Sheet title="Report an error" onClose={() => setOpen(false)}>
          {sent ? (
            <div className="stack">
              <p>Thanks. Your report is saved with the item reference and will reach reviewers once accounts are switched on.</p>
              <button className="btn btn-dark btn-block" onClick={() => setOpen(false)}>
                Done
              </button>
            </div>
          ) : (
            <form
              className="stack"
              onSubmit={(e) => {
                e.preventDefault();
                if (!text.trim()) return;
                report({ itemId, conceptId, text: text.trim() });
                setSent(true);
              }}
            >
              <textarea className="input" rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="What looks wrong? An answer key, an explanation, a lab value…" aria-label="Describe the error" />
              <button className="btn btn-primary btn-block" type="submit" disabled={!text.trim()}>
                Send report
              </button>
            </form>
          )}
        </Sheet>
      )}
    </>
  );
}

/** Teach Me This: quick or detailed explanation, misconception, key facts, a follow-up question, related concepts. */
export function LessonBody({ concept, excludeItemId }: { concept: Concept; excludeItemId?: string }) {
  const [depth, setDepth] = useState<'quick' | 'detailed'>('quick');
  const { openExplanation, toggleSaved, savedConcepts, answer } = useProgress();
  const saved = savedConcepts.includes(concept.id);
  const followUp = useMemo(() => {
    const options: QItem[] = [...content.itemsOf('mcq', { conceptIds: [concept.id] }), ...content.itemsOf('tf', { conceptIds: [concept.id] })];
    return options.find((o) => o.id !== excludeItemId) ?? null;
  }, [concept.id, excludeItemId]);
  const [fa, setFa] = useState<{ id: string; correct: boolean } | null>(null);

  useEffect(() => {
    openExplanation(concept.id, 'lesson');
  }, [concept.id, openExplanation]);

  return (
    <div className="stack">
      <p className="small muted">
        {DISCIPLINES[concept.discipline].title} · {SYSTEMS[concept.system].short} · {content.topicTitle(concept.topic)}
      </p>
      {concept.outline && (
        <p className="tiny muted" style={{ marginTop: -8 }}>
          USMLE outline: {concept.outline.area} › {concept.outline.section}
          {concept.outline.listed ? '' : ' (foundational)'}
        </p>
      )}
      <Segmented
        label="Explanation depth"
        value={depth}
        onChange={(d) => {
          setDepth(d);
          if (d === 'detailed') openExplanation(concept.id, 'detailed');
        }}
        options={[
          { id: 'quick', label: 'Quick · 20 s' },
          { id: 'detailed', label: 'Detailed' },
        ]}
      />
      {depth === 'quick' ? (
        <p style={{ fontSize: '1.06rem', lineHeight: 1.55 }}>{concept.quick}</p>
      ) : (
        <div className="stack-sm">
          <p>
            <strong>Mechanism. </strong>
            {concept.mechanism}
          </p>
          {concept.detailed.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
      <div className="takeaway">
        <span className="label">Takeaway</span>
        {concept.takeaway}
      </div>
      <div className="card-flat pad">
        <span className="label" style={{ color: 'var(--warn)' }}>
          Common misconception
        </span>
        <p className="small" style={{ marginTop: 4 }}>
          {concept.misconception}
        </p>
      </div>
      <details className="more">
        <summary>
          Key facts <Icon name="chevron" size={16} className="chev-down" />
        </summary>
        <ul className="small" style={{ margin: '8px 0 0', paddingLeft: 18, color: 'var(--text-2)' }}>
          {concept.facts.map((f) => (
            <li key={f} style={{ marginBottom: 4 }}>
              {f}
            </li>
          ))}
        </ul>
      </details>
      {followUp && (
        <div className="stack">
          <span className="label">Check yourself</span>
          <QuestionCard
            item={followUp}
            answered={fa?.id ?? null}
            onAnswer={(correct, response, id) => {
              if (fa) return;
              setFa({ id, correct });
              answer({ gameId: 'review', item: followUp, correct, prompt: promptText(followUp), response, expected: expectedText(followUp) });
            }}
          />
          {fa && <AnswerFeedback correct={fa.correct} item={followUp} chosenId={fa.id} />}
        </div>
      )}
      {concept.related.length > 0 && (
        <div className="stack-sm">
          <span className="label">Related</span>
          <div className="row-wrap">
            {concept.related.map((r) => {
              const rc = content.concept(r);
              return rc ? (
                <Link key={r} to={`/learn/${r}`} className="chip">
                  {rc.title}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      )}
      <div className="row-wrap">
        <button className="btn btn-soft btn-sm" onClick={() => toggleSaved(concept.id)} aria-pressed={saved}>
          <Icon name="bookmark" size={16} /> {saved ? 'Saved' : 'Save'}
        </button>
        <Link className="btn btn-soft btn-sm" to={`/play/survival?concept=${concept.id}`}>
          Practise this
        </Link>
        <ReportButton conceptId={concept.id} />
      </div>
      {concept.citations.length > 0 && (
        <p className="tiny muted">
          Reference:{' '}
          {concept.citations.map((c) => {
            const s = getSource(c.sourceId);
            return s ? (
              <a key={c.sourceId} href={s.url} target="_blank" rel="noreferrer">
                {s.name}
                {c.locator ? ` (${c.locator})` : ''}
              </a>
            ) : null;
          })}
        </p>
      )}
    </div>
  );
}

export function TeachSheet({ conceptId, excludeItemId, onClose }: { conceptId: string; excludeItemId?: string; onClose: () => void }) {
  const concept = content.concept(conceptId);
  if (!concept) return null;
  return (
    <Sheet title={concept.title} onClose={onClose}>
      <LessonBody concept={concept} excludeItemId={excludeItemId} />
    </Sheet>
  );
}
