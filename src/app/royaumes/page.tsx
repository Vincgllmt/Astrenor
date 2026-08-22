import Link from 'next/link';
import Image from 'next/image';
import { SectionTitle, KingdomCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Les Royaumes - Astrenor',
  description: 'Découvrez les trois royaumes majestueux d\'Astrenor : Meltoria, Sylvestri et Anduin.',
};

export default function RoyaumesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">Explorer</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-gradient mt-2 mb-6">
            Les Trois Royaumes
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            C&apos;est sur ce continent d&apos;Astrenor, où les royaumes de Meltoria, Sylvestri et Anduin
            cohabitent, que se déroulent les aventures épiques et les récits légendaires qui ont
            forgé l&apos;histoire de ce monde médiéval fantastique.
          </p>
        </div>

        {/* Map */}
        <div className="mb-16">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-primary-dark/50 shadow-2xl shadow-black/50 group">
            <Image
              src="/map/carte_astrenor.png"
              alt="Carte du continent d'Astrenor"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-center md:text-left">
              <p className="text-white/80 text-sm font-medium italic">Le continent d&apos;Astrenor et ses trois royaumes</p>
            </div>
          </div>
        </div>

        {/* Kingdom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <KingdomCard
            name="Meltoria"
            description="Le joyau féodal d'Astrenor, au centre du continent, réputé pour ses forgerons hors pair, ses plaines verdoyantes à perte de vue et ses chevaliers valeureux."
            href="/royaumes/meltoria"
            icon="⚔️"
            color="meltoria"
            features={[
              "Gouverné par le Roi-Sorcier Aegon Tabarly",
              "Capitale : Majestia",
              "Forgerons légendaires",
              "Chevaliers et seigneurs puissants"
            ]}
          />

          <KingdomCard
            name="Sylvestri"
            description="La contrée désorganisée et berceau de la magie. Un havre de verdure et de vie, où la nature règne en maître parmi les forêts denses et mystérieuses."
            href="/royaumes/sylvestri"
            icon="🌲"
            color="sylvestri"
            features={[
              "Conseil des chefs de villages",
              "Académie de magie Étherium",
              "Terre des elfes et créatures magiques",
              "Village caché de Sylvanea"
            ]}
          />

          <KingdomCard
            name="Anduin"
            description="L'empire mécanique s'étend sur les terres gelées du nord. Un royaume ingénieux réputé pour ses inventions mécaniques et ses machines à vapeur."
            href="/royaumes/anduin"
            icon="⚙️"
            color="anduin"
            features={[
              "Impératrice Skarlet",
              "Capitale : Ravengulch",
              "Technologie avancée",
              "Poudre à canon et machines à vapeur"
            ]}
          />
        </div>

        {/* Relations */}
        <SectionTitle
          title="Relations entre Royaumes"
          subtitle="Après 200 ans de guerre, la paix règne enfin... mais les cicatrices demeurent"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Le Grand Accord de Sylvarin</h3>
            <p className="text-foreground/70 mb-4">
              Suite au coup d&apos;État de la générale Skarlet contre l&apos;Empereur d&apos;Anduin,
              une trêve historique fut proposée et acceptée par les trois royaumes.
            </p>
            <p className="text-foreground/60 text-sm">
              Cet accord a mis fin à la Guerre des Deux Siècles il y a 19 ans,
              permettant aux pays de se reconstruire dans une atmosphère de paix fragile.
            </p>
          </div>

          <div className="bg-black/40 border border-accent/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-accent mb-4">Tensions Persistantes</h3>
            <p className="text-foreground/70 mb-4">
              Malgré la paix, des tensions subsistent entre les royaumes.
              Les relations s&apos;améliorent mais une cicatrice permanente de la guerre reste visible.
            </p>
            <ul className="text-foreground/60 text-sm space-y-2">
              <li>• Anduin reste isolé et protège ses secrets technologiques</li>
              <li>• Sylvestri s&apos;est refermé sur lui-même par sécurité</li>
              <li>• Meltoria tente de maintenir l&apos;équilibre diplomatique</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
