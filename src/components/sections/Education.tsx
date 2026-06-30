import { GraduationCap, Certificate } from '@phosphor-icons/react/dist/ssr'
import SectionTitle from '@/components/ui/SectionTitle'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="educacion" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Educación" subtitle="// formacion.academica" />
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardAccent}`}>
            <div className={styles.cardRow}>
              <div className={`${styles.iconBox} ${styles.iconBoxAccent}`}>
                <GraduationCap size={20} weight="duotone" />
              </div>
              <div>
                <h3 className={styles.cardTitle}>
                  Técnico de Nivel Superior Analista Programador
                </h3>
                <p className={`${styles.institution} ${styles.institutionAccent}`}>
                  Instituto Profesional Santo Tomás
                </p>
                <p className={styles.cardMeta}>2018 – 2021 · Temuco, Chile</p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardAlt}`}>
            <div className={styles.cardRow}>
              <div className={`${styles.iconBox} ${styles.iconBoxAlt}`}>
                <Certificate size={20} weight="duotone" />
              </div>
              <div>
                <h3 className={styles.cardTitle}>
                  Introducción a la Ciberseguridad
                </h3>
                <p className={`${styles.institution} ${styles.institutionAlt}`}>
                  Academia CEA · Contraloría General de la República
                </p>
                <p className={styles.cardMeta}>Mayo 2026 · Certificación</p>
              </div>
            </div>
          </div>

          <div className={styles.langCard}>
            <h3 className={styles.langLabel}>Idiomas</h3>
            <div className={styles.langList}>
              <div className={styles.langItem}>
                <span className={`${styles.langCode} ${styles.langCodeEs}`}>
                  ES
                </span>
                <div>
                  <p className={styles.langName}>Español</p>
                  <p className={styles.langLevel}>Nativo</p>
                </div>
              </div>
              <div className={styles.langItem}>
                <span className={`${styles.langCode} ${styles.langCodeEn}`}>
                  EN
                </span>
                <div>
                  <p className={styles.langName}>Inglés</p>
                  <p className={styles.langLevel}>Lectura técnica avanzada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
