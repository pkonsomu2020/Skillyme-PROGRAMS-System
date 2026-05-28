import { ArrowRight, ExternalLink } from "lucide-react";

const APPLY_URL = "https://portal.skillyme.africa/apply";

export function ApplyButton({ size = "md", label = "Apply Now" }: { size?: "md" | "lg"; label?: string }) {
  const sz = size === "lg" ? "px-7 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full amber-gradient font-semibold shadow-glow transition-transform hover:scale-[1.03] ${sz}`}
    >
      {label} <ExternalLink size={14} />
    </a>
  );
}

export function CTABlock({ heading, children }: { heading: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-[#1A1A2E]/10 glass p-8 text-center md:p-14">
      <h3 className="text-2xl font-bold md:text-4xl">{heading}</h3>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>
    </div>
  );
}
