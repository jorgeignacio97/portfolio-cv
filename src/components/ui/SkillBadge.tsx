import styles from './SkillBadge.module.css'

type BadgeVariant = 'blue' | 'purple' | 'green' | 'cyan' | 'peach'

interface SkillBadgeProps {
  name: string
  variant?: BadgeVariant
}

export default function SkillBadge({ name, variant = 'blue' }: SkillBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>{name}</span>
  )
}
