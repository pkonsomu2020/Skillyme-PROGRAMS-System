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
      <section className="border-b border-white/[0.06] bg-[#070B1A] px-4 py-20 md:px-8 md:py-28 text-white">
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
        <H2>Lead Organizers.</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-3xl border border-white/[0.06] bg-card p-8 shadow-elev">
              <div className="flex items-start gap-6">
                <div className="h-28 w-28 shrink-0 rounded-2xl amber-gradient opacity-60" aria-label={`[LEAD ORGANIZER ${i} PHOTO]`} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">[LEAD ORGANIZER {i} — FULL NAME]</h3>
                  <p className="mt-1 text-sm text-primary">[TITLE / ROLE]</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                [3–4 SENTENCE BIO — background, what they've built, and their role in Skillyme Africa]
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="[LINKEDIN URL]" className="inline-flex items-center gap-2 rounded-full amber-gradient px-5 py-2.5 text-sm font-semibold shadow-glow">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold hover:bg-white/[0.06]">
                  <ExternalLink size={16} /> [X / personal site]
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CO-ORG */}
      <Section tone="elev">
        <Eyebrow>Partners on the ground</Eyebrow>
        <H2>Co-organisers & Core Facilitators.</H2>
        <div className="mt-10 space-y-10">
          {[
            {
              name: "Chiromo Forge",
              role: "Co-organiser & Core Facilitator",
              desc: "Chiromo Forge is an operating startup studio. Facilitation comes from people who are currently building companies, not from a curriculum binder. They bring hands-on studio methodology and real operator insight to every session.",
              link: "[CHIROMO FORGE LINKEDIN OR WEBSITE]",
              slots: 4,
            },
            {
              name: "Austroune Group (Founder)",
              role: "Co-organiser & Core Facilitator",
              desc: "The Austroune Group founder brings practising founder experience to the program — real stories of what works and what doesn't, from the inside of a running startup.",
              link: "[AUSTROUNE GROUP LINKEDIN OR WEBSITE]",
              slots: 1,
            },
          ].map((p) => (
            <div key={p.name} className="rounded-3xl border border-white/[0.06] bg-card p-7 shadow-elev">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] text-[10px] text-muted-foreground">
                [LOGO]
              </div>
              <h3 className="mt-5 text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a href={p.link} className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                <Linkedin size={14} /> Visit
              </a>

              <div className="mt-7 border-t border-white/[0.06] pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">
                  {p.slots > 1 ? `Team (${p.slots})` : "Lead"}
                </div>
                <div className={`mt-4 grid gap-4 ${p.slots === 1 ? "sm:grid-cols-1 md:max-w-xs" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
                  {Array.from({ length: p.slots }).map((_, i) => (
                    <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 text-center">
                      <div className="mx-auto h-16 w-16 rounded-full amber-gradient opacity-60" />
                      <div className="mt-3 text-sm font-bold">[{p.name} — PERSON {i + 1} NAME]</div>
                      <div className="mt-1 text-xs text-muted-foreground">[Role / Title]</div>
                      <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <Linkedin size={12} /> LinkedIn
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BRICKLABS */}
      <Section>
        <Eyebrow>Program partners</Eyebrow>
        <H2>Program Partners.</H2>
        <div className="mt-10 rounded-3xl border border-white/[0.06] bg-card p-7 shadow-elev md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex h-24 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] text-xs text-muted-foreground">
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
                <a href="[BRICKLABS.AI LINKEDIN OR X]" className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold hover:bg-white/[0.06]">
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
            <div key={i} className="rounded-2xl border border-white/[0.06] bg-card p-5 text-center">
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
          <a href="mailto:[CONTACT EMAIL]" className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold hover:bg-white/[0.06]">
            <Mail size={16} /> [CONTACT EMAIL]
          </a>
          <ApplyButton size="lg" />
        </CTABlock>
        <p className="mt-4 text-center text-sm text-muted-foreground">Or apply directly above.</p>
      </Section>
    </>
  );
}
