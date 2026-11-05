import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Brand } from '@/config/brand';
import { PACKAGES } from '@/config/packages';
import { BrandMark, Icon } from '@/components/Icon';
import { ActionBar } from '@/components/ui';
import { useProgress } from '@/state/progress';

const GOALS = [5, 10, 15, 30, 60];

/** Two short steps: package, then a daily goal (exam date optional). Everything else lives in Profile. */
export function Onboarding() {
  const nav = useNavigate();
  const setProfile = useProgress((s) => s.setProfile);
  const [step, setStep] = useState<'package' | 'goal'>('package');
  const [goal, setGoal] = useState(15);
  const [examDate, setExamDate] = useState('');
  const step1 = PACKAGES.find((p) => p.available)!;
  const later = PACKAGES.filter((p) => !p.available);

  const finish = () => {
    setProfile({ packageId: step1.id, onboarded: true, dailyGoalMin: goal, examDate: examDate || undefined });
    nav('/', { replace: true });
  };

  return (
    <main className="main focus" style={{ maxWidth: 560 }}>
      <div className="appbar">
        <span className="brand">
          <BrandMark size={30} /> {Brand.name}
        </span>
        {step === 'goal' && (
          <button className="btn btn-text" onClick={finish}>
            Skip
          </button>
        )}
      </div>

      {step === 'package' ? (
        <div className="stack-lg fade-in" style={{ marginTop: 24 }}>
          <div className="stack-sm">
            <h1 style={{ fontSize: '2.2rem' }}>Learn Step 1 by playing.</h1>
            <p className="muted">Quick daily games that track your study time and find your weak spots.</p>
          </div>
          <div className="card" style={{ boxShadow: 'var(--shadow), inset 0 0 0 2px var(--red)' }}>
            <div className="row between">
              <div>
                <h2>{step1.title}</h2>
                <p className="muted small">{step1.strap}</p>
              </div>
              <span className="game-icon sm">
                <Icon name="check" size={18} />
              </span>
            </div>
          </div>
          <div className="stack-sm">
            <span className="label">Coming later</span>
            <div className="card-flat">
              <ul className="list">
                {later.map((p) => (
                  <li key={p.id} className="list-row" style={{ cursor: 'default', color: 'var(--muted)' }}>
                    <span className="grow">{p.title}</span>
                    <span className="small">{p.strap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ActionBar>
            <button className="btn btn-primary btn-lg" onClick={() => setStep('goal')}>
              Continue
            </button>
          </ActionBar>
        </div>
      ) : (
        <div className="stack-lg fade-in" style={{ marginTop: 24 }}>
          <div className="stack-sm">
            <h1>How long a day?</h1>
            <p className="muted">Pick a goal you can keep on a busy day. You can change it any time.</p>
          </div>
          <div className="grid-3" role="radiogroup" aria-label="Daily goal">
            {GOALS.map((g) => (
              <button
                key={g}
                role="radio"
                aria-checked={goal === g}
                className="card tap"
                onClick={() => setGoal(g)}
                style={{ textAlign: 'center', padding: '18px 8px', boxShadow: goal === g ? 'inset 0 0 0 2px var(--text)' : undefined }}
              >
                <div className="stat-value">{g}</div>
                <div className="tiny muted">min</div>
              </button>
            ))}
          </div>
          <label className="field">
            Exam date <span className="muted" style={{ fontWeight: 400 }}>(optional)</span>
            <input className="input" type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
          </label>
          <p className="tiny muted">No account needed. Progress is saved on this device.</p>
          <ActionBar>
            <button className="btn btn-primary btn-lg" onClick={finish}>
              Start playing
            </button>
          </ActionBar>
        </div>
      )}
    </main>
  );
}
