type BadgeVariant = "blue" | "purple" | "green" | "cyan" | "peach";

interface SkillBadgeProps {
  name: string;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue:   "border-blue/30 text-blue bg-blue/10 hover:bg-blue/20",
  purple: "border-purple/30 text-purple bg-purple/10 hover:bg-purple/20",
  green:  "border-green/30 text-green bg-green/10 hover:bg-green/20",
  cyan:   "border-cyan/30 text-cyan bg-cyan/10 hover:bg-cyan/20",
  peach:  "border-peach/30 text-peach bg-peach/10 hover:bg-peach/20",
};

export default function SkillBadge({ name, variant = "blue" }: SkillBadgeProps) {
  return (
    <span
      className={`inline-block font-mono text-xs px-3 py-1.5 rounded-md border transition-colors duration-200 ${variantClasses[variant]}`}
    >
      {name}
    </span>
  );
}
