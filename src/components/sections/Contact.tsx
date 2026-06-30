import { EnvelopeSimple, GithubLogo, Phone, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import SectionTitle from '@/components/ui/SectionTitle'
import styles from './Contact.module.css'

type ColorKey = 'blue' | 'purple' | 'green'

const contactLinks: Array<{
  label: string
  value: string
  href: string
  color: ColorKey
  external?: boolean
  Icon: React.ElementType
}> = [
  {
    label: 'Email',
    value: 'jorgegonzalezvillagran97@gmail.com',
    href: 'mailto:jorgegonzalezvillagran97@gmail.com',
    color: 'blue',
    Icon: EnvelopeSimple,
  },
  {
    label: 'GitHub',
    value: 'github.com/jorgeignacio97',
    href: 'https://github.com/jorgeignacio97',
    color: 'purple',
    external: true,
    Icon: GithubLogo,
  },
  {
    label: 'Teléfono',
    value: '+56 9 3724 1614',
    href: 'tel:+56937241614',
    color: 'green',
    Icon: Phone,
  },
]

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Contacto" subtitle="// hablemos" />
        <p className={styles.lead}>
          ¿Tienes un proyecto en mente o quieres colaborar? No dudes en
          escribirme.
        </p>
        <div className={styles.list}>
          {contactLinks.map(({ label, value, href, color, external, Icon }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={`${styles.link} ${styles[color]}`}
            >
              <span className={styles.icon}>
                <Icon size={20} weight="duotone" />
              </span>
              <div className={styles.meta}>
                <p className={styles.label}>{label}</p>
                <p className={styles.value}>{value}</p>
              </div>
              <ArrowRight size={16} className={styles.arrow} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
