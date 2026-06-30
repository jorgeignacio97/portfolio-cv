import SectionTitle from '@/components/ui/SectionTitle'
import SkillBadge from '@/components/ui/SkillBadge'
import styles from './Skills.module.css'

type BadgeVariant = 'blue' | 'purple' | 'green' | 'cyan' | 'peach'

const skillGroups: Array<{
  category: string
  variant: BadgeVariant
  skills: string[]
}> = [
  {
    category: 'Backend',
    variant: 'green',
    skills: ['PHP', 'Yii2 Framework', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Frontend',
    variant: 'blue',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
      'jQuery',
    ],
  },
  {
    category: 'Bases de datos',
    variant: 'purple',
    skills: ['MySQL', 'Sybase ASE', 'SQL', 'Procedimientos Almacenados'],
  },
  {
    category: 'Herramientas',
    variant: 'cyan',
    skills: [
      'Git',
      'Docker',
      'PHPStorm',
      'WebStorm',
      'DataGrip',
      'VS Code',
      'WinSCP',
      'Draw.io',
    ],
  },
  {
    category: 'CMS · LMS',
    variant: 'peach',
    skills: ['WordPress', 'Drupal', 'Joomla', 'Moodle'],
  },
  {
    category: 'Metodologías',
    variant: 'peach',
    skills: [
      'Metodologías Ágiles',
      'Testing / QA',
      'Trello',
      'Notion',
      'Desarrollo Asistido con IA',
    ],
  },
  {
    category: 'Otros lenguajes',
    variant: 'purple',
    skills: ['Java', 'Python', '.NET'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Habilidades" subtitle="// stack.tecnologico" />
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.badges}>
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} variant={group.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
