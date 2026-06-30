import styles from './SectionTitle.module.css'

type SectionTitleProps = {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <span className={styles.hash}>#</span> {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.line} />
    </div>
  )
}
