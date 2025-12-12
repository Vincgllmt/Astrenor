'use client';

import { useTheme } from '@/contexts';

const kingdoms = [
  { id: 'meltoria', name: 'Meltoria', color: '#d4af37', icon: '👑' },
  { id: 'sylvestri', name: 'Sylvestri', color: '#4eba6f', icon: '🌿' },
  { id: 'anduin', name: 'Anduin', color: '#8b6f4a', icon: '🏰' },
] as const;

export default function ThemeSelector() {
  const { kingdom, setKingdom } = useTheme();

  return (
    <div className="flex items-center gap-1 p-1 bg-black/50 rounded-full border border-foreground/20">
      {kingdoms.map((k) => (
        <button
          key={k.id}
          onClick={() => setKingdom(k.id)}
          className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm
            transition-all duration-300 
            ${kingdom === k.id 
              ? 'ring-2 ring-offset-1 ring-offset-black scale-110' 
              : 'opacity-60 hover:opacity-100'
            }
          `}
          style={{ 
            backgroundColor: kingdom === k.id ? k.color + '30' : 'transparent',
            borderColor: k.color,
            ['--tw-ring-color' as string]: k.color,
          }}
          title={k.name}
        >
          {k.icon}
        </button>
      ))}
    </div>
  );
}
