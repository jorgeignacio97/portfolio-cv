import { SectionTitle } from '@/shared/ui'
import ProjectCaseStudy from './components/ProjectCaseStudy'
import styles from './Projects.module.css'
import type { Project } from './types'

const projects: Project[] = [
  {
    title: 'SIVi — Sistema Integrado de Vinculación Bidireccional',
    period: '2021 – 2026 · Universidad de La Frontera',
    badge: 'Proyecto principal',
    problem:
      'Plataforma institucional para centralizar el registro, gestión y promoción de iniciativas de vinculación académica en la Universidad de La Frontera, con impacto en 6 facultades y 26 departamentos y socios estratégicos nacionales e internacionales, sobre un stack PHP/Yii2 legacy cuya escalabilidad y mantenibilidad limitaban la evolución del frontend.',
    decisions: [
      'Arquitectura PHP/Yii2 con modelos de datos complejos sobre MySQL y Sybase ASE, uso intensivo de procedimientos almacenados, WebSockets y APIs REST.',
      'Equipo de 4 desarrolladores; desarrollo de módulos completos de extremo a extremo: interfaces responsivas, lógica de negocio y optimización de consultas SQL.',
      'Incorporación incremental de React + TypeScript en módulos clave (en vez de reescritura total), modernizando el frontend justo donde el stack legacy más dolía.',
    ],
    outcome:
      'Módulos entregados de extremo a extremo con mejor experiencia de usuario y mantenibilidad frente al desarrollo anterior en JavaScript vanilla; plataforma en uso institucional con alcance en 6 facultades y 26 departamentos. Periodo 2021–2026, Universidad de La Frontera.',
    tech: [
      'PHP',
      'Yii2',
      'MySQL',
      'Sybase ASE',
      'React',
      'TypeScript',
      'WebSockets',
      'REST API',
      'JavaScript',
    ],
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Proyectos" subtitle="// trabajo.destacado" />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCaseStudy key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
