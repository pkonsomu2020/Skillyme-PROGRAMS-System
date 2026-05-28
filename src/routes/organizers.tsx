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

const LEAD_ORGANIZERS = [
  {
    name: "Fred Ochieng",
    role: "CEO",
    photo: "/ORGANIZERS/fred_ochieng.jpeg",
    linkedin: "https://www.linkedin.com/in/fredrick-ochieng-99724a378/",
  },
  {
    name: "Peter Onsomu",
    role: "CTO",
    photo: "/ORGANIZERS/Peter_Onsomu.jpg",
    linkedin: "https://www.linkedin.com/in/peter-onsomu-695593264/",
  },
];

const CHIROMO_TEAM = [
  {
    name: "Rachael Muturi",
    role: "Head of Marketing",
    photo: "/ORGANIZERS/RACHAEL MUTURI.jpeg",
    linkedin: "https://www.linkedin.com/in/rachael-muturi?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Grace Ngari",
    role: "Head of Community",
    photo: "/ORGANIZERS/GRACE NGARI.jpeg",
    linkedin: "https://www.linkedin.com/in/grace-ngari-2b8a01245/",
  },
  {
    name: "Osborn Nyakaru",
    role: "CEO",
    photo: null,
    linkedin: null,
  },
  {
    name: "Vera",
    role: "CTO",
    photo: null,
    linkedin: null,
  },
];

const AUSTROUNE_TEAM = [
  {
    name: "Dancun",
    role: "Founder",
    photo: "/ORGANIZERS/DANCUN.jpeg",
    linkedin: null,
  },
];

function PersonCard({ name, role, photo, linkedin }: {
  name: string;
  role: string;
  photo: string | null;
  linkedin: string | null;
}) {
  return (
    <div className="flex flex-col">
      {/* Photo */}
      <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-[#0F1328]">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="h-full w-full amber-gradient opacity-40" />
        )}
      </div>
      {/* Info */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <p className="mt-0.5 text-sm font-semibold uppercase tracking-wider text-primary">{role}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={13} /> LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

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

      {/* LEAD ORGANIZERS */}
      <Section>
        <Eyebrow>Lead Organizers</Eyebrow>
        <H2>Lead Organizers.</H2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {LEAD_ORGANIZERS.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      {/* CHIROMO FORGE */}
      <Section tone="elev">
        <Eyebrow>Partners on the ground</Eyebrow>
        <H2>Co-organisers & Core Facilitators.</H2>

        {/* Chiromo Forge block */}
        <div className="mt-10 rounded-3xl border border-white/[0.06] bg-card p-7 shadow-elev md:p-10">
          <div className="flex items-center gap-4">
            <img
              src="/ORGANIZERS/CHIROMO FORGE 1.jpeg"
              alt="Chiromo Forge"
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold">Chiromo Forge</h3>
              <p className="mt-0.5 text-sm font-semibold text-primary">Co-organiser & Core Facilitator</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Chiromo Forge is an operating startup studio. Facilitation comes from people who are currently building companies, not from a curriculum binder. They bring hands-on studio methodology and real operator insight to every session.
          </p>

          <div className="mt-8 border-t border-white/[0.06] pt-8">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-6">The Team</div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {CHIROMO_TEAM.map((p) => (
                <PersonCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* Austroune Group block */}
        <div className="mt-8 rounded-3xl border border-white/[0.06] bg-card p-7 shadow-elev md:p-10">
          <div>
            <h3 className="text-2xl font-bold">Austroune Group</h3>
            <p className="mt-0.5 text-sm font-semibold text-primary">Co-organiser & Core Facilitator</p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The Austroune Group founder brings practising founder experience to the program — real stories of what works and what doesn't, from the inside of a running startup.
          </p>

          <div className="mt-8 border-t border-white/[0.06] pt-8">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-6">The Team</div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {AUSTROUNE_TEAM.map((p) => (
                <PersonCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* BRICKLABS */}
      <Section>
        <Eyebrow>Program partners</Eyebrow>
        <H2>Program Partners.</H2>
        <div className="mt-10 rounded-3xl border border-white/[0.06] bg-card p-7 shadow-elev md:p-10">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white p-6 h-28">
              <img
                src="/ORGANIZERS/BRICKLABSAI_Logo.png"
                alt="Bricklabs.AI"
                className="h-full w-full object-contain"
              />
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
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="elev">
        <CTABlock heading="Have questions? Get in touch.">
          <a href="mailto:hello@skillyme.africa" className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold hover:bg-white/[0.06]">
            <Mail size={16} /> hello@skillyme.africa
          </a>
          <ApplyButton size="lg" />
        </CTABlock>
        <p className="mt-4 text-center text-sm text-muted-foreground">Or apply directly above.</p>
      </Section>
    </>
  );
}
