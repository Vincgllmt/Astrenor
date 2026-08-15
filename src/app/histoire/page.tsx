import { SectionTitle } from '@/components';
import Timeline, { TimelineEvent } from '@/components/Timeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Histoire - La Guerre des Deux Siècles | Astrenor',
  description: 'Découvrez l\'histoire de la Guerre des Deux Siècles qui a façonné le continent d\'Astrenor.',
};

export default function HistoirePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest">Chroniques</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mt-2 mb-6">
            La Guerre des Deux Siècles
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Le conflit qui a façonné le destin d&apos;Astrenor, opposant l&apos;Empire d&apos;Anduin
            à l&apos;alliance de Meltoria et Sylvestri pendant près de 200 ans.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-black/40 border border-accent/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent">~200</div>
            <p className="text-foreground/60 text-sm">Années de conflit</p>
          </div>
          <div className="bg-black/40 border border-anduin/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-anduin">1</div>
            <p className="text-foreground/60 text-sm">Empire agresseur</p>
          </div>
          <div className="bg-black/40 border border-primary/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">2</div>
            <p className="text-foreground/60 text-sm">Royaumes alliés</p>
          </div>
          <div className="bg-black/40 border border-sylvestri/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-sylvestri">19</div>
            <p className="text-foreground/60 text-sm">Années de paix</p>
          </div>
        </div>

        {/* Origins */}
        <section className="mb-16">
          <SectionTitle title="Les Origines du Conflit" />

          <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              Il y avait autrefois un monde en paix, où les différentes nations coexistaient
              dans l&apos;harmonie et la prospérité. Mais tout cela a changé lorsque l&apos;empereur
              d&apos;Anduin a commencé à s&apos;étendre, annexant une partie de Meltoria.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-anduin/10 border border-anduin/30 rounded-lg p-4">
                <h4 className="text-anduin font-bold mb-2">🎯 Objectif d&apos;Anduin</h4>
                <p className="text-foreground/60 text-sm">
                  Récupérer Sylvestri pour avoir accès à la magie, chose qui manque terriblement
                  à l&apos;Empire. Meltoria se trouvait malheureusement sur le chemin.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <h4 className="text-primary font-bold mb-2">🤝 L&apos;Alliance Défensive</h4>
                <p className="text-foreground/60 text-sm">
                  Meltoria et Sylvestri formèrent une alliance pour résister à l&apos;Empire Anduin
                  et protéger leur souveraineté.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <SectionTitle title="Chronologie du Conflit" />

          <div className="space-y-8">
            <div className="bg-black/40 border-l-4 border-accent rounded-r-xl p-6">
              <span className="text-accent font-bold">Début de la guerre</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">L&apos;Invasion d&apos;Anduin</h3>
              <p className="text-foreground/70">
                L&apos;alliance n&apos;avait pas la même avance technologique que l&apos;Empire Anduin,
                ce qui conduisit à de nombreuses défaites lors des premiers affrontements.
                Les soldats de l&apos;Empire utilisaient des armes à feu très efficaces :
                pistolets à silex, canons et mousquets.
              </p>
            </div>

            <div className="bg-black/40 border-l-4 border-primary rounded-r-xl p-6">
              <span className="text-primary font-bold">Adaptation</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">La Contre-Offensive Magique</h3>
              <p className="text-foreground/70">
                Les membres de l&apos;alliance durent adapter leurs stratégies et se concentrer
                sur l&apos;utilisation de la magie. Sorts de camouflage pour tendre des embuscades,
                sorts de protection contre les projectiles... Peu à peu, ils comprirent les
                faiblesses des armes à feu.
              </p>
            </div>

            <div className="bg-black/40 border-l-4 border-anduin rounded-r-xl p-6">
              <span className="text-anduin font-bold">Guerre d&apos;usure</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">L&apos;Avantage de la Production</h3>
              <p className="text-foreground/70">
                L&apos;Empire Anduin avait une capacité de production plus élevée pour ses armes
                à feu, lui permettant de remplacer rapidement les pertes. À l&apos;inverse,
                l&apos;alliance avait besoin de temps pour former des mages — chaque perte
                était une perte de plusieurs années.
              </p>
            </div>

            <div className="bg-black/40 border-l-4 border-accent rounded-r-xl p-6">
              <span className="text-accent font-bold">Fin du premier siècle</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">L&apos;Impasse</h3>
              <p className="text-foreground/70">
                Aucune avancée ne fut très concluante pour les deux camps. La guerre
                s&apos;enlisa pendant des décennies, avec des victoires et des défaites de chaque côté.
              </p>
            </div>

            <div className="bg-black/40 border-l-4 border-anduin rounded-r-xl p-6">
              <span className="text-anduin font-bold">L&apos;Avancée Perçante</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">Skarlet et ses Sœurs</h3>
              <p className="text-foreground/70">
                L&apos;arrivée de Skarlet et ses sœurs en tant que générales d&apos;armée d&apos;Anduin
                fit progresser la ligne de front à une vitesse affolante. Un long chemin
                vers Sylvestri devint possible, et ils arrivaient enfin vers la frontière...
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-sylvestri/20 border-l-4 border-primary rounded-r-xl p-6">
              <span className="text-primary font-bold">Le Retournement</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">Le Coup d&apos;État de Skarlet</h3>
              <p className="text-foreground/70">
                Dans un retournement inattendu, la générale Skarlet mena un coup d&apos;État
                contre l&apos;Empereur. Elle rassembla une faction loyale et attaqua le palais
                impérial par surprise, renversant le dirigeant et prenant le pouvoir.
              </p>
            </div>
          </div>
        </section>

        {/* End of War */}
        <section className="mb-16">
          <SectionTitle title="Le Grand Accord de Sylvarin" subtitle="La fin d'une ère de destruction" />

          <div className="bg-gradient-to-br from-primary/10 via-sylvestri/10 to-anduin/10 border border-primary/30 rounded-xl p-8">
            <p className="text-foreground/70 text-lg mb-6">
              Après sa prise de pouvoir, Skarlet proposa une trêve aux royaumes de Meltoria
              et Sylvestri, offrant de mettre fin à la guerre. Devant l&apos;incertitude de la
              situation, les deux royaumes acceptèrent, espérant une paix durable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚔️</div>
                <h4 className="text-meltoria font-bold">Meltoria</h4>
                <p className="text-foreground/60 text-sm">Reconstruction et prospérité retrouvée</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🌲</div>
                <h4 className="text-sylvestri font-bold">Sylvestri</h4>
                <p className="text-foreground/60 text-sm">Repli sur soi par sécurité</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <h4 className="text-anduin font-bold">Anduin</h4>
                <p className="text-foreground/60 text-sm">Nouvelle ère sous Skarlet</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="mb-16">
          <SectionTitle title="Événements Récents" subtitle="L'histoire en marche" />

          <div className="space-y-8">
            <div className="bg-black/40 border-l-4 border-primary rounded-r-xl p-6">
              <span className="text-primary font-bold">Récemment</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">Le Massacre du Culte d'Eldritch</h3>
              <p className="text-foreground/70">
                Dans la capitale de Meltoria, un culte mystérieux prêchant un message dangereux a été traqué et éradiqué.
                La prêtresse Emily Morgan est en fuite, et quelques survivants se cachent encore.
              </p>
            </div>

            <div className="bg-black/40 border-l-4 border-orange-500 rounded-r-xl p-6">
              <span className="text-orange-500 font-bold">Menace Aérienne</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">Les Attaques de Dragons</h3>
              <p className="text-foreground/70">
                Des villes entières ont été détruites par des attaques coordonnées de dragons. Des &quot;Porteurs de Mort&quot;
                comme Chaldryd ont sévi, et ces créatures intelligentes gèrent même des camps de prisonniers.
              </p>
            </div>

            <div className="bg-black/40 border-l-4 border-anduin rounded-r-xl p-6">
              <span className="text-anduin font-bold">Violation du Traité</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">La Prise d'Astra</h3>
              <p className="text-foreground/70">
                Fragilisant la paix de 19 ans, <strong>Belarius Mephiston</strong>, général d'Anduin, a reconquis
                <strong>Astra</strong>, ancienne caserne frontalière d'Anduin cédée à Meltoria par le Grand Accord de Sylvarin. Il s'est autoproclamé Marquis et a fortifié la zone,
                relançant les tensions entre les deux royaumes.
              </p>
            </div>
          </div>
        </section>

        {/* Aftermath */}
        <section>
          <SectionTitle title="L'Après-Guerre" subtitle="19 ans de paix fragile" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 border border-primary/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">✨ Ce qui a changé</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Les relations entre royaumes se sont améliorées
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Skarlet s&apos;est montrée comme une dirigeante juste
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Les pays se reconstruisent dans une atmosphère de paix
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Le commerce reprend progressivement
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-accent/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-4">⚠️ Les Tensions Persistantes</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Une cicatrice permanente reste de la guerre
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Certains soupçonnent les motivations de Skarlet
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Sylvestri s&apos;est refermé sur lui-même
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Anduin garde jalousement ses secrets technologiques
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground/60 italic">
              &quot;Ce conflit a eu lieu il y a 19 ans maintenant. Les pays se reconstruisent
              tout en gardant une atmosphère de paix. Mais pour combien de temps ?&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
