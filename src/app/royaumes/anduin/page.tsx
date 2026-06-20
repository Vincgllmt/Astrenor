import Link from 'next/link';
import Image from 'next/image';
import { SectionTitle, CharacterCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anduin - Empire Mécanique | Astrenor',
  description: 'Découvrez Anduin, l\'empire technologique du nord d\'Astrenor, dirigé par l\'impératrice Skarlet.',
};

export default function AnduinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-anduin/20 via-transparent to-background" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-6xl mb-6">⚙️</div>
          <h1 className="text-4xl md:text-6xl font-bold text-anduin mb-4">Anduin</h1>
          <p className="text-xl text-foreground/80 mb-4">L&apos;Empire Mécanique</p>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Le royaume le plus technologiquement avancé d&apos;Astrenor, s&apos;étendant sur les terres
            gelées du nord.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="text-anduin font-bold mb-2">Gouvernement</h3>
              <p className="text-foreground/60 text-sm">Empire dirigé par l&apos;Impératrice Skarlet</p>
            </div>
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <div className="text-3xl mb-2">🏙️</div>
              <h3 className="text-anduin font-bold mb-2">Capitale</h3>
              <p className="text-foreground/60 text-sm">Ravengulch, cité impériale</p>
            </div>
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="text-anduin font-bold mb-2">Spécialités</h3>
              <p className="text-foreground/60 text-sm">Technologie, machines à vapeur, armes à feu</p>
            </div>
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <div className="text-3xl mb-2">❄️</div>
              <h3 className="text-anduin font-bold mb-2">Climat</h3>
              <p className="text-foreground/60 text-sm">Terres montagneuses et gelées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle title="Valeurs de l'Empire" />

          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-anduin/20 border-2 border-anduin flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚖️</span>
              </div>
              <p className="text-anduin font-bold">Ordre</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-anduin/20 border-2 border-anduin flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔬</span>
              </div>
              <p className="text-anduin font-bold">Recherche</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-anduin/20 border-2 border-anduin flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏆</span>
              </div>
              <p className="text-anduin font-bold">Mérite</p>
            </div>
          </div>

          <p className="text-foreground/60 mt-8 max-w-2xl mx-auto">
            Les places importantes sont disponibles pour tous, tant qu&apos;on a la force nécessaire
            pour les obtenir. Anduin est devenu une structure militaire réunie sous un seul ordre.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="L'Empire de l'Innovation" />

          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/80 text-lg mb-6">
              Anduin est le royaume le plus technologiquement avancé : pistolets à silex, armes
              de siège, télescopes et machines à vapeur. Les citoyens, maîtres de la technologie
              et de l&apos;ingénierie, ont su tirer profit des conditions climatiques rigoureuses pour
              créer des villes et des forteresses efficaces.
            </p>

            <p className="text-foreground/70 mb-6">
              Historiquement, ce sont des colons de Meltoria qui s&apos;établirent sur ces terres
              montagneuses et froides, cherchant l&apos;aventure ou fuyant l&apos;état de Meltoria.
              La plupart avaient peur de la magie — la même qu&apos;ils finiront par mépriser.
            </p>

            <div className="bg-anduin/10 border border-anduin/30 rounded-xl p-6 mb-6">
              <p className="text-foreground/70">
                💡 La poudre à canon remplace la magie ici. Cette partie du continent, trop loin
                de Sylvestri, est appauvrie en essence magique.
              </p>
            </div>

            <p className="text-foreground/70">
              Les machines à vapeur côtoient les chevaux et les calèches, offrant un contraste
              saisissant entre tradition et progrès. Le commerce et l&apos;échange ne se font que
              dans l&apos;empire — les secrets d&apos;Anduin sont unanimement protégés par les citoyens.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Histoire de l'Empire" subtitle="Des clans à l'unification impériale" />

          <div className="space-y-8">
            {/* Ère des clans */}
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-3">⚔️ L&apos;Ère des Clans</h3>
              <p className="text-foreground/70 mb-4">
                Le roi de Meltoria accorda la liberté aux colons contre une taxe importante,
                marquant le début de l&apos;ère des clans. Chaque clan avait sa méthode, son quotidien,
                mais surtout la même soif de pouvoir.
              </p>
            </div>

            {/* Ujith */}
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-3">🩸 Ujith Thano &quot;Le Vainqueur&quot;</h3>
              <p className="text-foreground/70 mb-4">
                Premier empereur, un vampire qui unifia les clans il y a environ 500 ans.
                Il gouverna d&apos;une main de fer mais juste, établissant les valeurs fondatrices :
                Ordre - Honneur - Mérite. Il établit son palais à Ravengulch, future capitale.
              </p>
              <p className="text-foreground/60 text-sm">
                Vers la fin de son règne, malgré son apparence juvénile de vampire, ses cheveux
                blanchirent. Satisfait de son œuvre, il laissa le trône à sa fille Hacua pour
                voyager dans son empire.
              </p>
            </div>

            {/* Hacua */}
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-3">🧠 Hacua Thano &quot;La Génie&quot;</h3>
              <p className="text-foreground/70 mb-4">
                Plus forte que son père, elle brillait surtout dans la recherche. Elle fit évoluer
                la devise vers : Ordre - Recherche - Mérite. C&apos;est sous son règne que les habitants
                commencèrent à mépriser la magie.
              </p>
            </div>

            {/* Nizhuc */}
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-3">📚 Nizhuc Thano &quot;L&apos;Érudit&quot;</h3>
              <p className="text-foreground/70 mb-4">
                Contrairement à ses prédécesseurs, Nizhuc développa la culture anduinoise.
                Il mena une campagne de désendoctrinement envers les dieux meltoriens,
                rappelant au peuple que les dieux les avaient abandonnés sur ces terres gelées.
              </p>
              <p className="text-foreground/60 text-sm">
                L&apos;humanisme prit le dessus, et la loi du plus fort s&apos;installa.
                Malheureusement, il fut décapité lors d&apos;une révolte vers -300 avant la guerre.
              </p>
            </div>

            {/* Ethelmer */}
            <div className="bg-black/40 border border-accent/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-3">⚔️ Ethelmer &quot;Le Conquérant&quot;</h3>
              <p className="text-foreground/70 mb-4">
                Descendant de Shujoz Aesgrarn (le meneur de la révolte), Ethelmer était impulsif
                et jaloux de ne pas avoir de magie. Il organisa la conquête de Sylvestri et Meltoria,
                déclenchant la Guerre des Deux Siècles.
              </p>
            </div>

            {/* Skarlet */}
            <div className="bg-black/40 border border-primary/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">👑 L&apos;Impératrice Skarlet</h3>
              <p className="text-foreground/70 mb-4">
                Générale brillante qui fit progresser la ligne de front à une vitesse affolante
                avec ses sœurs. Mais dans un retournement inattendu, elle mena un coup d&apos;État
                contre l&apos;Empereur, proposant ensuite la paix : le Grand Accord de Sylvarin.
              </p>
              <p className="text-foreground/60 text-sm">
                Depuis, elle s&apos;est montrée comme une dirigeante juste, essayant d&apos;éviter à son
                peuple de souffrir les affres d&apos;une dystopie grandissante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life under Skarlet */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="La Vie sous l'Impératrice Skarlet" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-foreground/70">
                La vie quotidienne dans l&apos;empire est rythmée par le progrès et l&apos;innovation.
                Les machines à vapeur sont omniprésentes, facilitant les tâches quotidiennes.
              </p>

              <p className="text-foreground/60">
                Les Anduinois sont réputés pour leur expertise en ingénierie et en mécanique.
                Les artisans et inventeurs travaillent sans relâche pour créer de nouvelles
                machines, et les académies forment les jeunes aux sciences et techniques.
              </p>

              <p className="text-foreground/60">
                La vie est marquée par un fort esprit de communauté et de solidarité.
                Les citoyens s&apos;entraident pour surmonter les défis du climat rigoureux,
                créant un havre de modernité et de chaleur humaine.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-black/40 border border-anduin/30 rounded-xl p-4">
                <h4 className="text-anduin font-bold mb-2">🏭 Industrie</h4>
                <p className="text-foreground/60 text-sm">
                  Usines crachant de la fumée, production de biens de consommation,
                  machines à vapeur omniprésentes.
                </p>
              </div>
              <div className="bg-black/40 border border-anduin/30 rounded-xl p-4">
                <h4 className="text-anduin font-bold mb-2">🎓 Éducation</h4>
                <p className="text-foreground/60 text-sm">
                  Écoles et académies formant aux sciences, techniques et ingénierie.
                </p>
              </div>
              <div className="bg-black/40 border border-anduin/30 rounded-xl p-4">
                <h4 className="text-anduin font-bold mb-2">🔒 Secrets</h4>
                <p className="text-foreground/60 text-sm">
                  Commerce interne uniquement. Les secrets technologiques sont
                  unanimement protégés par tous les citoyens.
                </p>
              </div>
              <div className="bg-black/40 border border-anduin/30 rounded-xl p-4">
                <h4 className="text-anduin font-bold mb-2">🎉 Culture</h4>
                <p className="text-foreground/60 text-sm">
                  Mélange de tradition meltorienne et modernité. Fêtes honorant
                  les esprits de la glace et de la neige.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Factions et Organisations" subtitle="Les piliers de l'Empire" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-2">🎖️ Famille Mephiston</h3>
              <p className="text-foreground/70">
                Une lignée de généraux impériaux légendaires. <strong>Belarius Mephiston</strong> a récemment conquis
                la ville de Meltoria nommée <strong>Astra</strong>, s'autoproclamant Marquis et fortifiant la zone avec de l'artillerie lourde.
              </p>
            </div>

            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-2">⚒️ Nains d'Anduin</h3>
              <p className="text-foreground/70">
                Vivant dans des citadelles fortifiées, ils sont les maîtres incontestés de la vapeur, de la poudre
                et de l'ingénierie (canons, arquebuses). Ils sont de fidèles alliés de l'Empire.
              </p>
            </div>

            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-2">🐉 Famille Nécéron</h3>
              <p className="text-foreground/70">
                Une famille mystérieuse vivant à la frontière. Ce sont en réalité des dragons (ou demi-dragons)
                vivant sous forme humaine.
              </p>
            </div>

            <div className="bg-black/40 border border-anduin/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-anduin mb-2">⛓️ Famille Schwartzmann</h3>
              <p className="text-foreground/70">
                Une famille noble impliquée dans un vaste réseau de trafic humain, fournissant parfois
                de la main-d'œuvre forcée ou des soldats à l'Empire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demons */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">🔥 Particularité : Les Démons à Anduin</h3>
            <p className="text-foreground/70 mb-4">
              C&apos;est à Anduin que les démons sont le mieux vus. Étant donné le manque de magie,
              les démons ne sont pas très puissants ici. Les succubes sont particulièrement
              appréciées dans les bordels (tant qu&apos;elles ne tuent pas les clients).
            </p>
            <Link
              href="/enfers"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              En savoir plus sur les Enfers →
            </Link>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Culture & Société" subtitle="Les valeurs qui façonnent le peuple anduinois" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <p className="text-foreground/70">
                La culture anduinoise est <strong className="text-anduin">guerrière et frugale</strong>, d&apos;inspiration scandinave. La force au combat y est célébrée autant qu&apos;un esprit brillant : un savant de renom bénéficie du même respect qu&apos;un général victorieux. La société est profondément égalitaire — le genre et la race importent peu, seul le mérite compte.
              </p>
              <p className="text-foreground/60">
                La liberté individuelle est sacrée, tant que l&apos;on a la force de défendre ses biens et ses droits. Le sentimentalisme est peu présent, remplacé par un pragmatisme assumé. Les hautes sphères font néanmoins exception : elles sont avides d&apos;art et de culture, faisant d&apos;Anduin un mécène discret mais puissant.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/40 border border-anduin/30 rounded-xl p-5">
                <h4 className="text-anduin font-bold mb-2">⚓ Maîtres des Mers</h4>
                <p className="text-foreground/60 text-sm">Excellents navigateurs, les Anduinois possèdent des navires à la pointe de la technologie. Ils se passent souvent de ports, préférant envoyer des chaloupes à terre plutôt que d&apos;accoster.</p>
              </div>
              <div className="bg-black/40 border border-anduin/30 rounded-xl p-5">
                <h4 className="text-anduin font-bold mb-2">🛒 Commerce Sélectif</h4>
                <p className="text-foreground/60 text-sm">Ravengulch importe beaucoup : équipement meltorien pour ses forges et vêtements sylvestres pour ses élites. L&apos;exportation reste en revanche jalousement contrôlée.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">⚔️</div>
              <h4 className="text-anduin font-bold mb-1">Méritocratie</h4>
              <p className="text-foreground/60 text-sm">La position sociale se gagne, jamais héritée. Un enfant de mineur peut devenir général.</p>
            </div>
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🔬</div>
              <h4 className="text-anduin font-bold mb-1">Science & Savoir</h4>
              <p className="text-foreground/60 text-sm">Un esprit brillant est aussi célébré qu&apos;un bras puissant. Les académies forment autant de savants que de soldats.</p>
            </div>
            <div className="bg-black/40 border border-anduin/30 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🗽</div>
              <h4 className="text-anduin font-bold mb-1">Liberté Individuelle</h4>
              <p className="text-foreground/60 text-sm">Chacun est libre d&apos;être ce qu&apos;il veut — à condition d&apos;en assumer les conséquences seul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">Explorer les autres royaumes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/royaumes/meltoria"
              className="px-6 py-3 bg-meltoria/20 border border-meltoria/50 text-meltoria rounded-lg hover:bg-meltoria/30 transition-colors"
            >
              ⚔️ Meltoria
            </Link>
            <Link
              href="/royaumes/sylvestri"
              className="px-6 py-3 bg-sylvestri/20 border border-sylvestri/50 text-sylvestri rounded-lg hover:bg-sylvestri/30 transition-colors"
            >
              🌲 Sylvestri
            </Link>
            <Link
              href="/histoire"
              className="px-6 py-3 bg-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/30 transition-colors"
            >
              📜 Histoire de la Guerre
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
