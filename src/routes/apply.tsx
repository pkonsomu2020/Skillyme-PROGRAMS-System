import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, H2 } from "@/components/site/Section";
import { ExternalLink, Clock, Gift, Shield, ArrowRight } from "lucide-react";

const APPLY_URL = "https://skillyme-lms-system-ozjx.vercel.app/apply";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Skillyme Africa Cohort 2" },
      { name: "description", content: "Apply for Cohort 2: Build Track. Free to apply. Applications close 17 June 2026." },
      { property: "og:title", content: "Apply — Skillyme Africa Cohort 2" },
      { property: "og:description", content: "Submit your application — takes 10–12 minutes, no payment required." },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-[#070B1A] px-4 py-16 md:px-8 md:py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Application</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            Apply for{" "}
            <span className="bg-gradient-to-r from-[#00E0B8] to-[#7B3CFF] bg-clip-text text-transparent">
              Cohort 2
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
            This form takes about 10–12 minutes. Applying is free. Applications close 17 June 2026.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              { icon: Clock, t: "10–12 minutes" },
              { icon: Gift, t: "Free to apply" },
              { icon: Shield, t: "100% IP retained" },
            ].map((b) => (
              <div key={b.t} className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm font-semibold">
                <b.icon size={14} className="text-primary" /> {b.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="apply">
        <div className="mx-auto max-w-2xl text-center">
          <H2>Submit your application</H2>
          <p className="mt-4 text-muted-foreground">
            You'll be taken to our secure application portal to complete your submission.
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full amber-gradient px-8 py-4 text-base font-semibold shadow-glow transition-transform hover:scale-[1.03]"
          >
            Go to Application Portal <ArrowRight size={16} />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Opens in a new tab · <ExternalLink size={12} className="inline" /> skillyme-lms-system-ozjx.vercel.app
          </p>
        </div>
      </Section>
    </>
  );
}
