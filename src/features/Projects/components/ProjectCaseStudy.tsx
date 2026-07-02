import type { Project } from '../types'
import styles from './ProjectCaseStudy.module.css'

type ProjectCaseStudyProps = {
  project: Project
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { title, period, badge, problem, decisions, outcome, tech } = project

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      {period && <p className={styles.period}>{period}</p>}

      <div className={styles.section}>
        <h4 className={styles.label}>Problema</h4>
        <p className={styles.text}>{problem}</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Decisiones y tradeoffs</h4>
        <ul className={styles.list}>
          {decisions.map((decision) => (
            <li key={decision} className={styles.listItem}>
              {decision}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Resultado</h4>
        <p className={styles.text}>{outcome}</p>
      </div>

      <div className={styles.tags}>
        {tech.map((item) => (
          <span key={item} className={styles.tag}>
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
