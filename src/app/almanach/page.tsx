'use client';

import Link from 'next/link';
import { SectionTitle } from '@/components';
import { useState } from 'react';

const potions = [
  {
    nom: 'Élixir de Veillesang',
    categorie: 'Soin',
    couleur: 'Pourpre sombre',
    origine: 'Sylvestri',
    effet: 'Régénère le sang perdu et stabilise les blessures ouvertes. Goût âcre, presque métallique.',
    note: 'Distillé à partir de baies de noctegraine et de mousse de crypte. Indispensable sur les champs de bataille.',
    icon: '🩸',
    borderColor: 'border-red-500/40',
    textColor: 'text-red-400',
  },
  {
    nom: 'Teinture de Clarté Éthérée',
    categorie: 'Magie',
    couleur: 'Bleu argenté',
    origine: 'Académie d\'Étherium',
    effet: 'Amplifie temporairement le flux éthérique du buveur, permettant d\'incanter des sorts de niveau supérieur pendant une heure.',
    note: 'Strictement régulée par l\'Académie. La consommation non encadrée peut provoquer une surchauffe du flux vital.',
    icon: '✨',
    borderColor: 'border-blue-500/40',
    textColor: 'text-blue-400',
  },
  {
    nom: 'Goutte de Brume Ancestrale',
    categorie: 'Vision',
    couleur: 'Gris opalescent',
    origine: 'Sylvestri',
    effet: 'Ouvre brièvement le Troisième Regard, permettant d\'apercevoir les esprits, ombres et entités invisibles.',
    note: 'Utilisée par les chamanes de Sylvestri lors des rites de communion. Provoque parfois des visions incontrôlées.',
    icon: '👁️',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-400',
  },
  {
    nom: 'Philtre de Forgefeu',
    categorie: 'Force',
    couleur: 'Orange incandescent',
    origine: 'Anduin',
    effet: 'Dope la résistance physique et la force brute. La peau devient temporairement dure comme du métal refroidi.',
    note: 'Inventé par les alchimistes nains. Contre-indiqué chez les utilisateurs de magie, bloque le flux éthérique.',
    icon: '⚙️',
    borderColor: 'border-orange-500/40',
    textColor: 'text-orange-400',
  },
  {
    nom: 'Sérum de Voix des Ombres',
    categorie: 'Discrétion',
    couleur: 'Noir absolu',
    origine: 'Meltoria (illégal)',
    effet: 'Efface temporairement l\'empreinte sonore et visuelle du porteur. Utilisé par les assassins et espions de haut rang.',
    note: 'Produit par la Maison Yeomford. Sa fabrication et détention sont punissables de mort dans les trois royaumes... officiellement.',
    icon: '🌑',
    borderColor: 'border-gray-500/40',
    textColor: 'text-gray-400',
  },
  {
    nom: 'Nectarine de Sylvanea',
    categorie: 'Soin',
    couleur: 'Vert doré',
    origine: 'Sylvestri (rare)',
    effet: 'Guérison complète des blessures non mortelles en quelques minutes. Saveur sucrée, florale, inoubliable.',
    note: 'Ne peut être créée qu\'en pleine forêt de Sylvestri, sous la lumière de la pleine lune. Vaut une fortune.',
    icon: '🌿',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
  },
];

