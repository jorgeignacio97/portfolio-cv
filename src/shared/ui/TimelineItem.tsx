import styles from './TimelineItem.module.css'

type TimelineItemProps = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  isLast?: boolean
}

export default function TimelineItem({
  company,
  role,
  period,
  location,
  bullets,
  isLast,
}: TimelineItemProps) {
  return (
    <div className={styles.item}>
      {!isLast && <div className={styles.line} />}
      <div className={styles.dot} />
      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.role}>{role}</h3>
          <span className={styles.sep}>·</span>
          <span className={styles.company}>{company}</span>
        </div>
        <p className={styles.meta}>
          {period} · {location}
        </p>
        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => (
            <li key={i} className={styles.bullet}>
              <span className={styles.marker}>›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
