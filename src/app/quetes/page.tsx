
import Link from 'next/link';
import { SectionTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quêtes & Aventures | Astrenor',
    description: 'Découvrez les quêtes, intrigues et mystères disponibles dans l\'univers d\'Astrenor.',
};

export default function QuetesPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary text-sm uppercase tracking-widest">Aventures & Défis</span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-gradient mt-2 mb-6">
                        Quêtes d&apos;Astrenor
                    </h1>
                    <p className="text-foreground/70 max-w-3xl mx-auto mb-4">
                        Cette page recense les quêtes disponibles dans l’univers d’Astrenor.
                        Chaque quête possède une condition de début claire. Toutes les quêtes
                        ne sont pas accessibles immédiatement et certaines nécessitent un
                        contexte RP précis.
                    </p>
                </div>

                {/* Quêtes liées aux Archévêques */}
                <section className="mb-16">
                    <SectionTitle title="Quêtes liées aux Archévêques" subtitle="Intrigues majeures touchant aux plus hauts pouvoirs" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Q1 */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-colors">
                            <div className="text-4xl mb-4">📜</div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-purple-400">Les Pages Arrachées de Pandore</h3>
                                <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Enquête / Mystère</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Des ouvrages anciens semblent avoir été modifiés. Certains chapitres
                                n’existent plus, comme s’ils n’avaient jamais été écrits. Pourtant,
                                quelques mages jurent s’en souvenir.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20">
                                <p className="text-foreground/60 text-sm font-semibold mb-2">Conditions de début :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Au moins un joueur pratiquant la magie</li>
                                    <li>Accès à une bibliothèque, académie ou archive</li>
                                    <li>Étude ou possession d’un ouvrage ancien (pré-guerre de 200 ans)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q2 */}
                        <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/30 rounded-xl p-8 hover:border-red-500/50 transition-colors">
                            <div className="text-4xl mb-4">💥</div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-red-400">L’Écho de la Nova</h3>
                                <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30">Exploration / Vestiges</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Une zone vitrifiée, figée dans un silence surnaturel, serait la trace
                                d’un affrontement impliquant une puissance lumineuse colossale.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-red-500/20">
                                <p className="text-foreground/60 text-sm font-semibold mb-2">Conditions de début :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Avoir entendu une rumeur ou un témoignage datant de la guerre</li>
                                    <li>Groupe comportant au moins un combattant confirmé</li>
                                    <li>Mission officielle ou autorisation RP</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q3 */}
                        <div className="bg-gradient-to-br from-gray-800/20 to-transparent border border-gray-500/30 rounded-xl p-8 hover:border-gray-500/50 transition-colors">
                            <div className="text-4xl mb-4">🌫️</div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-gray-400">Le Cercle qui se Referme</h3>
                                <span className="text-xs px-2 py-1 rounded bg-gray-500/20 text-gray-300 border border-gray-500/30">Survie / Fuite</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Un village a été retrouvé écrasé par une force invisible. Les survivants
                                parlent d’une pression qui augmentait à mesure que l’on approchait du
                                centre.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-gray-500/20">
                                <p className="text-foreground/60 text-sm font-semibold mb-2">Conditions de début :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Rencontre avec un survivant ou réception d’un rapport officiel</li>
                                    <li>Groupe de puissance modérée</li>
                                    <li>Interdiction de confrontation directe sans escalade RP</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q4 */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 rounded-xl p-8 hover:border-orange-500/50 transition-colors">
                            <div className="text-4xl mb-4">👁️</div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-orange-400">Le Regard d’Oboreru</h3>
                                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">Dilemme moral</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Un artefact instable menace une région entière. Toutes les tentatives de
                                neutralisation ont échoué.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-orange-500/20">
                                <p className="text-foreground/60 text-sm font-semibold mb-2">Conditions de début :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Découverte ou possession d’un artefact incontrôlable</li>
                                    <li>Échec d’au moins deux solutions classiques</li>
                                    <li>Présence d’un mage expert ou évêque</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q5 */}
                        <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/50 transition-colors md:col-span-2">
                            <div className="text-4xl mb-4">🌀</div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-blue-400">Les Portes de Zarestia</h3>
                                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Plans parallèles</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Des portails apparaissent brièvement, laissant parfois passer des
                                créatures ou des phénomènes inconnus.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20">
                                <p className="text-foreground/60 text-sm font-semibold mb-2">Conditions de début :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Anomalie magique détectée</li>
                                    <li>Présence d’au moins un mage intermédiaire</li>
                                    <li>Rituel ou expérience magique ayant échoué récemment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quêtes de Village */}
                <section className="mb-16">
                    <SectionTitle title="Quêtes de Village" subtitle="Histoires locales et mystères du quotidien" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Q6 */}
                        <div className="bg-black/40 border border-red-300/30 rounded-xl p-6 hover:border-red-300/50 transition-colors">
                            <div className="text-4xl mb-4">🍷</div>
                            <h3 className="text-xl font-bold text-red-300 mb-2">Le Vin qui Murmure</h3>
                            <p className="text-xs uppercase tracking-wide text-foreground/50 mb-4">Enquête locale</p>
                            <p className="text-foreground/70 text-sm mb-4">
                                Un vin provoque visions et confessions incontrôlées chez ceux qui le
                                consomment.
                            </p>
                            <div className="border-t border-red-300/20 pt-4 mt-auto">
                                <p className="text-xs text-foreground/60 font-semibold mb-1">Début :</p>
                                <p className="text-xs text-foreground/50">Séjour en Meltoria, taverne, PNJ affecté.</p>
                            </div>
                        </div>

                        {/* Q7 */}
                        <div className="bg-black/40 border border-green-400/30 rounded-xl p-6 hover:border-green-400/50 transition-colors">
                            <div className="text-4xl mb-4">🌿</div>
                            <h3 className="text-xl font-bold text-green-400 mb-2">Les Enfants de la Clairière</h3>
                            <p className="text-xs uppercase tracking-wide text-foreground/50 mb-4">Mystique / Social</p>
                            <p className="text-foreground/70 text-sm mb-4">
                                Des enfants naissent marqués par la magie de la forêt. Les anciens
                                parlent d’un lien ancien avec Sylvestri.
                            </p>
                            <div className="border-t border-green-400/20 pt-4 mt-auto">
                                <p className="text-xs text-foreground/60 font-semibold mb-1">Début :</p>
                                <p className="text-xs text-foreground/50">Sylvestri, communauté elfique/druidique, naissance récente.</p>
                            </div>
                        </div>

                        {/* Q8 */}
                        <div className="bg-black/40 border border-amber-500/30 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                            <div className="text-4xl mb-4">⚒️</div>
                            <h3 className="text-xl font-bold text-amber-500 mb-2">La Forge Silencieuse</h3>
                            <p className="text-xs uppercase tracking-wide text-foreground/50 mb-4">Artisanat / Enquête</p>
                            <p className="text-foreground/70 text-sm mb-4">
                                Une forge produit des armes exceptionnelles, mais ses artisans deviennent
                                progressivement muets.
                            </p>
                            <div className="border-t border-amber-500/20 pt-4 mt-auto">
                                <p className="text-xs text-foreground/60 font-semibold mb-1">Début :</p>
                                <p className="text-xs text-foreground/50">Acquisition d'arme rare, forgeron affecté, intérêt officiel.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quêtes Mondiales */}
                <section className="mb-16">
                    <SectionTitle title="Quêtes Mondiales" subtitle="Événements majeurs impactant le destin du continent" />

                    <div className="space-y-6">
                        {/* Q9 */}
                        <div className="relative overflow-hidden bg-black/60 border border-yellow-600/30 rounded-xl p-8 hover:border-yellow-600/50 transition-colors group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-9xl pointer-events-none">⚔️</div>
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-yellow-500">Les Vestiges de la Guerre de 200 Ans</h3>
                                    <span className="text-sm px-3 py-1 rounded-full bg-yellow-600/10 text-yellow-500 border border-yellow-600/30 w-fit">Historique / Surnaturel</span>
                                </div>
                                <p className="text-foreground/80 mb-6 max-w-2xl">
                                    D’anciens champs de bataille refont surface, libérant objets, énergies
                                    et parfois des entités.
                                </p>
                                <div className="bg-yellow-900/10 rounded-lg p-4 border border-yellow-600/20">
                                    <p className="text-yellow-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                    <p className="text-foreground/60 text-sm">Exploration de zone de guerre, connaissances historiques, activité anormale.</p>
                                </div>
                            </div>
                        </div>

                        {/* Q10 */}
                        <div className="relative overflow-hidden bg-black/60 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/50 transition-colors group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-9xl pointer-events-none">⚖️</div>
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-cyan-400">Le Déséquilibre</h3>
                                    <span className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 w-fit">Politique / Cosmique</span>
                                </div>
                                <p className="text-foreground/80 mb-6 max-w-2xl">
                                    La magie devient instable loin de Sylvestri tandis que la technologie
                                    d’Anduin commence à faillir.
                                </p>
                                <div className="bg-cyan-900/10 rounded-lg p-4 border border-cyan-500/20">
                                    <p className="text-cyan-400/80 text-sm font-semibold mb-2">Conditions :</p>
                                    <p className="text-foreground/60 text-sm">Voyage entre royaumes, dysfonctionnement majeur, mission officielle.</p>
                                </div>
                            </div>
                        </div>

                        {/* Q11 */}
                        <div className="relative overflow-hidden bg-black/60 border border-purple-600/30 rounded-xl p-8 hover:border-purple-600/50 transition-colors group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-9xl pointer-events-none">👑</div>
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-purple-400">Le Roi qui ne Vieillit Pas</h3>
                                    <span className="text-sm px-3 py-1 rounded-full bg-purple-600/10 text-purple-400 border border-purple-600/30 w-fit">Intrigue royale</span>
                                </div>
                                <p className="text-foreground/80 mb-6 max-w-2xl">
                                    Le roi-sorcier Aegon Tabarly semble échapper au temps. Rumeurs et doutes
                                    circulent dans les cercles érudits.
                                </p>
                                <div className="bg-purple-900/10 rounded-lg p-4 border border-purple-600/20">
                                    <p className="text-purple-400/80 text-sm font-semibold mb-2">Conditions :</p>
                                    <p className="text-foreground/60 text-sm">Connaissance histoire Meltoria, accès archives/témoins, approche discrète.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notes Importantes */}
                <section className="mb-16">
                    <SectionTitle title="Quêtes liées aux Lilim" subtitle="Les péchés capitaux sous leur forme la plus insidieuse" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Q12 - Envie */}
                        <div className="bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/30 rounded-xl p-8 hover:border-green-500/50 transition-colors">
                            <div className="text-4xl mb-4">🪞</div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-green-400">Le Miroir de Damask</h3>
                                    <p className="text-xs text-green-500/70 font-mono mt-1">LILIM : DAMASK (ENVIE)</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30 text-right">Psychologique / Manipulation</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Un artefact circule sous forme de miroir ou de bijou. Il révèle ce que
                                l’on désire le plus… mais fait naître une jalousie incontrôlable envers
                                ceux qui semblent l’avoir.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-green-500/20">
                                <p className="text-green-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Présence d’un objet mystérieux convoité par plusieurs</li>
                                    <li>Conflit latent ou rivalité existante</li>
                                    <li>Interaction prolongée avec l’objet</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q13 - Gourmandise */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 rounded-xl p-8 hover:border-orange-500/50 transition-colors">
                            <div className="text-4xl mb-4">🍖</div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-400">Les Festins de Cendre</h3>
                                    <p className="text-xs text-orange-500/70 font-mono mt-1">LILIM : TAIGA (GOURMANDISE)</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 text-right">Enquête / Décadence</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Une ville prospère organise des banquets somptueux sans fin. Pourtant,
                                les réserves ne diminuent jamais… tandis que les habitants dépérissent.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-orange-500/20">
                                <p className="text-orange-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Invitation à un événement noble ou marchand</li>
                                    <li>Observation de comportements excessifs</li>
                                    <li>Séjour prolongé dans la zone concernée</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q14 - Luxure */}
                        <div className="bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/30 rounded-xl p-8 hover:border-pink-500/50 transition-colors">
                            <div className="text-4xl mb-4">💋</div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-pink-400">Les Draps Pourpres</h3>
                                    <p className="text-xs text-pink-500/70 font-mono mt-1">LILIM : HEGO (LUXURE)</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 text-right">Social / Corruption</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Un lieu de plaisir attire nobles, artistes et figures influentes.
                                Certains n’en ressortent jamais tout à fait les mêmes.. Ou pas du tout.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-pink-500/20">
                                <p className="text-pink-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Accès à un cercle mondain ou artistique</li>
                                    <li>Visite du manoir d'Alyzée</li>
                                    <li>Consentement RP explicite pour thématiques adultes</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q15 - Colère */}
                        <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-600/30 rounded-xl p-8 hover:border-red-600/50 transition-colors">
                            <div className="text-4xl mb-4">🔥</div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-red-500">Le Trône de Braise</h3>
                                    <p className="text-xs text-red-500/70 font-mono mt-1">LILIM : JEZEBEL (COLÈRE)</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-red-600/20 text-red-300 border border-red-600/30 text-right">Conflit / Escalade</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Des conflits mineurs dégénèrent en violences incontrôlées. Même les plus
                                pacifiques semblent perdre leur sang-froid.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-red-600/20">
                                <p className="text-red-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Zone touchée par des tensions politiques/sociales</li>
                                    <li>Au moins un affrontement évitable ayant déjà eu lieu</li>
                                    <li>Visite des bas-fonds de la capitale Anduinoise</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q16 - Paresse */}
                        <div className="bg-gradient-to-br from-slate-800/20 to-transparent border border-slate-500/30 rounded-xl p-8 hover:border-slate-500/50 transition-colors">
                            <div className="text-4xl mb-4">🕸️</div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-400">Le Poids des Chaînes</h3>
                                    <p className="text-xs text-slate-500/70 font-mono mt-1">LILIM : LUCI (PARESSE)</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-slate-500/20 text-slate-300 border border-slate-500/30 text-right">Atmosphérique / Déclin</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Un village cesse peu à peu toute activité. Personne ne souffre, mais
                                personne ne vit vraiment.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-slate-500/20">
                                <p className="text-slate-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Découverte d’une communauté anormalement apathique</li>
                                    <li>Absence de violence ou de famine visible</li>
                                    <li>Séjour RP de plusieurs jours sur place</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q17 - Avarice */}
                        <div className="bg-gradient-to-br from-yellow-900/20 to-transparent border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-500/50 transition-colors">
                            <div className="text-4xl mb-4">💰</div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-yellow-400">Les Comptes du Sang</h3>
                                    <p className="text-xs text-yellow-500/70 font-mono mt-1">LILIM : BANSHEE (AVARICE)</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-right">Économique / Intrigue</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Une fortune colossale est accumulée par un individu ou une institution,
                                au prix de contrats iniques et de vies brisées.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-yellow-500/20">
                                <p className="text-yellow-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Implication dans un échange commercial ou financier</li>
                                    <li>Dette, contrat ou promesse impossible à honorer</li>
                                    <li>Enquête ou mission officielle liée à l’économie</li>
                                </ul>
                            </div>
                        </div>

                        {/* Q18 - Orgueil */}
                        <div className="bg-gradient-to-br from-violet-900/20 to-transparent border border-violet-500/30 rounded-xl p-8 hover:border-violet-500/50 transition-colors md:col-span-2">
                            <div className="text-4xl mb-4">👑</div>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-violet-400">Les Couronnes Creuses</h3>
                                    <p className="text-xs text-violet-500/70 font-mono mt-1">LILIM : MINORIN (ORGUEIL)</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30 text-right">Politique / Tragédie</span>
                            </div>
                            <p className="text-foreground/70 mb-6 italic">
                                Un dirigeant, un héros ou un mage refuse toute limite. Son refus
                                d’écouter mènera à une chute inévitable… ou à une catastrophe.
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 border border-violet-500/20">
                                <p className="text-violet-500/80 text-sm font-semibold mb-2">Conditions :</p>
                                <ul className="list-disc list-inside text-foreground/50 text-sm space-y-1">
                                    <li>Personnage public refusant toute remise en question</li>
                                    <li>Avertissement ignoré ou prophétie rejetée</li>
                                    <li>Responsabilité collective engagée</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Notes Spécifiques aux Lilim */}
                    <div className="bg-black/60 border border-red-900/30 rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl pointer-events-none">👿</div>
                        <h4 className="text-lg font-bold text-red-500 mb-4 z-10 relative">Notes Spécifiques aux Lilim</h4>
                        <ul className="text-foreground/70 space-y-2 z-10 relative text-sm">
                            <li className="flex items-start gap-2"><span className="text-red-500">•</span> Les Lilim ne se montrent presque jamais ou dans des lieux bien précis.</li>
                            <li className="flex items-start gap-2"><span className="text-red-500">•</span> Les combattre frontalement est inutile, voire impossible.</li>
                            <li className="flex items-start gap-2"><span className="text-red-500">•</span> Chaque Lilim laisse une trace subtile après son passage.</li>
                        </ul>
                    </div>
                </section>

                {/* Notes Importantes */}
                <section className="mb-16">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
                        <h3 className="text-xl font-bold text-primary mb-6">Notes Importantes</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">⚠️</span>
                                <span className="text-foreground/80">Les Archévêques ne sont pas des adversaires directs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">🕊️</span>
                                <span className="text-foreground/80">Certaines quêtes peuvent échouer sans combat.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">🧠</span>
                                <span className="text-foreground/80">Le savoir peut être plus dangereux que la violence.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">🔍</span>
                                <span className="text-foreground/80">Toutes les réponses ne sont pas destinées à être découvertes.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Navigation */}
                <section>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-foreground mb-6">Continuer l'exploration</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/royaumes"
                                className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
                            >
                                🏰 Les Royaumes
                            </Link>
                            <Link
                                href="/bestiaire"
                                className="px-6 py-3 bg-accent/20 border border-accent/50 text-accent rounded-lg hover:bg-accent/30 transition-colors"
                            >
                                🐉 Bestiaire
                            </Link>
                            <Link
                                href="/legendes"
                                className="px-6 py-3 bg-sylvestri/20 border border-sylvestri/50 text-sylvestri rounded-lg hover:bg-sylvestri/30 transition-colors"
                            >
                                📜 Légendes
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