const boissons = [
  {
    nom: 'Vin des Collines de Majestia',
    type: 'Vin',
    royaume: 'Meltoria',
    description: 'Vin rouge profond aux arômes de fruits sombres et d\'épices. La fierté viticole de Meltoria, servi à la table royale.',
    anecdote: 'On dit que le Roi Aegon en consomme trois coupes chaque soir avant de siéger au conseil.',
    icon: '🍷',
  },
  {
    nom: 'Cervoise de Forge',
    type: 'Bière',
    royaume: 'Anduin',
    description: 'Bière ambrée épaisse brassée par les nains d\'Anduin à base de céréales nordiques et de mousses glaciaires. Brûle en descendant.',
    anecdote: '"Ça réchauffe autant qu\'une turbine à vapeur" - expression populaire anduinoise.',
    icon: '🍺',
  },
  {
    nom: 'Sève de Lumeliane',
    type: 'Infusion',
    royaume: 'Sylvestri',
    description: 'Liquide translucide légèrement lumineux extrait de la Lumeliane, arbre sacré des elfes. Goût de miel et d\'herbes.',
    anecdote: 'Non alcoolisée mais provoque une légère euphorie. Offerte en signe de bienvenue dans les clairières elfiques.',
    icon: '🌟',
  },
  {
    nom: 'Brûle-Gorge du Voyageur',
    type: 'Alcool fort',
    royaume: 'Toutes régions',
    description: 'Eau-de-vie bon marché distillée par des aubergistes de campagne. Goût variable, effet garanti.',
    anecdote: 'Seule boisson que l\'on trouve dans absolument toutes les tavernes du continent. Les voyageurs s\'y fient aveuglément.',
    icon: '🥃',
  },
  {
    nom: 'Hydromel des Ancêtres',
    type: 'Hydromel',
    royaume: 'Meltoria',
    description: 'Hydromel vieilli dix ans, dédié aux ancêtres morts au combat. Brassé par les temples de la Mère.',
    anecdote: 'Consommé uniquement lors des rites funéraires et des célébrations de victoire militaire. Le boire hors contexte est considéré comme un sacrilège.',
    icon: '🍯',
  },
  {
    nom: 'Thé des Cimes Gelées',
    type: 'Thé',
    royaume: 'Anduin',
    description: 'Infusion de plantes alpines récoltées au sommet des montagnes d\'Anduin. Revigore et aide à résister au froid extrême.',
    anecdote: 'Les soldats anduins en emportent toujours lors des patrouilles hivernales. Surnommé "le sang du Nord".',
    icon: '❄️',
  },
  {
    nom: 'Vin tempête',
    type: 'Alcool',
    royaume: 'Sylvestri',
    description: 'Spécialité de Lily Cornelis, vin pétillant avec des effets parfois aléatoire',
    anecdote: 'Peu guérir de la folie, ou la provoquer',
    icon: '🍷',
  },
  {
    nom: 'Bad Touch',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Aigre et vintage. Un cocktail qui ne mâche pas ses mots.',
    anecdote: 'Son nom dit tout. Idéal pour ceux qui veulent une expérience mémorable — dans tous les sens du terme.',
    icon: '🍋',
  },
  {
    nom: 'Bleeding Jane',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Épicé, classique et dégrisant. Un incontournable de la taverne.',
    anecdote: 'Réputée pour dissiper l\'ivresse aussi vite qu\'elle l\'installe. Prisée des mercenaires en mission qui ne peuvent pas se permettre de flancher.',
    icon: '🌶️',
  },
  {
    nom: 'Bloom Light',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Épicé, fade et cher pour ce que c\'est. Les premiers verres relèvent les papilles, mais plus on en boit, plus le goût se transforme en sable pur.',
    anecdote: 'Les habitués disent que c\'est une métaphore de l\'existence. Les nouveaux venus disent qu\'ils se sont fait arnaquer.',
    icon: '🏜️',
  },
  {
    nom: 'Blue Fairy',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Doux, tendre et résolument féminin. Une seule coupe suffit à bleuir toutes vos dents pour la soirée.',
    anecdote: '"J\'espère que vous les avez bien brossées." — Rin, en servant systématiquement ce verre avec ce commentaire.',
    icon: '🧚',
  },
  {
    nom: 'Brandtini',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Doux et élégant. Un cocktail raffiné, favori de certaines femmes de goût.',
    anecdote: 'On reconnaît les habituées à leur façon de tenir le verre — deux doigts, poignet relevé, regard assuré.',
    icon: '🍸',
  },
  {
    nom: 'Cobalt Velvet',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Pétillant, classe et brûlant. Décrit comme du champagne servi dans une tasse où traînerait un fond de cola.',
    anecdote: 'La couleur cobalt profonde impressionne à chaque fois. Le goût, lui, provoque rarement la même réaction deux fois.',
    icon: '💙',
  },
  {
    nom: 'Crevice Spike',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Acide, viril et dégrisant. Un verre aux effets imprévisibles : soit il vous enlève l\'ivresse, soit il vous assomme complètement.',
    anecdote: 'Commandez-en un en fin de soirée à vos propres risques. Aucune garantie sur le résultat.',
    icon: '⚡',
  },
  {
    nom: 'Fluffy Dream',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Acide, féminin et doux. Deux ou trois verres procurent une sensation de velours sur la langue. Au-delà, vous dormirez sur vos deux oreilles.',
    anecdote: 'Certains le commandent exprès pour ses propriétés soporifiques après une longue route. Rin ne pose pas de questions.',
    icon: '☁️',
  },
  {
    nom: 'Fringe Weaver',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Pétillant, élégant et fort. L\'équivalent d\'alcool éthylique agrémenté d\'une cuillerée de sucre. Ne vous y fiez pas.',
    anecdote: 'Présenté dans un verre fin et sophistiqué. Ce qu\'il y a à l\'intérieur, en revanche, est tout sauf raffiné.',
    icon: '🌀',
  },
  {
    nom: 'Frothy Water',
    type: 'Fausse bière',
    royaume: 'Taverne de Sylvanea',
    description: 'Pétillant, classique et totalement sans alcool. Pour ceux qui veulent avoir l\'air de boire sans en subir les conséquences.',
    anecdote: 'Commandez-en un et observez les vrais buveurs vous regarder avec un mélange de pitié et de respect silencieux.',
    icon: '🫧',
  },
  {
    nom: 'Gut Punch',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Son nom est parlant.',
    anecdote: 'Il n\'y a pas grand chose à ajouter. Ceux qui en ont bu comprennent. Ceux qui n\'en ont pas bu... comprendront.',
    icon: '👊',
  },
  {
    nom: 'Hellblast',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Épicé, viril et fort. Un seul verre suffit à rougir votre visage autant que les démons qu\'on imagine dans les Enfers.',
    anecdote: 'Populaire parmi les soldats et les fanfarons. Moins populaire auprès de leurs médecins.',
    icon: '🔥',
  },
  {
    nom: 'Anduinblast',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Acide, classe et brûlant. Un hommage fougueux aux terres du Nord.',
    anecdote: 'Certains soldats d\'Anduin refusent d\'en boire par principe. D\'autres le commandent par nostalgie.',
    icon: '⚙️',
  },
  {
    nom: 'Moonblast',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Doux, joyeux et ouvertement "girly". Une boisson pleine de bonne humeur.',
    anecdote: 'Commander un Moonblast en groupe garantit généralement une bonne ambiance. Le commander seul en fin de nuit envoie un tout autre message.',
    icon: '🌙',
  },
  {
    nom: 'Piano Man',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Acide, cher et fort. Le pendant masculin du Piano Woman, pour ceux qui veulent souffrir avec élégance.',
    anecdote: 'Souvent commandé en duo avec le Piano Woman lors des soirées en couple. Le contraste des réactions est toujours divertissant.',
    icon: '🎹',
  },
  {
    nom: 'Piano Woman',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Doux, cher et joyeux. Un cocktail festif au prix qui rappelle qu\'on est là pour passer une bonne soirée.',
    anecdote: 'Son pendant masculin existe. Les opinions divergent sur lequel est le meilleur investissement.',
    icon: '🎵',
  },
  {
    nom: 'Piledriver',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Amer, viril et brûlant. La brûlure épargne la langue mais s\'attaque à la gorge — mieux vaut ne pas être enrhumé ce soir-là.',
    anecdote: 'Conseillé aux amateurs d\'expériences intenses. Déconseillé à ceux qui ont une présentation importante le lendemain matin.',
    icon: '🔩',
  },
  {
    nom: 'Sparkle Star',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Doux, joyeux et spectaculaire. Pétille à la fois en bouche et visuellement — un verre qui fait son entrée dans la pièce.',
    anecdote: 'Impossible de le commander discrètement. Les étincelles visibles dans le verre attirent tous les regards de la salle.',
    icon: '✨',
  },
  {
    nom: 'Sunshine Cloud',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Amer, féminin et doux. Goût de vieux lait chocolaté dont le bon parfum serait intact, avec des notes de caramel selon certains.',
    anecdote: 'Un des rares cocktails amers qui séduisent autant les novices que les connaisseurs. Le paradoxe savoureux de la taverne.',
    icon: '☀️',
  },
  {
    nom: 'Suplex',
    type: 'Cocktail',
    royaume: 'Taverne de Sylvanea',
    description: 'Amer, viril et brûlant. Variante du Piledriver qui cible davantage la langue que la gorge — une autre façon de souffrir.',
    anecdote: 'Les habitués du Piledriver le commandent pour "changer". Ils regrettent généralement leur curiosité.',
    icon: '💥',
  },
  {
    nom: "Rin's Bad Girl/Boy",
    type: 'Spécialité maison',
    royaume: 'Taverne de Sylvanea',
    description: "La spécialité de Rin. Un alcool fourbe et plein de goût qui pétille en bouche et peut assommer même un habitué confirmé.",
    anecdote: "Rin ne révèle jamais la recette. On dit qu'elle change selon l'humeur de la soirée — et selon qui elle veut mettre à genoux.",
    icon: '😈',
  },
];

