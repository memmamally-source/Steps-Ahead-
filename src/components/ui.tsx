import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';
import { content } from '@/content';
import { STATUS_LABEL, type MasteryStatus } from '@/engine/mastery';
import { Icon } from './Icon';

/** Large page title with an optional trailing action. Tabs use it instead of an app bar. */
export function PageTitle({ title, back, action, sub }: { title: string; back?: string | true; action?: ReactNode; sub?: ReactNode }) {
  const nav = useNavigate();
  return (
    <header style={{ marginBottom: 18 }}>
      {back && (
        <div className="appbar" style={{ marginBottom: 0 }}>
          {back === true ? (
            <button className="icon-btn" aria-label="Back" onClick={() => nav(-1)}>
              <Icon name="back" size={20} />
            </button>
          ) : (
            <Link className="icon-btn" aria-label="Back" to={back}>
              <Icon name="back" size={20} />
            </Link>
          )}
        </div>
      )}
      <div className="page-title" style={{ marginBottom: sub ? 4 : 0 }}>
        <h1>{title}</h1>
        {action}
      </div>
      {sub && <p className="muted small">{sub}</p>}
    </header>
  );
}

export function SectionHead({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {action}
    </div>
  );
}

export function Segmented<T extends string>({ value, options, onChange, label }: { value: T; options: { id: T; label: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="segmented" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} role="radio" aria-checked={value === o.id} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Circular progress (0–1). */
export function Ring({ value, size = 64, stroke = 7, children, track = 'rgb(255 255 255 / 0.14)', color = 'var(--red)', label }: { value: number; size?: number; stroke?: number; children?: ReactNode; track?: string; color?: string; label: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(1, value));
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none' }} role="img" aria-label={label}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - v)} style={{ transition: 'stroke-dashoffset 0.6s var(--ease)' }} />
      </svg>
      <div className="ring-label">{children}</div>
    </div>
  );
}

export function Bar({ value, label, dark }: { value: number; label: string; dark?: boolean }) {
  const p = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div className={`bar${dark ? ' bar-dark' : ''}`} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={p}>
      <span style={{ width: `${p}%` }} />
    </div>
  );
}

const STATUS_DOT: Record<MasteryStatus, string> = {
  strong: 'dot-ok',
  improving: 'dot-ok',
  developing: 'dot-mid',
  needs_revision: 'dot-bad',
  insufficient: 'dot-warn',
  not_studied: '',
};
const STATUS_BADGE: Record<MasteryStatus, string> = {
  strong: 'badge-ok',
  improving: 'badge-ok',
  developing: '',
  needs_revision: 'badge-bad',
  insufficient: 'badge-warn',
  not_studied: '',
};

export function StatusBadge({ status }: { status: MasteryStatus }) {
  return <span className={`badge ${STATUS_BADGE[status]}`}>{STATUS_LABEL[status]}</span>;
}

export function StatusDot({ status }: { status: MasteryStatus }) {
  return <span className={`dot ${STATUS_DOT[status]}`} title={STATUS_LABEL[status]} aria-label={STATUS_LABEL[status]} role="img" />;
}

export function pct(x: number | null | undefined): string {
  return x === null || x === undefined ? '—' : `${Math.round(x * 100)}%`;
}

export function Sheet({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prev?.focus?.();
    };
  }, [onClose]);
  return (
    <div className="scrim" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}>
        <div className="grabber" aria-hidden />
        <div className="row between" style={{ marginBottom: 14 }}>
          <h2>{title}</h2>
          <button className="icon-btn" style={{ boxShadow: 'none', background: 'var(--surface-2)' }} onClick={onClose} aria-label="Close">
            <Icon name="x" size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/** Small, honest label for unreviewed content. Tap explains; replaces the old full-width banner. */
export function PreviewPill() {
  const [open, setOpen] = useState(false);
  if (!content.isPreview) return null;
  return (
    <>
      <button className="pill-preview" onClick={() => setOpen(true)} aria-label="Preview content: tap for details">
        Preview
      </button>
      {open && (
        <Sheet title="Preview content" onClose={() => setOpen(false)}>
          <div className="stack">
            <p>The medical content in this build is original but AI-drafted, and it has not yet been reviewed by a doctor.</p>
            <p className="muted small">Use it to explore the app, not for patient care. Spot an error? Use “Report an error” under any explanation.</p>
            <button className="btn btn-dark btn-block" onClick={() => setOpen(false)}>
              Got it
            </button>
          </div>
        </Sheet>
      )}
    </>
  );
}

/** Fixed bottom bar holding the screen's primary action, always visible without scrolling. */
export function ActionBar({ children }: { children: ReactNode }) {
  return (
    <div className="action-bar">
      <div className="inner">{children}</div>
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="empty card">{children}</div>;
}
