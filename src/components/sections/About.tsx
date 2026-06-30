import SectionTitle from '@/components/ui/SectionTitle'
import styles from './About.module.css'

const stats = [
  { label: 'Años de experiencia', value: '5+' },
  { label: 'Facultades impactadas', value: '6' },
  { label: 'Departamentos académicos', value: '26' },
  { label: 'Stack principal', value: 'PHP · React' },
]

export default function About() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Sobre mí" subtitle="// perfil.profesional" />
        <div className={styles.grid}>
          <div className={styles.textBlock}>
            <p className={styles.para}>
              Desarrollador Full Stack con{' '}
              <span className={styles.highlight}>5 años de experiencia</span>{' '}
              en sistemas institucionales de alta complejidad. Desarrollador
              principal de <span className={styles.accent}>SIVi</span>,
              plataforma que centraliza la gestión de vinculación académica para{' '}
              <span className={styles.highlight}>
                6 facultades y 26 departamentos
              </span>{' '}
              en la Universidad de La Frontera, integrando equipos
              multidisciplinarios y socios estratégicos nacionales e
              internacionales.
            </p>
            <p className={styles.para}>
              Especializado en arquitecturas PHP/Yii2 con modelos de datos
              complejos sobre MySQL y Sybase ASE. Impulsé la incorporación de{' '}
              <span className={styles.accentAlt}>React y TypeScript</span>{' '}
              en módulos clave de SIVi para modernizar el frontend donde el
              stack legacy limita la escalabilidad y mantenibilidad.
            </p>
            <p className={styles.para}>
              Me desenvuelvo bien en equipos pequeños con alta responsabilidad
              técnica sobre el producto, aportando tanto en decisiones de
              arquitectura como en la entrega concreta de módulos de extremo a
              extremo.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
