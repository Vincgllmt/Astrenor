import Link from 'next/link';
import { SectionTitle, CharacterCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meltoria - Royaume Féodal | Astrenor',
  description: 'Découvrez Meltoria, le joyau féodal d\'Astrenor, gouverné par le Roi-Sorcier Aegon Tabarly.',
};

export default function MeltoriaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-meltoria/20 via-transparent to-background" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-6xl mb-6">⚔️</div>
          <h1 className="text-4xl md:text-6xl font-bold text-meltoria mb-4">Meltoria</h1>
          <p className="text-xl text-foreground/80 mb-4">Le Royaume Féodal</p>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Le joyau féodal d&apos;Astrenor, au centre du continent, réputé pour ses forgerons 
            hors pair et ses plaines verdoyantes à perte de vue.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="text-meltoria font-bold mb-2">Gouvernement</h3>
              <p className="text-foreground/60 text-sm">Monarchie dirigée par le Roi-Sorcier Aegon Tabarly</p>
            </div>
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6">
              <div className="text-3xl mb-2">🏰</div>
              <h3 className="text-meltoria font-bold mb-2">Capitale</h3>
              <p className="text-foreground/60 text-sm">Majestia, cité royale au cœur du royaume</p>
            </div>
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6">
              <div className="text-3xl mb-2">⚒️</div>
              <h3 className="text-meltoria font-bold mb-2">Spécialités</h3>
              <p className="text-foreground/60 text-sm">Forge, agriculture, viticulture et chevalerie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Le Joyau d'Astrenor" />
          
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/80 text-lg mb-6">
              Meltoria est le royaume le plus proche de l&apos;idée que l&apos;on peut se faire d&apos;un 
              royaume de fantasy classique. Les chevaliers valeureux et les seigneurs puissants 
              gouvernent ces terres fertiles, où les épées s&apos;entrechoquent et les bannières 
              flottent fièrement.
            </p>
            
            <p className="text-foreground/70 mb-6">
              Les forgerons de Meltoria, détenteurs d&apos;un savoir-faire ancestral, façonnent les 
              armes et les armures les plus convoitées du continent, renforçant ainsi la réputation 
              guerrière de ce royaume. Mais le considérer uniquement comme tel serait injuste, 
              car on y trouve beaucoup d&apos;agriculture comme pour le vin.
            </p>

            <p className="text-foreground/70 mb-6">
              Le royaume est séparé en plusieurs provinces, chacune contribuant à la richesse 
              et à la diversité de Meltoria. C&apos;est le seul véritable royaume du continent, 
              contrairement à ses voisins qui ont des organisations politiques différentes.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Histoire de Meltoria" subtitle="De Roderick le Fondateur au Roi-Sorcier Aegon" />
          
          <div className="space-y-8">
            {/* Roderick */}
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-meltoria mb-3">🗡️ Roderick le Fondateur</h3>
              <p className="text-foreground/70 mb-4">
                Tout commence il y a des siècles, dans la frontière nord de Meltoria, une contrée 
                hostile et enneigée. Un chef de guerre exceptionnel unifia les clans grâce à la 
                maîtrise du fer, devenant Roderick le Roi du Nord.
              </p>
              <p className="text-foreground/60 text-sm">
                Il conquit les terres du sud et installa une période de paix où son peuple découvrit 
                l&apos;agriculture et développa sa culture. Malheureusement, son avidité le poussa à 
                attaquer le pays des géants, déclenchant une guerre dévastatrice qui lui valut le 
                surnom de &quot;Roderick le Convoiteux&quot;.
              </p>
            </div>

            {/* Melfred */}
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-meltoria mb-3">👑 Le Second Roi Melfred</h3>
              <p className="text-foreground/70 mb-4">
                Fils de Roderick, Melfred fut un homme ambitieux et ferme, mais également un bon roi. 
                Il reconstruisit le royaume après l&apos;âge sombre sous le règne de la Reine Noire Kydell.
              </p>
              <p className="text-foreground/60 text-sm">
                C&apos;est sous son règne que furent découvertes les nombreuses mines aux métaux précieux : 
                orichalque, mithril... Il épousa une elfe de Sylvestri, établissant les premières 
                alliances avec ce royaume voisin.
              </p>
            </div>

            {/* Hector */}
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-meltoria mb-3">⚖️ Le Roi Hector le Bon</h3>
              <p className="text-foreground/70 mb-4">
                Aimé du peuple et de la cour, Hector créa le conseil royal avec sa sœur Solana 
                (astrologue) et son frère Pierre (trésorier). Il amorça la véritable féodalisation 
                de Meltoria.
              </p>
            </div>

            {/* Arthur */}
            <div className="bg-black/40 border border-meltoria/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-meltoria mb-3">⚔️ Arthur le Roi-Guerrier</h3>
              <p className="text-foreground/70 mb-4">
                Demi-elfe ayant hérité de la longévité de sa mère, Arthur guerroya un siècle durant 
                pendant la Guerre des Deux Siècles. Un meneur d&apos;exception et un guerrier hors-pair, 
                il mourut à l&apos;âge vénérable de 141 ans.
              </p>
            </div>

            {/* Aegon */}
            <div className="bg-black/40 border border-primary/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">✨ Aegon Tabarly - Le Roi-Sorcier</h3>
              <p className="text-foreground/70 mb-4">
                Fils du roi Edgar et de la reine Alésia, Aegon fut formé par les meilleurs maîtres 
                d&apos;armes et initié aux mystères de la magie par sa mère. Devenu roi à 20 ans après 
                la mort tragique de ses parents, il maintint la guerre jusqu&apos;à la paix finale à ses 34 ans.
              </p>
              <p className="text-foreground/60 text-sm">
                Désormais âgé de 44 ans, le Roi-Sorcier Aegon est le dernier représentant de la 
                famille royale Tabarly. Sans épouse ni héritier, il règne sur un royaume prospère 
                grâce à son industrie, sa production agricole et ses armes légendaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Religion */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Religion Meltorienne" subtitle="Le Panthéon des Cinq Dieux" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CharacterCard
              name="Le Père"
              title="Dieu Principal"
              symbol="👴"
              description="Figure principale représentée comme un homme imposant à barbe grisonnante. Dieu des guerriers, des protecteurs, des érudits et des mages. La dynastie Tabarly est vue comme ses envoyés."
            />
            <CharacterCard
              name="La Mère"
              title="Déesse de la Vie"
              symbol="👩"
              description="Femme blonde d'une beauté sans égale. Représente la fertilité de la femme et de la terre, ainsi que l'amour. Les mariages sont prononcés en son nom."
            />
            <CharacterCard
              name="L'Héritier"
              title="Dieu de la Création"
              symbol="🔨"
              description="Jeune homme représenté dans une forge. Dieu des artisans, des ingénieurs et de l'ambition. Représente aussi les effets néfastes de la création."
            />
            <CharacterCard
              name="La Courtisane"
              title="Déesse des Arts"
              symbol="🎭"
              description="Jeune fille joviale aux cheveux noirs. Déesse des artistes, penseurs créatifs et festivités. Également déesse des esprits torturés."
            />
            <CharacterCard
              name="L'Orphelin"
              title="Dieu du Mystère"
              symbol="🌑"
              description="Jeune homme au visage caché. Dieu de l'ombre, du secret et de la mort. C'est lui qui amène les défunts à leur dernière demeure : le Parevis ou l'Himmel."
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl p-6">
              <h4 className="text-primary font-bold text-lg mb-3">☀️ Le Parevis</h4>
              <p className="text-foreground/70">
                La terre des dieux, un lieu véritablement paradisiaque où les bonnes personnes 
                trouvent la béatitude éternelle. Les guerriers valeureux rejoignent les légions 
                du Père pour la gloire éternelle.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-xl p-6">
              <h4 className="text-accent font-bold text-lg mb-3">🌑 L&apos;Himmel</h4>
              <p className="text-foreground/70">
                Le lieu d&apos;exil de l&apos;Orphelin, un monde sombre et isolé. Les mauvaises personnes 
                y sont condamnées à être abandonnées et oubliées, se remémorant leurs erreurs 
                pour l&apos;éternité.
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
              href="/royaumes/sylvestri" 
              className="px-6 py-3 bg-sylvestri/20 border border-sylvestri/50 text-sylvestri rounded-lg hover:bg-sylvestri/30 transition-colors"
            >
              🌲 Sylvestri
            </Link>
            <Link 
              href="/royaumes/anduin" 
              className="px-6 py-3 bg-anduin/20 border border-anduin/50 text-anduin rounded-lg hover:bg-anduin/30 transition-colors"
            >
              ⚙️ Anduin
            </Link>
            <Link 
              href="/royaumes" 
              className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
            >
              ← Retour aux Royaumes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
