import Link from 'next/link';
import { SectionTitle, CharacterCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magie & Académie Étherium | Astrenor',
  description: 'Découvrez le système magique d\'Astrenor et l\'Académie Étherium, berceau des plus grands mages.',
};

export default function MagiePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">Arts Mystiques</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-gradient mt-2 mb-6">
            La Magie d&apos;Astrenor
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Née à Sylvestri et partagée par les elfes aux humains, la magie est une force
            fondamentale qui façonne le destin du continent.
          </p>
        </div>

        {/* Origins */}
        <section className="mb-16">
          <SectionTitle title="Les Origines de la Magie" />

          <div className="bg-gradient-to-br from-sylvestri/10 to-transparent border border-sylvestri/30 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              La magie est présente depuis la nuit des temps mais elle n&apos;est pas très bien
              équilibrée entre les royaumes. En effet, en Sylvestri le mana est disponible en
              énorme quantité du fait que c&apos;est son lieu de naissance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 border border-sylvestri/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🧝</div>
                <h4 className="text-sylvestri font-bold">Elfes</h4>
                <p className="text-foreground/60 text-sm">Premiers détenteurs de la magie</p>
              </div>
              <div className="bg-black/40 border border-primary/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="text-primary font-bold">Sorciers</h4>
                <p className="text-foreground/60 text-sm">Humains initiés par les elfes</p>
              </div>
              <div className="bg-black/40 border border-accent/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔮</div>
                <h4 className="text-accent font-bold">Mages</h4>
                <p className="text-foreground/60 text-sm">Formés à l&apos;Académie Étherium</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-sylvestri/10 border border-sylvestri/20 rounded-lg">
              <p className="text-foreground/60 text-sm">
                <span className="text-sylvestri font-semibold">🌲 La Forêt Consciente :</span> La forêt
                de Sylvestri semble avoir sa propre conscience et empêche les personnes trop puissantes
                d&apos;entrer dans certaines zones, les faisant tourner en rond à l&apos;infini ou en les guidant
                toujours vers leur point d&apos;entrée.
              </p>
            </div>
          </div>
        </section>

        {/* Forms of Magic */}
        <section className="mb-16">
          <SectionTitle title="Les Formes de la Magie" subtitle="La magie peut prendre plusieurs formes chez un individu" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/40 border border-red-500/30 rounded-xl p-4 text-center hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-2">🔥</div>
              <h4 className="text-red-400 font-bold text-sm">Éléments</h4>
              <p className="text-foreground/50 text-xs">Feu, eau, vent, terre...</p>
            </div>
            <div className="bg-black/40 border border-yellow-500/30 rounded-xl p-4 text-center hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl mb-2">💪</div>
              <h4 className="text-yellow-400 font-bold text-sm">Renforcement</h4>
              <p className="text-foreground/50 text-xs">Amélioration musculaire</p>
            </div>
            <div className="bg-black/40 border border-green-500/30 rounded-xl p-4 text-center hover:border-green-500/50 transition-colors">
              <div className="text-3xl mb-2">💚</div>
              <h4 className="text-green-400 font-bold text-sm">Soins</h4>
              <p className="text-foreground/50 text-xs">Guérison et régénération</p>
            </div>
            <div className="bg-black/40 border border-purple-500/30 rounded-xl p-4 text-center hover:border-purple-500/50 transition-colors">
              <div className="text-3xl mb-2">✨</div>
              <h4 className="text-purple-400 font-bold text-sm">Capacités</h4>
              <p className="text-foreground/50 text-xs">Nouvelles aptitudes</p>
            </div>
          </div>
        </section>

        {/* Advanced Magic */}
        <section className="mb-16">
          <SectionTitle title="Arts Magiques Spécialisés" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-red-800/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-500 mb-2">🩸 Magie du Sang</h4>
              <p className="text-foreground/60 text-sm">
                Utilisation du sang pour redonner vie temporairement à des plantes ou pour des rituels puissants.
              </p>
            </div>
            <div className="bg-black/40 border border-gray-800/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-500 mb-2">🌑 Magie des Ténèbres</h4>
              <p className="text-foreground/60 text-sm">
                S'apprend souvent en survivant à des épreuves mortelles ou des illusions (ex: Cryptes de Sylvanea).
              </p>
            </div>
            <div className="bg-black/40 border border-green-800/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-500 mb-2">🧪 Magie Virale/Poison</h4>
              <p className="text-foreground/60 text-sm">
                Domaine étudié par des experts comme Lokeria, permettant de manipuler maladies et toxines.
              </p>
            </div>
            <div className="bg-black/40 border border-purple-800/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-500 mb-2">🧠 Magie de l'Esprit</h4>
              <p className="text-foreground/60 text-sm">
                Permet d'apaiser les âmes, de manipuler les émotions ou de passer des contrats avec des esprits.
              </p>
            </div>
            <div className="bg-black/40 border border-blue-900/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-500 mb-2">🔄 Magie d'Altération</h4>
              <p className="text-foreground/60 text-sm">
                Spécialité enseignée à l'Académie Etherium, incluant la transposition et la modification de la matière.
              </p>
            </div>
            <div className="bg-black/40 border border-gray-900/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-400 mb-2">☠️ Nécromancie</h4>
              <p className="text-foreground/60 text-sm">
                Art interdit ou rare permettant de ramener les morts ou de manipuler les corps, souvent via les Runes.
              </p>
            </div>
          </div>
        </section>

        {/* Artefacts */}
        <section className="mb-16">
          <SectionTitle title="Artefacts Légendaires" subtitle="Objets de puissance unique" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-700/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-orange-500 mb-2">🗡️ Dague des Flammes Noires</h4>
              <p className="text-foreground/60 text-sm">
                Arme unique de la famille Yeomford, capable d'infliger des blessures brûlantes maudites.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-700/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-500 mb-2">🧤 Gantelets Ignifugés</h4>
              <p className="text-foreground/60 text-sm">
                Armes sur mesure conçues pour des combattants maudits par le feu, permettant de canaliser leur pouvoir sans se brûler.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-700/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-500 mb-2">🌺 Fleurs Enchantées</h4>
              <p className="text-foreground/60 text-sm">
                Fleurs magiques enchantées pour ne jamais faner, symboles d'un amour ou d'un souvenir éternel.
              </p>
            </div>
          </div>
        </section>

        {/* Daily Magic */}
        <section className="mb-16">
          <SectionTitle title="La Magie au Quotidien" subtitle="Un confort similaire au nôtre grâce aux pierres magiques" />

          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              La magie sert au quotidien de chaque habitant d&apos;Astrenor. Grâce à celle-ci,
              on retrouve un chemin de vie similaire au nôtre : des fours, des frigidaires,
              des lampes et des canalisations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-black/40 border border-blue-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">💧</div>
                <h4 className="text-blue-400 font-bold">Pierre d&apos;Eau</h4>
                <p className="text-foreground/50 text-xs">Pour les bains et canalisations</p>
              </div>
              <div className="bg-black/40 border border-red-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔥</div>
                <h4 className="text-red-400 font-bold">Pierre de Feu</h4>
                <p className="text-foreground/50 text-xs">Pour chauffer l&apos;eau</p>
              </div>
              <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">❄️</div>
                <h4 className="text-cyan-400 font-bold">Pierre de Glace</h4>
                <p className="text-foreground/50 text-xs">Pour refroidir</p>
              </div>
              <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-yellow-400 font-bold">Pierre de Foudre</h4>
                <p className="text-foreground/50 text-xs">Pour les lampes</p>
              </div>
            </div>

            <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
              <p className="text-foreground/60 text-sm">
                <span className="text-yellow-400 font-semibold">💡 Éclairage :</span> Les lampes
                fonctionnent avec des pierres de foudre mais sont réservées aux nobles des différents
                royaumes. Le peuple en dispose d&apos;une seule dans leur salon à la limite, le reste
                étant de l&apos;éclairage à la bougie.
              </p>
            </div>
          </div>
        </section>

        {/* Magic Distribution */}
        <section className="mb-16">
          <SectionTitle title="Distribution de la Magie" subtitle="La magie n'est pas répartie uniformément sur le continent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sylvestri/10 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-3">🌲 Sylvestri</h3>
              <div className="h-2 bg-black/40 rounded-full mb-3">
                <div className="h-full bg-sylvestri rounded-full" style={{ width: '100%' }} />
              </div>
              <p className="text-foreground/60 text-sm">
                Épicentre de la magie. Concentration maximale d&apos;essence magique.
                Foyers de créatures fantastiques et d&apos;esprits ancestraux.
              </p>
            </div>

            <div className="bg-meltoria/10 border border-meltoria/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-meltoria mb-3">⚔️ Meltoria</h3>
              <div className="h-2 bg-black/40 rounded-full mb-3">
                <div className="h-full bg-meltoria rounded-full" style={{ width: '60%' }} />
              </div>
              <p className="text-foreground/60 text-sm">
                Présence modérée de magie. Le Roi-Sorcier Aegon est lui-même un mage puissant.
                Alliances matrimoniales avec les elfes.
              </p>
            </div>

            <div className="bg-anduin/10 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-3">⚙️ Anduin</h3>
              <div className="h-2 bg-black/40 rounded-full mb-3">
                <div className="h-full bg-anduin rounded-full" style={{ width: '15%' }} />
              </div>
              <p className="text-foreground/60 text-sm">
                Très faible présence magique. Trop loin de Sylvestri.
                La poudre à canon remplace la magie ici.
              </p>
            </div>
          </div>
        </section>

        {/* Academy */}
        <section className="mb-16">
          <SectionTitle
            title="L'Académie Étherium"
            subtitle="Institution millénaire à Aewood, Sylvestri"
          />

          <div className="bg-black/40 border border-primary/30 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">📜 Histoire Mystérieuse</h3>
                <p className="text-foreground/70 mb-4">
                  L&apos;Académie est vieille de plus de 500 ans, changeant de directeur tous les 25 ans.
                  Cependant, le fondateur et les détails de sa création ont été effacés des registres
                  et de la mémoire collective.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  L&apos;œuvre de l&apos;archevêque Pandore, du moins c&apos;est le plus probable.
                  Peut-être qu&apos;elle en sait davantage...
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">📚 Le Cursus</h3>
                <div className="space-y-4">
                  <div className="bg-black/40 border border-primary/20 rounded-lg p-4">
                    <span className="text-primary font-bold">Phase 1 : Apprentissage (5 ans)</span>
                    <p className="text-foreground/60 text-sm mt-1">
                      Dédié à l&apos;apprentissage du monde magique, de ses secrets à ses subtilités.
                      Hommes et femmes séparés sauf pour les repas.
                    </p>
                  </div>
                  <div className="bg-black/40 border border-primary/20 rounded-lg p-4">
                    <span className="text-primary font-bold">Phase 2 : Recherche (5 ans)</span>
                    <p className="text-foreground/60 text-sm mt-1">
                      Les sorciers dédient 5 ans de leur vie à la recherche pour faire
                      évoluer l&apos;académie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-sylvestri/10 border border-sylvestri/30 rounded-lg">
            <p className="text-foreground/70 text-center">
              🎓 Tous les individus possédant de la magie et ayant au moins 10 ans peuvent rejoindre
              l&apos;académie, peu importe leur statut ou royaume d&apos;origine.
            </p>
          </div>
        </section>

        {/* The Mages */}
        <section className="mb-16">
          <SectionTitle title="Les Mages" subtitle="Ceux qui dédient leur vie à la magie" />

          <div className="bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-600/30 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              Certaines personnes dédient leur vie à la magie et ce sont les mages. Il en existe
              autant qu&apos;il existe de types de fleurs différentes : invocateurs, élémentalistes,
              nécromanciens...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/40 border border-purple-600/20 rounded-lg p-4">
                <h4 className="text-purple-400 font-bold mb-2">🎯 Spécialisation</h4>
                <p className="text-foreground/60 text-sm">
                  Chacun se spécialise dans une voie, et il est presque impossible de changer
                  sans oublier tout son savoir.
                </p>
              </div>
              <div className="bg-black/40 border border-purple-600/20 rounded-lg p-4">
                <h4 className="text-purple-400 font-bold mb-2">❓ Mystères</h4>
                <p className="text-foreground/60 text-sm">
                  Pourquoi les mages n&apos;ont pas de pouvoir ? Pourquoi des fleurs apparaissent
                  sur leurs tombes ? Le monde des mages reste à découvrir.
                </p>
              </div>
            </div>

            <div className="bg-black/40 border border-accent/20 rounded-lg p-4">
              <p className="text-foreground/60 text-sm">
                <span className="text-accent font-semibold">⚠️ Important :</span> La magie est capricieuse.
                Le monde interdit d&apos;être un génie dans la magie sans y consacrer sa vie entière.
                C&apos;est comme un cadeau des dieux qu&apos;il faut mériter en y mettant toute son âme.
              </p>
            </div>
          </div>
        </section>

        {/* Magic Levels */}
        <section className="mb-16">
          <SectionTitle title="Les Niveaux de Magie" subtitle="Chaque niveau ressemble à un anneau autour du cœur" />

          <div className="mb-6 bg-black/40 border border-primary/30 rounded-lg p-4 text-center">
            <p className="text-foreground/60 text-sm">
              Les personnes peuvent uniquement sentir leur propre niveau, ou celui d&apos;une personne
              avec qui ils partagent un lien profond et intense.
              <br />
              <span className="text-accent font-semibold">⚠️ Un non-mage ne peut pas dépasser l&apos;Intermédiaire ou l&apos;Expert selon la puissance de son pouvoir.</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-gray-600/20 to-transparent border border-gray-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-300">Débutant</h4>
                  <span className="text-gray-400 text-sm">0 à 1 anneau</span>
                </div>
              </div>
              <p className="text-foreground/60 text-sm mt-3">
                Le niveau le plus basique et atteignable par la majorité. Permet de lancer une petite
                flamme, faire un peu de vent. Surtout utile au quotidien.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-transparent border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-green-400">Intermédiaire</h4>
                  <span className="text-green-400/70 text-sm">2 à 3 anneaux</span>
                </div>
              </div>
              <p className="text-foreground/60 text-sm mt-3">
                Vous pouvez vous battre avec une boule de feu. Vous avez déjà passé un petit moment
                à feuilleter un livre pour atteindre ce niveau, mais la réserve de mana risque d&apos;être
                votre plus grand problème.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-transparent border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-blue-500/50'}`}></div>
                  ))}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-blue-400">Expert</h4>
                  <span className="text-blue-400/70 text-sm">4 à 6 anneaux</span>
                </div>
              </div>
              <p className="text-foreground/60 text-sm mt-3">
                Vous avez eu un professeur très certainement et vous consacrez votre vie à la magie.
                D&apos;ailleurs vous êtes sans pouvoir — la magie semble avoir remplacé toute possibilité pour vous.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-primary"></div>
                  ))}
                  <span className="text-primary">...</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-primary">Évêque</h4>
                  <span className="text-primary/70 text-sm">6 à 15 anneaux</span>
                </div>
              </div>
              <p className="text-foreground/60 text-sm mt-3">
                Félicitations ! Vous êtes diplômé de l&apos;académie ! Des années à travailler vont enfin
                être récompensées. À ce stade, vous êtes déjà un grand mage, au-dessus du panier,
                mais il y a encore de quoi s&apos;améliorer — vous le savez, vous le sentez en vous.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/20 to-transparent border border-accent/30 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                  ))}
                  <span className="text-accent font-bold">∞</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-accent">Archevêque</h4>
                  <span className="text-accent/70 text-sm">15+ anneaux (???)</span>
                </div>
              </div>
              <p className="text-foreground/60 text-sm mt-3">
                Vous ne vous servez pas de la magie, vous en êtes probablement à l&apos;origine.
                Le monde vous appartient, et vous n&apos;avez qu&apos;à l&apos;imaginer pour le voir changer
                en un battement de cil.
              </p>
            </div>
          </div>
        </section>

        {/* Runes */}
        <section className="mb-16">
          <SectionTitle title="Les Runes" subtitle="Magie accessible à tous, créée par les Nains" />

          <div className="bg-gradient-to-br from-anduin/10 to-transparent border border-anduin/30 rounded-xl p-8 mb-6">
            <div className="flex items-start gap-6">
              <div className="text-5xl">⚒️</div>
              <div>
                <h3 className="text-xl font-bold text-anduin mb-4">L&apos;Art Runique</h3>
                <p className="text-foreground/70 mb-4">
                  Les runes créent une magie relativement puissante et ne dépendent pas des principes
                  d&apos;affinité du mana ni du niveau de magie du sujet — ce qui en fait une magie puissante
                  pour les débutants.
                </p>
                <p className="text-foreground/70">
                  Les <span className="text-anduin font-semibold">nains des montagnes</span> à la frontière
                  entre Meltoria et Anduin sont les créateurs des runes et en sont les principaux artisans,
                  malgré leur ignorance du fonctionnement profond de ces dernières.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-anduin mb-4">⚔️ Utilisations Combatives</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Enchanter des armes</li>
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Créer des golems</li>
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Créer des pièges magiques</li>
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Altérer les corps (nécromancie)</li>
              </ul>
            </div>

            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-anduin mb-4">🏠 Utilisations Quotidiennes</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Runes d&apos;eau en continu</li>
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Pierres chauffantes</li>
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Pierres refroidissantes</li>
                <li className="flex items-start"><span className="text-anduin mr-2">•</span>Source majeure de richesse des nains</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-primary mb-3">📜 Runes Gravées</h4>
              <p className="text-foreground/60 text-sm">
                Les runes sont des informations magiques pour le mana, comme un code magique qui peut
                insuffler du mana dans tous les éléments inanimés gravés. La maîtrise est difficile car
                les symboles doivent être gravés précisément.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-accent mb-3">🌀 Runes dans l&apos;Air</h4>
              <p className="text-foreground/60 text-sm">
                Ce que peu d&apos;artisans savent est la possibilité de graver des runes dans l&apos;air,
                bien que volatiles. Plus complexes et destructrices, elles demandent une précision extrême.
              </p>
            </div>
          </div>
        </section>        {/* Ranks */}
        <section className="mb-16">
          <SectionTitle title="Les Rangs Magiques" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🎓</div>
                <h3 className="text-xl font-bold text-primary">Évêques</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Rang &quot;facile&quot; à obtenir comparé à celui d&apos;Archevêque. Il suffit de réaliser
                une découverte dans la magie et d&apos;en présenter une thèse.
              </p>
              <h4 className="text-primary font-semibold mb-2">Privilèges :</h4>
              <ul className="text-foreground/60 text-sm space-y-2">
                <li>• Plus obligé d&apos;assister aux cours si obtenu avant la fin des études</li>
                <li>• Peut donner des cours aux années inférieures</li>
                <li>• Peut assister aux réunions importantes</li>
                <li>• Peut voter pour le prochain directeur</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">⚡</div>
                <h3 className="text-xl font-bold text-accent">Archevêques</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Individus d&apos;une puissance magique extraordinaire, détenant des compétences
                distinctes et influentes, tout en demeurant entourés de mystère.
              </p>
              <div className="bg-black/40 border border-accent/20 rounded-lg p-4">
                <p className="text-foreground/60 text-sm">
                  ⚠️ Une fois ce rang atteint, il est demandé aux archevêques de quitter
                  <span className="text-accent font-semibold"> immédiatement</span> l&apos;académie
                  pour prévenir de possibles désastres.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Archbishops */}
        <section className="mb-16">
          <SectionTitle
            title="Les Cinq Archevêques Connus"
            subtitle="Leurs capacités défient les lois connues d'Astrenor"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CharacterCard
              name="Zarestia"
              title="Maîtresse des Invocations"
              symbol="🌀"
              quote="Elle peut invoquer des créatures élémentaires, des démons, des esprits ou d'autres entités selon ses besoins."
              description="Sa renommée dans le domaine des invocations est incontestée. Son pouvoir réside dans sa capacité à ouvrir des portails interdimensionnels. Elle possède un contrôle absolu sur les entités invoquées, les utilisant pour des tâches variées. Les origines de Zarestia sont enveloppées de mystère."
            />

            <CharacterCard
              name="Pandore"
              title="Altératrice de la Réalité"
              symbol="🔮"
              quote="Ses interventions suggèrent qu'elle agit avec une finesse inégalée... Enfin si elle n'a pas altéré ceux-ci."
              description="Capable d'altérer la réalité elle-même à un niveau fondamental. Ses pouvoirs ne permettent pas seulement de faire des illusions mais de manipuler le tissu de l'existence. Elle opère principalement dans l'ombre. Il est possible qu'elle ait effacé l'existence d'autres archevêques."
            />

            <CharacterCard
              name="L'Innommé"
              title="Le Champ de Force Mortel"
              symbol="💀"
              quote="Plus il se rapproche de la cible, plus les dégâts sont puissants."
              description="Identité inconnue. S'entoure d'un champ de force invisible capable d'écraser à la fois les êtres vivants et la magie. Comme il semble être le centre même de ce champ, les dégâts sont d'une ampleur maximale au contact direct."
            />

            <CharacterCard
              name="Oboreru"
              title="L'Oblitérateur"
              symbol="👁️"
              quote="Son don est déroutant, car il est capable de détruire tout ce qui se trouve sous son regard."
              description="Son pouvoir est intimement lié à l'acte d'oblitération. Cette capacité peut être utilisée pour effacer des objets, voire des individus entiers. Il utilise ce pouvoir de manière mesurée, suggérant une compréhension complexe de l'équilibre entre création et destruction."
            />

            <div className="md:col-span-2">
              <CharacterCard
                name="Tel'var"
                title="Maître des Runes et de la Lumière"
                symbol="✴️"
                quote="Des témoins l'auraient vu affronter un dragon lors de la guerre de 200 ans et gagner sans la moindre difficulté."
                description="Ses compétences en runes sont les plus avancées jamais observées. Il peut graver et manipuler des runes pour déclencher des effets variés : guérison totale, protection parfaite, téléportation. Sa nova de lumière est si forte qu'on l'entend à des milliers de kilomètres. On ne voit jamais son visage, mais toute son histoire est documentée dans les archives."
              />
            </div>
          </div>

          <div className="mt-8 bg-black/40 border border-primary/30 rounded-xl p-6 text-center">
            <p className="text-foreground/60 italic">
              &quot;Les Archevêques sont des exemples frappants de la diversité des pouvoirs magiques.
              Il est essentiel de respecter leur désir de confidentialité et de préserver
              l&apos;énigme qui les entoure.&quot;
            </p>
          </div>
        </section>

        {/* Warning */}
        <section>
          <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">⚠️ Note Importante</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Il existe seulement 5 Archevêques connus dont on ne connaît pas la localisation.
              Ils représentent des exemples de puissance magique insondable. Il est impératif
              de les considérer avec le plus grand respect et de maintenir un niveau de
              confidentialité inégalé en ce qui concerne leur véritable identité et leurs
              desseins mystérieux.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
