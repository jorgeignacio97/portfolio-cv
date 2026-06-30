import About from '@/features/About'
import Contact from '@/features/Contact'
import Education from '@/features/Education'
import Experience from '@/features/Experience'
import Hero from '@/features/Hero'
import Projects from '@/features/Projects'
import Skills from '@/features/Skills'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
