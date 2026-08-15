'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Kingdom = 'meltoria' | 'sylvestri' | 'anduin' | 'oryn' | 'sonihelm';
type SonihelmMode = 'light' | 'dark';

const KINGDOMS: Kingdom[] = ['meltoria', 'sylvestri', 'anduin', 'oryn', 'sonihelm'];

interface ThemeContextType {
  kingdom: Kingdom;
  setKingdom: (kingdom: Kingdom) => void;
  sonihelmMode: SonihelmMode;
  toggleSonihelmMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [kingdom, setKingdom] = useState<Kingdom>('meltoria');
  const [sonihelmMode, setSonihelmMode] = useState<SonihelmMode>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedKingdom = localStorage.getItem('astrenor-kingdom') as Kingdom;
    if (savedKingdom && KINGDOMS.includes(savedKingdom)) {
      setKingdom(savedKingdom);
    }
    const savedMode = localStorage.getItem('astrenor-sonihelm-mode') as SonihelmMode;
    if (savedMode === 'light' || savedMode === 'dark') {
      setSonihelmMode(savedMode);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('astrenor-kingdom', kingdom);
      document.documentElement.setAttribute('data-kingdom', kingdom);
    }
  }, [kingdom, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('astrenor-sonihelm-mode', sonihelmMode);
      document.documentElement.setAttribute('data-mode', sonihelmMode);
    }
  }, [sonihelmMode, mounted]);

  const toggleSonihelmMode = () => {
    setSonihelmMode((m) => (m === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ kingdom, setKingdom, sonihelmMode, toggleSonihelmMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