const repas = [
  {
    nom: 'Ragoût du Carrefour',
    type: 'Plat chaud',
    royaume: 'Toutes régions',
    ingredients: 'Viande de bête des plaines, navets, racines de brune et herbes amères',
    description: 'Plat populaire des auberges de route. Chaque cuisinier a sa recette, mais le résultat est toujours roboratif.',
    prix: '3 bronzes',
    icon: '🍲',
  },
  {
    nom: 'Tourte aux Ailes de Griffeau',
    type: 'Pâtisserie salée',
    royaume: 'Meltoria',
    ingredients: 'Viande de griffeau, pâte feuilletée au beurre doré, aromates royaux',
    description: 'Mets noble de la cour de Meltoria. Le griffeau est une volaille semi-sauvage chassée dans les plaines centrales.',
    prix: '25 bronzes',
    icon: '🥧',
  },
  {
    nom: 'Galettes de Pierre-Mousse',
    type: 'Encas',
    royaume: 'Sylvestri',
    ingredients: 'Farine de glands sylvestri, mousse de chêne, miel de forêt',
    description: 'Galettes épaisses et nutritives préparées par les elfes. Se conservent des semaines sans se détériorer.',
    prix: '2 bronzes',
    icon: '🫓',
  },
  {
    nom: 'Brochette de Glace-Fer',
    type: 'Grillades',
    royaume: 'Anduin',
    ingredients: 'Poisson des profondeurs nordiques grillé, herbes glaciaires, sel noir de mine',
    description: 'Plat emblématique des ouvriers des forges d\'Anduin. Le Glace-Fer est un poisson d\'eau douce gelée aux propriétés fortifiantes.',
    prix: '5 bronzes',
    icon: '🍢',
  },
  {
    nom: 'Festin des Dix',
    type: 'Banquet',
    royaume: 'Meltoria (secret)',
    ingredients: 'Composition secrète',
    description: 'Repas servi par la Maison Yeomford lors de l\'intronisation d\'un nouvel assassin. Personne n\'en connaît la composition exacte.',
    prix: 'Inestimable',
    icon: '🗡️',
  },
  {
    nom: 'Pain Noir des Forges',
    type: 'Pain',
    royaume: 'Anduin',
    ingredients: 'Seigle des terres nordiques, levain vieux de trois siècles, charbon végétal',
    description: 'Pain dense presque noir, fabriqué selon une recette naine immuable. Nourrissant, lourd, incroyablement dur sous la croûte.',
    prix: '1 bronze',
    icon: '🍞',
  },
];

