import { SectionTitle } from '@/shared/ui'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Sobre mí" subtitle="// perfil.profesional" />
        <div className={styles.textBlock}>
          <p className={styles.para}>
            Desarrollador Full Stack con{' '}
            <span className={styles.highlight}>5 años de experiencia</span> en
            sistemas institucionales de alta complejidad. Desarrollador
            principal de <span className={styles.accent}>SIVi</span>, plataforma
            que centraliza la gestión de vinculación académica en la Universidad
            de La Frontera, donde impulsé la incorporación de{' '}
            <span className={styles.accentAlt}>React y TypeScript</span> para
            modernizar un stack legacy PHP/Yii2.
          </p>
          <p className={styles.para}>
            Me desenvuelvo bien en equipos pequeños con alta responsabilidad
            técnica sobre el producto, aportando tanto en decisiones de
            arquitectura como en la entrega concreta de módulos de extremo a
            extremo.{' '}
            <a href="#proyectos" className={styles.link}>
              El detalle del caso SIVi está más abajo, en Proyectos.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
