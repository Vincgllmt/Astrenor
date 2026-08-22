import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Légendes & Rumeurs | Astrenor',
  description: 'Découvrez les légendes, rumeurs et origines mystérieuses du continent d\'Astrenor.',
};

export default function LegendesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">Mystères & Secrets</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-gradient mt-2 mb-6">
            Légendes, Rumeurs & Origines
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Les récits qui façonnent les croyances d&apos;Astrenor, des origines mystérieuses 
            aux légendes transmises de génération en génération.
          </p>
        </div>

        {/* Origines */}
        <section className="mb-16">
          <SectionTitle title="Les Origines" subtitle="Les sources des malédictions et des bénédictions" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lycanthropie */}
            <div className="bg-gradient-to-br from-amber-600/20 to-transparent border border-amber-600/30 rounded-xl p-8">
              <div className="text-5xl mb-4">🐺</div>
              <h3 className="text-2xl font-bold text-amber-500 mb-4">La Lycanthropie</h3>
              <p className="text-foreground/70 mb-4">
                La lycanthropie est une maladie qui existe depuis la nuit des temps sur le continent 
                d&apos;Astrenor, une sorte de rage transmise par les loups sylvestre. Il en existe 
                plusieurs variantes : qu&apos;on peut contrôler ou non, qu&apos;on peut déclencher ou non...
              </p>
              <p className="text-foreground/70 mb-4">
                Depuis le &quot;patient zéro&quot; de cette maladie, celle-ci s&apos;est répandue très vite dans 
                tout le continent. On la retrouve donc dans les forêts de Sylvestri mais également 
                dans les montagnes gelées de l&apos;empire Anduinois.
              </p>
              <div className="bg-black/40 rounded-lg p-4 border border-amber-600/20">
                <p className="text-foreground/60 text-sm">
                  <span className="text-amber-500 font-semibold">⚠️ Transmission :</span> La maladie 
                  a depuis évolué. Les loups sont encore vecteurs mais les personnes infectées le sont 
                  aussi, que ce soit sous forme de loup ou humaine.
                </p>
              </div>
            </div>

            {/* Vampirisme */}
            <div className="bg-gradient-to-br from-red-800/20 to-transparent border border-red-800/30 rounded-xl p-8">
              <div className="text-5xl mb-4">🧛</div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">Le Vampirisme</h3>
              <p className="text-foreground/70 mb-4">
                Les vampires purs sont nés grâce à un dieu : <span className="text-red-400 font-semibold">Vermyros</span>, 
                le dieu du sang et des morts vivants. En échange de sa propre vie, Vermyros offre une 
                puissance magique et physique importante même si la personne était sans mana auparavant.
              </p>
              <p className="text-foreground/70 mb-4">
                Les vampires impurs sont transformés par les vampires purs. Ce rituel a plus de chance 
                de réussite mais les effets obtenus sont moins importants.
              </p>
              <div className="bg-black/40 rounded-lg p-4 border border-red-800/20">
                <p className="text-foreground/60 text-sm">
                  <span className="text-red-500 font-semibold">☀️ Le Soleil :</span> Le soleil affaiblit 
                  leurs pouvoirs mais ne les tue pas. Il n&apos;est pas possible de devenir vampire en plein jour, 
                  d&apos;où les attaques nocturnes qui alimentent la croyance qu&apos;il leur est mortel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Légendes */}
        <section className="mb-16">
          <SectionTitle title="Les Légendes" subtitle="Récits mystiques transmis à travers les âges" />
          
          <div className="space-y-6">
            {/* Anneaux Célestes */}
            <div className="bg-black/40 border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⭐</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">La Légende des Anneaux Célestes</h4>
                  <p className="text-foreground/70">
                    On raconte qu&apos;au sommet du Mont Lassiera, un mage solitaire aurait atteint le dernier cercle... 
                    mais au lieu d&apos;être consumé, il aurait disparu dans un halo de lumière. Depuis, certains 
                    affirment que les mages ne meurent pas : ils deviennent étoiles. Chaque anneau au cœur 
                    serait en fait un fragment d&apos;un ancien astre.
                  </p>
                </div>
              </div>
            </div>

            {/* Fleurs des Mages Morts */}
            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6 hover:border-sylvestri/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌸</div>
                <div>
                  <h4 className="text-xl font-bold text-sylvestri mb-2">Les Fleurs des Mages Morts</h4>
                  <p className="text-foreground/70">
                    Une croyance veut que les fleurs poussant sur les tombes des mages soient des fragments 
                    de leur âme. Certaines rumeurs affirment que les plus puissants peuvent parler à travers 
                    ces plantes, lors des nuits d&apos;éclipse.
                  </p>
                </div>
              </div>
            </div>

            {/* L'Égaré au Cœur Vierge */}
            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6 hover:border-sylvestri/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👦</div>
                <div>
                  <h4 className="text-xl font-bold text-sylvestri mb-2">L&apos;Égaré au Cœur Vierge</h4>
                  <p className="text-foreground/70">
                    Un jour, un jeune garçon entra dans la forêt sans aucune once de pouvoir. Les arbres 
                    le laissèrent passer, l&apos;abritèrent... et à son retour, il parlait la langue des bêtes 
                    et faisait croître les fleurs à son passage. Depuis, les enfants &quot;purs&quot; sont parfois 
                    abandonnés aux lisières dans l&apos;espoir qu&apos;ils soient &quot;choisis&quot;.
                  </p>
                </div>
              </div>
            </div>

            {/* La Gardienne de Sève */}
            <div className="bg-black/40 border border-sylvestri/30 rounded-xl p-6 hover:border-sylvestri/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌳</div>
                <div>
                  <h4 className="text-xl font-bold text-sylvestri mb-2">La Gardienne de Sève</h4>
                  <p className="text-foreground/70">
                    Dans le cœur d&apos;une des forêts de Sylvestri vivrait un être fait d&apos;écorce et de lumière, 
                    protectrice des lieux et ennemie de toute ambition. On dit qu&apos;elle prend l&apos;apparence 
                    de ceux que vous aimez... pour mieux vous perdre.
                  </p>
                </div>
              </div>
            </div>

            {/* Le Pacte de Pierre et de Sang */}
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6 hover:border-meltoria/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🩸</div>
                <div>
                  <h4 className="text-xl font-bold text-meltoria mb-2">Le Pacte de Pierre et de Sang</h4>
                  <p className="text-foreground/70">
                    Les premiers rois de Meltoria auraient scellé un accord avec un dieu oublié, coulant 
                    leur propre sang dans la roche. Le trône actuel, dit-on, renferme cette pierre maudite : 
                    elle renforce la lignée... mais vole quelque chose à chaque génération.
                  </p>
                </div>
              </div>
            </div>

            {/* L'Enclume de l'Éclipse */}
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6 hover:border-anduin/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚒️</div>
                <div>
                  <h4 className="text-xl font-bold text-anduin mb-2">L&apos;Enclume de l&apos;Éclipse</h4>
                  <p className="text-foreground/70">
                    Les nains racontent qu&apos;ils ont un jour forgé une rune interdite, capable de façonner 
                    la réalité elle-même. Trop puissante, elle fut enfermée dans une enclume scellée par 
                    trois malédictions. La dernière personne à avoir tenté de la retrouver aurait vieilli 
                    d&apos;un siècle en un instant.
                  </p>
                </div>
              </div>
            </div>

            {/* Le Premier Souffle */}
            <div className="bg-black/40 border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💨</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">La Légende du Premier Souffle</h4>
                  <p className="text-foreground/70">
                    On raconte qu&apos;avant même la naissance du mana, un être gigantesque appelé <span className="text-primary font-semibold">Néantith</span> aurait 
                    soufflé sur le monde, séparant lumière et ombre. De son souffle serait né le premier 
                    courant de mana, qui se serait déversé en Sylvestri. Certaines pierres anciennes 
                    chantent encore ce souffle les nuits de pleine lune.
                  </p>
                </div>
              </div>
            </div>

            {/* Le Serment de l'Oiseau de Verre */}
            <div className="bg-black/40 border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🕊️</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Le Serment de l&apos;Oiseau de Verre</h4>
                  <p className="text-foreground/70">
                    Un pacte ancestral aurait été passé entre les fondateurs de l&apos;Académie et une entité 
                    céleste sous forme d&apos;oiseau transparent. En échange de sa plume éternelle, l&apos;Académie 
                    ne devait jamais enseigner l&apos;art de &quot;l&apos;Altération d&apos;Âme&quot;. Pourtant, certaines sources 
                    murmurent que Pandore aurait trouvé un moyen d&apos;y accéder...
                  </p>
                </div>
              </div>
            </div>

            {/* Le Mage sans Cercle */}
            <div className="bg-black/40 border border-gray-500/30 rounded-xl p-6 hover:border-gray-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🥀</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-400 mb-2">Le Mage sans Cercle</h4>
                  <p className="text-foreground/70">
                    Parmi les tombes de l&apos;Académie pousse une unique fleur noire : la &quot;Lys Cendrée&quot;. 
                    Elle aurait germé sur la sépulture du seul mage à avoir existé sans le moindre anneau 
                    autour du cœur... et pourtant capable de rivaliser avec un Archevêque. Son nom est banni, 
                    son histoire interdite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Légendes de l'Académie des Arts */}
        <section className="mb-16">
          <SectionTitle title="Les Légendes de l'Académie des Arts" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-600/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🗿</div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">La Statue Mouvante</h4>
              <p className="text-foreground/70 text-sm">
                Une statue résiderait dans l&apos;Atelier de la Forme. Elle change légèrement 
                de pose chaque nuit, comme si elle vivait ses propres rêves.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-600/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">La Partition Interdite</h4>
              <p className="text-foreground/70 text-sm">
                Enfermée dans la Salle des Silences, elle aurait autrefois rendu tout 
                un orchestre muet à jamais.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-600/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">La Fresque du Vide</h4>
              <p className="text-foreground/70 text-sm">
                Peinte sur un mur souterrain, elle ne peut être vue que par ceux qui ont 
                connu une perte irréparable. Elle contiendrait le reflet du monde 
                tel qu&apos;il était avant la magie.
              </p>
            </div>
          </div>
        </section>

        {/* Rumeurs */}
        <section className="mb-16">
          <SectionTitle title="Rumeurs" subtitle="Murmures dans les tavernes et les cours..." />
          
          <div className="bg-black/40 border border-gray-600/30 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4 opacity-50">🤫</div>
            <p className="text-foreground/50 italic text-lg">
              Rien... pour l&apos;instant.
            </p>
            <p className="text-foreground/30 text-sm mt-2">
              Les secrets d&apos;Astrenor attendent d&apos;être découverts.
            </p>
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
                href="/bestiaire" 
                className="px-6 py-3 bg-accent/20 border border-accent/50 text-accent rounded-lg hover:bg-accent/30 transition-colors"
              >
                🐉 Bestiaire
              </Link>
              <Link 
                href="/magie" 
                className="px-6 py-3 bg-sylvestri/20 border border-sylvestri/50 text-sylvestri rounded-lg hover:bg-sylvestri/30 transition-colors"
              >
                ✨ La Magie
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