const expressions = [
  {
    expression: '"Avoir du sang de forge dans les veines"',
    sens: 'Être d\'une résistance et d\'une endurance exceptionnelles.',
    origine: 'Anduin',
    usage: 'Compliment, généralement pour des combattants ou travailleurs infatigables.',
    icon: '⚙️',
  },
  {
    expression: '"Parler aux arbres"',
    sens: 'Perdre la raison, délirer. Parfois dit avec admiration : "être si sage qu\'on entend ce que les autres n\'entendent pas".',
    origine: 'Meltoria (péjoratif) / Sylvestri (éloge)',
    usage: 'Dépend entièrement du contexte culturel — insulte à Majestia, compliment en forêt.',
    icon: '🌳',
  },
  {
    expression: '"Sous les trois lunes"',
    sens: 'Jamais. Ou du moins, dans très, très longtemps.',
    origine: 'Toutes régions',
    usage: '"Je te rembourserai sous les trois lunes" — façon polie d\'avouer qu\'on ne le fera jamais.',
    icon: '🌙',
  },
  {
    expression: '"Mourir au soleil de Meltoria"',
    sens: 'Finir sa vie dans la richesse et le confort. Vieillir paisiblement sans avoir connu la misère.',
    origine: 'Anduin (originel)',
    usage: 'Souhait bienveillant formulé lors des adieux. "Que tu meures au soleil de Meltoria, ami."',
    icon: '☀️',
  },
  {
    expression: '"Avoir une dette de brume"',
    sens: 'Devoir quelque chose d\'impossible à rembourser. Obligation morale infinie.',
    origine: 'Sylvestri',
    usage: '"Il m\'a sauvé la vie — j\'ai une dette de brume envers lui."',
    icon: '🌫️',
  },
  {
    expression: '"Ça vaut un plat de forge"',
    sens: 'Quelque chose de très peu de valeur, bon marché, négligeable.',
    origine: 'Anduin',
    usage: 'Utilisé pour minimiser le prix d\'une chose ou la valeur d\'une promesse non tenue.',
    icon: '🔧',
  },
  {
    expression: '"Crier plus fort que les enfers"',
    sens: 'Faire un scandale retentissant, causer une scène mémorable.',
    origine: 'Meltoria',
    usage: '"La marchande a crié plus fort que les enfers quand elle a vu le prix."',
    icon: '😤',
  },
  {
    expression: '"Tenir la ligne de sang"',
    sens: 'Rester fidèle à sa famille, ses origines, son serment de naissance.',
    origine: 'Meltoria (noblesse)',
    usage: 'Formule grave, souvent prononcée lors des serments familiaux ou des conseils de maison.',
    icon: '⚔️',
  },
  {
    expression: '"Froid comme un couloir d\'Anduin"',
    sens: 'Quelqu\'un de distant, sans émotions, impitoyable.',
    origine: 'Meltoria / Sylvestri',
    usage: '"Le juge était froid comme un couloir d\'Anduin — aucune pitié."',
    icon: '🧊',
  },
  {
    expression: '"Les racines n\'oublient pas"',
    sens: 'Le passé revient toujours. On ne peut pas fuir ses origines ni ses actes.',
    origine: 'Sylvestri',
    usage: 'Proverbe elfique souvent utilisé comme avertissement ou rappel de justice.',
    icon: '🌱',
  },
];

