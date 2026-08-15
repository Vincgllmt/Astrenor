import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sonihelm - Terres Lointaines | Astrenor',
  description: 'Sonihelm, l\'île flottante des anges, créés par les dieux pour archiver l\'histoire d\'Astrenor et effacer le fiasco des Lilim.',
};

export default function SonihelmPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/lointains" className="text-amber-300 text-sm hover:underline">← Terres Lointaines</Link>
          <span className="block text-amber-300 text-sm uppercase tracking-widest mt-4">Île Flottante</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            <span className="text-amber-300">Sonihelm</span>
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Une île qui ne touche jamais le sol, portée par une magie ancienne au-dessus des
            nuages. Elle dérive lentement au-dessus des trois royaumes depuis des siècles,
            observée par personne, habitée par les anges.
          </p>
        </div>

        {/* Origine */}
        <section className="mb-16">
          <SectionTitle title="Une Création de Rattrapage" subtitle="Les anges sont nés d'un échec, pas d'un idéal" />

          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              Les anges ont été créés après les Lilim. Le désastre qu&apos;avait provoqué cette
              première fratrie avait entamé le moral des dieux eux-mêmes - il leur fallait une
              nouvelle création, réfléchie cette fois, pour ne plus jamais reproduire une telle
              erreur.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-4">
                <h4 className="text-amber-300 font-bold mb-2 text-sm">1. La Perfection</h4>
                <p className="text-foreground/60 text-sm">
                  Une espèce qui n&apos;agirait jamais contre les royaumes ni contre l&apos;ordre
                  des choses, quelles que soient les circonstances.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <h4 className="text-primary font-bold mb-2 text-sm">2. L&apos;Archive</h4>
                <p className="text-foreground/60 text-sm">
                  Une espèce d&apos;archivistes, chargée de consigner tout ce qui se passe à
                  Astrenor pour en garder une trace éternelle.
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                <h4 className="text-accent font-bold mb-2 text-sm">3. L&apos;Effacement</h4>
                <p className="text-foreground/60 text-sm">
                  Et, plus discrètement : une espèce capable, un jour, d&apos;effacer le fiasco
                  précédent - les Lilim eux-mêmes.
                </p>
              </div>
            </div>

            <p className="text-foreground/60 text-sm">
              Exilés par leur propre volonté sur une île dotée d&apos;une puissante magie de
              lévitation, les anges ont passé toute leur existence à consigner le moindre
              événement important survenu dans chacun des trois royaumes et sur le continent.
            </p>
          </div>
        </section>

        {/* Archive */}
        <section className="mb-16">
          <SectionTitle title="L'Archive des Mémoires" />
          <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/30 rounded-xl p-8">
            <p className="text-foreground/70">
              Au centre de Sonihelm se dresse un grand bâtiment, l&apos;Archive des Mémoires, où
              seraient conservés des siècles d&apos;histoire d&apos;Astrenor - chaque bataille,
              chaque couronnement, chaque secret que les anges ont pu observer depuis leur île
              silencieuse. Personne, en dehors de Sonihelm, n&apos;a jamais pu consulter ses rayonnages.
            </p>
          </div>
        </section>

        {/* Nature & Capacités */}
        <section className="mb-16">
          <SectionTitle title="Des Êtres Calmes et Rationnels" subtitle="Rares sont ceux qui en ont seulement aperçu un" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
              <h4 className="text-amber-300 font-bold mb-3">👼 Apparence & Hiérarchie</h4>
              <p className="text-foreground/60 text-sm">
                Les rares écrits qui les décrivent parlent d&apos;une apparence juvénile, presque
                enfantine, et d&apos;une à six paires d&apos;ailes - un nombre qui semble refléter
                un rang au sein d&apos;une hiérarchie interne que nul étranger n&apos;a jamais
                comprise. Les plus jeunes archivistes n&apos;en porteraient qu&apos;une seule paire.
              </p>
            </div>
            <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
              <h4 className="text-amber-300 font-bold mb-3">✨ Capacités</h4>
              <p className="text-foreground/60 text-sm">
                Sensibilité à la magie de la lumière, vol, et une perception unique des sentiments
                primaires - peur, joie, dégoût, tristesse, colère, surprise - qui leur permet de
                lire un cœur avant même qu&apos;il ne s&apos;exprime.
              </p>
            </div>
          </div>
        </section>

        {/* Lien avec les Enfers */}
        <section>
          <SectionTitle title="L'Ordre Donné" subtitle="Ce que révèle l'attaque des Enfers" />
          <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-xl p-8">
            <p className="text-foreground/70 mb-4">
              Le troisième objectif des anges - effacer le fiasco des Lilim - n&apos;était resté
              qu&apos;une intention divine jusqu&apos;à ce qu&apos;un dieu décide de s&apos;en
              servir. Une dizaine d&apos;anges, envoyés depuis Sonihelm, franchirent la Porte
              pour se débarrasser du &quot;problème&quot; des démons une bonne fois pour toutes.
            </p>
            <p className="text-foreground/60 text-sm">
              Un seul Lilim suffit à les repousser. Leur chef, projeté sur Astrenor lors de la
              rupture de la Porte, en a perdu la mémoire et n&apos;est jamais retourné sur
              Sonihelm - un ange sans île, quelque part sur le continent, qui ignore probablement
              ce qu&apos;il est venu y faire.
            </p>
            <Link href="/enfers" className="inline-block mt-4 text-accent hover:underline text-sm">
              Voir le récit complet de l&apos;attaque sur la page Les Enfers →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
