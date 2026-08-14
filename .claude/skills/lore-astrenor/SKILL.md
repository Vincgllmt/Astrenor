---
name: lore-astrenor
description: Mémo du lore complet du site Astrenor (royaumes, histoire, religion, magie, races, bestiaire, enfers, légendes, almanach, villes, quêtes). À charger dès qu'on écrit, modifie ou vérifie du contenu narratif sur Astrenor, qu'on ajoute une ville/faction/personnage, ou qu'on veut vérifier la cohérence scénaristique avant de publier. Ce fichier est un document vivant : à mettre à jour quand le lore évolue.
---

# Lore d'Astrenor — mémo de référence

Ce skill résume le canon du site (Next.js, `src/app/**/page.tsx` + `src/app/carte/villes.ts`). Objectif : avoir en tête l'essentiel sans relire tout le site, et servir de garde-fou de cohérence quand on ajoute du contenu. **Si le lore change dans le code, mets ce fichier à jour dans la foulée** (il n'y a pas de source de vérité séparée — le code des pages EST le canon).

Repères temporels : la Guerre des Deux Siècles a duré ~200 ans et s'est achevée il y a **19 ans** (Grand Accord de Sylvarin). C'est le point zéro de la chronologie "présent" du site.

## Géographie générale

- **Astrenor** : continent unique portant les 3 royaumes + cités indépendantes.
- **Anduin** (nord, terres gelées) — Empire mécanique. Capitale : **Ravengulch**.
- **Meltoria** (centre) — Royaume féodal, le seul vrai "royaume" politiquement. Capitale : **Majestia**.
- **Sylvestri** (sud) — Fédération de villages elfiques/magiques, berceau de la magie, pays le plus vieux du continent. Capitale de facto : **Aewood** (siège de l'Académie).
- **Les Enfers** : royaume souterrain des démons, sous le continent, créé par les dieux. Carte séparée (`public/map/carte_enfer_astrenor.png`).
- **Oryn** : satellite naturel (lune) d'où viennent les Démonides Astrales — quasi pas développé.
- **Sonihelm** : île flottante au-dessus des nuages, habitat des anges — quasi pas développé.
- Un « continent des dragons », jamais nommé ni cartographié, existe quelque part au loin (les dragons y ont fui après avoir été chassés d'Astrenor).
- Monnaie commune : le **Rufiyaa** (10 bronze = 1 argent, 100 argent = 1 or, 1000 or = 1 platine).

## Chronologie condensée

1. **Temps immémoriaux** : Néantith souffle sur le monde (légende), mana né en Sylvestri. Naissance des Lilim (7 enfants trop puissants, bannis en Enfer bien avant la formation des royaumes).
2. **~500 ans avant aujourd'hui** : Ujith Thano "le Vainqueur" (vampire) unifie les clans du nord et fonde l'Empire d'Anduin (colons issus de Meltoria). Devise : Ordre-Honneur-Mérite.
3. Hacua Thano "la Génie" (fille d'Ujith) : devise devient Ordre-Recherche-Mérite ; début du mépris de la magie.
4. Nizhuc Thano "l'Érudit" : désendoctrinement religieux, humanisme, loi du plus fort ; décapité lors d'une révolte (menée par Shujoz Aesgrarn) **~300 ans avant la guerre**.
5. Ethelmer "le Conquérant" (descendant du meneur de la révolte) déclenche la **Guerre des Deux Siècles** en envahissant Meltoria pour atteindre Sylvestri (accès à la magie).
6. ~200 ans de guerre : avantage technologique d'Anduin (armes à feu) vs magie de l'alliance Meltoria-Sylvestri. Guerre d'usure, impasse.
7. Skarlet et ses sœurs (générales) percent le front, puis Skarlet fait un **coup d'État** contre l'empereur, prend le pouvoir et propose la paix.
8. **Le Grand Accord de Sylvarin** met fin à la guerre — point zéro, "il y a 19 ans".
9. Présent : paix fragile. Événements récents notables (voir plus bas) — massacre du Culte d'Eldritch, attaques de dragons, prise d'Astra par Belarius Mephiston (violation du traité).

## Les trois royaumes

### Meltoria — le royaume féodal
- Roi actuel : **Aegon Tabarly**, "le Roi-Sorcier" (mage lui-même), 53 ans, dernier de la lignée Tabarly, sans épouse ni héritier. (Roi à 20 ans, paix obtenue à 34 ans, +19 ans de paix = 53 ans aujourd'hui — cohérent avec le reste du site.)
- Lignée royale : Roderick le Fondateur (devenu "le Convoiteux") → Melfred (mines de mithril/orichalque, épouse une elfe) → Hector le Bon → Arthur le Roi-Guerrier (demi-elfe, mort à 141 ans) → Edgar & Alésia (parents d'Aegon, morts tragiquement) → **Aegon**.
- Culture : chevaleresque, collectiviste, très centralisée autour de Majestia. Panthéon des Cinq Dieux (voir Religion).
- Factions notables : Culte d'Eldritch (traqué/éradiqué récemment, prêtresse/apôtre **Emily Morgan** en fuite — le site alterne les deux titres), famille Yeomford (4ᵉ branche = assassins, "Les Dix"), maison Marlaan (dirigée par "Madame Marlaan" = **Alyzée**, une succube — sa compagne est la Lilim **Hego**, qui partage avec elle le manoir et le titre officieux de "Maîtresse du Manoir", voir Enfers ; très peu de monde sait qui Hego est réellement), clan Ombresang (barbares, Déesse Rouge), famille Marmonthicy (viticulture, frontière est), Dagues de Sicars (assassins clandestins), famille Morgan (parents d'Emily), Fils de l'Éclipse (secte du Nord, culte de la mort et de l'Orphelin).

### Sylvestri — nature et magie
- Pas de dirigeant unique : Conseil des chefs de village. Pays le plus ancien et le plus magique.
- Magie née ici, partagée aux humains par les elfes (→ premiers Sorciers). Forêt Consciente : empêche les intrus trop puissants d'entrer dans certaines zones.
- Berceau des demi-humains (mi-humains mi-animaux).
- **Sylvanea** : village caché, point de départ narratif du jeu/RP. Fondateurs : Takanashi Filo (lapine, bibliothécaire), Nécéron Amane (jeune dragon forgeron), VanHeart Esmeralda (future gouvernante). Sentiment d'être "guidé" jusque-là. Abrite aussi la Colonie de l'Ancêtre (horreur insectoïde) et Damask (Lilim de l'Envie).
- **Académie Étherium** (Aewood, 500+ ans, fondateur effacé des registres — probablement Pandore) : cursus 5 ans apprentissage + 5 ans recherche, mixité limitée. Rangs : Évêque (thèse) → Archevêque (doit quitter l'académie immédiatement).
- Les Cinq Archevêques connus : **Zarestia** (invocations/portails), **Pandore** (altération de la réalité — aurait peut-être effacé d'autres archevêques), **L'Innommé** (champ de force mortel, identité inconnue), **Oboreru** (oblitération par le regard), **Tel'var** (runes/lumière, aurait vaincu un dragon seul pendant la guerre).
- Autres factions : Baronnie de Befohrt (île de la Virgule, famille Levonhardt, corsaires), famille Magikus (mages elfiques de Keatheile), Astriens (elfes noirs astrologues), Temple de l'Esprit (Felin Von Sparda), Lilims (faction démoniaque récemment arrivée, cherche des alliances).
- Ordre des Cathares (voir Religion) : chassés en Sylvestri après leur disgrâce à Meltoria, ont bâti Innistrad — détruit par une armée elfique pendant la guerre pour avoir servi Anduin.

### Anduin — l'empire mécanique
- Impératrice actuelle : **Skarlet**, ancienne générale devenue dirigeante juste après son coup d'État.
- Fondé par des colons meltoriens fuyant/cherchant l'aventure ; très pauvre en mana (15% vs 100% Sylvestri, 60% Meltoria) → la poudre à canon remplace la magie.
- Culture guerrière et frugale (inspiration scandinave), méritocratique, égalitaire (peu importe genre/race), individualiste mais pragmatique. Commerce très fermé (import oui, export jalousement gardé).
- Factions : famille Mephiston (généraux — **Belarius Mephiston** a conquis Astra récemment, s'est autoproclamé Marquis, viole le traité de paix), Nains d'Anduin (poudre/vapeur/ingénierie), famille Nécéron (dragons/demi-dragons vivant en humains à la frontière), famille Schwartzmann (trafic humain).
- Les démons y sont le mieux acceptés (peu de magie = démons faibles) ; succubes appréciées dans les bordels.

## Religion

- **Panthéon meltorien des Cinq Dieux** : Le Père (guerriers/érudits, dynastie Tabarly = ses envoyés) ; La Mère (fertilité/amour, mariages) ; L'Héritier (artisans/ingénieurs) ; La Courtisane (arts/festivités, esprits torturés) ; L'Orphelin (ombre/mort/secret, hors de la famille divine, le plus laxiste).
- Au-delà : **le Parevis** (paradis) et **l'Himmel** (exil de l'Orphelin, enfer moral — à ne pas confondre avec "Les Enfers" des démons, lieu physique distinct).
- Anduin a rejeté ce panthéon (campagne de désendoctrinement de Nizhuc) → humanisme, "on croit en soi et en l'Empire".
- **Culte d'Eldritch** : dieu innommable (son nom ne peut être prononcé par les fidèles — "Eldritch" est-il un simple sobriquet ? non tranché), unique prêtresse **Emily Morgan**, langage secret **Ryl'hien**, dogme pacifiste en 9 commandements, culte traqué et éradiqué récemment par l'Église meltorienne.
- **Ordre des Cathares** : chevaliers déchus voués à **Avacyn** (déesse jour/nuit), nés il y a 600 ans à Meltoria pour chasser loups-garous/vampires, déchus il y a 300 ans, exilés à Innistrad (Sylvestri, détruit pendant la guerre). Hiérarchie : Grand-Maître → Prêtres → Forgerons de l'Aube (forge enchantée d'Avacyn) → Maîtres → Chevaliers → Écuyers. Recrutent uniquement des enfants. Effectifs : ~100 à la fondation, 500 à l'apogée, ~60 aujourd'hui.
- **Vermyros** : dieu du sang et des morts-vivants, origine des vampires "purs" (n'appartient pas au panthéon des Cinq, jamais relié explicitement au reste de la cosmologie).

## Magie

- Née en Sylvestri, transmise aux humains par les elfes. Répartition très inégale (Sylvestri 100%, Meltoria 60%, Anduin 15%).
- Formes : éléments, renforcement, soins, capacités ; spécialités avancées (sang, ténèbres, viral/poison, esprit, altération, nécromancie).
- Vie quotidienne : pierres magiques (eau/feu/glace/foudre) remplacent électroménager ; éclairage à la bougie sauf nobles.
- Niveaux (anneaux autour du cœur) : Débutant (0-1) → Intermédiaire (2-3) → Expert (4-6, "sans pouvoir", la magie a tout remplacé) → Évêque (6-15, diplômé académie) → Archevêque (15+, quasi divin). Un non-mage plafonne à Intermédiaire/Expert selon son "pouvoir" — la distinction pouvoir inné / magie académique n'est jamais formellement expliquée sur le site.
- **Runes** : magie accessible à tous sans affinité de mana requise, créées/maîtrisées par les nains des montagnes Meltoria-Anduin ; gravées (objets) ou dans l'air (volatiles, destructrices).

## Bestiaire (dangerosité : faible/moyen/élevé/extrême/légendaire)

- Humanoïdes : Bandit (faible), Mage Noir (moyen), Sorcière Recluse (élevé).
- Naturelles : Chauve-souris géante, Loup Sylvestrien, Ours Sylvestre ("gardien de la forêt"), S'nek (serpent venimeux), Centaures.
- Monstres : Gobelin Cyclopéen, Champignon Géant, Nymphe, Tréant.
- Morts-vivants : Squelette, Zombie (peste d'Anduin).
- Magiques : Golem Arcanique, Esprits (feu/foudre/eau/terre/ténèbres/sacré — 2 derniers légendaires).
- **Salamandres Sylvestres** (9 sous-espèces) : Verte (commune) < Violette < Cyan < Jaune (meute) < **Rouge** (légendaire, vue une fois par le chasseur Adencia Pebbles).
- Draconiennes : Vouivre (élevé), et **les Dragons** (légendaire) — chassés du continent avant même la formation des royaumes par les seigneurs de Meltoria, exilés sur une terre lointaine (jamais nommée). Leur réapparition = présage de catastrophe. **Thread actif non résolu** : des attaques de dragons coordonnées et intelligentes détruisent des villes en ce moment ("Porteurs de Mort" comme **Chaldryd**, gestion de camps de prisonniers) — aucune explication du déclencheur, aucune carte, quasi aucun développement ailleurs sur le site.

## Races (sélection, non exhaustif)

- **Humains** (Meltoria, 80 ans), **Elfes** (Sylvestri, 200-300 ans, magie innée, eugénisme) — sous-races : Blancs/Hauts-Elfes (magie, Grand Conseil), Noirs (agilité/espionnage), de Sang (guerriers, auto-ostracisés), Bruns (nomades, matriarcat).
- **Nains** (frontière Meltoria-Anduin, 70 ans, créateurs des runes).
- Maudites : Lycanthropes (maladie, transmise par les loups sylvestres), Vampires (purs via Vermyros / impurs par transformation, immortels, affaiblis mais pas tués par le soleil), Ombres.
- Hybrides : Demi-Orcs, Demi-Démons, Mi-Bêtes.
- Créatures de Sylvestri : Demi-Humains, Dryades, Fées (immortelles), Sirènes/Tritons, Lamias, Krakenanthropus.
- Guerrières : Orcs (nés de géants + elfettes, exilés vers Anduin), Centaures.
- Enfers : Démons, Succubes/Incubes, Lamias infernales.
- Célestes/spirituelles : Anges (île Sonihelm), Fantômes (visibles, pas de rumeur d'invisibilité).
- Draconiques : Demi-Dragons (dont famille Nécéron).
- Astrales : Démonides Astrales (Oryn, se nourrissent d'émotions, croisées lors de pluies de comètes).

## Les Enfers & les Lilim

- Créés par les dieux pour bannir une fratrie de 7 enfants trop puissants (les **Lilim**), bien avant la formation des royaumes. Territoires variés, chacun avec son roi/reine. **Lostmire** = fief personnel des Lilim, seul lieu fleuri des Enfers.
- **La Porte** : seul passage vers la surface, longtemps scellée. Cassée récemment lors de l'attaque d'une dizaine d'anges (envoyés par un dieu) contre les Lilim — un seul Lilim les a repoussés, le chef des anges a été projeté sur Astrenor amnésique, jamais retourné au ciel (**thread non résolu**). Depuis, la Porte s'ouvre par intermittence.
- Réputation des démons par royaume : mal vus (Sylvestri) < tolérés/régulés (Meltoria) < bien acceptés (Anduin).
- **1ʳᵉ génération (7 péchés)** : Minorin (Orgueil, cheffe), Jezebel (Colère), Luci (Paresse, seul garçon, vit au manoir Marlaan), Hego (Luxure, "maîtresse du manoir" — à recouper avec Alyzée/Marlaan), Taiga (Gourmandise), Banshee (Avarice, reste en Enfer), Damask (Envie, vit à Sylvanea).
- **2ᵉ génération** : Ervalen (fils de Luci et d'une humaine).
- 8 Lilim au total actuellement. Neutres politiquement, n'interviennent pas dans les affaires du monde.
- Arts de combat créés par Luci (Paume Assoupie) et Minorin (Épée Impériale du Cristal Rouge).

## Légendes, rumeurs & argot (pour la couleur locale)

- Légendes notables : Anneaux Célestes, Fleurs des Mages Morts, L'Égaré au Cœur Vierge, La Gardienne de Sève, Pacte de Pierre et de Sang (trône de Meltoria), L'Enclume de l'Éclipse (rune interdite naine), Premier Souffle (**Néantith**, origine du mana), Serment de l'Oiseau de Verre (Académie ne doit pas enseigner "l'Altération d'Âme" — Pandore l'aurait pourtant trouvée), Le Mage sans Cercle ("Lys Cendrée", mage sans anneau rivalisant avec un Archevêque, nom banni).
- Almanach (`/almanach`) : potions, boissons/cocktails (beaucoup à la Taverne de Sylvanea, tenue par **Rin**), repas, expressions idiomatiques, titres singuliers (Marchombre, Veilleuse, Lame Effacée...), jurons. Utile pour écrire des dialogues typés par royaume.

## Villes clés (`src/app/carte/villes.ts`)

- Anduin : Ravengulch (capitale), Hazelhaven (port militaire), Rosenshire (roses d'acier), Barrencrag/Brien/Haufen (**fiches vides** — nom/position seulement, aucune description/coutume/population renseignée).
- Meltoria : Majestia (capitale), Befohrt (île pirate — homonyme de la Baronnie de Befohrt à Sylvestri, à ne pas confondre), Gives (élevage), Courtin (port pieux), Marmonthicy (viticulture, famille De Marmonthicy — Lucius/Cecilius/Raphaël), Signeroy (bibliothèque/scribes), Dorteres (agriculture), Escren (**fiche vide**).
- **Astra** : ancienne caserne frontalière d'Anduin (point de départ de l'offensive de la Grande Guerre), cédée à Meltoria par le Grand Accord de Sylvarin, puis **reconquise récemment par Belarius Mephiston** (autoproclamé Marquis, artillerie lourde) — violation ouverte de la paix de 19 ans. `villes.ts` la classe en `royaume: 'anduin'`, ce qui reflète ce contrôle militaire de fait ; description, population et coutumes y mentionnent explicitement l'occupation (garnison + habitants meltoriens restés sur place, bannières royales retirées). Pas de statut "contesté" formel dans le type `Royaume` — à envisager si une distinction territoire légitime / occupé devient nécessaire ailleurs sur le site.
- Indépendantes : Khareth (artisanat/caravanes, presqu'île désertique rattachée de fait à Meltoria), Hatbury (port misérable, corruption).
- Sylvestri : Elderwatch (ancienne capitale elfique en ruines, elfes blancs), Siriathian (elfes bruns, chasse), Aewood (capitale de facto, Académie), Sylath (druides), Keatheile (lecture des marées), Sylvanea (village caché de départ).

## Quêtes (`/quetes`)

Structure de campagne RP : quêtes liées aux Archevêques (mystère/politique), quêtes de village (enquêtes locales), quêtes mondiales (Vestiges de la Guerre, Le Déséquilibre — magie instable loin de Sylvestri / technologie d'Anduin qui commence à faillir, Le Roi qui ne Vieillit Pas — rumeurs sur l'âge d'Aegon), quêtes liées à chacun des 7 Lilim (une par péché capital). Note métier : "Les Archevêques ne sont pas des adversaires directs", certaines quêtes échouent sans combat.

## Zones à fort potentiel mais peu développées (pistes d'écriture)

- **Continent des dragons** : jamais nommé/cartographié, alors que les attaques de dragons sont un événement "actuel" majeur (Chaldryd, Porteurs de Mort, camps de prisonniers). Gros potentiel de page dédiée.
- **Oryn** (lune, Démonides Astrales) et **Sonihelm** (île des anges) : une ligne chacun, aucune page.
- **L'ange amnésique** tombé sur Astrenor après la rupture de la Porte : thread ouvert, aucun personnage/suite.
- Cosmologie non unifiée : Néantith (premier souffle), Vermyros (dieu du sang), le panthéon des Cinq, l'Orphelin/Himmel vs Les Enfers des Lilim — plusieurs strates théologiques qui ne se répondent pas explicitement entre elles.
- Fiches de villes vides dans `villes.ts` (Barrencrag, Brien, Haufen, Escren) et incomplètes (population manquante sur Gives, Signeroy, Dorteres).

## Comment utiliser ce skill

- Avant d'écrire une nouvelle page/faction/PNJ : relire la section royaume/domaine concernée ici pour éviter de recréer un doublon ou de contredire un fait établi.
- Avant de trancher une incohérence relevée ici, vérifier d'abord l'état actuel du code (`src/app/**/page.tsx`, `villes.ts`) — ce mémo peut devenir obsolète si le lore a été corrigé depuis.
- Si une décision de lore est prise en discussion avec l'utilisateur (Vincent), reporter la mise à jour ici avant de clore la tâche.
