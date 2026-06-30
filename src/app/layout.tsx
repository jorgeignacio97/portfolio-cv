import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { NavBar, Footer } from '@/shared/components/layout'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jorge González | Desarrollador Full Stack',
  description:
    'Desarrollador Full Stack con 5 años de experiencia en sistemas institucionales. Especializado en PHP/Yii2, React, TypeScript y MySQL.',
  authors: [{ name: 'Jorge González' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-base text-text flex min-h-full flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
