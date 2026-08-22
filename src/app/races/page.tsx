import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Les Races | Astrenor',
  description: 'Découvrez les différentes races qui peuplent le continent d\'Astrenor : humains, elfes, nains, vampires, arachnées et bien d\'autres.',
};

interface RaceCardProps {
  name: string;
  icon: string;
  description: string;
  capacity: string;
  origin: string;
  lifespan: string;
  color: string;
  stats?: { force: number; agilite: number; intelligence: number };
}

function RaceCard({ name, icon, description, capacity, origin, lifespan, color }: RaceCardProps) {
  return (
    <div className={`bg-gradient-to-br from-${color}/20 to-transparent border border-${color}/30 rounded-xl p-6 hover:border-${color}/50 transition-all`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{icon}</span>
        <h3 className={`text-xl font-bold text-${color}`}>{name}</h3>
      </div>
      <p className="text-foreground/70 text-sm mb-4">{description}</p>
      <div className="space-y-3">
        <div className="bg-black/40 rounded-lg p-3">
          <p className="text-foreground/60 text-sm">
            <span className={`text-${color} font-semibold`}>Capacités :</span> {capacity}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-black/40 px-2 py-1 rounded text-foreground/60">
            📍 {origin}
          </span>
          <span className="bg-black/40 px-2 py-1 rounded text-foreground/60">
            ⏳ {lifespan}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RacesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">Peuples d&apos;Astrenor</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mt-2 mb-6">
            Les Races
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Des humains aux créatures mystiques, découvrez les différents peuples
            qui façonnent le destin du continent d&apos;Astrenor.
          </p>
        </div>

        {/* Races Communes */}
        <section className="mb-16">
          <SectionTitle title="Races Communes" subtitle="Les peuples les plus répandus d'Astrenor" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RaceCard
              name="Humains"
              icon="👤"
              description="L'Homme possède des capacités plutôt simples, adepte de la magie et maniant des armes de toutes sortes. C'est la race la plus commune grâce à leur soif d'exploration et leur fertilité relativement haute."
              capacity="L'adaptabilité est le trait principal des humains. Bien que ce ne soit pas un pouvoir direct, c'est la clé de la survie par le nombre dans tous les environnements."
              origin="Meltoria"
              lifespan="80 ans"
              color="meltoria"
              stats={{ force: 5, agilite: 5, intelligence: 5 }}
            />

            <RaceCard
              name="Elfes"
              icon="🧝"
              description="Créatures en harmonie avec la nature, possédant des oreilles pointues et une génétique avantageuse leur donnant grande taille, belle silhouette et longévité exceptionnelle. Pratiquants actifs de l'eugénisme."
              capacity="La magie est innée chez les elfes. Chaque elfe possède un potentiel magique, exploité ou non."
              origin="Sylvestri"
              lifespan="200-300 ans"
              color="sylvestri"
            />

            <RaceCard
              name="Nains"
              icon="⛏️"
              description="Petites créatures humanoïdes caverneuses obsédées par l'or et la production. Reconnus comme les meilleurs mineurs, farouches guerriers et excellents forgerons. Inventeurs des runes magiques."
              capacity="Un sixième sens pour les richesses et minerais. Capables de repérer une pépite d'or les yeux fermés et d'estimer le prix de n'importe quel objet."
              origin="Montagnes Meltoria-Anduin"
              lifespan="70 ans"
              color="anduin"
            />
          </div>
        </section>

        {/* Sous-races d'Elfes */}
        <section className="mb-16">
          <SectionTitle title="Les Variantes Elfiques" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2">Elfes Blancs (Hauts-Elfes)</h4>
              <p className="text-foreground/60 text-sm">Spécialité : magie. De nature très fière, perfectionnistes et pacifistes. Majoritaires au Grand Conseil de Sylvestri.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-transparent border border-gray-600/30 rounded-xl p-4">
              <h4 className="font-bold text-gray-300 mb-2">Elfes Noirs</h4>
              <p className="text-foreground/60 text-sm">Les plus agiles. Excellents assassins, espions et mages de bataille. Humbles et accueillants malgré leur réputation.</p>
            </div>
            <div className="bg-gradient-to-br from-red-800/20 to-transparent border border-red-800/30 rounded-xl p-4">
              <h4 className="font-bold text-red-400 mb-2">Elfes de Sang</h4>
              <p className="text-foreground/60 text-sm">Les plus guerriers. Culture violente et sanglante. Excellents paladins et chevaliers. Se sont eux-mêmes ostracisés.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-700/20 to-transparent border border-amber-700/30 rounded-xl p-4">
              <h4 className="font-bold text-amber-500 mb-2">Elfes Bruns</h4>
              <p className="text-foreground/60 text-sm">Peuple nomade d&apos;archers nés. Société matriarcale. Chasseurs exclusivement carnivores par évolution.</p>
            </div>
          </div>
        </section>

        {/* Races Maudites */}
        <section className="mb-16">
          <SectionTitle title="Races Maudites" subtitle="Ceux qui portent le fardeau d'une malédiction" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RaceCard
              name="Lycanthropes"
              icon="🐺"
              description="D'apparence humaine le jour, ils se transforment certaines nuits en forme bestiale monstrueuse. Les jeunes sont incapables de résister à l'appel sauvage, oubliant leur sapience. Il existe des familles nobles de Lycans."
              capacity="Vitesse et ouïe décuplées, meilleure vue nocturne et excellent odorat. La transformation est différente pour chaque individu."
              origin="Meltoria & Anduin"
              lifespan="100 ans"
              color="amber"
              stats={{ force: 8, agilite: 7, intelligence: 1 }}
            />

            <RaceCard
              name="Vampires"
              icon="🧛"
              description="Morts depuis la naissance. Ils craignent le soleil (Solaris) et peuvent passer des pactes avec des esprits. Certaines sectes comme le Soleil Rouge organisent des rituels de transformation de masse."
              capacity="Affinité magique accrue, régénération. Affaiblis par le soleil. Peuvent se transformer en chauve-souris et marcher sur l'eau."
              origin="Meltoria"
              lifespan="Immortel"
              color="red"
              stats={{ force: 7, agilite: 2, intelligence: 6 }}
            />

            <RaceCard
              name="Ombres"
              icon="👤"
              description="Créatures intangibles vivant souvent dans des cryptes anciennes. Elles sont insensibles aux attaques physiques classiques."
              capacity="Intangibilité, discrétion absolue, résistance physique totale."
              origin="Cryptes anciennes"
              lifespan="Inconnu"
              color="gray"
            />
          </div>
        </section>

        {/* Hybrides */}
        <section className="mb-16">
          <SectionTitle title="Hybrides et Autres Créatures" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RaceCard
              name="Demi-Orcs"
              icon="👹"
              description="Croisement entre Humains et Orcs. Souvent rejetés par la société à cause de leur héritage, ils cherchent souvent leur place dans le monde."
              capacity="Force physique supérieure à la moyenne, endurance accrue."
              origin="Meltoria & Terres Sauvages"
              lifespan="60-70 ans"
              color="green"
            />

            <RaceCard
              name="Demi-Démons"
              icon="👿"
              description="Croisement entre Humains et Démons. Ils peuvent hériter de traits physiques distinctifs comme des yeux à pupille verticale ou des cheveux de couleur atypique."
              capacity="Affinité mineure avec la magie noire ou le feu, résistance accrue."
              origin="Les Enfers & Monde Mortel"
              lifespan="80-100 ans"
              color="red"
            />

            <RaceCard
              name="Mi-Bêtes"
              icon="🐾"
              description="Hybrides humain-animal plus prononcés que les demi-humains classiques (ex: mi-vache). Souvent issus de la magie ou de conditions particulières."
              capacity="Traits liés à l'animal (force, agilité, sens)."
              origin="Sylvestri"
              lifespan="Variable"
              color="sylvestri"
            />
          </div>
        </section>

        {/* Races de Sylvestri */}
        <section className="mb-16">
          <SectionTitle title="Créatures de Sylvestri" subtitle="Nées de la magie des forêts enchantées" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RaceCard
              name="Demi-Humains"
              icon="🐱"
              description="Mi-humain mi-animal, avec des attributs comme des oreilles, queue, ailes ou fourrure. Résultat de la migration humaine dans les terres enchantées de Sylvestri."
              capacity="Capacités dépendant de l'animal correspondant. Système immunitaire puissant et résistance innée à la lycanthropie."
              origin="Sylvestri"
              lifespan="100-150 ans"
              color="sylvestri"
            />

            <RaceCard
              name="Dryades"
              icon="🌿"
              description="Créatures territoriales, observatrices et exclusivement féminines. Véritables protectrices des forêts. Amicales envers ceux qui respectent la nature, agressives sinon."
              capacity="Communiquer avec les plantes, les manipuler. Peuvent se téléporter dans leur forêt et se sacrifier pour la régénérer."
              origin="Sylvestri"
              lifespan="100-500 ans (selon la forêt)"
              color="sylvestri"
            />

            <RaceCard
              name="Fées"
              icon="🧚"
              description="Créatures magiques immortelles, petites et délicates. Associées à la nature et à la beauté. Ne peuvent vivre qu'en Sylvestri à cause du besoin de magie abondante."
              capacity="Vol, manipulation de la magie de la nature, invisibilité, création d'illusions. Certaines peuvent guérir blessures et maladies."
              origin="Sylvestri"
              lifespan="Immortelles"
              color="pink"
            />

            <RaceCard
              name="Sirènes & Tritons"
              icon="🧜"
              description="Beauté et voix mélodieuse enviées de tous. Possèdent souvent des pouvoirs de soins liés à l'eau. Obligés de rester près de points d'eau."
              capacity="Nager très vite et très profondément, voix envoûtante, très doués en magie élémentaire de l'eau."
              origin="Îles de Sylvestri"
              lifespan="100 ans"
              color="blue"
              stats={{ force: 2, agilite: 7, intelligence: 6 }}
            />

            <RaceCard
              name="Lamias"
              icon="🐍"
              description="Mi-humaines mi-serpents. Buste de femme et corps de serpent. Beauté envoûtante et voix mélodieuse. La famille est une valeur importante."
              capacity="Déplacement rapide et silencieux grâce au corps de serpent. Prédatrices redoutables."
              origin="Sylvestri"
              lifespan="125-145 ans"
              color="purple"
            />

            <RaceCard
              name="Krakenanthropus"
              icon="🦑"
              description="Mi-humains mi-poulpes avec tentacules à la place des jambes. Apparence étrange mais intelligence supérieure. Très territoriaux dans l'eau."
              capacity="Contrôle de l'eau et des créatures marines, déplacement rapide dans l'eau, création d'illusions et manipulation mentale."
              origin="Côtes et océans"
              lifespan="100 ans"
              color="blue"
            />
          </div>
        </section>

        {/* Races Guerrières */}
        <section className="mb-16">
          <SectionTitle title="Races Guerrières" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RaceCard
              name="Orcs"
              icon="👹"
              description="Souvent féroces et sauvages, parfois nobles et résolus. Nés de l'union entre géants et elfettes. Beaucoup luttent pour maîtriser leurs élans bestiaux."
              capacity="Furie sanguinaire doublant force et vitesse au dépit de l'intellect. Difficile à maîtriser et cause principale du rejet qu'ils subissent."
              origin="Sylvestri (exilés vers Anduin)"
              lifespan="135 ans (plupart meurent jeunes)"
              color="green"
            />

            <RaceCard
              name="Centaures"
              icon="🐴"
              description="Corps de cheval avec torse, bras et tête humains. Les mâles sont connus pour être violents, les femmes pour être sages et calmes."
              capacity="Excellents archers, quel que soit le genre."
              origin="Astrenor"
              lifespan="Variable"
              color="amber"
            />
          </div>
        </section>

        {/* Arachnées */}
        <section className="mb-16">
          <SectionTitle title="Arachnées" subtitle="Nées des profondeurs, entre instinct de survie et sang-froid" />

          <div className="grid grid-cols-1 gap-6">
            <RaceCard
              name="Arachnées"
              icon="🕷️"
              description="Nées dans des donjons profonds sous terre, dépourvues de toute forme humaine à la naissance, elles doivent dévorer leur propre fratrie pour survivre selon la loi du plus fort. Au fil des épreuves et des combats, elles évoluent jusqu'à une forme semi-humaine puis, une fois leur propre mère vaincue elles adopte une forme humaine complète tout en gardant la capacité de reprendre leur apparence arachnéenne d'origine. Solitaires par nature, elles fuient la compagnie et détestent qu'on cherche à les aider. Les mâles, bien plus rares que les femelles, ne conservent pas le corps arachnéen inférieur propre à leur race : seules des pattes supplémentaires dans le dos trahissent encore leur héritage une fois leur forme humaine atteinte."
              capacity="Fils tissés par les ongles sous forme humaine ou par l'abdomen sous forme arachnéenne, modulables en lames tranchantes, filaments collants ou brins empoisonnés ; crocs venimeux ; maîtrise de la corrosion ; magie reconstruite à partir de sorts déjà observés ; régénération lente (plusieurs jours)."
              origin="Donjons souterrains"
              lifespan="Indéterminée (100+ ans)"
              color="purple"
              stats={{ force: 8, agilite: 7, intelligence: 6 }}
            />
          </div>
        </section>

        {/* Races des Enfers */}
        <section className="mb-16">
          <SectionTitle title="Créatures des Enfers" subtitle="Ceux qui viennent des profondeurs infernales" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RaceCard
              name="Démons"
              icon="😈"
              description="Les êtres les plus communs en enfers. Peau parfois bleue ou rouge, cornes sur la tête, parfois des ailes. Pas forcément diaboliques mais subissent un racisme constant."
              capacity="Vol pour certains, affinité avec la magie de feu."
              origin="Les Enfers"
              lifespan="100-180 ans"
              color="red"
            />

            <RaceCard
              name="Succubes & Incubes"
              icon="😏"
              description="Démons assez faibles qui se nourrissent de l'âme des gens à travers la luxure. Ailes de chauve-souris et queue de démon. Très joueurs et voleurs."
              capacity="Facilités avec les sorts d'illusion, charme et transformation. Certains sont polymorphes mais doivent toujours utiliser leurs ailes pour voler."
              origin="Les Enfers"
              lifespan="200-300 ans"
              color="pink"
            />

            <RaceCard
              name="Lamias des Enfers"
              icon="🐍"
              description="Version infernale des lamias avec peau de couleur différente et cornes sur la tête."
              capacity="Mêmes capacités que les lamias normales avec traits démoniaques."
              origin="Les Enfers"
              lifespan="125-145 ans"
              color="red"
            />
          </div>
        </section>

        {/* Races Célestes et Spirituelles */}
        <section className="mb-16">
          <SectionTitle title="Êtres Célestes & Spirituels" />

          <div className="text-center mb-4">
            <Link href="/lointains/sonihelm" className="text-yellow-400 hover:underline text-sm">
              En savoir plus sur Sonihelm →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RaceCard
              name="Anges"
              icon="👼"
              description="Créés après le fiasco des Lilim pour être 'parfaits', archiver l'histoire du monde et, un jour, l'effacer. Vivent sur l'île flottante Sonihelm au-dessus des nuages. Apparence juvénile avec 1 à 6 paires d'ailes selon leur rang."
              capacity="Manipulation de la magie de la lumière, vol, vision des sentiments primaires (peur, joie, dégoût, tristesse, colère, surprise)."
              origin="Sonihelm"
              lifespan="200-300 ans"
              color="yellow"
            />

            <RaceCard
              name="Fantômes"
              icon="👻"
              description="Esprits qui errent sur Astrenor, n'ayant pas trouvé la paix ou ayant encore quelque chose à faire. Contrairement aux rumeurs, ils sont bien visibles !"
              capacity="Traverser toute matière, prendre possession d'un corps entre la vie et la mort. Intouchables sauf s'ils veulent attaquer. Pas très forts."
              origin="Partout"
              lifespan="Immortels (déjà morts)"
              color="gray"
            />
          </div>
        </section>

        {/* Races Draconiques */}
        <section className="mb-16">
          <SectionTitle title="Races Draconiques" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RaceCard
              name="Demi-Dragons"
              icon="🐲"
              description="Mi-humains mi-dragons avec ailes, queue et parfois écailles. Apparence impressionnante et force brute. Certains vivent cachés comme la famille Nécéron."
              capacity="Vol grâce à des ailes puissantes, cracher du feu. Peau épaisse et résistante aux attaques physiques et magiques avec écailles (temporaires)."
              origin="Astrenor"
              lifespan="100 ans"
              color="orange"
            />

            <div className="bg-gradient-to-br from-orange-600/20 to-transparent border border-orange-600/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🐉</span>
                <h3 className="text-xl font-bold text-orange-500">Les Dragons (Bestiaire)</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-4">
                Créatures intelligentes et dévastatrices. Capables d'organiser des attaques militaires massives sur des villes
                et de gérer des camps de prisonniers. Ils sont servis par des &quot;adeptes&quot;.
                Certains très puissants peuvent prendre forme humaine.
              </p>
              <Link
                href="/bestiaire"
                className="inline-block text-orange-400 hover:text-orange-300 text-sm underline"
              >
                Voir le bestiaire →
              </Link>
            </div>
          </div>
        </section>

        {/* Races Astrales */}
        <section className="mb-16">
          <SectionTitle title="Races Astrales" />

          <div className="text-center mb-4">
            <Link href="/lointains/oryn" className="text-orange-400 hover:underline text-sm">
              En savoir plus sur Oryn →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RaceCard
                name="Démonides Astrales"
                icon="🌑"
                description="Sur Oryn, leur lune d'origine, on les appelle les Sylithra. Créatures bio-luminescentes, elles ressemblent aux démons mais en sont différentes dans la texture : leurs griffes, cornes et queues semblent éthérées. Elles se nourrissent des émotions des êtres vivants. On en croise parfois lors de pluies de comètes, s'écrasant sur Astrenor."
                capacity="Manipulation de la gravité et de l'énergie astrale. Peuvent se téléporter sur de courtes distances et devenir intangibles."
                origin="Oryn"
                lifespan="300 ans"
                color="orange"
            />
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-6">Explorer d&apos;autres aspects d&apos;Astrenor</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/bestiaire"
                className="px-6 py-3 bg-accent/20 border border-accent/50 text-accent rounded-lg hover:bg-accent/30 transition-colors"
              >
                🐉 Bestiaire
              </Link>
              <Link
                href="/legendes"
                className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
              >
                📜 Légendes
              </Link>
              <Link
                href="/royaumes"
                className="px-6 py-3 bg-meltoria/20 border border-meltoria/50 text-meltoria rounded-lg hover:bg-meltoria/30 transition-colors"
              >
                🏰 Les Royaumes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
