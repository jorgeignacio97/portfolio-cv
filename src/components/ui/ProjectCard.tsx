import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  highlight?: boolean
  badge?: string
  period?: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  highlight,
  badge,
  period,
}: ProjectCardProps) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : styles.default}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      {period && <p className={styles.period}>{period}</p>}
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tech.map((t) => (
          <span key={t} className={styles.tag}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
