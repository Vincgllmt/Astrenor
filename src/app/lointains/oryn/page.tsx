import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oryn - Terres Lointaines | Astrenor',
  description: 'Oryn, la lune de lumière, patrie des Sylithra que les royaumes d\'Astrenor appellent les Démonides Astrales.',
};

export default function OrynPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/lointains" className="text-violet-400 text-sm hover:underline">← Terres Lointaines</Link>
          <span className="block text-violet-400 text-sm uppercase tracking-widest mt-4">Satellite Naturel</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            <span className="text-violet-400">Oryn</span>
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Une lune saturée de lumière astrale primordiale, visible depuis les trois royaumes
            mais jamais atteinte par personne. Son seul lien avec Astrenor : les Sylithra
            qu&apos;elle laisse parfois tomber, lors des pluies de comètes.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-violet-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-violet-400 font-bold mb-2">Lumière Primordiale</h3>
              <p className="text-foreground/60 text-sm">
                Oryn baigne dans un mana à l&apos;état brut, plus ancien et plus dense que celui
                de Sylvestri. Sa surface entière semble vivante et luminescente.
              </p>
            </div>
            <div className="bg-black/40 border border-violet-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌑</div>
              <h3 className="text-violet-400 font-bold mb-2">Les Sylithra</h3>
              <p className="text-foreground/60 text-sm">
                Leur vrai nom, qu&apos;ils se donnent entre eux. Astrenor les connaît sous celui,
                plus froid, de Démonides Astrales.
              </p>
            </div>
            <div className="bg-black/40 border border-violet-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">☄️</div>
              <h3 className="text-violet-400 font-bold mb-2">Les Chutes</h3>
              <p className="text-foreground/60 text-sm">
                Lors des pluies de comètes, des fragments d&apos;Oryn se détachent et s&apos;écrasent
                sur Astrenor - emportant parfois des Sylithra avec eux.
              </p>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="mb-16">
          <SectionTitle title="Un Peuple de Lumière" subtitle="La lumière comme langage, comme souffle, comme religion" />

          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              Chez les Sylithra, la lumière n&apos;est pas un simple phénomène : c&apos;est un langage.
              Leur chair semi-translucide capte et restitue les courants d&apos;énergie cosmique
              d&apos;Oryn, et leur bio-luminescence varie avec leurs émotions autant qu&apos;avec
              celles des êtres qui les entourent. Les mères transmettent à leurs enfants leurs
              &quot;premiers éclats&quot;, comme d&apos;autres peuples transmettent un nom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                <h4 className="text-violet-400 font-bold mb-2">🧵 Les Tisseuses Astrales</h4>
                <p className="text-foreground/60 text-sm">
                  Des clans de femmes chargées de modeler la lueur ambiante pour bâtir des abris,
                  forger des outils, et parfois des armes. Un savoir-faire transmis de mère en fille.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <h4 className="text-primary font-bold mb-2">🌌 Le Fendilume</h4>
                <p className="text-foreground/60 text-sm">
                  Un phénomène rare où le ciel d&apos;Oryn se strie de veines blanches. Les enfants
                  qui naissent sous ce signe sont dits destinés à unir les éclats de leur peuple...
                  ou à les briser.
                </p>
              </div>
            </div>

            <p className="text-foreground/60">
              Les rituels sylithra sont discrets et intimes : tracer des spirales de lumière sur
              sa propre peau, réciter en silence des fragments de chants anciens. Un peuple qui
              ressent tout avec une intensité rare, et qui ne sait ni mentir, ni vraiment se cacher.
            </p>
          </div>
        </section>

        {/* Powers */}
        <section className="mb-16">
          <SectionTitle title="Dons et Fardeaux" subtitle="Chaque pouvoir sylithra se paie" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 rounded-xl p-6">
              <h4 className="text-violet-400 font-bold text-lg mb-3">💜 Lumisiphon</h4>
              <p className="text-foreground/70 text-sm mb-3">
                Capacité à absorber l&apos;énergie émotionnelle d&apos;autrui - peur, désir, colère,
                souffrance. Chaque émotion nourrie fait fluctuer et renforcer la lumière intérieure
                du Sylithra.
              </p>
              <p className="text-foreground/50 text-sm italic">
                Prix à payer : chaque émotion absorbée laisse une empreinte, une rémanence qui
                s&apos;accroche comme une ombre étrangère. Une cible qui résiste peut provoquer un
                retour violent - migraines, fragments de souvenirs qui ne sont pas les siens.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl p-6">
              <h4 className="text-primary font-bold text-lg mb-3">🔮 Matérialisation Astrale</h4>
              <p className="text-foreground/70 text-sm mb-3">
                Le don de rendre tangible ce qui ne devrait pas l&apos;être : densifier une queue en
                lame, allonger des griffes jusqu&apos;à la consistance du cristal, faire naître des
                éclats translucides autour de soi.
              </p>
              <p className="text-foreground/50 text-sm italic">
                Prix à payer : chaque matérialisation dévore la vitalité du Sylithra. Une émotion
                trop intense peut fissurer sa chair astrale, laissant des cicatrices immatérielles
                bien réelles.
              </p>
            </div>
          </div>
        </section>

        {/* Réception sur Astrenor */}
        <section className="mb-16">
          <SectionTitle title="Échoués Loin de Chez Eux" subtitle="Ce que devient un Sylithra tombé sur Astrenor" />

          <div className="bg-black/40 border border-accent/30 rounded-xl p-8">
            <p className="text-foreground/70 mb-4">
              Un Sylithra qui survit à sa chute se retrouve seul, coupé de son clan, de ses
              tisseuses, de sa lune. Son hypersensibilité aux émotions - un don chez les siens -
              devient une vulnérabilité permanente dans un monde qui ne pense jamais à se taire.
              Beaucoup ne retrouvent jamais d&apos;autre Sylithra de toute leur existence.
            </p>
            <p className="text-foreground/60 text-sm">
              L&apos;accueil varie selon les royaumes, à mi-chemin entre la curiosité et la
              méfiance qu&apos;on réserve habituellement aux démons : on les étudie autant qu&apos;on
              les craint, rarement on les écoute vraiment.
            </p>
          </div>
        </section>

        {/* Mystères */}
        <section>
          <SectionTitle title="Ce Que l'On Ignore Encore" />
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <ul className="text-foreground/60 text-sm space-y-2">
              <li>• Combien de Sylithra vivent encore sur Oryn elle-même - personne n&apos;y étant jamais allé pour compter.</li>
              <li>• Si les clans de tisseuses ont survécu à la dispersion, ou si les Sylithra d&apos;Astrenor sont les derniers de leur genre.</li>
              <li>• Ce qui provoque réellement les pluies de comètes, et si Oryn les subit ou les provoque.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
