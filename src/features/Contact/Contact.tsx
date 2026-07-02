import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  PhoneIcon,
  DownloadSimpleIcon,
  ArrowRightIcon,
} from '@phosphor-icons/react/dist/ssr'
import { SectionTitle } from '@/shared/ui'
import { CV_DOWNLOAD_PATH } from '@/config/cv'
import styles from './Contact.module.css'

type ColorKey = 'blue' | 'purple' | 'green'

const contactLinks: Array<{
  label: string
  value: string
  href: string
  color: ColorKey
  external?: boolean
  download?: boolean
  Icon: React.ElementType
}> = [
  {
    label: 'Email',
    value: 'jorgegonzalezvillagran97@gmail.com',
    href: 'mailto:jorgegonzalezvillagran97@gmail.com',
    color: 'blue',
    Icon: EnvelopeSimpleIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/jorgeignacio97',
    href: 'https://github.com/jorgeignacio97',
    color: 'purple',
    external: true,
    Icon: GithubLogoIcon,
  },
  {
    label: 'Teléfono',
    value: '+56 9 3724 1614',
    href: 'tel:+56937241614',
    color: 'green',
    Icon: PhoneIcon,
  },
  {
    label: 'CV',
    value: 'Descargar PDF',
    href: CV_DOWNLOAD_PATH,
    color: 'blue',
    download: true,
    Icon: DownloadSimpleIcon,
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
          {contactLinks.map(
            ({ label, value, href, color, external, download, Icon }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                download={download}
                className={`${styles.link} ${styles[color]}`}
              >
                <span className={styles.icon}>
                  <Icon size={20} weight="duotone" />
                </span>
                <div className={styles.meta}>
                  <p className={styles.label}>{label}</p>
                  <p className={styles.value}>{value}</p>
                </div>
                <ArrowRightIcon size={16} className={styles.arrow} />
              </a>
            )
          )}
        </div>
      </div>
    </section>
  )
}
