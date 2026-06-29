import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "SIVi — Sistema Integrado de Vinculación Bidireccional",
    description:
      "Plataforma institucional para el registro, gestión y promoción de iniciativas de vinculación académica en la Universidad de La Frontera. Integra 6 facultades, 26 departamentos y socios estratégicos nacionales e internacionales. Desarrollada como proyecto principal con arquitectura full stack de alta complejidad.",
    tech: [
      "PHP",
      "Yii2",
      "MySQL",
      "Sybase ASE",
      "React",
      "TypeScript",
      "WebSockets",
      "REST API",
      "JavaScript",
    ],
    highlight: true,
    badge: "Proyecto principal",
    period: "2021 – 2026 · Universidad de La Frontera",
  },
  {
    title: "App React + Material UI",
    description:
      "Aplicación web desarrollada con React y Material UI. Proyecto de exploración de componentes de librería y gestión de estado en frontend moderno con enfoque en usabilidad.",
    tech: ["React", "Material UI", "JavaScript", "CSS"],
    highlight: false,
    period: "Proyecto personal",
  },
  {
    title: "Próximamente...",
    description:
      "Nuevos proyectos en desarrollo. Explorando Next.js, TypeScript y más herramientas del ecosistema moderno de frontend y backend.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlight: false,
    badge: "En desarrollo",
    period: "",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-mantle/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Proyectos" subtitle="// trabajo.destacado" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