const titres = [
  { titre: 'Seigneur de l\'Éther', explication: 'Titre honorifique pour un mage de rang suprême, maîtrisant plusieurs formes de magie.', origine: 'Académie d\'Étherium' },
  { titre: 'Marchombre', explication: 'Appellation donnée aux agents de renseignement opérant dans les zones grises entre les trois royaumes.', origine: 'Toutes régions' },
  { titre: 'Veilleuse', explication: 'Gardienne des frontières de Sylvestri. Seules des femmes elfiques occupent ce rôle ancestral.', origine: 'Sylvestri' },
  { titre: 'Maître de Forge Sanguin', explication: 'Forgeron nain capable d\'incorporer de l\'éther dans ses créations. Rareté absolue.', origine: 'Anduin' },
  { titre: 'Lame Effacée', explication: 'Assassin de la Maison Yeomford ayant complété les Dix Épreuves. Identité officiellement inexistante.', origine: 'Meltoria' },
  { titre: 'Porteur de Cendres', explication: 'Messager chargé d\'annoncer une mort noble. Fonction ritualisée, considérée sacrée et intouchable.', origine: 'Meltoria' },
  { titre: 'Enfant du Nexus', explication: 'Être né lors d\'une convergence des flux éthériques — réputé porteur d\'une destinée exceptionnelle.', origine: 'Toutes régions' },
  { titre: 'Gardien du Seuil', explication: 'Entité ou individu mandaté pour surveiller les frontières entre le monde des vivants et les plans infernaux.', origine: 'Religieux' },
];

