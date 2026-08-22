'use client';

import { useEffect, useState } from 'react';

interface Voice {
  name: string;
  title: string;
  message: string;
}

const voices: Voice[] = [
  {
    name: 'Pandore',
    title: 'Archevêque — Altération de la Réalité',
    message:
      "Pandore ne veut pas que vous vous aventuriez aussi loin. Ce chemin existait, il y a un instant encore — elle vient de décider que non.",
  },
  {
    name: 'Zarestia',
    title: 'Archevêque — Invocations & Portails',
    message:
      "Zarestia a ouvert un portail ici. Il ne menait nulle part, alors elle l'a refermé — avec vous presque dedans.",
  },
  {
    name: "L'Innommé",
    title: 'Archevêque — Champ de Force Mortel',
    message:
      "Personne ne sait qui se cache derrière L'Innommé. Ce qui est certain, c'est qu'iel ne voulait pas que cette page soit lue.",
  },
  {
    name: 'Oboreru',
    title: 'Archevêque — Oblitération par le Regard',
    message:
      "Oboreru a posé les yeux sur cette page. Il n'en reste plus rien à regarder.",
  },
  {
    name: "Tel'var",
    title: 'Archevêque — Runes & Lumière',
    message:
      "La rune qui menait ici s'est éteinte. Tel'var seul saurait dire si c'est un accident.",
  },
  {
    name: "L'Orphelin",
    title: 'Dieu de l’Ombre, de la Mort et du Secret',
    message:
      "L'Orphelin garde ce qui se perd. Cette page, dit-on, lui appartient désormais.",
  },
  {
    name: 'Minorin',
    title: 'Lilim — Orgueil, Cheffe des Sept',
    message:
      "Minorin trouve inutile d'expliquer pourquoi cette page n'existe pas. Elle n'a de comptes à rendre à personne.",
  },
  {
    name: 'Vermyros',
    title: 'Dieu du Sang et des Morts-Vivants',
    message:
      "Vermyros a bu ce qui restait de cette page. Contrairement à ses fidèles, elle ne se relèvera pas.",
  },
  {
    name: 'Eldritch',
    title: 'Dieu Innommable — Culte Traqué',
    message:
      "Son nom ne se prononce pas, et cette page non plus, semble-t-il. Les fidèles d'Eldritch, eux, ont appris à se taire.",
  },
];

export default function NotFoundVoice() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * voices.length));
  }, []);

  const voice = voices[index];

  return (
    <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-8 card-hover text-left">
      <p className="text-foreground/80 italic text-lg leading-relaxed mb-6">
        &laquo;&nbsp;{voice.message}&nbsp;&raquo;
      </p>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-primary font-semibold">{voice.name}</span>
        <span className="text-foreground/50 text-sm">{voice.title}</span>
      </div>
    </div>
  );
}
