import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { villes, royaumeLabels, type Royaume } from '../villes';

interface Props {
  params: Promise<{ ville: string }>;
}

export async function generateStaticParams() {
  return villes.map((v) => ({ ville: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville: id } = await params;
  const ville = villes.find((v) => v.id === id);
  if (!ville) return {};
  return {
    title: `${ville.nom} — Carte d'Astrenor`,
    description: ville.description,
  };
}

const royaumeHref: Record<Royaume, string> = {
  meltoria:    '/royaumes/meltoria',
  sylvestri:   '/royaumes/sylvestri',
  anduin:      '/royaumes/anduin',
  independant: '/royaumes',
};

const royaumeGradient: Record<Royaume, string> = {
  meltoria:    'from-meltoria/20',
  sylvestri:   'from-sylvestri/20',
  anduin:      'from-anduin/20',
  independant: 'from-foreground/10',
};

const royaumeBorder: Record<Royaume, string> = {
  meltoria:    'border-meltoria/40',
  sylvestri:   'border-sylvestri/40',
  anduin:      'border-anduin/40',
  independant: 'border-foreground/20',
};

const royaumeText: Record<Royaume, string> = {
  meltoria:    'text-meltoria',
  sylvestri:   'text-sylvestri',
  anduin:      'text-anduin',
  independant: 'text-foreground/70',
};

const typeLabel: Record<string, string> = {
  capitale:  '🏛️ Capitale',
  ville:     '🏘️ Ville',
  village:   '🏡 Village',
  forteresse:'🏰 Forteresse',
  'cité':    '🏙️ Cité',
};

export default async function VillePage({ params }: Props) {
  const { ville: id } = await params;
  const ville = villes.find((v) => v.id === id);
  if (!ville) notFound();

  // Villes voisines (même royaume, 5 max)
  const voisines = villes
    .filter((v) => v.royaume === ville.royaume && v.id !== ville.id)
    .slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={`relative py-32 px-4 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${royaumeGradient[ville.royaume]} via-transparent to-background`} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-7xl mb-6">{ville.icon}</div>
          <div className="mb-3 flex items-center justify-center gap-2 flex-wrap">
            <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${royaumeBorder[ville.royaume]} ${royaumeText[ville.royaume]}`}>
              {royaumeLabels[ville.royaume]}
            </span>
            <span className="text-xs text-foreground/50 uppercase tracking-wider">
              {typeLabel[ville.type] ?? ville.type}
            </span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${royaumeText[ville.royaume]}`}>
            {ville.nom}
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {ville.description}
          </p>
        </div>
      </section>

      {/* Coutumes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Coutumes &amp; Traditions
          </h2>
          <p className="text-foreground/50 mb-8 text-sm">Les usages qui définissent la vie à {ville.nom}</p>
          <ul className="space-y-4">
            {ville.coutumes.map((coutume, i) => (
              <li key={i} className={`flex gap-4 bg-black/40 border ${royaumeBorder[ville.royaume]} rounded-xl p-5`}>
                <span className={`text-2xl font-bold ${royaumeText[ville.royaume]} opacity-40 select-none leading-none mt-0.5`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-foreground/80 leading-relaxed">{coutume}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Points d'intérêt */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Points d&apos;Intérêt
          </h2>
          <p className="text-foreground/50 mb-8 text-sm">Les lieux incontournables de {ville.nom}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ville.pointsInteret.map((poi, i) => (
              <div key={i} className={`bg-black/50 border ${royaumeBorder[ville.royaume]} rounded-xl p-4 flex items-center gap-3`}>
                <span className={`text-lg ${royaumeText[ville.royaume]}`}>◆</span>
                <span className="text-foreground/80 text-sm font-medium">{poi}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Liens */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/carte"
              className="flex-1 text-center px-6 py-3 border border-foreground/20 text-foreground/70 rounded-lg hover:border-foreground/40 hover:text-foreground transition-all"
            >
              ← Retour à la carte
            </Link>
            <Link
              href={royaumeHref[ville.royaume]}
              className={`flex-1 text-center px-6 py-3 border ${royaumeBorder[ville.royaume]} ${royaumeText[ville.royaume]} rounded-lg hover:bg-white/5 transition-all`}
            >
              Découvrir {royaumeLabels[ville.royaume]} →
            </Link>
          </div>

          {/* Autres lieux du même royaume */}
          {voisines.length > 0 && (
            <div>
              <h3 className="text-foreground/50 text-sm uppercase tracking-widest mb-4">
                Autres lieux de {royaumeLabels[ville.royaume]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {voisines.map((v) => (
                  <Link
                    key={v.id}
                    href={`/carte/${v.id}`}
                    className={`flex items-center gap-2 bg-black/40 border ${royaumeBorder[v.royaume]} rounded-lg px-4 py-2 text-sm hover:bg-white/5 transition-all`}
                  >
                    <span>{v.icon}</span>
                    <span className={royaumeText[v.royaume]}>{v.nom}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
