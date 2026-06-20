export type Royaume = 'meltoria' | 'sylvestri' | 'anduin' | 'independant';
export type TypeLieu = 'capitale' | 'ville' | 'village' | 'forteresse' | 'cité';

export interface Ville {
  id: string;
  nom: string;
  royaume: Royaume;
  type: TypeLieu;
  x: number; // % depuis la gauche
  y: number; // % depuis le haut
  icon: string;
  description: string;
  coutumes: string[];
  pointsInteret: string[];
}

export const royaumeLabels: Record<Royaume, string> = {
  meltoria: 'Meltoria',
  sylvestri: 'Sylvestri',
  anduin: 'Anduin',
  independant: 'Indépendant',
};

export const villes: Ville[] = [
  // ──────────────────────────────────────────
  // ANDUIN — Empire Mécanique (Nord)
  // ──────────────────────────────────────────
  {
    id: 'ravengulch',
    nom: 'Ravengulch',
    royaume: 'anduin',
    type: 'capitale',
    x: 46, y: 21,
    icon: '⚙️',
    description:
      "La cité impériale d'Anduin, cœur battant de l'empire mécanique. Ravengulch est une métropole de métal et de vapeur où les engrenages ne s'arrêtent jamais. L'Impératrice Skarlet y tient son palais d'acier et de verre.",
    coutumes: [
      "L'heure est régie par les grandes horloges mécaniques de la place centrale - arriver en retard est une insulte.",
      "Les salutations se font en touchant l'emblème impérial porté sur la poitrine droite.",
      "Les repas sont minutés : un sablier d'acier trône sur chaque table et nul ne mange après la dernière minute écoulée.",
      "Le port d'une arme à feu visible signifie que l'on est en service actif pour l'empire.",
    ],
    pointsInteret: [
      "Le Palais Impérial d'Acier",
      "L'Arsenal des Machines",
      "La Grande Horloge de Ravengulch",
      "Le Quartier des Ingénieurs",
    ],
  },
  {
    id: 'hazelhaven',
    nom: 'Hazelhaven',
    royaume: 'anduin',
    type: 'ville',
    x: 36.25, y: 15,
    icon: '🏭',
    description:
      "Ville industrielle à l'ouest du territoire d'Anduin, réputée pour ses manufactures de charbon et ses mines de cuivre qui alimentent l'empire en ressources.",
    coutumes: [
      "Les mineurs portent des badges de rang selon la profondeur atteinte dans les mines.",
      "Un repas de charbon brûlé symbolique est offert aux nouveaux arrivants en signe de bienvenue.",
      "Sabrer une bouteille avec un outil de mineur lors des célébrations est de bon augure.",
    ],
    pointsInteret: ["Les Mines de Cuivre", "La Manufacture Centrale", "La Tour de Ventilation"],
  },
  {
    id: 'barrencrag',
    nom: 'Barrencrag',
    royaume: 'anduin',
    type: 'forteresse',
    x: 65, y: 11,
    icon: '🏔️',
    description:
      "Forteresse militaire perchée sur les hautes crêtes du nord-est. Barrencrag surveille les frontières orientales d'Anduin et sert de base aux troupes d'élite de l'empire.",
    coutumes: [
      "Les gardes changent de poste au son d'une trompette mécanique à chaque heure pleine.",
      "Honorer les soldats tombés en combat par un salut de trois secondes face à leur plaque de métal.",
      "Aucun civil ne peut franchir les portes sans un laissez-passer impérial en règle.",
    ],
    pointsInteret: ["La Citadelle du Corbeau", "Les Remparts Nord", "La Salle des Héros Tombés"],
  },
  {
    id: 'rosenshire',
    nom: 'Rosenshire',
    royaume: 'anduin',
    type: 'ville',
    x: 53, y: 26,
    icon: '🌹',
    description:
      "L'une des rares villes d'Anduin à conserver un aspect fleuri. Connue pour ses roses d'acier, fleurs artificielles créées par les artisans mécanistes et offertes lors des cérémonies officielles.",
    coutumes: [
      "Offrir une rose d'acier forgée à la main est le signe d'un respect profond.",
      "Les mariages sont célébrés sous des arches de métal ornées de fleurs forgées.",
      "Tuer une fleur naturelle dans la ville est considéré comme un mauvais présage.",
    ],
    pointsInteret: ["Le Jardin des Roses d'Acier", "L'Atelier des Artisans Fleuriers", "La Serre Mécanique"],
  },
  {
    id: 'brien',
    nom: 'Brien',
    royaume: 'anduin',
    type: 'ville',
    x: 74.5, y: 23,
    icon: '⛵',
    description:
      "Port militaire à l'extrême nord-est du continent, Brien contrôle les voies maritimes septentrionales. Ses bateaux à vapeur cuirassés sont redoutés dans tous les ports d'Astrenor.",
    coutumes: [
      "Les marins brisent une bouteille de rhum sur la proue avant chaque départ.",
      "Seuls les navigateurs expérimentés portent le tatouage de l'ancre impériale.",
      "La couleur rouge sang sur la coque d'un navire annonce une mission de guerre.",
    ],
    pointsInteret: ["Le Port des Vapeurs", "Le Phare Mécanique de Brien", "La Caserne Navale"],
  },
  {
    id: 'haufen',
    nom: 'Haufen',
    royaume: 'anduin',
    type: 'ville',
    x: 66.5, y: 35.5,
    icon: '⛏️',
    description:
      "Centre d'extraction et de raffinage des minerais rares. Haufen approvisionne les forges impériales en métaux précieux nécessaires à la fabrication des automates et des armes à feu.",
    coutumes: [
      "Les forgerons portent un tablier noir cousu d'un fil d'or pour signifier leur rang.",
      "Le son des marteaux est considéré comme une musique sacrée - s'y opposer est un outrage.",
      "Un apprenti n'a le droit de forger sa première pièce qu'après trois ans d'observation.",
    ],
    pointsInteret: ["Les Fonderies Impériales", "Le Marché des Minerais", "La Galerie d'Extraction"],
  },

  // ──────────────────────────────────────────
  // MELTORIA — Royaume Féodal (Centre-Ouest)
  // ──────────────────────────────────────────
  {
    id: 'majestia',
    nom: 'Majestia',
    royaume: 'meltoria',
    type: 'capitale',
    x: 24, y: 34,
    icon: '👑',
    description:
      "La capitale royale de Meltoria, siège du pouvoir du Roi-Sorcier Aegon Tabarly. Cité côtière aux tours dorées, Majestia est le symbole de la grandeur méltorienne et le centre de la chevalerie du continent.",
    coutumes: [
      "S'agenouiller d'un genou devant tout porteur des insignes royaux.",
      "Les marchés ferment au coucher du soleil et rouvrent à l'aube, suivant le rythme des cloches du château.",
      "Offrir de la viande ou du pain à un inconnu dans le besoin est le signe de l'hospitalité méltorienne.",
      "Les chevaliers reçoivent l'accolade au sommet de la Tour Dorée une fois par an lors des festivités royales.",
    ],
    pointsInteret: [
      "Le Château Royal de Tabarly",
      "La Place du Rufiyaa",
      "Le Port de Majestia",
      "La Guilde des Forgerons",
      "La Tour Dorée",
    ],
  },
  {
    id: 'befohrt',
    nom: 'Befohrt',
    royaume: 'meltoria',
    type: 'ville',
    x: 23, y: 64,
    icon: '⚓',
    description:
      "Île quasi sauvage près de Majestia, théoriquement colonie meltorienne, devenue un repaire de pirates notoire. Ses côtes sont de longues falaises bordées de récifs qui rendent la navigation impossible aux non-initiés, et un brouillard épais transforme souvent la mer en piège mortel. Maints capitaines refusent d'en approcher. En surface de l'eau, sous les falaises, des grottes dissimulent d'innombrables cachettes de pirates. La ville elle-même est animée et sympathique pour qui a du cran, à condition de surveiller sa bourse et d'éviter les ennuis. Au-delà de ses murs, l'île est une jungle vierge peuplée d'animaux colorés uniques à la région.",
    coutumes: [
      "Un capitaine qui connaît le chemin entre les récifs ne partage jamais cette connaissance librement - c'est sa véritable fortune.",
      "Dans les tavernes, on paye ses dettes de jeu ou l'on quitte l'île : les créanciers ici ont des arguments convaincants.",
      "Voler un autre pirate dans l'enceinte de la ville est le seul crime unanimement puni - à l'extérieur, tout est permis.",
      "Les nouveaux arrivants doivent offrir une tournée générale à la taverne la plus proche : c'est le droit d'entrée non officiel.",
    ],
    pointsInteret: [
      "Les Grottes des Falaises - cachettes de pirates taillées dans la roche",
      "La Taverne de la Brume - cœur social de la ville",
      "Le Sentier des Initiés - seule route navigable entre les récifs, jalousement gardée",
      "La Jungle Vierge de l'Île - faune colorée et endémique",
    ],
  },
  {
    id: 'gives',
    nom: 'Gives',
    royaume: 'meltoria',
    type: 'ville',
    x: 34, y: 38,
    icon: '🍇',
    description:
      "Cité réputée pour ses vignobles et son vin, Gives produit certaines des meilleures cuvées d'Astrenor. Les collines environnantes sont couvertes de vignes soignées de génération en génération.",
    coutumes: [
      "Briser un verre de vin lors d'une dispute est un affront impardonnable qui réclame réparation.",
      "Les vendanges donnent lieu à une semaine de festivités où tous les travaux s'arrêtent.",
      "On scelle les accords importants en partageant un verre du vin de la maison.",
    ],
    pointsInteret: ["Le Domaine des Ceps d'Or", "Le Marché du Vin de Gives", "La Cave Ancestrale des Sept Tonneaux"],
  },
  {
    id: 'courtin',
    nom: 'Courtin',
    royaume: 'meltoria',
    type: 'ville',
    x: 32, y: 60,
    icon: '⚖️',
    description:
      "Importante ville judiciaire de Meltoria, Courtin abrite les grandes cours de justice du royaume et l'Ordre des Légistes. Ses bâtiments de pierre grise inspirent respect et solennité.",
    coutumes: [
      "On ne lève jamais la voix dans les rues de Courtin par respect pour les tribunaux.",
      "Les avocats et légistes portent une ceinture verte symbolisant leur appartenance à l'Ordre.",
      "Mentir publiquement est punissable d'un jour de travaux forcés au profit de la cité.",
    ],
    pointsInteret: ["Le Grand Tribunal de Courtin", "L'Ordre des Légistes", "La Prison des Oubliés"],
  },
  {
    id: 'escren',
    nom: 'Escren',
    royaume: 'meltoria',
    type: 'ville',
    x: 46, y: 45,
    icon: '🛡️',
    description:
      "Ville garnison au cœur de Meltoria, Escren est une place forte militaire stratégique. Ses chevaliers assurent la sécurité des routes commerciales et protègent les terres du centre du royaume.",
    coutumes: [
      "Les chevaliers d'Escren portent toujours leur épée côté gauche, même en tenue civile.",
      "Le tournoi annuel d'Escren est la compétition chevaleresque la plus prestigieuse de Meltoria.",
      "Un chevalier qui accepte un défi ne peut pas le refuser - le rejeter est une honte à vie.",
    ],
    pointsInteret: ["La Caserne des Chevaliers d'Escren", "L'Arène du Grand Tournoi", "Le Mur de la Mémoire"],
  },
  {
    id: 'marmonthicy',
    nom: 'Marmonthicy',
    royaume: 'meltoria',
    type: 'ville',
    x: 61, y: 49,
    icon: '🏺',
    description:
      "Cité artisanale et commerciale, Marmonthicy est connue pour ses potiers, ses tisserands et ses marchands. Un carrefour de routes commerciales qui en fait l'une des villes les plus animées de Meltoria.",
    coutumes: [
      "Les artisans signent toujours leurs œuvres d'un symbole personnel - copier ce symbole est un crime.",
      "Marchander est une tradition sacrée - proposer le prix affiché sans négocier est considéré impoli.",
      "Un repas partagé avec un étranger dans une échoppe scelle une amitié de voyage.",
    ],
    pointsInteret: ["La Grande Halle des Marchands", "Les Ateliers des Potiers", "Le Pont du Commerce de Marmonthicy"],
  },
  {
    id: 'signeroy',
    nom: 'Signeroy',
    royaume: 'meltoria',
    type: 'ville',
    x: 44, y: 62,
    icon: '📜',
    description:
      "Centre culturel et intellectuel de Meltoria, Signeroy abrite l'une des plus grandes bibliothèques du continent. Ses scribes et historiens y consignent les mémoires du royaume depuis des siècles.",
    coutumes: [
      "Le silence est une règle stricte dans les rues proches de la Grande Bibliothèque.",
      "Les habitants de Signeroy ont la réputation d'être de grands conteurs et débatteurs.",
      "Brûler un livre est considéré comme le pire des crimes et puni d'exil perpétuel.",
    ],
    pointsInteret: ["La Grande Bibliothèque de Signeroy", "L'École des Scribes", "La Place des Débats"],
  },
  {
    id: 'dorteres',
    nom: 'Dorteres',
    royaume: 'meltoria',
    type: 'ville',
    x: 67.5, y: 57,
    icon: '🌾',
    description:
      "Ville agricole à la frontière orientale de Meltoria, Dorteres approvisionne le royaume en blé, seigle et orge. Ses plaines fertiles en font le grenier de l'ouest d'Astrenor.",
    coutumes: [
      "La récolte est célébrée par un festin communautaire où nul ne doit manger seul.",
      "Les agriculteurs de Dorteres portent le chapeau de paille comme signe de fierté et d'honneur.",
      "Refuser la nourriture offerte par un fermier est une insulte grave.",
    ],
    pointsInteret: ["Les Plaines de l'Abondance", "Le Moulin Royal de Dorteres", "Le Marché du Grain"],
  },
  {
    id: 'astra',
    nom: 'Astra',
    royaume: 'anduin',
    type: 'forteresse',
    x: 50, y: 37,
    icon: '⛰️',
    description:
      "Ville fortifiée nichée dans un canyon, seul passage praticable à travers les montagnes de Lassiera. Carrefour incontournable entre les royaumes, Astra abrite une des plus grandes casernes et places d'entraînement de l'Empire d'Anduin - c'est d'ailleurs de là que fut lancée l'offensive de la Grande Guerre. Sa tour de garde, devenue attraction touristique, domine un panorama à couper le souffle sur les sommets environnants.",
    coutumes: [
      "Tout étranger en transit doit décliner son identité et sa destination au poste de contrôle - Astra ne connaît pas d'anonymes.",
      "Les marchands côtoient les soldats sans distinction dans les tavernes : la ville est cosmopolite et la hiérarchie militaire reste au seuil des casernes.",
      "Monter au sommet de la Grande Tour au lever du soleil est un rite de passage pour tout nouveau résident.",
      "Les duels sont tolérés dans l'arène désignée, mais la bagarre dans les rues vaut une nuit de cellule - l'ordre prime sur tout.",
    ],
    pointsInteret: [
      "La Grande Tour de Garde - vue panoramique sur les montagnes de Lassiera",
      "La Caserne Impériale d'Anduin - l'une des plus grandes de l'Empire",
      "Le Col du Canon - défilé stratégique et mémorial de la Grande Guerre",
      "Le Marché du Carrefour - marchandises des trois royaumes en un seul endroit",
    ],
  },

  // ──────────────────────────────────────────
  // INDÉPENDANTS
  // ──────────────────────────────────────────
  {
    id: 'khareth',
    nom: 'Khareth',
    royaume: 'independant',
    type: 'cité',
    x: 83, y: 50,
    icon: '🏜️',
    description:
      "Presqu'île désertique techniquement rattachée à Meltoria, Khareth vit dans une indépendance de fait que les deux partis semblent apprécier. Terre d'excellence artisanale, elle abrite les verriers, sculpteurs et enchanteurs les plus réputés du continent. Ses marchands intrépides sillonnent le monde entier en caravane, exportant œuvres d'art, objets magiques et venin de S'nek, et rapportant des marchandises exotiques jusqu'aux coins les plus reculés d'Astrenor.",
    coutumes: [
      "Les caravanes marchandes de Khareth sont une institution : quitter la cité au moins une fois dans sa vie pour vendre ses œuvres à travers le monde est un rite de passage.",
      "La richesse générée par le commerce extérieur est redistribuée via un réseau d'entraide intérieur - programmes d'éducation et d'emploi financés collectivement.",
      "Un artisan qui vend une pièce défectueuse est tenu de rembourser le double de la valeur et de refaire l'objet gratuitement.",
      "Le venin de S'nek est une denrée réglementée : seuls les négociants agréés par le conseil de la cité ont le droit de le commercer.",
    ],
    pointsInteret: [
      "Les Ateliers des Maîtres Verriers",
      "La Galerie des Enchanteurs",
      "Le Marché aux Caravanes - point de départ de toutes les expéditions commerciales",
      "Les Élevages de S'nek",
    ],
  },
  {
    id: 'hatbury',
    nom: 'Hatbury',
    royaume: 'independant',
    type: 'ville',
    x: 78, y: 71,
    icon: '🌊',
    description:
      "Ville portuaire de la côte Est, seul débouché maritime de la région dans ces étendues désertiques. Les larges revenus du port sont avidement captés par une poignée de puissants, laissant la population dans une misère palpable. Peu atteignent ici un âge avancé. Les marchands se parent de joyaux, bien gardés par des légions de soldats, pendant que le peuple survit dans la chaleur et la poussière.",
    coutumes: [
      "La population générale ne possède pas de nom : un nom se gagne par ses exploits, pas à la naissance.",
      "Il n'est pas rare que des parents abandonnent leurs enfants dès leur jeune âge, ne pouvant en assumer la charge dans ces conditions extrêmes.",
      "La solidarité entre pauvres est une loi non écrite et sacrée - partager ce que l'on a avec plus démuni que soi est la seule règle universellement respectée.",
      "La méfiance envers toute forme d'autorité est profondément ancrée, tant la corruption y est endémique.",
    ],
    pointsInteret: ["Le Port de la Côte Est - unique débouché maritime de la région", "Le Quartier des Marchands - richesse et dorures sous bonne garde", "Les Faubourgs - cœur de la solidarité populaire"],
  },

  // ──────────────────────────────────────────
  // SYLVESTRI — Royaume de la Nature (Sud)
  // ──────────────────────────────────────────
  {
    id: 'elderwatch',
    nom: 'Elderwatch',
    royaume: 'sylvestri',
    type: 'ville',
    x: 50.5, y: 74,
    icon: '🌿',
    description:
      "L'une des villes les plus anciennes de Sylvestri, gardienne des savoirs ancestraux des elfes. Ses archivistes protègent des connaissances millénaires sur la nature, la magie et les créatures du monde.",
    coutumes: [
      "On ne parle qu'à voix basse dans les allées boisées d'Elderwatch.",
      "Planter un arbre est le premier acte exigé de tout nouveau résident de la ville.",
      "Les anciens du Conseil tranchent tous les litiges - leur parole est loi immuable.",
      "Couper un arbre vivant sans permission équivaut à un meurtre selon la loi locale.",
    ],
    pointsInteret: ["L'Archive des Anciens d'Elderwatch", "Le Bosquet Sacré", "Le Pont de Lierre Millénaire"],
  },
  {
    id: 'siriathian',
    nom: 'Siriathian',
    royaume: 'sylvestri',
    type: 'ville',
    x: 62.75, y: 70,
    icon: '🌙',
    description:
      "Ville elfe connue pour ses festivités nocturnes et sa relation particulière avec la lune. Les Siriathiens pratiquent la magie lunaire et organisent leurs cérémonies selon les phases de la lune.",
    coutumes: [
      "Les décisions importantes ne se prennent qu'à la pleine lune, réunis sous le ciel ouvert.",
      "Dormir sous les étoiles au moins une nuit par mois est une tradition sacrée pour tout habitant.",
      "On offre de la lumière - une bougie, une lanterne - plutôt que de l'or aux étrangers de passage.",
    ],
    pointsInteret: ["L'Observatoire Lunaire de Siriathian", "Le Lac des Reflets", "La Foire de la Pleine Lune"],
  },
  {
    id: 'aewood',
    nom: 'Aewood',
    royaume: 'sylvestri',
    type: 'capitale',
    x: 69, y: 81,
    icon: '🏫',
    description:
      "Siège de l'Académie de Magie Étherium, la plus grande et ancienne école de sorcellerie d'Astrenor. Aewood attire des aspirants mages du monde entier pour ses enseignements et ses archevêques légendaires.",
    coutumes: [
      "Les apprentis mages portent une robe grise jusqu'à leur premier sort réussi en examen.",
      "Aucune magie destructrice n'est tolérée dans l'enceinte de la ville - l'expulsion est immédiate.",
      "Les Archevêques de l'Étherium ont droit à une révérence lorsqu'on les croise dans les rues.",
      "Toute nouvelle découverte magique doit être déclarée à l'Académie avant d'être pratiquée.",
    ],
    pointsInteret: ["L'Académie Étherium", "La Tour des Archevêques", "La Forêt d'Entraînement des Mages"],
  },
  {
    id: 'sylath',
    nom: 'Sylath',
    royaume: 'sylvestri',
    type: 'village',
    x: 39.5, y: 80.5,
    icon: '🦌',
    description:
      "Village sylvestre renommé pour ses druides et ses guérisseurs. Les habitants de Sylath entretiennent un lien sacré avec les animaux de la forêt, dont beaucoup cohabitent librement avec les villageois.",
    coutumes: [
      "Nuire à un animal dans le village est punissable d'exil immédiat et sans appel.",
      "Chaque enfant choisit un animal totem lors d'un rituel initiatique à ses 7 ans.",
      "On soigne les blessés avant de demander qui ils sont ni d'où ils viennent.",
    ],
    pointsInteret: ["Le Sanctuaire des Bêtes", "La Cabane des Druides de Sylath", "La Source de Guérison"],
  },
  {
    id: 'keatheile',
    nom: 'Keatheile',
    royaume: 'sylvestri',
    type: 'village',
    x: 58.5, y: 86,
    icon: '🍄',
    description:
      "Village des herboristes et alchimistes naturels de Sylvestri. Keatheile est entouré d'une forêt de champignons géants luminescents servant à la confection de nombreuses potions et remèdes.",
    coutumes: [
      "Cueillir un champignon sans permission du chef herboriste est un délit grave.",
      "Les potions de Keatheile sont scellées à la cire de champignon et reconnaissables à leur parfum unique.",
      "Les visiteurs reçoivent une potion de bienvenue - la refuser est une offense.",
    ],
    pointsInteret: ["La Forêt de Champignons Luminescents", "L'Atelier des Alchimistes", "Le Marché des Herbes Rares"],
  },
  {
    id: 'sylvanea',
    nom: 'Sylvanea',
    royaume: 'sylvestri',
    type: 'village',
    x: 42.5, y: 94,
    icon: '🏡',
    description:
      "Patelin à l'origine mystérieuse, à moitié en ruines, habité par quelques hurluberlus et gens de passage. Nul ne sait ce qui est arrivé aux anciens habitants. Le gouvernement de Sylvestri n'a même pas connaissance de l'existence du village : c'est une terre de retraite où se retrouvent des marginaux qui peuvent disparaître du jour au lendemain. On n'arrive à Sylvanea qu'au gré de la fortune.",
    coutumes: [
      "Nul ne pose de questions sur l'identité ou le passé d'un autre - chacun arrive à Sylvanea pour une raison qui lui appartient.",
      "Les rares habitants permanents accueillent les nouveaux arrivants sans cérémonie ni méfiance excessive : la survie est une affaire collective.",
      "Il est de coutume de laisser une marque discrète sur un mur en partant, seul témoignage que l'on a existé ici.",
      "Les ruines du village ancien sont interdites la nuit - non par loi, mais par une peur tacite et partagée de tous.",
    ],
    pointsInteret: ["Les Ruines de l'Ancien Village", "La Grande Forêt Environnante", "La Taverne des Marginaux - seul bâtiment vraiment entretenu", "Le Puits Central"],
  },
];
