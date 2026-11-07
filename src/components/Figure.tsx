import { useMemo } from 'react';
import { describeFigure, figureSvg, type Figure as FigureData } from '@/content/figures';

/**
 * An original, data-generated figure (gel, Western blot, pedigree). The SVG is built by
 * `figureSvg` from the content bank only, with every label escaped, so injecting it is safe.
 * Responsive (viewBox, 100% width), theme-aware (CSS tokens) and accessible: the SVG has a title
 * and description, and the full text equivalent can be expanded below it.
 */
export function Figure({ figure }: { figure: FigureData }) {
  const svg = useMemo(() => figureSvg(figure), [figure]);
  const text = useMemo(() => describeFigure(figure), [figure]);
  return (
    <figure className="figure" style={{ margin: '12px 0 4px' }}>
      <div className="figure-art" dangerouslySetInnerHTML={{ __html: svg }} />
      {figure.caption && <figcaption className="small muted" style={{ marginTop: 6 }}>{figure.caption}</figcaption>}
      <details className="small" style={{ marginTop: 4 }}>
        <summary className="muted">Text description</summary>
        <p style={{ marginTop: 4 }}>{text}</p>
      </details>
    </figure>
  );
}
