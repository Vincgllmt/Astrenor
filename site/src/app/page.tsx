import Link from 'next/link';
import { KingdomCard, SectionTitle } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-6">
            <span className="text-primary text-lg tracking-widest uppercase">Bienvenue sur</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient">
            Astrenor
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
            Continent aux Trois Royaumes
          </p>
          
          <p className="text-foreground/60 max-w-2xl mx-auto mb-12">
            Un vaste territoire baigné de magie et de mystère, où les légendes prennent vie 
            et où les héros sont façonnés dans ce monde médiéval fantastique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/royaumes" 
              className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all animate-glow"
            >
              Découvrir les Royaumes
            </Link>
            <Link 
              href="/histoire" 
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
            >
              Explorer l&apos;Histoire
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Un Monde à Découvrir" 
            subtitle="Trois royaumes majestueux se partagent ces terres riches en histoire et en merveilles"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <KingdomCard
              name="Meltoria"
              description="Le joyau féodal d'Astrenor, au centre du continent, réputé pour ses forgerons hors pair et ses plaines verdoyantes."
              href="/royaumes/meltoria"
              icon="⚔️"
              color="meltoria"
              features={[
                "Chevaliers valeureux",
                "Forgerons ancestraux",
                "Royaume du Roi-Sorcier Aegon"
              ]}
            />
            
            <KingdomCard
              name="Sylvestri"
              description="La contrée désorganisée et berceau de la magie, un havre de verdure où la nature règne en maître."
              href="/royaumes/sylvestri"
              icon="🌲"
              color="sylvestri"
              features={[
                "Forêts mystérieuses",
                "Académie de magie Étherium",
                "Terre des elfes"
              ]}
            />
            
            <KingdomCard
              name="Anduin"
              description="L'empire mécanique du nord, réputé pour ses inventions mécaniques et ses machines à vapeur."
              href="/royaumes/anduin"
              icon="⚙️"
              color="anduin"
              features={[
                "Innovation technologique",
                "Impératrice Skarlet",
                "Terres gelées"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Currency Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            title="Le Rufiyaa" 
            subtitle="La monnaie commune d'Astrenor"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black/40 border border-amber-900/50 rounded-xl p-6 card-hover">
              <div className="text-4xl mb-2">🥉</div>
              <h4 className="text-amber-700 font-bold">Bronze</h4>
              <p className="text-foreground/50 text-sm">Monnaie de base</p>
            </div>
            <div className="bg-black/40 border border-gray-400/50 rounded-xl p-6 card-hover">
              <div className="text-4xl mb-2">🥈</div>
              <h4 className="text-gray-400 font-bold">Argent</h4>
              <p className="text-foreground/50 text-sm">10 Bronze = 1 Argent</p>
            </div>
            <div className="bg-black/40 border border-yellow-500/50 rounded-xl p-6 card-hover">
              <div className="text-4xl mb-2">🥇</div>
              <h4 className="text-yellow-500 font-bold">Or</h4>
              <p className="text-foreground/50 text-sm">100 Argent = 1 Or</p>
            </div>
            <div className="bg-black/40 border border-cyan-300/50 rounded-xl p-6 card-hover">
              <div className="text-4xl mb-2">💎</div>
              <h4 className="text-cyan-300 font-bold">Platine</h4>
              <p className="text-foreground/50 text-sm">1000 Or = 1 Platine</p>
            </div>
          </div>
          
          <p className="mt-8 text-foreground/50 text-sm">
            💡 Repère : 2 pièces de bronze pour un pain, 10 pour une nuit à l&apos;auberge
          </p>
        </div>
      </section>

      {/* War Section Teaser */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm uppercase tracking-widest">Histoire</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                La Guerre des Deux Siècles
              </h2>
              <p className="text-foreground/70 mb-4">
                Pendant près de 200 ans, le continent d&apos;Astrenor fut déchiré par un conflit titanesque. 
                L&apos;Empire d&apos;Anduin, avide de magie, s&apos;est lancé dans une conquête qui a forgé 
                des alliances et brisé des empires.
              </p>
              <p className="text-foreground/60 mb-6">
                Ce conflit s&apos;est terminé il y a 19 ans, laissant des cicatrices profondes 
                mais aussi l&apos;espoir d&apos;une paix durable.
              </p>
              <Link 
                href="/histoire" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Découvrir l&apos;histoire complète
                <span className="ml-2">→</span>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-xl p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">200</div>
                  <div className="text-foreground/50 text-sm">Années de guerre</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-foreground/50 text-sm">Royaumes impliqués</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sylvestri">19</div>
                  <div className="text-foreground/50 text-sm">Années de paix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Explorer Astrenor" 
            subtitle="Plongez dans les différents aspects de notre univers"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/magie" className="group">
              <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6 text-center card-hover">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-primary font-semibold mb-2">Magie & Académie</h4>
                <p className="text-foreground/50 text-sm">Découvrez l&apos;Étherium et ses archevêques</p>
              </div>
            </Link>
            
            <Link href="/enfers" className="group">
              <div className="bg-black/40 border border-accent/50 rounded-xl p-6 text-center card-hover">
                <div className="text-4xl mb-4">🔥</div>
                <h4 className="text-accent font-semibold mb-2">Les Enfers</h4>
                <p className="text-foreground/50 text-sm">Les Lilim et le royaume des démons</p>
              </div>
            </Link>
            
            <Link href="/religion" className="group">
              <div className="bg-black/40 border border-meltoria/50 rounded-xl p-6 text-center card-hover">
                <div className="text-4xl mb-4">⛪</div>
                <h4 className="text-meltoria font-semibold mb-2">Religion</h4>
                <p className="text-foreground/50 text-sm">Les dieux et croyances d&apos;Astrenor</p>
              </div>
            </Link>
            
            <Link href="/royaumes/sylvestri#sylvanea" className="group">
              <div className="bg-black/40 border border-sylvestri/50 rounded-xl p-6 text-center card-hover">
                <div className="text-4xl mb-4">🏘️</div>
                <h4 className="text-sylvestri font-semibold mb-2">Sylvanea</h4>
                <p className="text-foreground/50 text-sm">Le village caché où tout commence</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
