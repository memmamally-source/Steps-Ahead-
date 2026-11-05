import { useState } from 'react';
import { Link } from 'react-router';
import { GAME_ICONS, Icon } from '@/components/Icon';
import { PageTitle, PreviewPill, Segmented } from '@/components/ui';
import { GAMES } from '@/features/games/registry';
import { useProgress } from '@/state/progress';

type Mode = 'all' | 'relax' | 'learn' | 'challenge';

const SHORT: Record<string, string> = {
  crossword: 'Clues from every subject',
  connections: 'Find four groups of four',
  mystery: 'Solve the case, name the mechanism',
  survival: 'Three lives, rising difficulty',
  'fact-fiction': 'Ten quick true-or-false calls',
  review: 'Concepts due today',
};

export function Arcade() {
  const [mode, setMode] = useState<Mode>('all');
  const games = useProgress((s) => s.games);
  const playable = GAMES.filter((g) => g.status === 'playable' && (mode === 'all' || g.modes.includes(mode)));
  const planned = GAMES.filter((g) => g.status === 'planned');
  return (
    <div className="stack-lg">
      <div>
        <PageTitle title="Arcade" action={<PreviewPill />} />
        <Segmented
          label="Experience"
          value={mode}
          onChange={setMode}
          options={[
            { id: 'all', label: 'All' },
            { id: 'relax', label: 'Relax' },
            { id: 'learn', label: 'Learn' },
            { id: 'challenge', label: 'Challenge' },
          ]}
        />
      </div>
      <div className="grid-2">
        {playable.map((g) => {
          const st = games[g.id];
          const q = mode === 'all' ? '' : `?mode=${mode}`;
          return (
            <Link key={g.id} to={`/play/${g.id}${q}`} className="card tap tile">
              <span className="game-icon">
                <Icon name={GAME_ICONS[g.id]!} />
              </span>
              <div className="stack-xs">
                <h3>{g.title.replace('Medical ', '')}</h3>
                <span className="tiny muted clamp-2">{SHORT[g.id]}</span>
              </div>
              <span className="tiny muted num" style={{ marginTop: 'auto' }}>
                {g.minutes} min{st?.best ? ` · best ${st.best}` : ''}
              </span>
            </Link>
          );
        })}
      </div>
      <details className="card-flat pad">
        <summary className="row between" style={{ listStyle: 'none', cursor: 'pointer' }}>
          <span className="row" style={{ gap: 12 }}>
            <span className="game-icon sm" style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}>
              <Icon name="lock" size={18} />
            </span>
            <span>
              <span className="strong small" style={{ display: 'block' }}>
                {planned.length} more games in development
              </span>
              <span className="tiny muted">Not playable yet</span>
            </span>
          </span>
          <Icon name="chevron" size={18} />
        </summary>
        <ul className="list" style={{ marginTop: 8 }}>
          {planned.map((g) => (
            <li key={g.id} className="row" style={{ padding: '10px 0' }} aria-disabled="true">
              <Icon name={GAME_ICONS[g.id]!} size={18} className="muted" />
              <span className="grow small">{g.title}</span>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
