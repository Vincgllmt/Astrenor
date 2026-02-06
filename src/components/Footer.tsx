import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-primary-dark/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-primary text-lg font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-gradient">Astrenor</span>
            </Link>
            <p className="text-foreground/60 max-w-md">
              Bienvenue sur le continent d&apos;Astrenor, un vaste territoire baigné de magie et de mystère, 
              où les légendes prennent vie et où les héros sont façonnés.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/royaumes" className="text-foreground/60 hover:text-primary transition-colors">Les Royaumes</Link></li>
              <li><Link href="/histoire" className="text-foreground/60 hover:text-primary transition-colors">Histoire</Link></li>
              <li><Link href="/magie" className="text-foreground/60 hover:text-primary transition-colors">Magie & Académie</Link></li>
              <li><Link href="/enfers" className="text-foreground/60 hover:text-primary transition-colors">Les Enfers</Link></li>
            </ul>
          </div>

          {/* Kingdoms */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Royaumes</h4>
            <ul className="space-y-2">
              <li><Link href="/royaumes/meltoria" className="text-foreground/60 hover:text-meltoria transition-colors">Meltoria</Link></li>
              <li><Link href="/royaumes/sylvestri" className="text-foreground/60 hover:text-sylvestri transition-colors">Sylvestri</Link></li>
              <li><Link href="/royaumes/anduin" className="text-foreground/60 hover:text-anduin transition-colors">Anduin</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Currency Info */}
        <div className="text-center mb-8">
          <p className="text-foreground/40 text-sm">
            💰 Système monétaire : 10 Bronze → 1 Argent | 100 Argent → 1 Or | 1000 Or → 1 Platine
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-foreground/40 text-sm">
          <p>© {new Date().getFullYear()} Astrenor - Serveur RP. Tous droits réservés.</p>
          <p className="mt-2 text-xs">Un monde médiéval fantastique aux trois royaumes.</p>
        </div>
      </div>
    </footer>
  );
}
