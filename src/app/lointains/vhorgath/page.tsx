import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vhorgath - Terres Lointaines | Astrenor',
  description: 'Vhorgath, le continent des dragons exilés, jamais cartographié jusqu\'à ce que leurs attaques récentes forcent les érudits à s\'y intéresser.',
};

export default function VhorgathPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/lointains" className="text-orange-400 text-sm hover:underline">← Terres Lointaines</Link>
          <span className="block text-orange-400 text-sm uppercase tracking-widest mt-4">Continent Exilé</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            <span className="text-orange-400">Vhorgath</span>
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Le nom que les dragons se transmettent entre eux pour leur terre d&apos;exil. Les
            érudits d&apos;Astrenor, qui n&apos;avaient jamais eu besoin de le nommer, l&apos;appellent
            plus prosaïquement les <span className="text-orange-400 italic">Terres Écaillées</span> -
            et n&apos;ont commencé à s&apos;y intéresser sérieusement que depuis le retour des attaques.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌋</div>
              <h3 className="text-orange-400 font-bold mb-2">Terres Cendrées</h3>
              <p className="text-foreground/60 text-sm">
                Des caldeiras volcaniques et des plaines de cendre, où la chaleur suffit à
                dissuader toute expédition qui s&apos;aventurerait trop loin des côtes.
              </p>
            </div>
            <div className="bg-black/40 border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-orange-400 font-bold mb-2">Nids-Flèches</h3>
              <p className="text-foreground/60 text-sm">
                De hauts pitons rocheux, creusés et perchés, qui serviraient de nids aux
                clans dragons - visibles depuis la mer, mais jamais approchés de près.
              </p>
            </div>
            <div className="bg-black/40 border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">⚓</div>
              <h3 className="text-orange-400 font-bold mb-2">Aucun Retour</h3>
              <p className="text-foreground/60 text-sm">
                Aucun navire ayant abordé Vhorgath n&apos;est jamais revenu pour raconter ce
                qu&apos;il y avait vu. Toute la géographie ci-dessus reste extrapolée.
              </p>
            </div>
          </div>
        </section>

        {/* Histoire */}
        <section className="mb-16">
          <SectionTitle title="L'Exil" subtitle="Avant même la formation des royaumes" />

          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              Bien avant l&apos;unification des royaumes, les dragons régnaient sur Astrenor
              comme les maîtres incontestés du chaos et de la destruction. Les seigneurs de
              Meltoria, refusant de partager leurs terres avec de tels prédateurs, levèrent des
              armées entières contre eux.
            </p>
            <p className="text-foreground/60">
              La victoire coûta un nombre effroyable de vies - mais laisser les dragons en vie
              en aurait coûté davantage. Les survivants, traqués jusqu&apos;aux côtes, s&apos;enfuirent
              par-delà l&apos;océan et s&apos;installèrent sur une terre lointaine où, cette fois,
              nul ne vint les chasser. Depuis, l&apos;apparition d&apos;un seul dragon sur Astrenor
              est considérée comme le présage d&apos;une catastrophe.
            </p>
          </div>
        </section>

        {/* Société */}
        <section className="mb-16">
          <SectionTitle title="Ce Que l'on Devine de Leur Société" subtitle="Rien de confirmé, tout extrapolé des récits de survivants" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-600/10 to-transparent border border-orange-600/30 rounded-xl p-6">
              <h4 className="text-orange-400 font-bold mb-3">🐲 Des Clans, Pas un Royaume</h4>
              <p className="text-foreground/60 text-sm">
                Aucune couronne, aucune capitale : des clans rassemblés autour des dragons les
                plus anciens, qui se disputent autant qu&apos;ils se protègent mutuellement des
                rares intrus.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/30 rounded-xl p-6">
              <h4 className="text-red-400 font-bold mb-3">🔥 Une Génération Née en Exil</h4>
              <p className="text-foreground/60 text-sm">
                La plupart des dragons vivants aujourd&apos;hui sont nés sur Vhorgath et n&apos;ont
                jamais connu Astrenor autrement que par les récits de leurs aînés - une rancune
                transmise plutôt qu&apos;un souvenir vécu.
              </p>
            </div>
          </div>
        </section>

        {/* Menace actuelle */}
        <section className="mb-16">
          <SectionTitle title="Le Retour" subtitle="Ce qui inquiète vraiment les royaumes aujourd'hui" />

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/30 rounded-xl p-8">
            <p className="text-foreground/70 mb-4">
              Les attaques récentes ne ressemblent à aucun raid dragon documenté par le passé.
              Coordination entre plusieurs individus, gestion méthodique de camps de prisonniers,
              &quot;Porteurs de Mort&quot; comme <span className="text-orange-400 font-semibold">Chaldryd</span> agissant
              avec une intelligence qui dépasse l&apos;instinct de prédateur qu&apos;on prêtait aux
              dragons - tout indique qu&apos;une force nouvelle a émergé sur Vhorgath, capable
              d&apos;unifier des clans qui, historiquement, ne se supportaient pas entre eux.
            </p>
            <div className="bg-black/40 rounded-lg p-4 border border-red-500/30">
              <p className="text-red-400 font-semibold">
                ⚠️ Personne, à ce jour, ne sait qui - ou quoi - a réussi à rassembler les clans
                de Vhorgath sous une bannière commune.
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/bestiaire#dragons" className="text-orange-400 hover:underline text-sm">
              Voir la fiche des Dragons dans le bestiaire →
            </Link>
          </div>
        </section>

        {/* Mystères */}
        <section>
          <SectionTitle title="Ce Que l'On Ignore Encore" />
          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6">
            <ul className="text-foreground/60 text-sm space-y-2">
              <li>• Qui dirige réellement les attaques, et si les clans de Vhorgath ont vraiment une tête unique.</li>
              <li>• Ce que sont devenus les camps de prisonniers, et pourquoi des dragons prendraient la peine d&apos;en gérer.</li>
              <li>• Si le Déséquilibre - l&apos;instabilité magique et technologique frappant les trois royaumes - a un lien avec ce réveil.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
