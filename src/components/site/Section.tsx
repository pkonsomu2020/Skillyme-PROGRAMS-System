import { motion } from "motion/react";
import { type ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  tone = "deep",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "deep" | "elev";
}) {
  const bg = tone === "elev" ? "bg-[#E8FAF6]" : "bg-[#F8F9FA]";
  return (
    <section id={id} className={`section-pad px-4 md:px-8 ${bg} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{children}</p>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-balance text-3xl font-bold leading-tight md:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
