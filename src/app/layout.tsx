import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { ThemeProvider } from "@/contexts";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Astrenor - Continent aux Trois Royaumes",
  description: "Bienvenue sur le continent d'Astrenor, un vaste territoire baigné de magie et de mystère, où les légendes prennent vie et où les héros sont façonnés.",
  keywords: ["RP", "roleplay", "médiéval", "fantastique", "Astrenor", "Meltoria", "Sylvestri", "Anduin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${lora.variable} antialiased bg-pattern min-h-screen`}
      >
        <ThemeProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
