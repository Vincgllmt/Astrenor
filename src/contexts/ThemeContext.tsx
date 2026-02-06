'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Kingdom = 'meltoria' | 'sylvestri' | 'anduin';

interface ThemeContextType {
  kingdom: Kingdom;
  setKingdom: (kingdom: Kingdom) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [kingdom, setKingdom] = useState<Kingdom>('meltoria');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('astrenor-kingdom') as Kingdom;
    if (saved && ['meltoria', 'sylvestri', 'anduin'].includes(saved)) {
      setKingdom(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('astrenor-kingdom', kingdom);
      document.documentElement.setAttribute('data-kingdom', kingdom);
    }
  }, [kingdom, mounted]);

  return (
    <ThemeContext.Provider value={{ kingdom, setKingdom }}>
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
