export type TypeTerritoire = 'fief-lilim' | 'territoire';

export interface Territoire {
  id: string;
  nom: string;
  souverain: string;
  type: TypeTerritoire;
  x: number; // % depuis la gauche
  y: number; // % depuis le haut
  icon: string;
  environnement: string;
  description: string;
  population: string;
  coutumes: string[];
  pointsInteret: string[];
}

export const typeLabels: Record<TypeTerritoire, string> = {
  'fief-lilim': 'Fief des Lilim',
  territoire: 'Territoire',
};

export const territoires: Territoire[] = [
  {
    id: 'lostmire',
    nom: 'Lostmire',
    souverain: 'Les Lilim',
    type: 'fief-lilim',
    x: 63.5, y: 57,
    icon: '🌺',
    environnement: 'Forêt fleurie',
    description:
      "Le seul territoire des Enfers façonné directement par la fratrie qui les habite. Là où le reste du royaume souterrain n'est que neige, pluie, herbe rase ou cendres, Lostmire s'étend en une forêt dense dont les arbres portent feuillage et fleurs à la fois - une anomalie que même les démons les plus anciens ne savent expliquer. C'est ici que les Lilim reviennent lorsqu'ils quittent la surface, et peu de créatures s'aventurent sous ses frondaisons sans y être invitées.",
    population: "Démons au service direct des Lilim, ainsi que quelques créatures uniques nées de leurs pouvoirs",
    coutumes: [
      "Nul ne cueille une fleur de Lostmire sans la permission d'un Lilim - la légende veut que chaque fleur soit liée à un souvenir de la fratrie.",
      "Les rares visiteurs laissent une offrande à l'orée du bois avant d'y pénétrer, par superstition plus que par obligation.",
      "On ne hausse jamais la voix sous les frondaisons de Lostmire, le silence y est presque religieux.",
    ],
    pointsInteret: [
      "Le Bois-aux-Sept-Pétales - sentier légendaire où l'on dit que chaque Lilim a planté un arbre à sa naissance",
      "La Clairière du Repos - lieu où les Lilim se retrouvent entre deux séjours à la surface",
      "Les Sentiers Sans Fin - chemins qui, selon la rumeur, ne mènent qu'où les Lilim veulent bien laisser aller",
    ],
  },
  {
    id: 'valdremyr',
    nom: 'Valdremyr',
    souverain: 'Reine Isolde de Frimas',
    type: 'territoire',
    x: 27.5, y: 18,
    icon: '❄️',
    environnement: 'Neige éternelle',
    description:
      "Tout au nord des Enfers connus, Valdremyr est une étendue de pins pétrifiés par un gel qui ne fond jamais, où la neige tombe sans discontinuer depuis des siècles. La Reine Isolde de Frimas y règne depuis une demeure de glace noire nichée au cœur de la forêt pétrifiée. Comme tous les souverains des Enfers, on raconte qu'il lui est presque impossible de quitter durablement son territoire une fois le trône occupé - un lien qui la maintient, à ce qu'on dit, autant qu'elle le maintient.",
    population: "Démons du givre et créatures adaptées au froid extrême, peu nombreuses mais redoutées",
    coutumes: [
      "S'éloigner du chemin balisé sans torche de glaceflamme est considéré comme un suicide, et personne ne part à la recherche de celui qui l'a fait.",
      "Offrir un fragment de glace noire taillée de sa main est le plus grand des présents que l'on puisse faire à un habitant de Valdremyr.",
      "On ne prononce jamais le nom de la Reine à voix haute en dehors de sa demeure - on parle d'elle par gestes.",
    ],
    pointsInteret: [
      "La Demeure de Glace Noire - résidence de la Reine Isolde, visible depuis l'orée de la forêt pétrifiée",
      "Le Chemin de Frimas - unique route praticable à travers la forêt, éclairée de loin en loin par des flammes bleutées",
      "Les Pins Pétrifiés - arbres figés dans un gel millénaire, dit-on aussi vieux que le territoire lui-même",
    ],
  },
  {
    id: 'cinderfeld',
    nom: 'CinderFeld',
    souverain: 'Roi Malachar Cendrenoir',
    type: 'territoire',
    x: 7.5, y: 88,
    icon: '🌋',
    environnement: 'Terre aride et rivières de lave',
    description:
      "Aux confins arides des Enfers, CinderFeld tient son nom des champs de cendre qui l'entourent, striés de lentes rivières de lave. Son palais aux dômes dorés, visible à des lieues à la ronde, abrite le Roi Malachar Cendrenoir, dont on dit qu'il ne quitte jamais son trône de peur que la terre elle-même ne se refroidisse en son absence.",
    population: "Démons de cendre et de flamme, forgerons et créatures endurcies à la chaleur des rivières de lave",
    coutumes: [
      "Traverser une rivière de lave à pied nu, sans y être invité par le Roi, est un crime capital.",
      "Chaque forge de CinderFeld garde une braise perpétuelle allumée depuis le règne du premier souverain connu.",
      "On accueille les étrangers en leur offrant de l'eau plutôt que du vin - denrée la plus rare et la plus précieuse du territoire.",
    ],
    pointsInteret: [
      "Le Palais aux Dômes Dorés - résidence du Roi Malachar, seul bâtiment doré visible depuis les hauteurs environnantes",
      "Les Rivières de Cendrenoir - coulées de lave lente qui découpent le territoire en quartiers distincts",
      "Les Forges Éternelles - ateliers alimentés directement par la chaleur des rivières de lave",
    ],
  },
  {
    id: 'etherfall',
    nom: 'Etherfall',
    souverain: 'Reine Lyanor des Brumes',
    type: 'territoire',
    x: 58, y: 94,
    icon: '🌧️',
    environnement: 'Pluies perpétuelles',
    description:
      "Territoire baigné d'une pluie fine et continue, Etherfall doit son nom aux brumes éthérées qui montent du sol détrempé au lever de chaque cycle. La Reine Lyanor des Brumes y gouverne depuis une demeure à moitié engloutie par la végétation, où l'on dit que l'eau elle-même lui obéit.",
    population: "Démons des eaux et de la brume, réputés discrets et rarement vus hors de leur territoire",
    coutumes: [
      "On ne sort jamais sans capuche à Etherfall - montrer son visage nu sous la pluie est perçu comme une provocation envers la Reine.",
      "Les récoltes se font uniquement entre deux averses, à des horaires que seuls les initiés savent prédire.",
      "Un différend se règle traditionnellement en marchant ensemble jusqu'à la rivière la plus proche, sans échanger un mot avant d'y arriver.",
    ],
    pointsInteret: [
      "La Demeure Engloutie - résidence de la Reine Lyanor, à moitié recouverte par la végétation détrempée",
      "Les Chutes de Brume - cascades d'où s'élèvent les brumes éthérées qui donnent son nom au territoire",
      "Le Sentier Détrempé - unique route reliant Etherfall aux territoires voisins, souvent impraticable",
    ],
  },
  {
    id: 'solvane',
    nom: 'Solvane',
    souverain: 'Roi Aurelian de Solvane',
    type: 'territoire',
    x: 94, y: 95,
    icon: '🌾',
    environnement: 'Prairies infernales',
    description:
      "À l'extrémité orientale des Enfers, en bordure des eaux souterraines, Solvane est le territoire le plus verdoyant après Lostmire - de longues prairies d'herbe sombre battues par un vent tiède. Le Roi Aurelian, qui a donné son nom au territoire comme le veut la tradition de sa lignée, y règne dans une relative tranquillité, loin des rivalités des autres cours infernales.",
    population: "Démons des plaines, éleveurs et gardiens de troupeaux de créatures indigènes aux Enfers",
    coutumes: [
      "Un troupeau qui s'égare jusqu'aux terres d'un voisin lui revient de droit - nul ne va le récupérer.",
      "Les décisions du Roi Aurelian se prennent en plein champ, jamais entre quatre murs.",
      "On tresse l'herbe sombre de Solvane en bracelets offerts à quiconque quitte le territoire, en gage de retour.",
    ],
    pointsInteret: [
      "Les Prairies d'Aurelian - étendues d'herbe sombre qui donnent son surnom au territoire",
      "Le Rivage Souterrain - bordure des eaux qui séparent Solvane du reste des Enfers cartographiés",
      "Le Cercle du Roi - lieu à ciel ouvert où se tiennent les rares audiences royales",
    ],
  },
];
