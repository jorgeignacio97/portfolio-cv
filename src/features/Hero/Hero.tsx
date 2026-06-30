import Image from 'next/image'
import { CaretDown, GithubLogo } from '@phosphor-icons/react/dist/ssr'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.text}>
            <p className={styles.greeting}>¡Hola, soy</p>
            <h1 className={styles.name}>Jorge González</h1>
            <p className={styles.role}>Desarrollador Full Stack</p>
            <p className={styles.bio}>
              5 años de experiencia en sistemas institucionales de alta
              complejidad. Especializado en arquitecturas PHP/Yii2, React y
              TypeScript, con foco en soluciones escalables de extremo a
              extremo.
            </p>
            <div className={styles.actions}>
              <a href="#proyectos" className={styles.btnPrimary}>
                Ver proyectos
              </a>
              <a
                href="https://github.com/jorgeignacio97"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnGithub}
              >
                <GithubLogo size={16} weight="fill" />
                GitHub
              </a>
              <a href="#contacto" className={styles.btnContact}>
                Contacto
              </a>
            </div>
          </div>

          <div className={styles.photoWrap}>
            <div className={styles.photoFrame}>
              <div className={styles.photoGlow} />
              <div className={styles.photoRing}>
                <Image
                  src="/profile.png"
                  alt="Jorge González"
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollCue}>
          <a href="#sobre-mi" className={styles.scrollLink} aria-label="Ir a Sobre mí">
            <CaretDown size={24} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  )
}
