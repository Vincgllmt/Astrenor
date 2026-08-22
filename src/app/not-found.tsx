import Link from 'next/link';
import type { Metadata } from 'next';
import { NotFoundVoice } from '@/components';

export const metadata: Metadata = {
  title: 'Page Introuvable - Astrenor',
  description: "Cette page s'est perdue quelque part sur le continent d'Astrenor.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        <span className="text-primary text-sm tracking-widest uppercase">
          Erreur 404
        </span>

        <h1 className="text-6xl md:text-8xl font-bold my-6 leading-relaxed text-gradient">
          Égaré
        </h1>

        <div className="ornament mx-auto mb-8" />

        <NotFoundVoice />

        <p className="text-foreground/60 mt-10 mb-8">
          La page que vous cherchiez n&apos;existe pas, ou n&apos;existe plus.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all animate-glow"
        >
          Retourner sur le continent
        </Link>
      </div>
    </div>
  );
}