const jurons = [
  { juron: '"Par les Enfers ouverts !"', usage: 'Exclamation de surprise ou de colère vive. Équivalent d\'un juron fort.', icon: '🔥' },
  { juron: '"Sang de griffeau !"', usage: 'Frustration légère, utilisable en société. Jeu de mots sur le griffeau (animal banal de Meltoria).', icon: '🐦' },
  { juron: '"Que la Brume te prenne !"', usage: 'Malédiction grave. Souhaiter à quelqu\'un de se perdre dans la brume sylvestri — une mort lente et solitaire.', icon: '🌫️' },
  { juron: '"Forge et cendres !"', usage: 'Exclamation de dépit ou d\'échec retentissant. Populaire dans les provinces anduinoises.', icon: '⚒️' },
  { juron: '"Par la Mère voilée !"', usage: 'Serment solennel ou exclamation de stupeur. Référence à la déesse Mère de Meltoria.', icon: '🌒' },
  { juron: '"T\'es qu\'un Marchombre sans ombre !"', usage: 'Insult désignant quelqu\'un de prétentieux, qui se croit important mais n\'a aucune substance.', icon: '👤' },
];

const categories = ['Tout', 'Potions', 'Boissons', 'Repas', 'Expressions', 'Titres & Rôles', 'Jurons'];

