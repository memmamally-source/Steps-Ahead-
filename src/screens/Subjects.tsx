import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { GAME_ICONS, Icon } from '@/components/Icon';
import { Bar, Empty, PageTitle, Segmented, StatusDot, pct } from '@/components/ui';
import { content } from '@/content';
import type { DisciplineId, SystemId } from '@/content/schema';
import { DISCIPLINES, SYSTEMS } from '@/content/taxonomy';
import { STATUS_LABEL } from '@/engine/mastery';
import { byConcept, byTopic, coverage, disciplineWithinSystem, type Node } from '@/engine/analysis';
import { gamesFor } from '@/engine/plan';
import { getGame } from '@/features/games/registry';
import { useAnalysis } from '@/state/derived';
import { useNow } from '@/state/clock';
import { useProgress } from '@/state/progress';

export function Subjects() {
  const a = useAnalysis();
  const [view, setView] = useState<'discipline' | 'system'>('discipline');
  return (
    <div className="stack">
      <PageTitle title="Subjects" />
      <Segmented
        label="Group by"
        value={view}
        onChange={setView}
        options={[
          { id: 'discipline', label: 'Disciplines' },
          { id: 'system', label: 'Organ systems' },
        ]}
      />
      <NodeList nodes={view === 'discipline' ? a.disciplines : a.systems} kind={view} />
    </div>
  );
}

function NodeList({ nodes, kind }: { nodes: Node[]; kind: 'discipline' | 'system' | 'topic' | 'concept' }) {
  const records = useProgress((s) => s.concepts);
  return (
    <div className="card" style={{ padding: 0 }}>
      <ul className="list">
        {nodes.map((n) => {
          const seen = n.conceptIds.filter((id) => records[id]).length;
          const href = kind === 'concept' ? `/learn/${n.id}` : kind === 'topic' ? `/subjects/topic/${n.id}` : `/subjects/${kind}/${n.id}`;
          const title = kind === 'system' ? (SYSTEMS[n.id as SystemId]?.short ?? n.title) : n.title;
          return (
            <li key={n.id}>
              <Link to={href} className="list-row" aria-label={`${n.title}: ${STATUS_LABEL[n.estimate.status]}`}>
                <div className="grow stack-xs" style={{ gap: 6 }}>
                  <div className="row between" style={{ gap: 8 }}>
                    <span className="strong small" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {title}
                    </span>
                    <span className="row small num" style={{ gap: 8, flex: 'none' }}>
                      <span className={n.estimate.attempts ? '' : 'muted'}>{n.estimate.attempts ? pct(n.estimate.accuracy) : `${seen}/${n.conceptIds.length}`}</span>
                      <StatusDot status={n.estimate.status} />
                    </span>
                  </div>
                  <Bar value={n.conceptIds.length ? seen / n.conceptIds.length : 0} label={`${n.title} coverage`} dark />
                </div>
                <Icon name="chevron" size={18} className="chev" />
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="tiny muted" style={{ padding: '10px 16px 14px', borderTop: '1px solid var(--line)' }}>
        Bar: concepts studied. Number: accuracy. Dot: <span style={{ color: 'var(--ok)' }}>strong</span> · <span style={{ color: 'var(--bad)' }}>needs revision</span> · amber: not enough answers yet.
      </p>
    </div>
  );
}

export function SubjectDetail() {
  const { kind, id } = useParams<{ kind: 'discipline' | 'system' | 'topic'; id: string }>();
  const records = useProgress((s) => s.concepts);
  const now = useNow();
  if (!kind || !id) return null;
  const title = kind === 'discipline' ? DISCIPLINES[id as DisciplineId]?.title : kind === 'system' ? SYSTEMS[id as SystemId]?.title : content.topicTitle(id);
  const q = kind === 'discipline' ? { discipline: id as DisciplineId } : kind === 'system' ? { system: id as SystemId } : { topic: id };
  const inScope = (c: Parameters<typeof content.conceptMatches>[0]) => content.conceptMatches(c, q);
  const concepts = byConcept(content, records, now, inScope);
  const topics = kind === 'topic' ? [] : byTopic(content, records, now, inScope);
  const cov = coverage(content, records, inScope);
  const est = concepts.reduce((t, n) => ({ a: t.a + n.estimate.attempts, c: t.c + n.estimate.correct }), { a: 0, c: 0 });
  const games = gamesFor(content, q).filter((g) => g !== 'survival');
  const focusParam = kind === 'discipline' ? `discipline=${id}` : kind === 'system' ? `system=${id}` : `topic=${id}`;

  return (
    <div className="stack-lg">
      <PageTitle
        title={title ?? id}
        back={kind === 'topic' ? true : '/subjects'}
        sub={`${cov.seen} of ${cov.total} concepts studied${est.a ? ` · ${pct(est.c / est.a)} accuracy` : ''}`}
      />
      {!concepts.length ? (
        <Empty>No content in this area yet.</Empty>
      ) : (
        <>
          <div className="stack-sm" style={{ marginTop: -12 }}>
            <Link to={`/play/survival?${focusParam}`} className="btn btn-primary btn-lg btn-block">
              <Icon name="play" size={18} /> Practise {kind === 'system' ? (SYSTEMS[id as SystemId]?.short ?? title) : title}
            </Link>
            {games.length > 0 && (
              <div className="row-wrap" style={{ justifyContent: 'center' }}>
                {games.map((g) => (
                  <Link key={g} to={`/play/${g}?${focusParam}`} className="chip">
                    <Icon name={GAME_ICONS[g]!} size={16} /> {getGame(g)?.title.replace('Medical ', '')}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {topics.length > 0 && (
            <section>
              <div className="section-head">
                <h2>Topics</h2>
              </div>
              <NodeList nodes={topics} kind="topic" />
            </section>
          )}
          {kind === 'topic' && (
            <section>
              <div className="section-head">
                <h2>Concepts</h2>
              </div>
              <NodeList nodes={concepts} kind="concept" />
            </section>
          )}
          {kind === 'system' && (
            <details className="card-flat pad">
              <summary className="row between" style={{ listStyle: 'none', cursor: 'pointer' }}>
                <span className="strong small">Breakdown by discipline</span>
                <Icon name="chevron" size={18} />
              </summary>
              <div className="stack-sm" style={{ marginTop: 12 }}>
                {disciplineWithinSystem(content, records, now, id as SystemId).map((n) => (
                  <div key={n.id} className="stack-xs">
                    <div className="row between small">
                      <span>{n.title}</span>
                      <span className="num muted">
                        {pct(n.estimate.accuracy)} · {n.estimate.attempts}
                      </span>
                    </div>
                    <Bar value={n.estimate.accuracy ?? 0} label={`${n.title} accuracy`} />
                  </div>
                ))}
              </div>
            </details>
          )}
        </>
      )}
    </div>
  );
}
