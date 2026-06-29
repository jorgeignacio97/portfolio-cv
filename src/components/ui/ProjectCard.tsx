interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  highlight?: boolean;
  badge?: string;
  period?: string;
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
    <div
      className={`rounded-xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        highlight
          ? "border-blue/40 bg-surface shadow-lg shadow-blue/10"
          : "border-overlay bg-surface hover:border-blue/30"
      }`}
    >
      <div className="flex items-start justify-between mb-3 gap-3">
        <h3 className="text-text font-semibold leading-snug">{title}</h3>
        {badge && (
          <span className="shrink-0 text-xs font-mono px-2 py-1 rounded-full bg-blue/20 text-blue border border-blue/30">
            {badge}
          </span>
        )}
      </div>
      {period && (
        <p className="text-subtext font-mono text-xs mb-3">{period}</p>
      )}
      <p className="text-subtext text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-1 rounded bg-overlay text-cyan"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
