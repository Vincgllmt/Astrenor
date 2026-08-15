'use client';

import { useTheme } from '@/contexts';

const kingdoms = [
  { id: 'meltoria', name: 'Meltoria', color: '#d4af37', icon: '👑' },
  { id: 'sylvestri', name: 'Sylvestri', color: '#4eba6f', icon: '🌿' },
  { id: 'anduin', name: 'Anduin', color: '#8b6f4a', icon: '🏰' },
  { id: 'oryn', name: 'Oryn', color: '#a566e0', icon: '🌑' },
  { id: 'sonihelm', name: 'Sonihelm', color: '#c9973f', icon: '👼' },
] as const;

const SONIHELM_DARK_COLOR = '#d1453f';

export default function ThemeSelector() {
  const { kingdom, setKingdom, sonihelmMode, toggleSonihelmMode } = useTheme();

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 p-1 bg-black/50 rounded-full border border-foreground/20">
        {kingdoms.map((k) => {
          const isSonihelmDark = k.id === 'sonihelm' && sonihelmMode === 'dark';
          const icon = isSonihelmDark ? '😈' : k.icon;
          const color = isSonihelmDark ? SONIHELM_DARK_COLOR : k.color;

          return (
            <button
              key={k.id}
              onClick={() => setKingdom(k.id)}
              className={`
                w-7 h-7 rounded-full flex items-center justify-center text-sm
                transition-all duration-300
                ${kingdom === k.id
                  ? 'ring-2 ring-offset-1 ring-offset-black scale-110'
                  : 'opacity-60 hover:opacity-100'
                }
              `}
              style={{
                backgroundColor: kingdom === k.id ? color + '30' : 'transparent',
                borderColor: color,
                ['--tw-ring-color' as string]: color,
              }}
              title={k.name}
            >
              {icon}
            </button>
          );
        })}
      </div>

      {kingdom === 'sonihelm' && (
        <button
          onClick={toggleSonihelmMode}
          className="w-7 h-7 rounded-full flex items-center justify-center text-sm bg-black/50 border border-foreground/20 hover:opacity-80 transition-all duration-300"
          title={sonihelmMode === 'light' ? 'Passer en mode Enfers (sombre)' : 'Revenir à Sonihelm (clair)'}
        >
          {sonihelmMode === 'light' ? '☀️' : '🔥'}
        </button>
      )}
    </div>
  );
}
