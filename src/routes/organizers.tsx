import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, H2 } from "@/components/site/Section";
import { ApplyButton, CTABlock } from "@/components/site/CTA";
import { Linkedin, ExternalLink, Mail } from "lucide-react";

export const Route = createFileRoute("/organizers")({
  head: () => ({
    meta: [
      { title: "Organizers — Skillyme Africa" },
      { name: "description", content: "The practising founders and operators facilitating Cohort 2." },
      { property: "og:title", content: "Organizers — Skillyme Africa" },
      { property: "og:description", content: "Facilitated by practising founders and operators — not lecturers." },
    ],
  }),
  component: OrganizersPage,
});

function OrganizersPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0D1F2D] px-4 py-20 md:px-8 md:py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>The team</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            The people behind the program.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Cohort 2 is facilitated and organised by practising founders and operators — not by lecturers.
          </p>
        </div>
      </section>

      {/* LEAD */}
      <Section>
        <Eyebrow>Lead organizer</Eyebrow>
        <div className="mt-6 grid gap-8 rounded-3xl border border-[#1A1A2E]/10 bg-card p-8 shadow-elev md:grid-cols-3 md:p-10">
          <div className="flex justify-center md:justify-start">
            <div className="h-44 w-44 rounded-2xl amber-gradient opacity-60" aria-label="[YOUR PHOTO]" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">[YOUR FULL NAME]</h2>
            <p className="mt-1 text-base text-primary">[YOUR TITLE — e.g., Founder / Program Director, Skillyme Africa]</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              [YOUR 3–4 SENTENCE BIO — your background, what you've built, and why you created Skillyme Africa]
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="[YOUR LINKEDIN URL]" className="inline-flex items-center gap-2 rounded-full amber-gradient px-5 py-2.5 text-sm font-semibold shadow-glow">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#1A1A2E]/15 bg-[#1A1A2E]/5 px-5 py-2.5 text-sm font-semibold hover:bg-[#1A1A2E]/10">
                <ExternalLink size={16} /> [X / personal site]
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CO-ORG */}
      <Section tone="elev">
        <Eyebrow>Partners on the ground</Eyebrow>
        <H2>Co-organisers & Core Facilitators.</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Chiromo Forge",
              role: "Co-organiser & Core Facilitator",
              desc: "Chiromo Forge is an operating startup studio. Facilitation comes from people who are currently building companies, not from a curriculum binder. They bring hands-on studio methodology and real operator insight to every session.",
              link: "[CHIROMO FORGE LINKEDIN OR WEBSITE]",
            },
            {
              name: "Austroune Group (Founder)",
              role: "Co-organiser & Core Facilitator",
              desc: "The Austroune Group founder brings practising founder experience to the program — real stories of what works and what doesn't, from the inside of a running startup.",
              link: "[AUSTROUNE GROUP LINKEDIN OR WEBSITE]",
            },
          ].map((p) => (
            <div key={p.name} className="rounded-3xl border border-[#1A1A2E]/10 bg-card p-7 shadow-elev">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#1A1A2E]/10 bg-[#1A1A2E]/5 text-[10px] text-muted-foreground">
                [LOGO]
              </div>
              <h3 className="mt-5 text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a href={p.link} className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                <Linkedin size={14} /> Visit
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* BRICKLABS */}
      <Section>
        <Eyebrow>Program partners</Eyebrow>
        <H2>Program Partners.</H2>
        <div className="mt-10 rounded-3xl border border-[#1A1A2E]/10 bg-card p-7 shadow-elev md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex h-24 items-center justify-center rounded-2xl border border-[#1A1A2E]/10 bg-[#1A1A2E]/5 text-xs text-muted-foreground">
              [BRICKLABS.AI LOGO]
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Bricklabs.AI</h3>
              <p className="mt-1 text-sm font-semibold text-primary">AI Build Credits Partner</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Bricklabs.AI is a Nairobi-based AI startup on a mission to empower founders with tailored AI solutions and infrastructure. Every Cohort 2 team receives Bricklabs.AI build credits — access to their AI development platform — so teams can ship faster than they could alone.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://bricklabsai.org" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full amber-gradient px-5 py-2.5 text-sm font-semibold shadow-glow">
                  <ExternalLink size={16} /> bricklabsai.org
                </a>
                <a href="[BRICKLABS.AI LINKEDIN OR X]" className="inline-flex items-center gap-2 rounded-full border border-[#1A1A2E]/15 bg-[#1A1A2E]/5 px-5 py-2.5 text-sm font-semibold hover:bg-[#1A1A2E]/10">
                  <Linkedin size={16} /> Social
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* MENTORS */}
      <Section tone="elev">
        <Eyebrow>Mentors & Specialists</Eyebrow>
        <H2>Mentors & Specialists.</H2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Cohort 2 participants gain access to a curated pool of mentors — experienced founders, domain experts, and paid specialist mentors in high-leverage skills like sales and go-to-market.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-[#1A1A2E]/10 bg-card p-5 text-center">
              <div className="mx-auto h-16 w-16 rounded-full amber-gradient opacity-50" />
              <div className="mt-3 text-sm font-bold">[Mentor Name]</div>
              <div className="mt-1 text-xs text-muted-foreground">[Area of expertise]</div>
              <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <Linkedin size={12} /> LinkedIn
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Mentor announcements coming soon.</p>
      </Section>

      <Section>
        <CTABlock heading="Have questions? Get in touch.">
          <a href="mailto:[CONTACT EMAIL]" className="inline-flex items-center gap-2 rounded-full border border-[#1A1A2E]/15 bg-[#1A1A2E]/5 px-6 py-3.5 text-sm font-semibold hover:bg-[#1A1A2E]/10">
            <Mail size={16} /> [CONTACT EMAIL]
          </a>
          <ApplyButton size="lg" />
        </CTABlock>
        <p className="mt-4 text-center text-sm text-muted-foreground">Or apply directly above.</p>
      </Section>
    </>
  );
}
