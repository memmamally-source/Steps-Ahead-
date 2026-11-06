import { Icon } from '@/components/Icon';
import { PageTitle } from '@/components/ui';
import { ALL_CONCEPTS, ALL_ITEMS, content } from '@/content';
import { SOURCES } from '@/content/sources';
import { BLUEPRINT_VERIFIED, DISCIPLINES } from '@/content/taxonomy';

/** Transparency page: review status, blueprint alignment and the source register. */
export function About() {
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
            <span className="tiny muted">{BLUEPRINT_VERIFIED ? 'Verified against usmle.org' : 'Provisional: to be verified against usmle.org'}</span>
          </span>
          <Icon name="chevron" size={18} />
        </summary>
        <ul className="list" style={{ marginTop: 8 }}>
          {Object.values(DISCIPLINES)
            .filter((d) => d.range)
            .map((d) => (
              <li key={d.title} className="row between small" style={{ padding: '8px 0' }}>
                <span>{d.title}</span>
                <span className="num muted">
                  {d.range![0]}–{d.range![1]}%
                </span>
              </li>
            ))}
        </ul>
        <p className="tiny muted" style={{ marginTop: 8 }}>
          Used only to weight coverage. The app never predicts pass/fail or scores.
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
