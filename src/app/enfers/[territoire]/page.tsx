import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { territoires, typeLabels, type TypeTerritoire } from '../territoires';

interface Props {
  params: Promise<{ territoire: string }>;
}

export async function generateStaticParams() {
  return territoires.map((t) => ({ territoire: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { territoire: id } = await params;
  const territoire = territoires.find((t) => t.id === id);
  if (!territoire) return {};
  return {
    title: `${territoire.nom} — Les Enfers d'Astrenor`,
    description: territoire.description,
  };
}

const typeGradient: Record<TypeTerritoire, string> = {
  'fief-lilim': 'from-primary/20',
  territoire:   'from-accent/20',
};

const typeBorder: Record<TypeTerritoire, string> = {
  'fief-lilim': 'border-primary/40',
  territoire:   'border-accent/40',
};

const typeText: Record<TypeTerritoire, string> = {
  'fief-lilim': 'text-primary',
  territoire:   'text-accent',
};

export default async function TerritoirePage({ params }: Props) {
  const { territoire: id } = await params;
  const territoire = territoires.find((t) => t.id === id);
  if (!territoire) notFound();

  // Autres territoires (5 max)
  const autres = territoires.filter((t) => t.id !== territoire.id).slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${typeGradient[territoire.type]} via-transparent to-background`} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-7xl mb-6">{territoire.icon}</div>
          <div className="mb-3 flex items-center justify-center gap-2 flex-wrap">
            <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${typeBorder[territoire.type]} ${typeText[territoire.type]}`}>
              {typeLabels[territoire.type]}
            </span>
            <span className="text-xs text-foreground/50 uppercase tracking-wider">
              {territoire.environnement}
            </span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-3 ${typeText[territoire.type]}`}>
            {territoire.nom}
          </h1>
          <p className="text-foreground/50 text-sm uppercase tracking-widest mb-6">
            Gouverné par {territoire.souverain}
          </p>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {territoire.description}
          </p>
        </div>
      </section>

      {/* Coutumes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Coutumes &amp; Traditions
          </h2>
          <p className="text-foreground/50 mb-8 text-sm">Les usages qui définissent la vie à {territoire.nom}</p>
          <ul className="space-y-4">
            {territoire.coutumes.map((coutume, i) => (
              <li key={i} className={`flex gap-4 bg-black/40 border ${typeBorder[territoire.type]} rounded-xl p-5`}>
                <span className={`text-2xl font-bold ${typeText[territoire.type]} opacity-40 select-none leading-none mt-0.5`}>
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
          <p className="text-foreground/50 mb-8 text-sm">Les lieux incontournables de {territoire.nom}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {territoire.pointsInteret.map((poi, i) => (
              <div key={i} className={`bg-black/50 border ${typeBorder[territoire.type]} rounded-xl p-4 flex items-center gap-3`}>
                <span className={`text-lg ${typeText[territoire.type]}`}>◆</span>
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
              href="/enfers"
              className="flex-1 text-center px-6 py-3 border border-foreground/20 text-foreground/70 rounded-lg hover:border-foreground/40 hover:text-foreground transition-all"
            >
              ← Retour aux Enfers
            </Link>
          </div>

          {/* Autres territoires */}
          {autres.length > 0 && (
            <div>
              <h3 className="text-foreground/50 text-sm uppercase tracking-widest mb-4">
                Autres territoires des Enfers
              </h3>
              <div className="flex flex-wrap gap-3">
                {autres.map((t) => (
                  <Link
                    key={t.id}
                    href={`/enfers/${t.id}`}
                    className={`flex items-center gap-2 bg-black/40 border ${typeBorder[t.type]} rounded-lg px-4 py-2 text-sm hover:bg-white/5 transition-all`}
                  >
                    <span>{t.icon}</span>
                    <span className={typeText[t.type]}>{t.nom}</span>
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
