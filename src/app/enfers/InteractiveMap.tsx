'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { territoires, typeLabels, type Territoire } from './territoires';

const markerColor: Record<string, string> = {
  'fief-lilim': '#d4af37',
  territoire:   '#b83a4b',
};

const badgeClass: Record<string, string> = {
  'fief-lilim': 'text-primary border-primary/60 bg-primary/20',
  territoire:   'text-accent  border-accent/60  bg-accent/20',
};

function Marker({ territoire, isHovered, onEnter, onLeave }: {
  territoire: Territoire;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const color = markerColor[territoire.type];
  const size = territoire.type === 'fief-lilim' ? 'w-4 h-4' : 'w-2.5 h-2.5';
  const ring  = territoire.type === 'fief-lilim' ? 'w-7 h-7'  : 'w-5 h-5';

  return (
    <Link
      href={`/enfers/${territoire.id}`}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ left: `${territoire.x}%`, top: `${territoire.y}%` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-label={territoire.nom}
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
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 pointer-events-none whitespace-nowrap text-[10px] font-bold px-1.5 py-0.5 rounded border backdrop-blur-sm transition-opacity duration-150 ${badgeClass[territoire.type]} ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {territoire.nom}
        </span>
      </div>
    </Link>
  );
}

export default function InteractiveMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredTerritoire = territoires.find(t => t.id === hovered) ?? null;

  return (
    <div className="relative">
      {/* Map container */}
      <div className="relative w-full overflow-hidden rounded-xl border border-accent/40 shadow-2xl shadow-accent/20" style={{ aspectRatio: '16/9' }}>
        <Image
          src="/map/carte_enfer_astrenor.png"
          alt="Carte interactive des Enfers"
          fill
          className="object-cover"
          priority
        />

        {/* Territory markers */}
        {territoires.map((territoire) => (
          <Marker
            key={territoire.id}
            territoire={territoire}
            isHovered={hovered === territoire.id}
            onEnter={() => setHovered(territoire.id)}
            onLeave={() => setHovered(null)}
          />
        ))}

        {/* Hover info panel */}
        <div
          className={`absolute bottom-3 left-3 w-72 bg-black/90 border border-accent/60 rounded-xl p-4 backdrop-blur-sm pointer-events-none transition-all duration-200 ${hoveredTerritoire ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          {hoveredTerritoire && (
            <>
              <div className="flex items-start gap-3">
                <span className="text-3xl leading-none mt-0.5">{hoveredTerritoire.icon}</span>
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground text-base leading-tight">{hoveredTerritoire.nom}</h3>
                  <div className="flex gap-1.5 mt-1 mb-2 flex-wrap">
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${badgeClass[hoveredTerritoire.type]}`}>
                      {typeLabels[hoveredTerritoire.type]}
                    </span>
                    <span className="text-[10px] text-foreground/50 px-1.5 py-0.5 rounded border border-foreground/20">
                      {hoveredTerritoire.environnement}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 line-clamp-3 leading-relaxed">{hoveredTerritoire.description}</p>
                </div>
              </div>
              <p className="text-[10px] text-foreground/40 mt-2 text-right">Cliquer pour en savoir plus →</p>
            </>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center text-xs text-foreground/60">
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full inline-block border-2" style={{ backgroundColor: markerColor['fief-lilim'], borderColor: 'white' }} />
          Fief des Lilim
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: markerColor.territoire }} />
          Territoire (roi/reine)
        </div>
      </div>
    </div>
  );
}
