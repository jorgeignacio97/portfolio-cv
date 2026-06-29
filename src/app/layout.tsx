import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jorge González | Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack con 5 años de experiencia en sistemas institucionales. Especializado en PHP/Yii2, React, TypeScript y MySQL.",
  authors: [{ name: "Jorge González" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-text">
        <NavBar />
        {children}
        <footer className="py-8 px-6 border-t border-overlay text-center">
          <p className="text-subtext font-mono text-xs">
            © 2026 Jorge González · Construido con{" "}
            <span className="text-blue">Next.js</span> &{" "}
            <span className="text-purple">Tailwind CSS</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
