import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terres Lointaines - Astrenor',
  description: 'Au-delà du continent d\'Astrenor : Oryn la lune de lumière, Sonihelm l\'île des archivistes, et Vhorgath, le continent des dragons exilés.',
};

export default function LointainsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">Au-delà du Continent</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mt-2 mb-6">
            Terres Lointaines
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Astrenor n&apos;est pas seul. Une lune, une île céleste et un continent perdu gravitent
            en marge des trois royaumes - trop loin, trop hostiles ou trop bien gardés pour être
            réellement explorés. Ce que l&apos;on en sait tient presque entièrement de récits de
            seconde main, de naufrages et de rencontres accidentelles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/lointains/oryn" className="block group">
            <div className="relative overflow-hidden rounded-xl border-2 border-violet-500/50 hover:border-violet-400 hover:shadow-violet-500/20 p-6 bg-gradient-to-br from-violet-500/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">🌑</div>
              <h3 className="text-2xl font-bold mb-3 text-violet-400">Oryn</h3>
              <p className="text-foreground/70 mb-4">
                Satellite naturel d&apos;Astrenor, patrie des Sylithra - que les royaumes de
                surface appellent les Démonides Astrales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-violet-400">◆</span>Peuple bio-luminescent, empathe</li>
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-violet-400">◆</span>Se nourrit d&apos;émotions</li>
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-violet-400">◆</span>Échoue sur Astrenor lors des pluies de comètes</li>
              </ul>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-violet-400">→</span>
              </div>
            </div>
          </Link>

          <Link href="/lointains/sonihelm" className="block group">
            <div className="relative overflow-hidden rounded-xl border-2 border-amber-400/50 hover:border-amber-300 hover:shadow-amber-400/20 p-6 bg-gradient-to-br from-amber-400/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">👼</div>
              <h3 className="text-2xl font-bold mb-3 text-amber-300">Sonihelm</h3>
              <p className="text-foreground/70 mb-4">
                Île flottante au-dessus des nuages, habitée par les anges - créés par les dieux
                pour archiver l&apos;histoire du monde et effacer une erreur passée.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-amber-300">◆</span>Dérive au-dessus des trois royaumes</li>
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-amber-300">◆</span>L&apos;Archive des Mémoires</li>
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-amber-300">◆</span>Liée à l&apos;attaque des Enfers</li>
              </ul>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-amber-300">→</span>
              </div>
            </div>
          </Link>

          <Link href="/lointains/vhorgath" className="block group">
            <div className="relative overflow-hidden rounded-xl border-2 border-orange-500/50 hover:border-orange-400 hover:shadow-orange-500/20 p-6 bg-gradient-to-br from-orange-500/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">🐉</div>
              <h3 className="text-2xl font-bold mb-3 text-orange-400">Vhorgath</h3>
              <p className="text-foreground/70 mb-4">
                Le continent des dragons exilés, jamais cartographié, jusqu&apos;à ce que
                leurs attaques récentes forcent les érudits à s&apos;y intéresser.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-orange-400">◆</span>Exilés avant la formation des royaumes</li>
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-orange-400">◆</span>Terres volcaniques et cendrées</li>
                <li className="flex items-center text-sm text-foreground/60"><span className="mr-2 text-orange-400">◆</span>Les Porteurs de Mort en sont peut-être originaires</li>
              </ul>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-orange-400">→</span>
              </div>
            </div>
          </Link>
        </div>

        <SectionTitle title="Trois Lieux, Trois Silences" subtitle="Ce que les royaumes ignorent d'eux-mêmes" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <p className="text-foreground/60 text-sm">
              Personne à Astrenor n&apos;a jamais visité Oryn. Tout ce qu&apos;on en sait vient
              des Sylithra échoués, souvent traumatisés, rarement bavards.
            </p>
          </div>
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <p className="text-foreground/60 text-sm">
              Sonihelm ne se pose jamais. Les rares témoins de son passage au-dessus des
              royaumes n&apos;ont vu qu&apos;une ombre lointaine dans les nuages.
            </p>
          </div>
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <p className="text-foreground/60 text-sm">
              Vhorgath n&apos;a jamais été atteint par un navire revenu pour en témoigner.
              Ce que l&apos;on en sait tient des dragons eux-mêmes, ou de ce qu&apos;ils laissent derrière eux.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
