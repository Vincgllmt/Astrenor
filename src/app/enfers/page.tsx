import Link from 'next/link';
import { SectionTitle, CharacterCard } from '@/components';
import { Metadata } from 'next';
import InteractiveMap from './InteractiveMap';

export const metadata: Metadata = {
  title: 'Les Enfers - Royaume des Démons | Astrenor',
  description: 'Découvrez les Enfers d\'Astrenor, le royaume souterrain des démons et la puissante famille des Lilim.',
};

export default function EnfersPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest">Royaume Souterrain</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            <span className="text-accent">Les Enfers</span>
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Un endroit composé de plusieurs territoires uniquement pour les démons,
            créé par les dieux eux-mêmes pour y bannir les créatures les plus puissantes.
          </p>
        </div>

        {/* Map */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-accent mb-2 text-center">Géographie Infernale</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-6">
            Survolez un territoire pour l&apos;aperçu, cliquez pour découvrir son souverain et ses secrets.
          </p>
          <InteractiveMap />
        </section>

        {/* Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-accent/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-accent font-bold mb-2">Territoires Variés</h3>
              <p className="text-foreground/60 text-sm">
                Neige, pluie, herbe ou terre aride avec rivières de lave.
                Chaque territoire a ses lois et son environnement.
              </p>
            </div>
            <div className="bg-black/40 border border-accent/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-accent font-bold mb-2">Rois et Reines</h3>
              <p className="text-foreground/60 text-sm">
                Chaque territoire possède un roi ou une reine.
                Il est très difficile de sortir avec ce statut.
              </p>
            </div>
            <div className="bg-black/40 border border-accent/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🚪</div>
              <h3 className="text-accent font-bold mb-2">La Porte</h3>
              <p className="text-foreground/60 text-sm">
                Seul moyen de sortir, récemment brisée.
                S&apos;ouvre de temps en temps, chemin à sens unique.
              </p>
            </div>
          </div>
        </section>

        {/* Creation */}
        <section className="mb-16">
          <SectionTitle title="Création des Enfers" subtitle="L'origine divine d'un lieu de bannissement" />

          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              Il y a bien longtemps, bien avant la formation des trois royaumes, 7 enfants
              sont nés. Ces 7 enfants étaient une toute nouvelle race sur Astrenor.
              Malheureusement, les dieux ont très mal jaugé leur puissance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                <h4 className="text-accent font-bold mb-2">⚡ Puissance Démesurée</h4>
                <p className="text-foreground/60 text-sm">
                  L&apos;un pouvait détruire des montagnes, l&apos;autre pouvait faire revivre les morts.
                  L&apos;aîné était considéré comme un dieu tant il était puissant dans la magie.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <h4 className="text-primary font-bold mb-2">🌍 La Solution Divine</h4>
                <p className="text-foreground/60 text-sm">
                  Les dieux créèrent les Enfers, une zone souterraine si profonde que même
                  les nains ne peuvent l&apos;atteindre, et y bannirent cette fratrie.
                </p>
              </div>
            </div>

            <p className="text-foreground/60">
              Cette fratrie s&apos;appelle les <span className="text-accent font-bold">Lilim</span>.
              Une fois en enfer, ils façonnèrent leur lieu de bannissement avec leurs pouvoirs,
              créant des forêts, des déserts, des prairies et une terre volcanique.
              Ils réclamèrent une partie du territoire pour en faire leur chez eux :
              <span className="text-primary"> Lostmire</span>, un endroit fleuri et magnifique,
              unique en enfer.
            </p>
          </div>
        </section>

        {/* The Gate */}
        <section className="mb-16">
          <SectionTitle title="L'Ouverture de la Porte" />

          <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-xl p-8">
            <p className="text-foreground/70 mb-6">
              La Porte était le seul moyen d&apos;aller sur Astrenor pour les démons, et elle
              était complètement scellée. Mais la guerre n&apos;a pas eu que des répercussions
              sur les êtres vivants — elle a aussi affecté les Dieux.
            </p>

            <div className="bg-black/40 border border-accent/20 rounded-lg p-6 mb-6">
              <h4 className="text-accent font-bold mb-3">⚔️ L&apos;Attaque des Anges</h4>
              <p className="text-foreground/60 text-sm mb-4">
                Un dieu utilisa ses vieilles créations, les anges de <Link href="/lointains/sonihelm" className="text-accent hover:underline">Sonihelm</Link>,
                pour se débarrasser du &quot;problème&quot; des démons. Une dizaine d&apos;anges
                attaquèrent les enfers, passant par la porte qui resta scellée après leur
                passage mais fragilisée.
              </p>
              <p className="text-foreground/60 text-sm">
                Durant leur voyage vers les Lilim, de nombreux démons moururent.
                Le jour de l&apos;affrontement, un seul Lilim affronta le groupe d&apos;anges.
                Le combat fut rapide mais brutal, et les anges ne purent rien faire.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h4 className="text-primary font-bold mb-3">💥 La Porte Brisée</h4>
              <p className="text-foreground/60 text-sm">
                Seul le chef des anges réussit à s&apos;enfuir jusqu&apos;à la porte, suivi du Lilim.
                Il se fit frapper si fort que la porte se brisa, et il fut renvoyé de force
                sur Astrenor ! On raconte qu&apos;il en a même perdu la mémoire et qu&apos;il n&apos;a
                jamais rejoint le ciel...
              </p>
            </div>

            <p className="text-foreground/60 text-sm mt-6 text-center italic">
              Depuis cet incident, la porte s&apos;ouvre de temps en temps et laisse le passage
              libre à qui veut y aller, sans vraiment savoir si on ne risque rien...
            </p>
          </div>
        </section>

        {/* Demon Reputation */}
        <section className="mb-16">
          <SectionTitle title="Réputation des Démons" subtitle="Comment sont-ils perçus dans chaque royaume ?" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-sylvestri/10 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-sylvestri font-bold text-lg mb-3">🌲 Sylvestri</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent">😠</span>
                <span className="text-foreground/60 text-sm">Très mal vus</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Peu importe le démon, certains les attaquent à vue.
                La terre de la magie ne tolère pas les créatures des enfers.
              </p>
            </div>

            <div className="bg-meltoria/10 border border-meltoria/30 rounded-xl p-6">
              <h3 className="text-meltoria font-bold text-lg mb-3">⚔️ Meltoria</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary">😐</span>
                <span className="text-foreground/60 text-sm">Tolérés mais régulés</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Un peu plus tolérés mais très régulés et surveillés.
                La présence de démons est encadrée par les autorités.
              </p>
            </div>

            <div className="bg-anduin/10 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-anduin font-bold text-lg mb-3">⚙️ Anduin</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sylvestri">😊</span>
                <span className="text-foreground/60 text-sm">Mieux acceptés</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Là où ils sont le mieux vus. Sans beaucoup de magie, les démons
                ne sont pas très puissants ici. Les succubes sont appréciées dans les bordels.
              </p>
            </div>
          </div>
        </section>

        {/* The Lilim */}
        <section className="mb-16">
          <SectionTitle
            title="Les Lilim"
            subtitle="Les êtres les plus puissants des Enfers"
          />

          <div className="bg-black/40 border border-accent/30 rounded-xl p-8 mb-8">
            <p className="text-foreground/70 mb-6">
              Les Lilim sont des démons à part. En enfer, ils sont les êtres les plus puissants
              qui existent, et à la surface ils sont très redoutables. Parmi leurs capacités
              la plus intéressante est le fait d&apos;ouvrir des portails directement vers la surface.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-black/40 border border-primary/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">7</div>
                <p className="text-foreground/60 text-xs">1ère génération</p>
              </div>
              <div className="bg-black/40 border border-primary/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">1</div>
                <p className="text-foreground/60 text-xs">2ème génération</p>
              </div>
              <div className="bg-black/40 border border-primary/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">8</div>
                <p className="text-foreground/60 text-xs">Total actuel</p>
              </div>
              <div className="bg-black/40 border border-primary/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">∞</div>
                <p className="text-foreground/60 text-xs">Puissance</p>
              </div>
            </div>

            <p className="text-foreground/60 text-sm mt-6 italic text-center">
              Malgré leur statut presque divin en enfers, ils n&apos;interagissent pas dans les
              affaires de ce royaume ni à la surface. Ils sont neutres et veulent simplement
              vivre... même si on les voit comme un présage de changement dès qu&apos;ils apparaissent.
            </p>
          </div>
        </section>

        {/* First Generation */}
        <section className="mb-16">
          <SectionTitle title="Première Génération" subtitle="Les Sept Péchés Originels" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CharacterCard
              name="Minorin"
              title="Orgueil - Cheffe des Lilim"
              symbol="💎"
              quote="Inutile de lutter. Ta place est à mes pieds."
              description="La 'grande sœur' qui gère le domaine en enfers. Peut générer, contrôler et façonner des cristaux rouges nés de son propre orgueil. Plus l'adversaire est confiant, plus ses cristaux deviennent puissants contre lui."
            />

            <CharacterCard
              name="Jezebel"
              title="Colère - Gardienne du Domaine"
              symbol="🔥"
              quote="Tu crois pouvoir éteindre ma colère ? Tu n'as fait que l'attiser."
              description="Possède une queue qui peut se métamorphoser en lame. Plus elle est en colère, plus sa lame devient rapide et tranchante. On peut l'apercevoir à la surface 'en vacances'."
            />

            <CharacterCard
              name="Luci"
              title="Paresse - Seul Garçon Lilim"
              symbol="😴"
              quote="Mmh... À quoi bon se fatiguer... Je gagnerai quand même~"
              description="Vit au manoir Marlaan avec ses femmes. Peut ralentir tout ce qui l'entoure : mouvements, pensées, réactions, gravité elle-même. Génère une aura qui fait s'effriter la volonté de combattre."
            />

            <CharacterCard
              name="Hego"
              title="Luxure - Maîtresse du Manoir"
              symbol="💋"
              quote="Viens… Promets-moi tout, perds-toi en moi."
              description="Agit comme une véritable maman envers ses domestiques. Dégage une aura de séduction surnaturelle qui agit sur les émotions et désirs. Considère son pouvoir comme une malédiction. Partage le manoir et le cœur d'Alyzée, la succube que le monde connaît sous le nom de Madame Marlaan."
            />

            <CharacterCard
              name="Taiga"
              title="Gourmandise - L'Insatiable"
              symbol="🍖"
              quote="Tu as l'air délicieux. Viens, juste une bouchée…"
              description="Peut manger presque n'importe quoi pour absorber une partie de ses propriétés. Elle ne peut jamais être rassasiée - même après avoir englouti des montagnes, elle ressentira encore ce vide atroce."
            />

            <CharacterCard
              name="Banshee"
              title="Avarice - La Voleuse d'Essence"
              symbol="💰"
              quote="Tout ce qui brille m'appartient, tôt ou tard."
              description="Sa rose dorée absorbe la 'valeur' de ce qu'elle fixe. Elle ne sait plus exactement qui elle est, ayant des souvenirs volés d'autres gens. Une des rares Lilim à rester en enfers."
            />

            <div className="md:col-span-2">
              <CharacterCard
                name="Damask"
                title="Envie - La Marionnettiste"
                symbol="🎭"
                quote="Tu n'as pas besoin de ton corps, hein ? Laisse-moi en faire un joli jouet…"
                description="La petite dernière, ressemblant à une adolescente. Vit à Sylvanea et use de portails pour aller au manoir Marlaan. Peut réveiller les morts en tirant sur leurs ombres comme des fils, jouant avec eux comme des poupées."
              />
            </div>
          </div>
        </section>

        {/* Second Generation */}
        <section className="mb-16">
          <SectionTitle title="Deuxième Génération" />

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">⭐</div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Ervalen Lilim</h3>
                <p className="text-foreground/60">L&apos;Étoile Brisée</p>
              </div>
            </div>

            <blockquote className="text-foreground/70 italic border-l-2 border-primary/50 pl-4 mb-6">
              &quot;Je suis né pour briller… même si personne ne veut lever les yeux.&quot;
            </blockquote>

            <p className="text-foreground/70 mb-6">
              Fils unique de Luci et d&apos;une humaine domestique. Son existence est vue avec
              méfiance ou pitié, mais il est toujours très souriant, peu importe ce qu&apos;on
              lui dit ou reproche.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-primary/20 rounded-lg p-4">
                <h4 className="text-primary font-bold mb-2">✨ Pouvoir</h4>
                <p className="text-foreground/60 text-sm">
                  Peut matérialiser une arme purement énergétique, formée d&apos;étoiles filantes
                  condensées. Cette arme change de forme selon son état émotionnel.
                </p>
              </div>
              <div className="bg-black/40 border border-primary/20 rounded-lg p-4">
                <h4 className="text-primary font-bold mb-2">🌟 Particularité</h4>
                <p className="text-foreground/60 text-sm">
                  Comme il semble toujours heureux, son arme est toujours une épée.
                  S&apos;il ne maîtrise plus ses émotions, il ne peut plus former d&apos;arme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Combat Arts */}
        <section className="mb-16">
          <SectionTitle title="Arts de Combat Lilim" subtitle="Deux styles créés par Luci et Minorin" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 border border-accent/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-4">👊 L&apos;Art de la Paume Assoupie</h3>
              <p className="text-foreground/60 text-sm italic mb-4">
                &quot;Pourquoi gaspiller sa force quand l&apos;ennemi peut trébucher tout seul ?&quot;
              </p>
              <p className="text-foreground/70 mb-4">
                Créé par <span className="text-accent">Luci</span>. Un art martial minimaliste
                et fluide basé sur la souplesse, l&apos;économie d&apos;énergie, et des contre-attaques
                éclairs.
              </p>
              <div className="bg-black/40 border border-accent/20 rounded-lg p-4">
                <h5 className="text-accent font-semibold text-sm mb-2">Mouvement Ultime : Repos de l&apos;Aube</h5>
                <p className="text-foreground/60 text-xs">
                  L&apos;utilisateur feint l&apos;abandon total, absorbe l&apos;élan de l&apos;attaque adverse
                  et renvoie la force accumulée dans une contre-attaque invisible.
                </p>
              </div>
            </div>

            <div className="bg-black/40 border border-primary/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">⚔️ L&apos;Épée Impériale du Cristal Rouge</h3>
              <p className="text-foreground/60 text-sm italic mb-4">
                &quot;Une souveraine ne frappe qu&apos;une fois. Il n&apos;est pas nécessaire de répéter la leçon.&quot;
              </p>
              <p className="text-foreground/70 mb-4">
                Créé par <span className="text-primary">Minorin</span>. Un style d&apos;escrime
                aristocratique et brutalement efficace, intégrant des éclats de cristal.
              </p>
              <div className="bg-black/40 border border-primary/20 rounded-lg p-4">
                <h5 className="text-primary font-semibold text-sm mb-2">Mouvement Ultime : Couronnement Cramoisi</h5>
                <p className="text-foreground/60 text-xs">
                  Libère une explosion d&apos;éclats formant une couronne géante, enfermant
                  les ennemis dans une arène de mort. Peu de gens ont vu ce mouvement.
                </p>
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
                href="/magie"
                className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
              >
                ✨ La Magie
              </Link>
              <Link
                href="/religion"
                className="px-6 py-3 bg-meltoria/20 border border-meltoria/50 text-meltoria rounded-lg hover:bg-meltoria/30 transition-colors"
              >
                ⛪ Religion
              </Link>
              <Link
                href="/royaumes"
                className="px-6 py-3 bg-sylvestri/20 border border-sylvestri/50 text-sylvestri rounded-lg hover:bg-sylvestri/30 transition-colors"
              >
                🗺️ Les Royaumes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
