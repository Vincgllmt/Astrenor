import Link from 'next/link';
import { SectionTitle, CharacterCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Religion Meltorienne | Astrenor',
  description: 'Découvrez la religion de Meltoria, le panthéon des cinq dieux et les croyances d\'Astrenor.',
};

export default function ReligionPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-meltoria text-sm uppercase tracking-widest">Foi & Croyances</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mt-2 mb-6">
            La Religion Meltorienne
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Le panthéon des cinq dieux guide les âmes de Meltoria, 
            façonnant leur culture, leurs traditions et leur vision de l&apos;au-delà.
          </p>
        </div>

        {/* The Five Gods */}
        <section className="mb-16">
          <SectionTitle title="Le Panthéon des Cinq Dieux" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-meltoria/20 to-transparent border border-meltoria/30 rounded-xl p-6">
              <div className="text-4xl mb-3">👴</div>
              <h3 className="text-xl font-bold text-meltoria mb-2">Le Père</h3>
              <p className="text-foreground/50 text-sm mb-3 italic">Figure Principale</p>
              <p className="text-foreground/70 mb-4">
                Homme imposant, âgé à la barbe grisonnante, l&apos;air sévère mais noble. 
                Il veille sur le royaume de son œil bienveillant.
              </p>
              <div className="bg-black/40 rounded-lg p-3">
                <p className="text-foreground/60 text-sm">
                  <span className="text-meltoria font-semibold">Domaines :</span> Guerriers, 
                  protecteurs, érudits, mages. La dynastie Tabarly est vue comme ses envoyés.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 rounded-xl p-6">
              <div className="text-4xl mb-3">👩</div>
              <h3 className="text-xl font-bold text-pink-400 mb-2">La Mère</h3>
              <p className="text-foreground/50 text-sm mb-3 italic">Déesse de la Vie</p>
              <p className="text-foreground/70 mb-4">
                Femme blonde d&apos;une beauté sans égale aux formes particulièrement marquées. 
                Représente la fertilité et l&apos;amour.
              </p>
              <div className="bg-black/40 rounded-lg p-3">
                <p className="text-foreground/60 text-sm">
                  <span className="text-pink-400 font-semibold">Domaines :</span> Fertilité 
                  de la femme et de la terre, amour. Les mariages sont prononcés en son nom.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-xl p-6">
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">L&apos;Héritier</h3>
              <p className="text-foreground/50 text-sm mb-3 italic">Dieu de la Création</p>
              <p className="text-foreground/70 mb-4">
                Beau jeune homme très en forme à la barbe noire naissante, souvent représenté 
                dans une forge ou un atelier.
              </p>
              <div className="bg-black/40 rounded-lg p-3">
                <p className="text-foreground/60 text-sm">
                  <span className="text-orange-400 font-semibold">Domaines :</span> Artisans, 
                  ingénieurs, ambition, énergie de la jeunesse. Incarne l&apos;avenir de la nation.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 rounded-xl p-6">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">La Courtisane</h3>
              <p className="text-foreground/50 text-sm mb-3 italic">Déesse des Arts</p>
              <p className="text-foreground/70 mb-4">
                Jeune fille pleine d&apos;énergie aux cheveux noirs, toujours représentée joviale 
                et associée aux festivités.
              </p>
              <div className="bg-black/40 rounded-lg p-3">
                <p className="text-foreground/60 text-sm">
                  <span className="text-purple-400 font-semibold">Domaines :</span> Artistes, 
                  philosophes, festivités, mais aussi esprits torturés et malades.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-500/20 to-transparent border border-gray-500/30 rounded-xl p-6 lg:col-span-2">
              <div className="text-4xl mb-3">🌑</div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">L&apos;Orphelin</h3>
              <p className="text-foreground/50 text-sm mb-3 italic">Dieu du Mystère et de la Mort</p>
              <p className="text-foreground/70 mb-4">
                Jeune homme au visage caché, sans signe distinctif autre que sa carrure chétive. 
                Le seul qui se situe hors de la famille divine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-lg p-3">
                  <p className="text-foreground/60 text-sm">
                    <span className="text-gray-400 font-semibold">Domaines :</span> Ombre, 
                    mystique, magie, secret. Amène les défunts à leur dernière demeure.
                  </p>
                </div>
                <div className="bg-black/40 rounded-lg p-3">
                  <p className="text-foreground/60 text-sm">
                    <span className="text-gray-400 font-semibold">Note :</span> Assez mal vu, 
                    mais le plus laxiste avec les fidèles, pardonnant plus facilement les mauvaises âmes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Afterlife */}
        <section className="mb-16">
          <SectionTitle title="La Vie Après la Mort" subtitle="L'âme immortelle et ses destinations" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl p-8">
              <div className="text-5xl mb-4 text-center">☀️</div>
              <h3 className="text-2xl font-bold text-primary text-center mb-4">Le Parevis</h3>
              <p className="text-foreground/70 mb-4">
                La terre des dieux, où séjourne chacun d&apos;entre eux à l&apos;exception de l&apos;Orphelin. 
                Un endroit véritablement paradisiaque où les bonnes personnes trouvent la 
                béatitude éternelle.
              </p>
              <ul className="text-foreground/60 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✦</span>
                  Les guerriers valeureux rejoignent les légions du Père
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✦</span>
                  Les bons samaritains retrouvent ceux qu&apos;ils ont perdu
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✦</span>
                  Chacun y trouve de quoi le satisfaire éternellement
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-600/20 to-transparent border border-gray-600/30 rounded-xl p-8">
              <div className="text-5xl mb-4 text-center">🌑</div>
              <h3 className="text-2xl font-bold text-gray-400 text-center mb-4">L&apos;Himmel</h3>
              <p className="text-foreground/70 mb-4">
                Le lieu d&apos;exil de l&apos;Orphelin, un monde sombre et isolé. Les mauvaises personnes 
                y sont amenées, condamnées à être abandonnées et oubliées.
              </p>
              <ul className="text-foreground/60 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✦</span>
                  Un lieu vide et froid qui n&apos;offre rien à personne
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✦</span>
                  Condamnés à se remémorer leurs erreurs à jamais
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✦</span>
                  Les plus mesquins subissent une torture éternelle
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <SectionTitle title="Valeurs et Vertus" />
          
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6 text-center">
              L&apos;église meltorienne prône plusieurs valeurs liées aux qualités des dieux, 
              que les fidèles cherchent à incarner sans tomber dans leurs dérives.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-meltoria/20 border-2 border-meltoria flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <p className="text-meltoria font-bold">Sagesse</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-meltoria/20 border-2 border-meltoria flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚔️</span>
                </div>
                <p className="text-meltoria font-bold">Courage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-meltoria/20 border-2 border-meltoria flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💡</span>
                </div>
                <p className="text-meltoria font-bold">Ingéniosité</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-meltoria/20 border-2 border-meltoria flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <p className="text-meltoria font-bold">Créativité</p>
              </div>
            </div>
          </div>
        </section>

        {/* Traditions */}
        <section className="mb-16">
          <SectionTitle title="Traditions et Cérémonies" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 border border-primary/30 rounded-xl p-6">
              <h4 className="text-primary font-bold text-lg mb-4">📅 Les Jours de Fête</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-foreground/70">
                  <span className="text-meltoria mr-2">•</span>
                  <span><strong className="text-meltoria">Jour du Père</strong> - Célébration de la force et de la sagesse</span>
                </li>
                <li className="flex items-start text-foreground/70">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><strong className="text-pink-400">Jour de la Mère</strong> - Fête de l&apos;amour et de la fertilité</span>
                </li>
                <li className="flex items-start text-foreground/70">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong className="text-orange-400">Jour de l&apos;Héritier</strong> - Honneur aux artisans</span>
                </li>
                <li className="flex items-start text-foreground/70">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong className="text-purple-400">Jour de la Courtisane</strong> - Festivités et arts</span>
                </li>
                <li className="flex items-start text-foreground/70">
                  <span className="text-gray-400 mr-2">•</span>
                  <span><strong className="text-gray-400">Jour de l&apos;Orphelin</strong> - Recueillement pour les endeuillés</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/40 border border-primary/30 rounded-xl p-6">
              <h4 className="text-primary font-bold text-lg mb-4">⛪ Les Cérémonies</h4>
              <div className="space-y-4">
                <div className="bg-black/40 border border-pink-500/20 rounded-lg p-3">
                  <p className="text-pink-400 font-semibold">💒 Mariage</p>
                  <p className="text-foreground/60 text-sm">
                    Sous l&apos;égide de la Mère. L&apos;homme offre une épée cérémonielle symbole de sa dévotion.
                  </p>
                </div>
                <div className="bg-black/40 border border-gray-500/20 rounded-lg p-3">
                  <p className="text-gray-400 font-semibold">⚰️ Funérailles</p>
                  <p className="text-foreground/60 text-sm">
                    Sous l&apos;égide de l&apos;Orphelin. Préparation du défunt pour son voyage vers l&apos;au-delà.
                  </p>
                </div>
                <div className="bg-black/40 border border-meltoria/20 rounded-lg p-3">
                  <p className="text-meltoria font-semibold">💧 Baptême</p>
                  <p className="text-foreground/60 text-sm">
                    Rend compte de l&apos;existence du nouveau-né aux dieux. C&apos;est là qu&apos;on nomme l&apos;enfant.
                  </p>
                </div>
                <div className="bg-black/40 border border-primary/20 rounded-lg p-3">
                  <p className="text-primary font-semibold">🙏 Cérémonie du Dévot</p>
                  <p className="text-foreground/60 text-sm">
                    Déclaration d&apos;allégeance à un dieu particulier pour s&apos;attirer ses faveurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vows */}
        <section className="mb-16">
          <SectionTitle title="Les Vœux Religieux" />
          
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8 text-center">
            <p className="text-foreground/70 mb-6">
              Certains hommes de foi prononcent des vœux, se soumettant à une privation 
              pour montrer leur dévotion aux dieux.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/40 border border-primary/30 rounded-lg px-6 py-3">
                <span className="text-primary font-semibold">🤫 Vœu de Silence</span>
              </div>
              <div className="bg-black/40 border border-primary/30 rounded-lg px-6 py-3">
                <span className="text-primary font-semibold">💔 Vœu d&apos;Abstinence</span>
              </div>
              <div className="bg-black/40 border border-primary/30 rounded-lg px-6 py-3">
                <span className="text-primary font-semibold">🍽️ Vœu de Jeûne</span>
              </div>
            </div>
          </div>
        </section>

        {/* Anduin's View */}
        <section className="mb-16">
          <SectionTitle title="Et à Anduin ?" />
          
          <div className="bg-gradient-to-br from-anduin/10 to-transparent border border-anduin/30 rounded-xl p-8">
            <p className="text-foreground/70 mb-4">
              L&apos;empereur Nizhuc Thano mena une campagne de désendoctrinement vis-à-vis des 
              dieux meltoriens. Pour lui, si les dieux existent, ils avaient clairement 
              abandonné Anduin sur ces terres gelées.
            </p>
            
            <blockquote className="text-anduin italic border-l-2 border-anduin/50 pl-4 mb-4">
              &quot;Il rappela les terres gelées, les mauvaises récoltes, les créatures semant 
              la terreur... Les dieux étaient du côté de Meltoria !&quot;
            </blockquote>
            
            <p className="text-foreground/60">
              Il ne fallut pas longtemps avant que l&apos;humanisme prenne le dessus. 
              À Anduin, on ne croit pas aux dieux — on croit en soi-même et en l&apos;Empire.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-6">Explorer d&apos;autres aspects d&apos;Astrenor</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/royaumes/meltoria" 
                className="px-6 py-3 bg-meltoria/20 border border-meltoria/50 text-meltoria rounded-lg hover:bg-meltoria/30 transition-colors"
              >
                ⚔️ Meltoria
              </Link>
              <Link 
                href="/magie" 
                className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
              >
                ✨ La Magie
              </Link>
              <Link 
                href="/enfers" 
                className="px-6 py-3 bg-accent/20 border border-accent/50 text-accent rounded-lg hover:bg-accent/30 transition-colors"
              >
                🔥 Les Enfers
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
