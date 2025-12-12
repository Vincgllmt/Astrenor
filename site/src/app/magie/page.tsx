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
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mt-2 mb-6">
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
              Sylvestri est le plus vieux pays d&apos;Astrenor et le plus magique. C&apos;est la terre 
              des elfes et autres races magiques. Ce sont d&apos;ailleurs les elfes qui partagèrent 
              leurs dons magiques aux humains, créant les premiers Sorciers.
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
          </div>
        </section>

        {/* Magic Distribution */}
        <section className="mb-16">
          <SectionTitle title="Distribution de la Magie" subtitle="La magie n'est pas répartie uniformément sur le continent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sylvestri/10 border border-sylvestri/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-sylvestri mb-3">🌲 Sylvestri</h3>
              <div className="h-2 bg-black/40 rounded-full mb-3">
                <div className="h-full bg-sylvestri rounded-full" style={{width: '100%'}} />
              </div>
              <p className="text-foreground/60 text-sm">
                Épicentre de la magie. Concentration maximale d&apos;essence magique. 
                Foyers de créatures fantastiques et d&apos;esprits ancestraux.
              </p>
            </div>
            
            <div className="bg-meltoria/10 border border-meltoria/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-meltoria mb-3">⚔️ Meltoria</h3>
              <div className="h-2 bg-black/40 rounded-full mb-3">
                <div className="h-full bg-meltoria rounded-full" style={{width: '60%'}} />
              </div>
              <p className="text-foreground/60 text-sm">
                Présence modérée de magie. Le Roi-Sorcier Aegon est lui-même un mage puissant. 
                Alliances matrimoniales avec les elfes.
              </p>
            </div>
            
            <div className="bg-anduin/10 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-3">⚙️ Anduin</h3>
              <div className="h-2 bg-black/40 rounded-full mb-3">
                <div className="h-full bg-anduin rounded-full" style={{width: '15%'}} />
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

            <div className="mt-8 p-4 bg-sylvestri/10 border border-sylvestri/30 rounded-lg">
              <p className="text-foreground/70 text-center">
                🎓 Tous les individus possédant de la magie et ayant au moins 10 ans peuvent rejoindre 
                l&apos;académie, peu importe leur statut ou royaume d&apos;origine.
              </p>
            </div>
          </div>
        </section>

        {/* Ranks */}
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
