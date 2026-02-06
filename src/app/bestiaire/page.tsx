import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bestiaire | Astrenor',
  description: 'Découvrez les créatures qui peuplent le continent d\'Astrenor : dragons, golems, zombies et bien d\'autres.',
};

interface CreatureCardProps {
  name: string;
  icon: string;
  description: string;
  danger: 'faible' | 'moyen' | 'élevé' | 'extrême' | 'légendaire';
}

function CreatureCard({ name, icon, description, danger }: CreatureCardProps) {
  const dangerColors = {
    faible: 'text-green-400 bg-green-500/20 border-green-500/30',
    moyen: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
    élevé: 'text-orange-400 bg-orange-500/20 border-orange-500/30',
    extrême: 'text-red-400 bg-red-500/20 border-red-500/30',
    légendaire: 'text-purple-400 bg-purple-500/20 border-purple-500/30',
  };

  return (
    <div className="bg-black/40 border border-primary-dark/30 rounded-xl p-5 hover:border-primary/50 transition-all">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-foreground">{name}</h4>
            <span className={`text-xs px-2 py-1 rounded border ${dangerColors[danger]}`}>
              {danger.toUpperCase()}
            </span>
          </div>
          <p className="text-foreground/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function BestiairePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest">Créatures d&apos;Astrenor</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mt-2 mb-6">
            Le Bestiaire
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Des bandits de grand chemin aux dragons légendaires, découvrez les créatures 
            qui peuplent les terres dangereuses d&apos;Astrenor.
          </p>
        </div>

        {/* Légende des dangers */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="text-xs px-3 py-1 rounded border text-green-400 bg-green-500/20 border-green-500/30">FAIBLE</span>
          <span className="text-xs px-3 py-1 rounded border text-yellow-400 bg-yellow-500/20 border-yellow-500/30">MOYEN</span>
          <span className="text-xs px-3 py-1 rounded border text-orange-400 bg-orange-500/20 border-orange-500/30">ÉLEVÉ</span>
          <span className="text-xs px-3 py-1 rounded border text-red-400 bg-red-500/20 border-red-500/30">EXTRÊME</span>
          <span className="text-xs px-3 py-1 rounded border text-purple-400 bg-purple-500/20 border-purple-500/30">LÉGENDAIRE</span>
        </div>

        {/* Humanoïdes */}
        <section className="mb-16">
          <SectionTitle title="Humanoïdes" subtitle="Brigands, mages renégats et autres menaces humaines" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CreatureCard
              name="Le Bandit"
              icon="🗡️"
              description="Un simple bandit, pas très menaçant seul mais attention aux groupes. Ils en veulent à votre argent principalement, vos vêtements à défaut, et pire si vous êtes une femme..."
              danger="faible"
            />
            <CreatureCard
              name="Mage Noir"
              icon="🧙‍♂️"
              description="Ces mages bannis de leurs académies utilisent tout ce qu'ils peuvent pour obtenir ce qu'ils veulent. Ils peuvent être assez dangereux selon leur niveau, mais sont souvent le seul mage de leur groupe."
              danger="moyen"
            />
            <CreatureCard
              name="Sorcière Recluse"
              icon="🧹"
              description="Ces femmes sont des êtres emplis d'aigreur, de colère et de ressentiment. Le cœur brisé, les sorcières recluses ne reculent devant rien pour infliger de la souffrance à autrui."
              danger="élevé"
            />
          </div>
        </section>

        {/* Créatures Naturelles */}
        <section className="mb-16">
          <SectionTitle title="Créatures Naturelles" subtitle="Faune sauvage et bêtes des forêts" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CreatureCard
              name="Chauve-souris Géante"
              icon="🦇"
              description="Un animal nocturne qui vit en groupe allant jusqu'à 7 individus. Elles sont habituellement perchées sur les branches des arbres, ou dans les grottes."
              danger="faible"
            />
            <CreatureCard
              name="Loup Sylvestrien"
              icon="🐺"
              description="Le loup des forêts de Sylvestri a tellement chassé dû à l'abondance de proies qu'il est plus performant. La meute est moins affamée qu'ailleurs. Ils craignent cependant toujours le feu."
              danger="moyen"
            />
            <CreatureCard
              name="Ours Sylvestre"
              icon="🐻"
              description="Cet ursidé géant est aussi appelé « gardien de la forêt » dû à sa neutralité. Il n'attaque que les personnes irrespectueuses envers la nature. Ses bois sont infusés de mana."
              danger="élevé"
            />
            <CreatureCard
              name="S&apos;nek"
              icon="🐍"
              description="Cette espèce de serpent tombe des arbres et utilise son venin pour paralyser sa cible, afin de la dévorer lentement. Au sol, ils sont vulnérables et essaieront de fuir."
              danger="moyen"
            />
            <CreatureCard
              name="Centaures"
              icon="🐴"
              description="Créature ayant un corps de cheval avec torse, bras et tête humains. Les mâles sont connus pour être violents tandis que les femmes sont sages et calmes. Excellents archers."
              danger="élevé"
            />
          </div>
        </section>

        {/* Monstres */}
        <section className="mb-16">
          <SectionTitle title="Monstres" subtitle="Abominations et créatures hostiles" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CreatureCard
              name="Gobelin Cyclopéen"
              icon="👁️"
              description="Créatures étranges de plus de deux mètres avec de longs bras. Quand ils repèrent une proie, ils poussent un hurlement strident pour alerter leurs congénères. Facilement distraits par de simples bruits."
              danger="moyen"
            />
            <CreatureCard
              name="Champignon Géant"
              icon="🍄"
              description="Il existe deux catégories : les parents, grands et protecteurs, et les enfants, plus petits et évasifs. Ne vous fiez pas à leur apparence, ils sont très costauds."
              danger="moyen"
            />
            <CreatureCard
              name="Nymphe"
              icon="🧜"
              description="Créatures perfides et attrayantes, usant de leur polymorphie et d'illusions pour charmer les voyageurs. Une fois à portée, le monstre révèle sa vraie nature, furieuse et assoiffée de sang."
              danger="élevé"
            />
            <CreatureCard
              name="Tréant"
              icon="🌳"
              description="Mi-druide mi-arbre, les tréants sont des protecteurs de la nature et des soigneurs. Ils vous suivront du regard et vous attaqueront si vous avez l'air hostile ou pour protéger d'autres créatures."
              danger="élevé"
            />
          </div>
        </section>

        {/* Morts-vivants */}
        <section className="mb-16">
          <SectionTitle title="Morts-Vivants" subtitle="Créatures revenues d'entre les morts" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CreatureCard
              name="Squelette"
              icon="💀"
              description="Restes de créatures réanimés par un nécromancien. Très polyvalents selon leur niveau de puissance vivant. Pour les éliminer, détruisez leur crâne ou leur colonne vertébrale. Trouvables près de ruines."
              danger="faible"
            />
            <CreatureCard
              name="Zombie"
              icon="🧟"
              description="Créature perturbante, fruit d'une peste d'Anduin. La maladie tue les malades et les fait se relever en monstres meurtriers très résistants. Éloignez-vous de leur mâchoire si vous ne voulez pas subir le même sort..."
              danger="moyen"
            />
          </div>
        </section>

        {/* Créatures Magiques */}
        <section className="mb-16">
          <SectionTitle title="Créatures Magiques" subtitle="Êtres imprégnés de magie" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CreatureCard
              name="Golem Arcanique"
              icon="🗿"
              description="Golems de pierre animés à l'aide de runes et d'une pierre de mana en guise de cœur. Fidèles à leurs créateurs, ils vagabondent après leur trépas. Pacifiques, mais leur gemme est précieuse..."
              danger="moyen"
            />
            <CreatureCard
              name="Esprits"
              icon="👻"
              description="Créatures très diverses en apparence et intention. Chaque esprit possède un élément propre : feu, foudre, eau, terre, ténèbres ou sacré. Les deux derniers sont très rares (esprits légendaires)."
              danger="moyen"
            />
          </div>
        </section>

        {/* Salamandres */}
        <section className="mb-16">
          <SectionTitle title="Les Salamandres Sylvestres" subtitle="9 sous-espèces différenciées par taille et couleur" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-600/20 to-transparent border border-green-600/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🦎</span>
                <h4 className="text-lg font-bold text-green-400">Salamandre Verte</h4>
              </div>
              <p className="text-foreground/70 text-sm mb-2">
                La plus commune. Résistante, reste au sol. Pas vraiment une menace si vous allez vite ou montez dans un arbre.
              </p>
              <span className="text-xs px-2 py-1 rounded border text-yellow-400 bg-yellow-500/20 border-yellow-500/30">MOYEN</span>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-600/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🦎</span>
                <h4 className="text-lg font-bold text-purple-400">Salamandre Violette</h4>
              </div>
              <p className="text-foreground/70 text-sm mb-2">
                Moins résistante que la verte mais capable de grimper aux arbres. Elle peut littéralement vous tomber dessus.
              </p>
              <span className="text-xs px-2 py-1 rounded border text-orange-400 bg-orange-500/20 border-orange-500/30">ÉLEVÉ</span>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-transparent border border-cyan-600/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🦎</span>
                <h4 className="text-lg font-bold text-cyan-400">Salamandre Cyan</h4>
              </div>
              <p className="text-foreground/70 text-sm mb-2">
                La plus mobile et très résistante. Capable de &quot;dasher&quot; avec un bruit de coup de fouet. Si elle fait des tours sur elle-même, fuyez !
              </p>
              <span className="text-xs px-2 py-1 rounded border text-orange-400 bg-orange-500/20 border-orange-500/30">ÉLEVÉ</span>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-transparent border border-yellow-600/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🦎</span>
                <h4 className="text-lg font-bold text-yellow-400">Salamandre Jaune</h4>
              </div>
              <p className="text-foreground/70 text-sm mb-2">
                Chasse en meute de deux minimum. Le leader est plus résistant et donne des instructions via cris ou signaux sur ses cornes.
              </p>
              <span className="text-xs px-2 py-1 rounded border text-red-400 bg-red-500/20 border-red-500/30">EXTRÊME</span>
            </div>

            <div className="bg-gradient-to-br from-red-600/20 to-transparent border border-red-600/30 rounded-xl p-5 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🔥</span>
                <h4 className="text-xl font-bold text-red-500">Salamandre Rouge</h4>
              </div>
              <p className="text-foreground/70 text-sm mb-3">
                Créature mythique vue une seule fois par le chasseur <span className="text-red-400 font-semibold">Adencia Pebbles</span>. 
                Il la décrit comme terrifiante, plus qu&apos;intelligente et bien plus grosse que les autres. 
                Le sommet de la chaîne alimentaire, un super prédateur.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded border text-purple-400 bg-purple-500/20 border-purple-500/30">LÉGENDAIRE</span>
                <span className="text-red-400 text-sm font-semibold">⚠️ Si vous en voyez une, fuyez ou préparez-vous au combat qui sera sûrement le dernier...</span>
              </div>
            </div>
          </div>
        </section>

        {/* Créatures Draconiennes */}
        <section className="mb-16">
          <SectionTitle title="Créatures Draconiennes" subtitle="Les descendants et apparentés des dragons" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <CreatureCard
              name="Vouivre"
              icon="🐲"
              description="Descendants lointains des dragons, plus petites et ne crachent pas de feu. Assez intelligentes et douées de langage, mais territoriales et agressives. Leurs écailles se vendent très cher."
              danger="élevé"
            />
          </div>

          {/* Dragons */}
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/30 rounded-xl p-8">
            <div className="flex items-start gap-6">
              <span className="text-6xl">🐉</span>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-orange-400">Les Dragons</h3>
                  <span className="text-xs px-2 py-1 rounded border text-purple-400 bg-purple-500/20 border-purple-500/30">LÉGENDAIRE</span>
                </div>
                <p className="text-foreground/70 mb-4">
                  À l&apos;origine, les dragons sont le sommet de la chaîne alimentaire, les maîtres du chaos et de la destruction. 
                  Dans les temps anciens, ils dominaient le continent.
                </p>
                <p className="text-foreground/70 mb-4">
                  Cependant, avant même l&apos;unification des royaumes, les seigneurs de Meltoria décidèrent de lancer des armées 
                  contre ces monstruosités. Tuer un dragon causait énormément de pertes, mais moins que de les laisser en vie.
                </p>
                <p className="text-foreground/70 mb-4">
                  Au prix de nombreuses pertes, les dragons restants finirent par s&apos;enfuir du continent, s&apos;installant sur 
                  une autre terre loin de leurs origines, où ils restent maîtres.
                </p>
                <div className="bg-black/40 rounded-lg p-4 border border-red-500/30">
                  <p className="text-red-400 font-semibold">
                    ⚠️ L&apos;arrivée d&apos;un dragon est maintenant le signe d&apos;une grande catastrophe qui doit mobiliser un royaume entier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-6">Explorer d&apos;autres aspects d&apos;Astrenor</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/races" 
                className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
              >
                👥 Les Races
              </Link>
              <Link 
                href="/legendes" 
                className="px-6 py-3 bg-purple-600/20 border border-purple-600/50 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors"
              >
                📜 Légendes
              </Link>
              <Link 
                href="/royaumes/sylvestri" 
                className="px-6 py-3 bg-sylvestri/20 border border-sylvestri/50 text-sylvestri rounded-lg hover:bg-sylvestri/30 transition-colors"
              >
                🌲 Sylvestri
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
