interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-[#c9a96e] ${className}`}>
      <span className="text-[#6b6358]">{number}</span>
      <span className="mx-2 text-[#6b6358]">&mdash;</span>
      <span>{label}</span>
    </div>
  );
}
