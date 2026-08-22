import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Encyclopédie | Astrenor',
  description: 'Le savoir compilé d\'Astrenor : races, créatures, légendes, quêtes et almanach du continent.',
};

export default function EncyclopediePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">Le Savoir d&apos;Astrenor</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-gradient mt-2 mb-6">
            Encyclopédie
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Peuples, créatures, mystères et coutumes du continent - un point d&apos;entrée vers tout ce qui a
            été consigné sur Astrenor, entre savoir établi et récits invérifiables.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link href="/races" className="block group">
            <div className="relative overflow-hidden rounded-xl border-2 border-primary/50 hover:border-primary hover:shadow-primary/20 p-6 bg-gradient-to-br from-primary/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Races</h3>
              <p className="text-foreground/70">
                Humains, elfes, nains, vampires et bien d&apos;autres peuples qui façonnent les trois royaumes.
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-primary">→</span>
              </div>
            </div>
          </Link>

          <Link href="/bestiaire" className="block group">
            <div className="relative overflow-hidden rounded-xl border-2 border-accent/50 hover:border-accent hover:shadow-accent/20 p-6 bg-gradient-to-br from-accent/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">🐉</div>
              <h3 className="text-2xl font-bold mb-3 text-accent">Bestiaire</h3>
              <p className="text-foreground/70">
                Des bandits de grand chemin aux dragons légendaires, les créatures qui peuplent les terres d&apos;Astrenor.
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-accent">→</span>
              </div>
            </div>
          </Link>

          <Link href="/legendes" className="block group">
            <div className="relative overflow-hidden rounded-xl border-2 border-purple-600/50 hover:border-purple-400 hover:shadow-purple-500/20 p-6 bg-gradient-to-br from-purple-600/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">Légendes</h3>
              <p className="text-foreground/70">
                Récits, rumeurs et origines mystérieuses transmis à travers les générations du continent.
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-purple-400">→</span>
              </div>
            </div>
          </Link>

          <Link href="/quetes" className="block group">
            <div className="relative overflow-hidden rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:shadow-blue-500/20 p-6 bg-gradient-to-br from-blue-500/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-400">Quêtes</h3>
              <p className="text-foreground/70">
                Intrigues, mystères et aventures à mener à travers les royaumes et leurs factions.
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-blue-400">→</span>
              </div>
            </div>
          </Link>

          <Link href="/almanach" className="block group md:col-span-2">
            <div className="relative overflow-hidden rounded-xl border-2 border-emerald-500/50 hover:border-emerald-400 hover:shadow-emerald-500/20 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent bg-black/40 card-hover cursor-pointer h-full">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Almanach</h3>
              <p className="text-foreground/70">
                Potions, boissons, repas et expressions idiomatiques : la vie quotidienne d&apos;Astrenor, royaume par royaume.
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl text-emerald-400">→</span>
              </div>
            </div>
          </Link>
        </div>

        <SectionTitle title="Un Savoir Incomplet" subtitle="Ce que les archives ne disent pas" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <p className="text-foreground/60 text-sm">
              Certaines créatures et races n&apos;existent que dans les récits de voyageurs isolés, jamais confirmés
              par un érudit ou une académie.
            </p>
          </div>
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <p className="text-foreground/60 text-sm">
              Les trois royaumes ne partagent pas toujours les mêmes archives - une légende à Meltoria peut être
              un fait établi à Sylvestri.
            </p>
          </div>
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <p className="text-foreground/60 text-sm">
              De nouvelles entrées s&apos;ajoutent au fil des expéditions et des rencontres, sur le continent
              comme au-delà de ses frontières.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
