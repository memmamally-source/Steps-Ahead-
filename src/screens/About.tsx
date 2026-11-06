import { Icon } from '@/components/Icon';
import { PageTitle } from '@/components/ui';
import { ALL_CONCEPTS, ALL_ITEMS, content } from '@/content';
import { SOURCES } from '@/content/sources';
import { BLUEPRINT_SOURCE, BLUEPRINT_VERIFIED, DISCIPLINES, SYSTEMS } from '@/content/taxonomy';

/** Transparency page: review status, blueprint alignment and the source register. */
export function About() {
  const mapped = ALL_CONCEPTS.filter((c) => c.outline).length;
  // Official Step 1 system groups with the number of our concepts in each (primary system).
  const groupMap = new Map<string, { title: string; range: [number, number]; count: number }>();
  for (const [id, w] of Object.entries(SYSTEMS)) {
    if (!w.range) continue;
    const key = w.group ?? w.title;
    const g = groupMap.get(key) ?? { title: key, range: w.range, count: 0 };
    g.count += ALL_CONCEPTS.filter((c) => c.system === id).length;
    groupMap.set(key, g);
  }
  const groups = [...groupMap.values()];
  const seenD = new Set<string>();
  const disciplineRows = Object.values(DISCIPLINES)
    .filter((d) => d.range)
    .map((d) => ({ title: d.group ?? d.title, range: d.range! }))
    .filter((d) => (seenD.has(d.title) ? false : (seenD.add(d.title), true)));
  const reviewed = ALL_ITEMS.filter((i) => i.review.status === 'approved' || i.review.status === 'published').length;
  return (
    <div className="stack-lg">
      <PageTitle title="Content & sources" back={true} />
      <section className="card" style={{ padding: 0, marginTop: -14 }}>
        <div className="stat-strip">
          <div>
            <div className="stat-value">{ALL_CONCEPTS.length}</div>
            <div className="stat-label">concepts</div>
          </div>
          <div>
            <div className="stat-value">{ALL_ITEMS.length}</div>
            <div className="stat-label">game items</div>
          </div>
          <div>
            <div className="stat-value" style={{ color: reviewed ? undefined : 'var(--warn)' }}>{reviewed}</div>
            <div className="stat-label">medically reviewed</div>
          </div>
        </div>
        <p className="small" style={{ padding: '12px 16px 16px', borderTop: '1px solid var(--line)' }}>
          All content is original and AI-drafted. {content.isPreview ? 'This is a reviewer preview, so drafts are shown.' : 'Only reviewed content is shown.'} Nothing is copied from question banks, review books or exam recalls.
        </p>
      </section>

      <details className="card">
        <summary className="row between" style={{ listStyle: 'none', cursor: 'pointer' }}>
          <span>
            <h3>Step 1 blueprint</h3>
            <span className="tiny muted">
              {BLUEPRINT_VERIFIED ? `Checked against usmle.org on ${BLUEPRINT_SOURCE.checked}` : 'Provisional'} · {mapped}/{ALL_CONCEPTS.length} concepts mapped to the official outline
            </span>
          </span>
          <Icon name="chevron" size={18} />
        </summary>
        <span className="label" style={{ display: 'block', marginTop: 14 }}>
          Systems: exam share vs our concepts
        </span>
        <ul className="list">
          {groups.map((g) => (
            <li key={g.title} className="row between small" style={{ padding: '8px 0', gap: 10 }}>
              <span className="grow">{g.title}</span>
              <span className="num muted">{g.range[0]}–{g.range[1]}%</span>
              <span className="num strong" style={{ width: 28, textAlign: 'right', color: g.count ? undefined : 'var(--bad)' }}>{g.count}</span>
            </li>
          ))}
        </ul>
        <span className="label" style={{ display: 'block', marginTop: 14 }}>
          Disciplines
        </span>
        <ul className="list">
          {disciplineRows.map((d) => (
            <li key={d.title} className="row between small" style={{ padding: '8px 0' }}>
              <span>{d.title}</span>
              <span className="num muted">
                {d.range[0]}–{d.range[1]}%
              </span>
            </li>
          ))}
        </ul>
        <p className="tiny muted" style={{ marginTop: 8 }}>
          Used only to prioritise new content. The app never predicts pass/fail or scores.{' '}
          <a href={BLUEPRINT_SOURCE.page} target="_blank" rel="noreferrer" className="red">
            Official page
          </a>
        </p>
      </details>

      <section>
        <div className="section-head">
          <h2>Sources</h2>
          <span className="tiny muted">Licence checked per source</span>
        </div>
        <div className="card" style={{ padding: 0 }}>
          <ul className="list">
            {SOURCES.map((s) => (
              <li key={s.id}>
                <details style={{ padding: '12px 16px' }}>
                  <summary className="row between" style={{ listStyle: 'none', cursor: 'pointer', gap: 10 }}>
                    <span className="small strong grow">{s.name}</span>
                    <span className={`badge ${s.reuse === 'cite-only' ? 'badge-warn' : s.reuse === 'per-item' ? '' : 'badge-ok'}`}>{s.reuse.replace(/-/g, ' ')}</span>
                  </summary>
                  <div className="stack-xs tiny muted" style={{ marginTop: 8 }}>
                    <span>
                      {s.type} · {s.licence}
                    </span>
                    <span>Attribution: {s.attribution}</span>
                    <span>
                      Reviewed {s.lastReviewed}
                      {s.verifiedLive ? '' : ' (licence page not re-opened)'}
                    </span>
                    {s.notes && <span>{s.notes}</span>}
                    <a href={s.url} target="_blank" rel="noreferrer" className="red">
                      Open source
                    </a>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
