import Link from 'next/link';
import Image from 'next/image';
import { SectionTitle, CharacterCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sylvestri - Royaume de la Nature et de la Magie | Astrenor',
  description: 'Découvrez Sylvestri, le berceau de la magie et terre des elfes sur le continent d\'Astrenor.',
};

export default function SylvestriPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sylvestri/20 via-transparent to-background" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-6xl mb-6">🌲</div>
          <h1 className="text-4xl md:text-6xl font-bold text-sylvestri mb-4">Sylvestri</h1>
          <p className="text-xl text-foreground/80 mb-4">Le Royaume de la Nature et de la Magie</p>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            La contrée désorganisée et berceau de la magie, un havre de verdure et de vie
            où la nature règne en maître.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-sylvestri/50 shadow-2xl shadow-sylvestri/20 group">
            <Image
              src="/map/carte_sylvestri.png"
              alt="Carte du Royaume de Sylvestri"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="text-sylvestri font-bold mb-2">Gouvernement</h3>
              <p className="text-foreground/60 text-sm">Conseil des chefs de villages (Alliance)</p>
            </div>
            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="text-sylvestri font-bold mb-2">Spécialité</h3>
              <p className="text-foreground/60 text-sm">Magie, créatures fantastiques, elfes</p>
            </div>
            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <div className="text-3xl mb-2">🏫</div>
              <h3 className="text-sylvestri font-bold mb-2">Institution</h3>
              <p className="text-foreground/60 text-sm">Académie de magie Étherium à Aewood</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Le Berceau de la Magie" />

          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/80 text-lg mb-6">
              Renommé pour son rapport à la nature privilégié, ses forêts luxuriantes et ses peuples
              mystiques. C&apos;est le pays le plus magique de tout Astrenor, et aussi le plus vieux,
              bien plus vieux que tous les autres pays sur le continent.
            </p>

            <p className="text-foreground/70 mb-6">
              Les forêts denses et mystérieuses abritent des créatures fantastiques et des esprits
              ancestraux, tandis que les peuples qui y vivent sont aussi divers que les feuilles
              des arbres qui les entourent. C&apos;est la terre des elfes et autres races magiques.
            </p>

            <p className="text-foreground/70 mb-6">
              Sans dirigeant unique, les habitants de Sylvestri vivent en harmonie avec leur
              environnement, suivant les lois de la nature et les coutumes de leurs ancêtres
              selon les villages. C&apos;est d&apos;ailleurs les elfes qui partagèrent leurs dons magiques
              aux humains, créant les premiers Sorciers.
            </p>

            <div className="bg-sylvestri/10 border border-sylvestri/30 rounded-xl p-6 mt-8">
              <p className="text-foreground/70 italic">
                💡 C&apos;est ici que naquirent les premiers demi-hommes, créatures mi-humaines,
                mi-animales. Ceux-ci finiront par se répandre dans tout le continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sylvanea */}
      <section id="sylvanea" className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Sylvanea, Le Village Caché"
            subtitle="Le lieu où commence votre aventure"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-foreground/70 mb-6">
                Sylvanea est une bourgade inconnue au bord de Sylvestri, entourée d&apos;une immense
                forêt typique du royaume avec la mer au nord. Aucune carte locale ne fait mention
                d&apos;un village dans les environs — son existence tient plus de la légende que d&apos;un
                réel lieu.
              </p>

              <p className="text-foreground/60 mb-6">
                Bien qu&apos;on ne trouve à Sylvanea aucun signe des précédents habitants, l&apos;endroit
                ne semble abandonné que depuis peu : la taverne dispose de boissons encore fraîches,
                et le vieux magasin de la nourriture encore comestible. Les villageois semblent
                s&apos;être évaporés pendant la nuit, mais les bâtiments sont délabrés, voire en ruines.
              </p>

              <div className="bg-sylvestri/10 border border-sylvestri/30 rounded-xl p-4">
                <p className="text-foreground/60 text-sm italic">
                  🌟 La plupart des voyageurs venant se perdre ici parlent d&apos;un sentiment étrange,
                  d&apos;une force qui les aurait guidés à travers les bois jusqu&apos;à ce lieu...
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sylvestri font-bold text-lg">👥 Les Pionniers</h4>
              <div className="space-y-3">
                <div className="bg-black/40 border border-sylvestri/20 rounded-lg p-4">
                  <p className="text-sylvestri font-semibold">Takanashi Filo</p>
                  <p className="text-foreground/60 text-sm">Lapine, première arrivée. Devenue bibliothécaire du village.</p>
                </div>
                <div className="bg-black/40 border border-sylvestri/20 rounded-lg p-4">
                  <p className="text-sylvestri font-semibold">Nécéron Amane</p>
                  <p className="text-foreground/60 text-sm">Jeune dragon forgeron, arrivé peu après Filo.</p>
                </div>
                <div className="bg-black/40 border border-sylvestri/20 rounded-lg p-4">
                  <p className="text-sylvestri font-semibold">VanHeart Esmeralda</p>
                  <p className="text-foreground/60 text-sm">Future gouvernante du village de Sylvanea.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="L'Académie Étherium"
            subtitle="Institution millénaire dédiée à la maîtrise des arts magiques"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-foreground/70">
                L&apos;Académie Étherium, située à Aewood, est vieille de plus de 500 ans. Son origine
                demeure enveloppée de mystère — le fondateur et les détails de sa création ont été
                effacés des registres, probablement l&apos;œuvre de l&apos;archevêque Pandore.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-primary/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">5 ans</div>
                  <p className="text-foreground/60 text-sm">Phase d&apos;apprentissage</p>
                </div>
                <div className="bg-black/40 border border-primary/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">5 ans</div>
                  <p className="text-foreground/60 text-sm">Phase de recherche</p>
                </div>
              </div>

              <p className="text-foreground/60 text-sm">
                Tous les individus possédant de la magie et ayant au moins 10 ans peuvent rejoindre
                l&apos;académie, peu importe leur statut ou royaume d&apos;origine. Pendant les 5 premières
                années, hommes et femmes sont séparés et ne peuvent se retrouver que pour les repas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl p-6">
                <h4 className="text-primary font-bold mb-3">🎓 Évêques</h4>
                <p className="text-foreground/60 text-sm">
                  Rang obtenu en réalisant une découverte dans la magie et en présentant une thèse.
                  Permet de donner des cours et de voter pour le directeur.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-xl p-6">
                <h4 className="text-accent font-bold mb-3">⚡ Archevêques</h4>
                <p className="text-foreground/60 text-sm">
                  Individus d&apos;une puissance extraordinaire. Une fois ce rang atteint, ils doivent
                  quitter immédiatement l&apos;académie pour prévenir de possibles désastres.
                </p>
              </div>
            </div>
          </div>

          {/* Archbishops */}
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Les Cinq Archevêques Connus</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CharacterCard
              name="Zarestia"
              title="Maîtresse des Invocations"
              symbol="🌀"
              quote="Elle peut invoquer des créatures élémentaires, des démons, des esprits ou d'autres entités."
              description="Son pouvoir réside dans sa capacité à ouvrir des portails interdimensionnels. Elle possède un contrôle absolu sur les entités invoquées."
            />
            <CharacterCard
              name="Pandore"
              title="Manipulatrice de la Réalité"
              symbol="🔮"
              quote="Ses pouvoirs permettent de manipuler le tissu de l'existence de manière subtile ou radicale."
              description="Capable d'altérer la réalité elle-même. Son existence soulève des questions sur la nature fondamentale de la magie. Elle a peut-être effacé d'autres archevêques."
            />
            <CharacterCard
              name="L'Innommé"
              title="Force Écrasante"
              symbol="💀"
              quote="Son champ de force invisible peut écraser à la fois les êtres vivants et la magie."
              description="Identité inconnue. Plus il se rapproche de sa cible, plus les dégâts sont puissants. Le contact direct est fatal."
            />
            <CharacterCard
              name="Oboreru"
              title="L'Oblitérateur"
              symbol="👁️"
              quote="Il est capable de détruire tout ce qui se trouve sous son regard."
              description="Son pouvoir d'oblitération peut effacer des objets, voire des individus entiers. Il utilise ce pouvoir de manière mesurée."
            />
            <CharacterCard
              name="Tel'var"
              title="Maître des Runes et de la Lumière"
              symbol="✴️"
              quote="On l'aurait vu affronter un dragon lors de la guerre de 200 ans et gagner sans la moindre difficulté."
              description="Ses compétences en runes sont les plus avancées jamais observées. On ne voit jamais son visage. Son histoire est entièrement documentée dans les archives."
            />
          </div>
        </div>
      </section>

      {/* Factions */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Lieux et Factions Discrets" subtitle="Les secrets de la forêt" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-2">⚓ Baronnie de Befohrt</h3>
              <p className="text-foreground/70">
                Située sur l'<strong>Île de la Virgule</strong> au Nord-Ouest. Dirigée par la famille <strong>Levonhardt</strong> (Isadora),
                cette île prospère grâce à la pêche et est protégée par une flotte corsaire.
              </p>
            </div>

            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-2">✨ Famille Magikus</h3>
              <p className="text-foreground/70">
                Une haute famille noble elfique résidant dans la région de <strong>Keatheile</strong>, réputée pour ses
                puissants mages.
              </p>
            </div>

            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-2">🦋 La Colonie de l'Ancêtre</h3>
              <p className="text-foreground/70">
                Un groupe terrifiant tapi dans les profondeurs de <strong>Sylvanea</strong>. Une entité insectoïde
                assimile ses victimes pour en faire partie de sa &quot;colonie&quot;.
              </p>
            </div>

            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-2">🔭 Les Astriens</h3>
              <p className="text-foreground/70">
                Une communauté d'elfes noirs astrologues vénérant les étoiles et cherchant un sens à leur existence
                dans les cieux nocturnes.
              </p>
            </div>

            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-2">🧘 Temple de l'Esprit</h3>
              <p className="text-foreground/70">
                Un lieu de culte et d'apaisement géré par Felin Von Sparda, dédié à la maîtrise de soi et de l'esprit.
              </p>
            </div>

            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-2">😈 Les Lilims</h3>
              <p className="text-foreground/70">
                Une faction (ou race) démoniaque récemment arrivée, cherchant à nouer des alliances diplomatiques
                avec certaines familles humaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">Explorer les autres royaumes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/royaumes/meltoria"
              className="px-6 py-3 bg-meltoria/20 border border-meltoria/50 text-meltoria rounded-lg hover:bg-meltoria/30 transition-colors"
            >
              ⚔️ Meltoria
            </Link>
            <Link
              href="/royaumes/anduin"
              className="px-6 py-3 bg-anduin/20 border border-anduin/50 text-anduin rounded-lg hover:bg-anduin/30 transition-colors"
            >
              ⚙️ Anduin
            </Link>
            <Link
              href="/magie"
              className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
            >
              ✨ En savoir plus sur la magie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
