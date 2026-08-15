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
  population: string;
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
    population: "Humains, nains, minorités orcs et démons",
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
      "Le grand colisée",
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
      "Port militaire et industriel, construit pour durer plutôt que pour plaire. Les quais en acier renforcé accueillent les navires de guerre de l'Empire et les convois de ressources extraites du nord. La ville sent le charbon et le sel.",
    population: "Humains endurcis, ingénieurs navals, soldats en poste",
    coutumes: [
      "Les ingénieurs navals graveront toujours leurs initiales sur la première pièce d'acier posée d'un nouveau navire, c’est une tradition de fierté autant que de responsabilité",
      "On ne fête pas les départs, seulement les retours",
      "Offrir de l'huile de machine à un artisan est une marque de respect comparable à offrir du vin ailleurs",
    ],
    pointsInteret: [
        "Les Chantiers de Fer Noir. Les plus grands chantiers navals d'Anduin, bruyants jour et nuit",
        "La Tour de Vigie Mécanique. équipée de longues-vues à vapeur capables de détecter un navire à plusieurs lieues",
        "La Taverne du Fond de Cale. C’est le point de rendez-vous des marins et ingénieurs, réputée pour ses alcools forts et ses bagarres mémorables",
    ],
  },
  {
    id: 'barrencrag',
    nom: 'Barrencrag',
    royaume: 'anduin',
    type: 'forteresse',
    x: 65, y: 11,
    icon: '🏔️',
    description:
      "",
    population: "",
    coutumes: [
      "",
    ],
    pointsInteret: [],
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
    population: "",
    coutumes: [
      "Offrir une rose d'acier forgée à la main est le signe d'un profond respect.",
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
      "",
    population: "",
    coutumes: [
      ""
    ],
    pointsInteret: [],
  },
  {
    id: 'haufen',
    nom: 'Haufen',
    royaume: 'anduin',
    type: 'ville',
    x: 66.5, y: 35.5,
    icon: '⛏️',
    description:
      "",
    population: "",
    coutumes: [
      ""
    ],
    pointsInteret: [],
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
    population: "Humains, nains, minorités elfes, lycanthropes, vampiriques et demi-orcs",
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
    id: 'gives',
    nom: 'Gives',
    royaume: 'meltoria',
    type: 'ville',
    x: 34, y: 38,
    icon: '🍇',
    description:
      "Les activités principales de Gives et alentours sont la chasse et l'élevage de bétail, dû à la forêt à l'ouest et les grands pâturages vallonnés entre les montagnes à l'est. Bien que les alentours pourraient sembler secs à première vue, le grand lac au sud-ouest est en réalité formé par des ruisseaux créés par la fonte des neiges des montagnes environnantes, irriguant la région. Dû à la proximité entre Gives et Majestia, la richesse de la capitale impacte positivement la ville. Gives devint de ce fait le premier exportateur de produits animaliers du royaume, et approvisionne même le marché international dans les bonnes années. La relative richesse de la ville et la nature de ses activités entraîna la création d'un marché florissant ainsi qu'une fête associée. En résumé, la vie à Gives est heureuse, les gens n'ont pas faim et sont accueillants, même si les alentours peuvent être dangereux; car au-delà des bêtes sauvages et monstres de la région l'on peut voir sa charrette attaquée par des brigands. Ceux-ci sont bien au fait de la valeur des marchandises des fermes alentour, et ils savent la garde moins importante qu'à la capitale. Ce faisant, Gives est malheureusement une cible de choix.",
    population: "Humains en quasi-totalité. Les nains sont présents dans la région mais n'ont pas tendance à faire de l'élevage ni même à descendre des montagnes",
    coutumes: [],
    pointsInteret: [],
  },
  {
    id: 'courtin',
    nom: 'Courtin',
    royaume: 'meltoria',
    type: 'ville',
    x: 32, y: 60,
    icon: '⚖️',
    description:
      "Port marchand animé, considéré comme l'une des villes les plus pieuses de Meltoria. La mer y est perçue comme un don du Père et de la Mère conjointement : le premier pour la force qu'elle exige, la seconde pour la vie qu'elle nourrit. Les marins de Courtin sont réputés dans tout le continent pour leur superstition et leur foi inébranlable.",
    population: "Humains majoritairement, avec une présence notable de demi-elfes attirés par le commerce ",
    coutumes: [
        "Avant chaque départ en mer, les marins suspendent une offrande votive au temple du port composé d’une pièce pour le Père et d’une fleur pour la Mère ",
        "Le premier poisson de la saison est toujours rejeté à la mer, offert aux dieux en signe de gratitude ",
    ],
    pointsInteret: [
        "Le Grand Marché des Marées. Actif dès l'aube, fermé à midi, rythmé par les cloches du temple voisin",
        "Le Temple des Cinq Vagues. C’est un temple unique dédié aux cinq dieux avec cinq autels distincts. A noter que celui de l’Orphelin est relégué dans une alcôve sombre à l’écart des autres\n",
        "Les Docks des Guildes. Chaque guilde marchande y possède son entrepôt et chacune a son propre dévot attitré pour bénir les cargaisons",
        "La Maison du Dernier Passage. Discret bâtiment en retrait du port, géré par les prêtres de l’Orphelin, où sont préparés les défunts de la mer"
    ],
  },
  {
    id: 'escren',
    nom: 'Escren',
    royaume: 'meltoria',
    type: 'ville',
    x: 46, y: 45,
    icon: '🛡️',
    description:
      "",
    population: "",
    coutumes: [
      "",
      "",
      "",
    ],
    pointsInteret: [],
  },
  {
    id: 'marmonthicy',
    nom: 'Marmonthicy',
    royaume: 'meltoria',
    type: 'ville',
    x: 61, y: 49,
    icon: '🏺',
    description:
      "Comté viticole gouverné par la maison De Marmonthicy, dont la lignée a tenu bon face à l'empire anduinois pendant la grande guerre malgré la proximité de la frontière. La famille incarne les valeurs meltoriennes dans ce qu'elles ont de plus classique : honneur, commerce et fierté du terroir. L'aîné Lucius prépare sa succession de comte tandis que son cadet Cecilius s'illustre au combat. Le troisième fils, Raphaël, fragilisé depuis la naissance, s'est construit une réputation d'érudit à défaut de pouvoir manier l'épée, et l'on dit qu'il nourrit un rêve aussi tenace que discret. La région est surtout connue pour ses vignes et ses vins, dont les cuvées alimentent les tables des nobles du royaume.",
    population: "Diverse, mais on y trouve plus d'humains qu'autres choses",
    coutumes: [
      "Briser un verre de vin lors d'une dispute est un affront impardonnable qui réclame réparation.",
      "Les vendanges donnent lieu à une semaine de festivités où tous les travaux s'arrêtent.",
      "On scelle les accords importants en partageant un verre du vin de la maison.",
    ],
    pointsInteret: [
      "Le Domaine des Ceps d'Or",
      "Le Marché du Vin de Marmonthicy",
      "La Cave Ancestrale des Sept Tonneaux",
    ],
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
    population: "",
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
    population: "",
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
      "Ville fortifiée nichée dans un canyon, seul passage praticable à travers les montagnes de Lassiera. Astra fut pendant des siècles la plus grande caserne frontalière de l'Empire d'Anduin - c'est d'ailleurs de là que fut lancée l'offensive de la Grande Guerre. Cédée à Meltoria par le Grand Accord de Sylvarin, elle vient d'être reconquise par le général Belarius Mephiston, qui s'est autoproclamé Marquis et a refortifié la place avec de l'artillerie lourde, en violation ouverte de la paix de 19 ans. Sa tour de garde, longtemps simple attraction touristique, surveille de nouveau la frontière comme aux heures de la guerre.",
    population: "Majoritairement humaine : garnison anduinoise nouvellement installée et habitants meltoriens restés sur place, sous contrôle militaire",
    coutumes: [
      "Tout étranger en transit doit décliner son identité et sa destination au poste de contrôle - Astra ne connaît pas d'anonymes.",
      "Les marchands côtoient les soldats sans distinction dans les tavernes : la ville reste cosmopolite malgré l'occupation, et la hiérarchie militaire s'arrête au seuil des casernes.",
      "Monter au sommet de la Grande Tour au lever du soleil est un rite de passage pour tout nouveau résident, garnison comprise.",
      "Les duels sont tolérés dans l'arène désignée, mais la bagarre dans les rues vaut une nuit de cellule - l'ordre prime sur tout.",
      "Depuis la reconquête, les bannières et symboles royaux meltoriens ont été retirés des façades sur ordre du Marquis Belarius - certains habitants les dissimulent malgré tout chez eux.",
    ],
    pointsInteret: [
      "La Grande Tour de Garde - vue panoramique sur les montagnes de Lassiera",
      "La Caserne Impériale d'Anduin - refortifiée par Belarius Mephiston depuis la reconquête",
      "Le Col du Canon - défilé stratégique et mémorial de la Grande Guerre",
      "Le Marché du Carrefour - marchandises des trois royaumes en un seul endroit",
    ],
  },

  // ──────────────────────────────────────────
  // INDÉPENDANTS
  // ──────────────────────────────────────────
  {
    id: 'befohrt',
    nom: 'Befohrt',
    royaume: 'independant',
    type: 'ville',
    x: 23, y: 64,
    icon: '⚓',
    description:
      "Île surnommée « la Virgule » par les marins pour sa forme incurvée, Befohrt est un territoire que Meltoria et Sylvestri revendiquent tous deux sur le papier - chartes féodales contradictoires à l'appui - sans qu'aucun des deux royaumes n'ait jamais jugé l'enjeu assez important pour lever une armée. Dans les faits, l'île n'obéit qu'à elle-même. Ses côtes sont de longues falaises bordées de récifs et noyées dans un brouillard épais qui rendent la navigation impossible aux non-initiés ; maints capitaines refusent d'en approcher. La Baronnie Levonhardt, installée dans la ville portuaire et prospère grâce à la pêche, y fait régner un semblant d'ordre et arme une flotte corsaire pour protéger ses eaux - mais au-delà des murs du port, les grottes des falaises et la jungle vierge de l'intérieur abritent un repaire de pirates que la baronne Isadora n'est jamais parvenue à déloger.",
    population: "Diverse - pêcheurs et corsaires de la Baronnie, plus de races minoritaires que la moyenne, sans compter la population flottante des grottes",
    coutumes: [
      "Un capitaine qui connaît le chemin entre les récifs ne partage jamais cette connaissance librement - c'est sa véritable fortune, que l'on navigue pour la Baronnie ou contre elle.",
      "Dans les tavernes, on paye ses dettes de jeu ou l'on quitte l'île : les créanciers ici ont des arguments convaincants.",
      "Voler un autre habitant dans l'enceinte du port est le seul crime unanimement puni par la garde Levonhardt - au-delà des murs, c'est une autre loi qui règne.",
      "Les nouveaux arrivants doivent offrir une tournée générale à la taverne la plus proche : c'est le droit d'entrée non officiel, corsaire comme pirate.",
    ],
    pointsInteret: [
      "Le Manoir Levonhardt - siège de la Baronnie, dominant le port",
      "Les Grottes des Falaises - repaire de pirates que la garde n'a jamais réussi à nettoyer",
      "La Taverne de la Brume - terrain neutre où corsaires et pirates boivent côte à côte",
      "Le Sentier des Initiés - seule route navigable entre les récifs, jalousement gardée par ceux qui la connaissent",
      "La Jungle Vierge de l'Île - faune colorée et endémique, refuge de ceux qui fuient le port",
    ],
  },
  {
    id: 'khareth',
    nom: 'Khareth',
    royaume: 'independant',
    type: 'cité',
    x: 83, y: 50,
    icon: '🏜️',
    description:
      "Presqu'île désertique techniquement rattachée à Meltoria, Khareth vit dans une indépendance de fait que les deux partis semblent apprécier. Terre d'excellence artisanale, elle abrite les verriers, sculpteurs et enchanteurs les plus réputés du continent. Ses marchands intrépides sillonnent le monde entier en caravane, exportant œuvres d'art, objets magiques et venin de S'nek, et rapportant des marchandises exotiques jusqu'aux coins les plus reculés d'Astrenor.",
    population: "Lamias, humains, demi-humains du désert et quelques elfes y vivent en harmonie",
    coutumes: [
      "Les caravanes marchandes de Khareth sont une institution : quitter la cité au moins une fois dans sa vie pour vendre ses œuvres à travers le monde est un rite de passage.",
      "La richesse générée par le commerce extérieur est redistribuée via un réseau d'entraide intérieur - programmes d'éducation et d'emploi financés collectivement.",
      "Un artisan qui vend une pièce défectueuse est tenu de rembourser le double de la valeur et de refaire l'objet gratuitement.",
      "Le venin de S'nek est une denrée réglementée : seuls les négociants agréés par le conseil de la cité ont le droit de le commercialiser.",
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
    population: "Lamias, demi-humains du désert, sirènes et tritons vivent aux alentours",
    coutumes: [
      "La population générale ne possède pas de nom : un nom se gagne par ses exploits, pas à la naissance.",
      "Il n'est pas rare que des parents abandonnent leurs enfants dès leur jeune âge, ne pouvant en assumer la charge dans ces conditions extrêmes.",
      "La solidarité entre pauvres est une loi non écrite et sacrée - partager ce que l'on a avec plus démuni que soi est la seule règle universellement respectée.",
      "La méfiance envers toute forme d'autorité est profondément ancrée, tant la corruption y est endémique.",
    ],
    pointsInteret: [
      "Le Port de la Côte Ouest",
      "Le quartier des marchands",
      "Les Faubourgs",
    ],
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
      "Ancienne capitale de Sylvestri, il s'agit aujourd'hui d'une ville magnifique bien que partiellement en ruines dans laquelle la magie abonde. Ce fut la terre ancestrale des elfes, et désormais seuls les elfes blancs l'habitent encore. On raconte qu'une grande catastrophe aurait été à l'origine de l'état délabré du lieu et aurait causé l'exil des divers clans d'elfes, qui évolueront plus tard chacun de leur côté pour donner les variantes elfiques. Les caractéristiques de la culture elfique sont particulièrement exacerbées à Elderwatch; le traumatisme des anciennes incursions de géants puis d'orcs a engendré les facettes les plus dures de cette culture : attentes sociales élevées, mise en valeur du potentiel magique, eugénisme et méfiance envers les étrangers. Malgré leur histoire teintée de tragédies, le peuple elfe d'Elderwatch s'efforce de faire du lieu un endroit où il fait bon vivre pour qui montre patte blanche. Le temps semble s'y être arrêté tant les traditions et l'esprit de préservation sont forts parmi la population elfique.",
    population: "Elfes blancs. Il existe des minorités d'elfes d'autres groupes mais elles sont moindres pour des raisons culturelles, bien qu'ils soient les bienvenus",
    coutumes: [
      "On ne parle qu'à voix basse dans les allées boisées d'Elderwatch.",
      "Planter un arbre est le premier acte exigé de tout nouveau résident de la ville.",
      "Les anciens du Conseil tranchent tous les litiges - leur parole fait loi.",
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
      "Fief des elfes bruns après leur exil d'Elderwatch. C'est une ville joviale mais peu peuplée; les elfes bruns comptent beaucoup de chasseurs qui embrassent un mode de vie nomade peu compatible avec la vie en communauté. Une partie non négligeable aspire cependant à une vie moins incertaine et se nourrit grâce à l'élevage. Siriathian incarne cette culture : bien que ne rivalisant pas avec Gives en quantité, la ville se targue d'une variété d'animaux et d'une gastronomie reconnue dans le domaine carnivore. Destination privilégiée, elle compte de nombreuses tavernes et auberges prestigieuses pour voyageurs fortunés. Les elfes du coin organisent régulièrement des tournois de tir à l'arc, des parties de chasse ouverte ou des visites guidées de la forêt. Malgré cette exposition au monde extérieur, les elfes bruns de Siriathian n'accordent pas facilement leur confiance aux étrangers.",
    population: "Elfes bruns, mais certains humains et demi-humains qui ont décidé de rester après leur visite",
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
    population: "Elfes, fées, demi-humains, minorités humaines, dryades et lamias",
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
    population: "",
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
      "Ville côtière à moitié construite sur l'eau, à moitié enchâssée dans les falaises couvertes de végétation. Les habitants ont développé une relation particulière avec les marées, qu'ils lisent comme des présages magiques. L'académie d'Aewood y envoie parfois ses étudiants étudier les courants magiques océaniques.",
    population: "Elfes et humains principalement, quelques rares créatures marines semi-intelligentes tolérées en périphérie",
    coutumes: [
        "La lecture des marées est une pratique courante et certains habitants lisent l'avenir dans le mouvement de l'eau.",
        "Les maisons sont construites de façon à laisser passer le vent marin librement, bloquer le vent est considéré comme un porte malheur.",
        "Les naissances survenues lors de la marée haute sont perçues comme un signe de destin exceptionnel."
    ],
    pointsInteret: [
        "Les Jardins Suspendus de la Falaise.  De beaux jardins magiques accrochés aux parois, arrosés par les embruns",
        "Le phare des Murmures. Il émet une lumière teintée selon les courants magiques, servant de guide spirituel et maritime.",
        "Les Bassins d'Étude. Ce sont des piscines naturelles utilisées par les apprentis mages pour observer la magie aquatique à l'état brut"
    ],
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
    population: "Diverse",
    coutumes: [
      "Nul ne pose de questions sur l'identité ou le passé d'un autre - chacun arrive à Sylvanea pour une raison qui lui appartient.",
      "Les rares habitants permanents accueillent les nouveaux arrivants sans cérémonie ni méfiance excessive : la survie est une affaire collective.",
      "Il est de coutume de laisser une marque discrète sur un mur en partant, seul témoignage que l'on a existé ici.",
      "Les ruines du village ancien sont interdites la nuit - non par loi, mais par une peur tacite et partagée de tous.",
    ],
    pointsInteret: ["Les Ruines de l'Ancien Village", "La Grande Forêt Environnante", "La Taverne des Marginaux", "Le Puits Central"],
  },
];
