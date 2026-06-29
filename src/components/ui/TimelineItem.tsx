interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  isLast?: boolean;
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
    <div className="relative pl-8">
      {!isLast && (
        <div className="absolute left-[6px] top-5 bottom-0 w-px bg-overlay" />
      )}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-blue border-2 border-base" />

      <div className="mb-10">
        <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
          <h3 className="text-text font-semibold">{role}</h3>
          <span className="text-subtext text-sm">·</span>
          <span className="text-blue text-sm font-medium">{company}</span>
        </div>
        <p className="text-subtext font-mono text-xs mb-4">
          {period} · {location}
        </p>
        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-subtext text-sm flex gap-2">
              <span className="text-purple mt-0.5 shrink-0">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
