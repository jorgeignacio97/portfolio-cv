interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-text mb-1">
        <span className="text-blue">#</span> {title}
      </h2>
      {subtitle && (
        <p className="text-subtext font-mono text-sm mt-1">{subtitle}</p>
      )}
      <div className="mt-3 h-px w-20 bg-gradient-to-r from-blue to-purple rounded-full" />
    </div>
  );
}