export default function AlmanachPage() {
  const [activeSection, setActiveSection] = useState('Tout');

  const showSection = (name: string) => activeSection === 'Tout' || activeSection === name;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm uppercase tracking-widest">Encyclopédie du Monde</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mt-2 mb-6">
            Almanach d&apos;Astrenor
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Recueil des termes, saveurs, formules et coutumes du monde connu. Potions des apothicaires,
            boissons des tavernes, repas des peuples, expressions forgées au fil des siècles,
            tout ce que le voyageur averti doit connaître avant de fouler ces terres.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-foreground/40 text-sm">
            <span>✦</span>
            <span>Compilé par les Scribes de l&apos;Académie d&apos;Étherium</span>
            <span>✦</span>
          </div>
        </div>

        {/* Navigation par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveSection(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                activeSection === cat
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'border-foreground/20 text-foreground/50 hover:border-primary/50 hover:text-primary/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== POTIONS ===== */}
        {showSection('Potions') && (
          <section className="mb-20" id="potions">
            <SectionTitle
              title="Potions & Élixirs"
              subtitle="Les préparations alchimiques des apothicaires, herboristes et mages du continent"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {potions.map((potion) => (
                <div
                  key={potion.nom}
                  className={`bg-black/40 border ${potion.borderColor} rounded-xl p-6 card-hover`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{potion.icon}</span>
                    <div>
                      <h3 className={`text-lg font-bold ${potion.textColor}`}>{potion.nom}</h3>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-black/50 border border-foreground/10 text-foreground/50">
                          {potion.categorie}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-black/50 border border-foreground/10 text-foreground/50">
                          {potion.couleur}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm mb-3">{potion.effet}</p>
                  <div className="border-t border-foreground/10 pt-3 mt-3">
                    <p className="text-foreground/40 text-xs italic">{potion.note}</p>
                    <p className={`text-xs mt-2 ${potion.textColor}/70`}>Origine : {potion.origine}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== BOISSONS ===== */}
        {showSection('Boissons') && (
          <section className="mb-20" id="boissons">
            <SectionTitle
              title="Boissons & Breuvages"
              subtitle="Des vins nobles de Meltoria à la bière naine d'Anduin, en passant par les nectars enchantés de Sylvestri"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {boissons.map((boisson) => (
                <div
                  key={boisson.nom}
                  className="bg-black/40 border border-primary/20 rounded-xl p-6 card-hover flex gap-5"
                >
                  <span className="text-4xl self-start">{boisson.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-bold text-primary">{boisson.nom}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary/70">
                        {boisson.type}
                      </span>
                    </div>
                    <p className="text-foreground/60 text-xs mb-2 uppercase tracking-wide">{boisson.royaume}</p>
                    <p className="text-foreground/70 text-sm mb-3">{boisson.description}</p>
                    <p className="text-foreground/40 text-xs italic border-l-2 border-primary/30 pl-3">
                      {boisson.anecdote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== REPAS ===== */}
        {showSection('Repas') && (
          <section className="mb-20" id="repas">
            <SectionTitle
              title="Repas & Cuisine"
              subtitle="Les mets qui nourrissent les peuples d'Astrenor, des tables royales aux auberges de route"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {repas.map((plat) => (
                <div
                  key={plat.nom}
                  className="bg-black/40 border border-meltoria/20 rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{plat.icon}</span>
                    <div>
                      <h3 className="text-base font-bold text-meltoria">{plat.nom}</h3>
                      <span className="text-xs text-foreground/40">{plat.type} · {plat.royaume}</span>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm mb-3">{plat.description}</p>
                  <div className="bg-black/30 rounded-lg p-3 mb-3">
                    <p className="text-foreground/40 text-xs">
                      <span className="text-foreground/60 font-medium">Ingrédients : </span>
                      {plat.ingredients}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-meltoria text-sm font-medium">{plat.prix}</span>
                    <span className="text-foreground/30 text-xs">Prix courant</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== EXPRESSIONS ===== */}
        {showSection('Expressions') && (
          <section className="mb-20" id="expressions">
            <SectionTitle
              title="Expressions & Proverbes"
              subtitle="Les tournures de langages forgées par les siècles, différentes selon les royaumes et les peuples"
            />
            <div className="space-y-4 mt-8">
              {expressions.map((expr) => (
                <div
                  key={expr.expression}
                  className="bg-black/40 border border-sylvestri/20 rounded-xl p-6 card-hover"
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl mt-0.5">{expr.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <h3 className="text-sylvestri font-bold text-lg">{expr.expression}</h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-sylvestri/10 border border-sylvestri/20 text-sylvestri/70 whitespace-nowrap">
                          {expr.origine}
                        </span>
                      </div>
                      <p className="text-foreground/80 mt-2 text-sm">
                        <span className="text-foreground/50 font-medium">Sens : </span>
                        {expr.sens}
                      </p>
                      <p className="text-foreground/50 mt-1 text-sm italic">
                        <span className="not-italic text-foreground/40 font-medium">Usage : </span>
                        {expr.usage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== TITRES & RÔLES ===== */}
        {showSection('Titres & Rôles') && (
          <section className="mb-20" id="titres">
            <SectionTitle
              title="Titres & Rôles Singuliers"
              subtitle="Fonctions, désignations et appellations propres au monde d'Astrenor"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {titres.map((t) => (
                <div
                  key={t.titre}
                  className="bg-black/40 border border-anduin/20 rounded-xl p-5 card-hover flex gap-4"
                >
                  <div className="w-1 rounded-full bg-anduin/50 self-stretch flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-anduin">{t.titre}</h3>
                    <p className="text-foreground/60 text-sm mt-1">{t.explication}</p>
                    <p className="text-foreground/30 text-xs mt-2">Origine : {t.origine}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== JURONS ===== */}
        {showSection('Jurons') && (
          <section className="mb-20" id="jurons">
            <SectionTitle
              title="Jurons & Imprécations"
              subtitle="Les exclamations, blasphèmes et malédictions qui colorent la langue populaire d'Astrenor"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {jurons.map((j) => (
                <div
                  key={j.juron}
                  className="bg-black/40 border border-red-900/30 rounded-xl p-5 card-hover flex gap-4"
                >
                  <span className="text-2xl self-start">{j.icon}</span>
                  <div>
                    <h3 className="font-bold text-red-400">{j.juron}</h3>
                    <p className="text-foreground/60 text-sm mt-1">{j.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Note de bas de page */}
        <div className="mt-8 bg-black/30 border border-primary/10 rounded-xl p-8 text-center">
          <p className="text-foreground/40 text-sm italic max-w-2xl mx-auto">
            &quot;Ce recueil est vivant. Chaque région, chaque époque, chaque peuple enrichit la langue commune
            de ses propres mots. Le voyageur qui lit ces pages n&apos;y trouvera qu&apos;un fragment
            de ce que le monde a à dire.&quot;
          </p>
          <p className="text-foreground/25 text-xs mt-3">— Archiviste Solenne Daureille, Académie d&apos;Étherium</p>
        </div>

        {/* Navigation bas de page */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Link
            href="/races"
            className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm"
          >
            → Encyclopédie des Races
          </Link>
          <Link
            href="/magie"
            className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm"
          >
            → Système de Magie
          </Link>
          <Link
            href="/royaumes"
            className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm"
          >
            → Les Royaumes
          </Link>
        </div>
      </div>
    </div>
  );
}
