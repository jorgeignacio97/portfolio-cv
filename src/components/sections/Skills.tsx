import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";

type BadgeVariant = "blue" | "purple" | "green" | "cyan" | "peach";

const skillGroups: Array<{
  category: string;
  variant: BadgeVariant;
  skills: string[];
}> = [
  {
    category: "Backend",
    variant: "green",
    skills: ["PHP", "Yii2 Framework", "Node.js", "REST APIs", "WebSockets"],
  },
  {
    category: "Frontend",
    variant: "blue",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "jQuery",
    ],
  },
  {
    category: "Bases de datos",
    variant: "purple",
    skills: ["MySQL", "Sybase ASE", "SQL", "Procedimientos Almacenados"],
  },
  {
    category: "Herramientas",
    variant: "cyan",
    skills: [
      "Git",
      "Docker",
      "PHPStorm",
      "WebStorm",
      "DataGrip",
      "VS Code",
      "WinSCP",
      "Draw.io",
    ],
  },
  {
    category: "CMS · LMS",
    variant: "peach",
    skills: ["WordPress", "Drupal", "Joomla", "Moodle"],
  },
  {
    category: "Metodologías",
    variant: "peach",
    skills: [
      "Metodologías Ágiles",
      "Testing / QA",
      "Trello",
      "Notion",
      "Desarrollo Asistido con IA",
    ],
  },
  {
    category: "Otros lenguajes",
    variant: "purple",
    skills: ["Java", "Python", ".NET"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 bg-mantle/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Habilidades" subtitle="// stack.tecnologico" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-surface border border-overlay rounded-xl p-6 hover:border-blue/30 transition-colors duration-200"
            >
              <h3 className="text-subtext font-mono text-xs uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    variant={group.variant}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
