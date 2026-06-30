import styles from './SkillBadge.module.css'

type BadgeVariant = 'blue' | 'purple' | 'green' | 'cyan' | 'peach'

type SkillBadgeProps = {
  name: string
  variant?: BadgeVariant
}

const DEVICON_MAP: Record<string, string> = {
  // Backend
  PHP: 'devicon-php-plain colored',
  'Node.js': 'devicon-nodejs-plain colored',
  'Yii2 Framework': 'devicon-yii-plain colored',
  WebSockets: 'devicon-socketio-original',
  // Frontend
  JavaScript: 'devicon-javascript-plain colored',
  TypeScript: 'devicon-typescript-plain colored',
  React: 'devicon-react-original colored',
  'Next.js': 'devicon-nextjs-plain',
  HTML5: 'devicon-html5-plain colored',
  CSS3: 'devicon-css3-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  Bootstrap: 'devicon-bootstrap-plain colored',
  'Material UI': 'devicon-materialui-plain colored',
  jQuery: 'devicon-jquery-plain colored',
  // Databases
  MySQL: 'devicon-mysql-plain colored',
  // Tools
  Git: 'devicon-git-plain colored',
  Docker: 'devicon-docker-plain colored',
  PHPStorm: 'devicon-phpstorm-plain colored',
  WebStorm: 'devicon-webstorm-plain colored',
  DataGrip: 'devicon-datagrip-plain colored',
  'VS Code': 'devicon-vscode-plain colored',
  // CMS / LMS
  WordPress: 'devicon-wordpress-plain',
  Drupal: 'devicon-drupal-plain colored',
  Moodle: 'devicon-moodle-plain colored',
  // Methodologies
  Trello: 'devicon-trello-plain colored',
  Notion: 'devicon-notion-plain colored',
  // Other languages
  Java: 'devicon-java-plain colored',
  Python: 'devicon-python-plain colored',
  '.NET': 'devicon-dot-net-plain colored',
}

export default function SkillBadge({
  name,
  variant = 'blue',
}: SkillBadgeProps) {
  const iconClass = DEVICON_MAP[name]

  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {iconClass && (
        <i className={`${iconClass} ${styles.icon}`} aria-hidden="true" />
      )}
      <span className={styles.label}>{name}</span>
    </span>
  )
}
