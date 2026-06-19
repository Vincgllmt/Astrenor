import { Metadata } from 'next';
import Link from 'next/link';
import { SectionTitle } from '@/components';
import InteractiveMap from './InteractiveMap';
import { villes, royaumeLabels, type Royaume } from './villes';

export const metadata: Metadata = {
  title: 'Carte Interactive — Astrenor',
  description: 'Explorez la carte interactive du continent d\'Astrenor. Cliquez sur une ville ou un village pour découvrir ses coutumes, ses lieux d\'intérêt et son histoire.',
};

const royaumeHref: Record<Royaume, string> = {
  meltoria:    '/royaumes/meltoria',
  sylvestri:   '/royaumes/sylvestri',
  anduin:      '/royaumes/anduin',
  independant: '/royaumes',
};

const royaumeBorder: Record<Royaume, string> = {
  meltoria:    'border-meltoria/40  hover:border-meltoria',
  sylvestri:   'border-sylvestri/40 hover:border-sylvestri',
  anduin:      'border-anduin/40    hover:border-anduin',
  independant: 'border-foreground/20 hover:border-foreground/50',
};

const royaumeText: Record<Royaume, string> = {
  meltoria:    'text-meltoria',
  sylvestri:   'text-sylvestri',
  anduin:      'text-anduin',
  independant: 'text-foreground/70',
};

export default function CartePage() {
  const parRoyaume = (['anduin', 'meltoria', 'sylvestri', 'independant'] as Royaume[]).map((r) => ({
    id: r,
    villes: villes.filter((v) => v.royaume === r),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-6xl mb-6">🗺️</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">Carte d&apos;Astrenor</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Survolez un lieu pour l&apos;aperçu, cliquez pour découvrir ses coutumes et ses secrets.
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <InteractiveMap />
        </div>
      </section>

      {/* City index by kingdom */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Lieux du Continent" subtitle="Retrouvez tous les lieux recensés sur la carte" />

          <div className="space-y-12">
            {parRoyaume.map(({ id, villes: villesRoyaume }) => (
              villesRoyaume.length > 0 && (
                <div key={id}>
                  <div className="flex items-center gap-3 mb-4">
                    <Link href={royaumeHref[id]} className={`text-sm font-semibold uppercase tracking-widest ${royaumeText[id]} hover:underline`}>
                      {royaumeLabels[id]}
                    </Link>
                    <div className="flex-1 h-px bg-foreground/10" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {villesRoyaume.map((ville) => (
                      <Link
                        key={ville.id}
                        href={`/carte/${ville.id}`}
                        className={`bg-black/40 border rounded-xl p-4 text-center card-hover transition-colors ${royaumeBorder[ville.royaume]}`}
                      >
                        <div className="text-2xl mb-2">{ville.icon}</div>
                        <div className={`font-semibold text-sm ${royaumeText[ville.royaume]}`}>{ville.nom}</div>
                        <div className="text-foreground/40 text-xs mt-0.5 capitalize">{ville.type}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
