import { SectionTitle, TimelineItem } from '@/shared/ui'
import styles from './Experience.module.css'

const experiences = [
  {
    company: 'Universidad de La Frontera · DVM',
    role: 'Desarrollador Full Stack',
    period: '2021 – 2026',
    location: 'Temuco, Chile',
    bullets: [
      'Desarrollé SIVi (FRO2095), plataforma institucional para el registro, gestión y promoción de iniciativas de vinculación con impacto en 6 facultades y 26 departamentos académicos, además de socios estratégicos nacionales e internacionales.',
      'Trabajé en un equipo de 4 desarrolladores sobre stack PHP/Yii2, JavaScript, MySQL y Sybase ASE con uso intensivo de procedimientos almacenados, WebSockets y APIs REST.',
      'Desarrollé módulos completos de extremo a extremo: interfaces responsivas, lógica de negocio y optimización de consultas SQL y procedimientos almacenados.',
      'Lideré la incorporación de React + TypeScript en módulos específicos, mejorando la experiencia de usuario y la mantenibilidad frente al desarrollo anterior con JavaScript vanilla.',
      'Gestioné técnicamente el proyecto Escuela de Artes y Oficios (FRO2393): desarrollo web, administración de Moodle y mantención de servidores y bases de datos.',
    ],
  },
  {
    company: 'Albatros',
    role: 'Analista Programador',
    period: '2021',
    location: 'Temuco, Chile',
    bullets: [
      'Diseñé mockups y arquitectura de sistemas, traduciendo requerimientos de negocio en soluciones técnicas funcionales.',
      'Desarrollé aplicaciones web con web services REST, formularios dinámicos y conexiones optimizadas a bases de datos.',
      'Ejecuté pruebas de rendimiento, optimicé consultas SQL y monitoreé plataformas en producción.',
    ],
  },
  {
    company: 'Indecsur, Centro de Desarrollo',
    role: 'Práctica Profesional',
    period: '2020 – 2021',
    location: 'Temuco, Chile',
    bullets: [
      'Diseñé procesos de negocio y elaboré documentación técnica detallada de sistemas.',
      'Modelé bases de datos relacionales y desarrollé plataformas de monitoreo en tiempo real.',
      'Realicé testing funcional y de integración, asegurando la calidad (QA) de aplicaciones web.',
    ],
  },
  {
    company: 'QualityLearning (OTEC)',
    role: 'Desarrollador',
    period: '2018 – 2020',
    location: 'Temuco, Chile',
    bullets: [
      'Mantuve y actualicé plataformas LMS para capacitación empresarial.',
      'Desarrollé sitios web corporativos con foco en diseño responsivo y accesibilidad.',
      'Automaticé procesos mediante software de actualización para plataformas educativas.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Experiencia" subtitle="// historial.laboral" />
        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              {...exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
