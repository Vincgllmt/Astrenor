'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { villes, royaumeLabels, type Ville } from './villes';

const markerColor: Record<string, string> = {
  meltoria:   '#d4af37',
  sylvestri:  '#4eba6f',
  anduin:     '#6ba3c7',
  independant:'#aaaaaa',
};

const badgeClass: Record<string, string> = {
  meltoria:    'text-meltoria   border-meltoria/60   bg-meltoria/20',
  sylvestri:   'text-sylvestri  border-sylvestri/60  bg-sylvestri/20',
  anduin:      'text-anduin     border-anduin/60     bg-anduin/20',
  independant: 'text-foreground/80 border-foreground/30 bg-foreground/10',
};

const typeLabel: Record<string, string> = {
  capitale:  'Capitale',
  ville:     'Ville',
  village:   'Village',
  forteresse:'Forteresse',
  'cité':    'Cité',
};

function Marker({ ville, isHovered, onEnter, onLeave }: {
  ville: Ville;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const color = markerColor[ville.royaume];
  const size = ville.type === 'capitale' ? 'w-4 h-4' : 'w-2.5 h-2.5';
  const ring  = ville.type === 'capitale' ? 'w-7 h-7'  : 'w-5 h-5';

  return (
    <Link
      href={`/carte/${ville.id}`}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ left: `${ville.x}%`, top: `${ville.y}%` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-label={ville.nom}
    >
      <div className="relative flex items-center justify-center cursor-pointer">
        {/* Pulse ring */}
        <span
          className={`absolute ${ring} rounded-full animate-ping opacity-25`}
          style={{ backgroundColor: color }}
        />
        {/* Dot */}
        <span
          className={`${size} rounded-full border-2 border-white/60 relative z-10 transition-transform duration-150 ${isHovered ? 'scale-150' : 'scale-100'}`}
          style={{ backgroundColor: color }}
        />
        {/* Label above */}
        <span
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 pointer-events-none whitespace-nowrap text-[10px] font-bold px-1.5 py-0.5 rounded border backdrop-blur-sm transition-opacity duration-150 ${badgeClass[ville.royaume]} ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {ville.nom}
        </span>
      </div>
    </Link>
  );
}

export default function InteractiveMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredVille = villes.find(v => v.id === hovered) ?? null;

  return (
    <div className="relative">
      {/* Map container */}
      <div className="relative w-full overflow-hidden rounded-xl border border-primary-dark/40 shadow-2xl shadow-primary/10" style={{ aspectRatio: '16/9' }}>
        <Image
          src="/map/carte_astrenor.png"
          alt="Carte interactive d'Astrenor"
          fill
          className="object-cover"
          priority
        />

        {/* City markers */}
        {villes.map((ville) => (
          <Marker
            key={ville.id}
            ville={ville}
            isHovered={hovered === ville.id}
            onEnter={() => setHovered(ville.id)}
            onLeave={() => setHovered(null)}
          />
        ))}

        {/* Hover info panel */}
        <div
          className={`absolute bottom-3 left-3 w-72 bg-black/90 border border-primary-dark/60 rounded-xl p-4 backdrop-blur-sm pointer-events-none transition-all duration-200 ${hoveredVille ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          {hoveredVille && (
            <>
              <div className="flex items-start gap-3">
                <span className="text-3xl leading-none mt-0.5">{hoveredVille.icon}</span>
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground text-base leading-tight">{hoveredVille.nom}</h3>
                  <div className="flex gap-1.5 mt-1 mb-2 flex-wrap">
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${badgeClass[hoveredVille.royaume]}`}>
                      {royaumeLabels[hoveredVille.royaume]}
                    </span>
                    <span className="text-[10px] text-foreground/50 px-1.5 py-0.5 rounded border border-foreground/20">
                      {typeLabel[hoveredVille.type]}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 line-clamp-3 leading-relaxed">{hoveredVille.description}</p>
                </div>
              </div>
              <p className="text-[10px] text-foreground/40 mt-2 text-right">Cliquer pour en savoir plus →</p>
            </>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center text-xs text-foreground/60">
        {(['meltoria', 'sylvestri', 'anduin', 'independant'] as const).map((r) => (
          <div key={r} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: markerColor[r] }} />
            {royaumeLabels[r]}
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full inline-block border-2" style={{ backgroundColor: markerColor.meltoria, borderColor: 'white' }} />
          Capitale
        </div>
      </div>
    </div>
  );
}
