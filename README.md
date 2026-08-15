# 🌌 Projet Astrenor

Bienvenue dans **Astrenor**, un univers de jeu de rôle immersif où la magie ancestrale côtoie une technologie émergente et brutale. Ce projet est une application web (Next.js) servant de compendium et d'interface pour ce monde riche en histoires.

---

## 🗺️ Le Monde d'Astrenor

Le continent d'Astrenor est marqué par une histoire sanglante, notamment la **Guerre des Deux Siècles**, un conflit dévastateur opposant la Magie à la Technologie. Bien que le Grand Accord de Sylvarin ait mis fin à la guerre il y a 19 ans, les tensions restent vives et de nouvelles menaces émergent de l'ombre.

### ⚔️ Factions & Géopolitique

#### 🏰 Royaume de Meltoria
*Le bastion de la Magie et de la Royauté.*
Dirigé par le **Roi Aegon Tabarly**, Meltoria est une terre de traditions chevaleresques et de puissante magie.
- **Maison Marlaan** : Une maison noble influente dirigée par une succube déguisée.
- **Famille Yeomford** : Connue pour ses assassins d'élite, "Les Dix".
- **Le Culte d'Eldritch** : Une menace ancienne récemment traquée.
- **Clan Ombresang** : Barbares des montagnes vénérant une "Déesse Rouge".

#### ⚙️ Empire d'Anduin
*La suprématie de l'Acier et de la Vapeur.*
Une puissance militaire expansionniste qui rejette la magie au profit de la technologie naine (canons, arquebuses, machines).
- **Famille Mephiston** : Lignée de généraux légendaires. **Belarius Mephiston** a récemment conquis la ville d'Astra, brisant la trêve.
- **Les Nains d'Anduin** : Maîtres ingénieurs vivant dans des citadelles fortifiées.

#### 🌿 Sylvestri
*Le mystère des Forêts et des Esprits.*
Une région sauvage abritant des créatures féeriques et des secrets oubliés.
- **Académie Etherium d'Aewood** : Prestigieuse école de magie d'Altération.
- **La Colonie de l'Ancêtre** : Une horreur insectoïde tapie au cœur de la forêt de Sylvanea.
- **Les Astriens** : Elfes noirs astrologues cherchant le sens des étoiles.

#### 🏴‍☠️ Forces Indépendantes & Menaces
- **Baronnie de Befohrt** : Île disputée entre Meltoria et Sylvestri sans qu'aucun des deux ne l'ait jamais tranché. La famille Levonhardt y gouverne le port et lutte, sans succès total, contre les pirates qui tiennent les grottes et la jungle de l'île.
- **Les Dagues de Sicars** : Une guilde d'assassins clandestine opérant sous couverture à Meltoria.
- **Les Attaques de Dragons** : Menace non résolue - des dragons intelligents et coordonnés ("Porteurs de Mort" comme Chaldryd) détruisent des villes et gèrent des camps de prisonniers, sans qu'on sache qui ou ce qui les dirige.

#### 🔥 Les Enfers
Royaume souterrain créé par les dieux pour y bannir les **Lilim**, une fratrie de 7 enfants trop puissants. La Porte, seul passage vers la surface, s'est récemment brisée lors d'une attaque angélique et s'ouvre désormais par intermittence. Les démons y sont diversement acceptés selon les royaumes de surface (mal vus à Sylvestri, tolérés à Meltoria, bien acceptés à Anduin).

#### ⛪ Religion
Meltoria vénère un panthéon de Cinq Dieux (dont l'Orphelin, dieu de l'ombre et de la mort) ; Anduin l'a rejeté au profit d'un humanisme d'État. Le **Culte d'Eldritch**, dévoué à un dieu innommable et mené par l'unique prêtresse Emily Morgan, vient d'être traqué et éradiqué par l'Église meltorienne.

---

## 📖 Lore & Légendes

### 🧬 Races et Créatures
Astrenor est peuplé de nombreuses races :
- **Humains & Mutants** : La race dominante, parfois sujette à des mutations (tentacules, écailles).
- **Fées & Lilims** : Créatures magiques liées à la nature ou aux Enfers.
- **Vampires & Dhampires** : Certains conservent leur humanité, d'autres servent des cultes sombres.
- **Dragons & Demi-Dragons** : De puissantes entités, certaines vivant sous forme humaine (Famille Nécéron).
- **Lamias, Lycans & Créatures Uniques** : Peuplent les zones sauvages.

### ✨ Magie vs Technologie
- **Magie** : Du sang, des ténèbres, de l'esprit ou des éléments. Les mages éveillent des cercles autour de leur cœur pour stocker le mana.
- **Technologie** : Vapeur, poudre noire et ingénierie mécanique. Une réponse pragmatique à la puissance des mages.

### 📜 Histoire Récente
La **Guerre des Deux Siècles** a laissé des traces profondes. Des événements magiques majeurs (explosions, friendly fire) ont traumatisé des générations. Aujourd'hui, la paix ne tient qu'à un fil, menacée par les ambitions de seigneurs de guerre comme Belarius et par des entités surnaturelles.

---

## 🛠️ Développement (Getting Started)

Ce projet utilise [Next.js](https://nextjs.org).

### Lancer le projet

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

### Structure

- `src/app/` : Pages de l'application (Next.js App Router) - Accueil, Royaumes (Meltoria, Sylvestri, Anduin), Carte, Histoire, Magie, Les Enfers, Religion, Races, Bestiaire, Légendes, Quêtes, Almanach.
- `src/app/carte/villes.ts` : Données des villes affichées sur la carte interactive.
- `src/app/enfers/territoires.ts` : Données des territoires des Enfers.
- `src/components/` : Composants partagés (cartes, en-tête, pied de page, sélecteur de thème).
- `.claude/skills/lore-astrenor/` : Mémo de référence du lore, à tenir synchronisé avec le code des pages (source de vérité canon).
