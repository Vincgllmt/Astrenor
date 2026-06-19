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
      "L'heure est régie par les grandes horloges mécaniques de la place centrale — arriver en retard est une insulte.",
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
      "Le son des marteaux est considéré comme une musique sacrée — s'y opposer est un outrage.",
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
      "Ville portuaire de la côte ouest de Meltoria, Befohrt est un carrefour commercial entre les îles et le continent. Son marché aux poissons et ses tavernes animées en font une escale incontournable.",
    coutumes: [
      "Les pêcheurs chantent un refrain de bon augure avant de prendre la mer au lever du soleil.",
      "Les dettes de jeu contractées dans les tavernes de Befohrt sont considérées d'honneur sacré.",
      "Lancer une pièce de bronze dans le port avant un long voyage assure un retour sain et sauf.",
    ],
    pointsInteret: ["Le Port de Commerce de Befohrt", "Le Marché aux Poissons", "La Taverne du Poulpe"],
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
      "Un chevalier qui accepte un défi ne peut pas le refuser — le rejeter est une honte à vie.",
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
      "Les artisans signent toujours leurs œuvres d'un symbole personnel — copier ce symbole est un crime.",
      "Marchander est une tradition sacrée — proposer le prix affiché sans négocier est considéré impoli.",
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
    royaume: 'meltoria',
    type: 'forteresse',
    x: 50, y: 37,
    icon: '⛰️',
    description:
      "Ville-forteresse bâtie à flanc de montagne à la frontière entre Meltoria et Anduin, Astra est le verrou stratégique qui a résisté à toutes les offensives impériales durant la Guerre des Deux Siècles. Ses remparts de roche noire semblent faire corps avec la montagne elle-même.",
    coutumes: [
      "Les sentinelles ne dorment jamais plus de quatre heures d'affilée — une règle héritée des années de siège.",
      "Chaque habitant d'Astra, qu'il soit soldat ou marchand, sait manier une arme. L'entraînement est obligatoire dès l'enfance.",
      "Allumer un feu sur les remparts la nuit est un signal d'alarme — le faire par négligence est puni sévèrement.",
      "Les étrangers sont tolérés mais surveillés. Nul ne peut séjourner plus de trois jours sans se faire enregistrer auprès du Commandant.",
    ],
    pointsInteret: [
      "Les Remparts de Roche Noire",
      "La Salle des Commandants — mémorial des défenseurs d'Astra",
      "Le Col du Passage — défilé stratégique entre les deux royaumes",
      "La Forge d'Altitude — armurerie taillée dans la roche",
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
      "Cité mystérieuse à l'extrême est du continent, Khareth est une enclave indépendante que nul des trois royaumes n'a jamais pu conquérir. Son peuple est réputé pour ses arts divinatoires et ses marchandises rares introuvables ailleurs.",
    coutumes: [
      "Les habitants de Khareth ne révèlent jamais leur nom complet à un étranger — c'est donner prise sur son âme.",
      "Le thé aux épices est offert à toute personne franchissant les portes de la cité en signe de paix.",
      "Les transactions se font en silence, par signes de la main codifiés.",
      "Fixer quelqu'un dans les yeux trop longtemps est perçu comme une provocation.",
    ],
    pointsInteret: ["Le Bazar des Curiosités", "Le Temple des Devins", "Les Murs Anciens de Khareth"],
  },
  {
    id: 'hatbury',
    nom: 'Hatbury',
    royaume: 'independant',
    type: 'ville',
    x: 78, y: 71,
    icon: '🌊',
    description:
      "Ville portuaire indépendante au sud-est du continent, Hatbury commerce avec les trois royaumes sans appartenir à aucun. Ses marchands sont célèbres pour leur neutralité absolue et leur flair des affaires.",
    coutumes: [
      "Un contrat à Hatbury ne vaut que s'il est signé en présence d'un témoin neutre agréé.",
      "La couleur jaune est celle des marchands libres — la porter est une marque de respect commercial.",
      "Menacer un marchand dans son comptoir est punissable par la confiscation de tous ses biens.",
    ],
    pointsInteret: ["Le Port Neutre de Hatbury", "La Maison du Commerce Libre", "L'Entrepôt des Nations"],
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
      "Les anciens du Conseil tranchent tous les litiges — leur parole est loi immuable.",
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
      "On offre de la lumière — une bougie, une lanterne — plutôt que de l'or aux étrangers de passage.",
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
      "Aucune magie destructrice n'est tolérée dans l'enceinte de la ville — l'expulsion est immédiate.",
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
      "Les visiteurs reçoivent une potion de bienvenue — la refuser est une offense.",
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
      "La bourgade mystérieuse et cachée au bord de Sylvestri, entourée d'une immense forêt. Sylvanea est au cœur des aventures des héros d'Astrenor. Nulle trace de ses anciens habitants n'a jamais été trouvée.",
    coutumes: [
      "Le village se gouverne par un Conseil des Aînés, dont le renouveau est imminent.",
      "Les visiteurs sont accueillis avec méfiance mais traités avec honneur s'ils prouvent leur bonne foi.",
      "Le son des cloches du village annonce les réunions du conseil — tous doivent s'arrêter et écouter.",
      "Il est interdit de parler des ruines antiques aux étrangers — un tabou ancien et chargé de mystère.",
    ],
    pointsInteret: ["La Maison du Conseil", "La Grande Forêt Environnante", "Le Puits du Village", "Les Ruines Antiques"],
  },
];
