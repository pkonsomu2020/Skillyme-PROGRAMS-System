import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, H2 } from "@/components/site/Section";
import { ApplyButton, CTABlock } from "@/components/site/CTA";
import { Award, Hammer, TrendingUp, Settings, BookOpen, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cohort 2 — Skillyme Africa" },
      { name: "description", content: "Cohort 2: Build Track — what it is, how it runs, and what it produces." },
      { property: "og:title", content: "About Cohort 2 — Skillyme Africa" },
      { property: "og:description", content: "A six-week build accelerator where you ship a real product and close a real client." },
    ],
  }),
  component: AboutPage,
});

const ROLES = [
  { icon: Hammer, name: "Builder / Technical", desc: "builds the product" },
  { icon: TrendingUp, name: "Commercial / Sales & BD", desc: "sells and closes paying clients" },
  { icon: Award, name: "Growth / Marketing", desc: "drives acquisition and growth" },
  { icon: Settings, name: "Product / Operations", desc: "runs the team and delivery" },
  { icon: BookOpen, name: "Domain Expert", desc: "deep sector and customer knowledge" },
];

const ALUMNI = Array.from({ length: 6 }, (_, i) => i + 1);

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#0D1F2D] px-4 py-20 md:px-8 md:py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>The program</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            Cohort 2: <span className="bg-gradient-to-r from-[#1DB89A] to-[#0F9A7E] bg-clip-text text-transparent">Build Track</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
            What it is, how it runs, and what it produces.
          </p>
        </div>
      </section>

      {/* PROGRAM DETAIL */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="text-foreground font-semibold">Cohort 2 is not a course.</span> It is a six-week build accelerator where you stop preparing and start shipping. Over six weeks you are placed in a small, deliberately balanced team and you build a real product, put it in front of real customers, and work toward closing your first paying client.
          </p>
          <p>
            The program is outcome-based. You are not judged on how polished your slide deck looks — you are judged on traction: a working MVP and real evidence of demand. Every team owns 100% of the intellectual property it creates; Skillyme Africa and its partners take no equity and no IP.
          </p>
          <p>
            It is facilitated by operators, not lecturers. Guidance comes from practising founders who are building companies right now — Chiromo Forge and the Austroune Group founder — so the advice you get is grounded in what actually works. Two live sessions a week give you teaching, clinics and accountability; the real work happens in between, as you build.
          </p>
        </div>
      </Section>

      {/* THREE GROUPS EXPANDED */}
      <Section tone="elev">
        <Eyebrow>Who it's built for</Eyebrow>
        <H2>Built for three kinds of builder.</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { n: "Group 1", t: "Idea Stage", d: "You have an idea but haven't started building or validating it. Your six weeks focus heavily on the early weeks: sharpening the problem, finding and interviewing real customers, and scoping the leanest MVP that tests genuine demand. By the end you have a validated MVP and your first paying customer — or a signed letter of intent and a documented pipeline." },
            { n: "Group 2", t: "Early Builder", d: "You've started building but you've stalled — scope crept, the product drifted from a real need, or the team lacked direction. Your hardest week is Week 1: an honest diagnosis and the decision to refocus or pivot. From there you rebuild lean, aimed squarely at a first paying client, and ship a focused MVP." },
            { n: "Group 3", t: "Early Traction", d: "You have a working product and one or two clients but no repeatable way to win the next ten. Your six weeks focus on productising your offer, sharpening your pricing, and building a defined sales process — so growth stops depending on luck." },
          ].map((g) => (
            <div key={g.n} className="rounded-3xl border border-[#1A1A2E]/10 bg-card p-7 shadow-elev">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">{g.n}</div>
              <h3 className="mt-2 text-2xl font-bold">{g.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM MATCHING */}
      <Section>
        <Eyebrow>Team matching</Eyebrow>
        <H2>How we build your team.</H2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Every team is deliberately built so the skills a startup needs are all in the room.
        </p>

        {/* Team diagram */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full amber-gradient px-6 py-5 text-center shadow-glow">
              <div className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80">Your</div>
              <div className="text-xl font-extrabold text-primary-foreground">Team</div>
            </div>
            {ROLES.map((r, i) => {
              const angle = (i / ROLES.length) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + 42 * Math.cos(angle);
              const y = 50 + 42 * Math.sin(angle);
              return (
                <div
                  key={r.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#1A1A2E]/10 bg-card px-3 py-2 text-center text-[11px] font-semibold shadow-elev"
                  style={{ left: `${x}%`, top: `${y}%`, maxWidth: 120 }}
                >
                  <r.icon className="mx-auto mb-1 text-primary" size={16} />
                  {r.name.split(" / ")[0]}
                </div>
              );
            })}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
              {ROLES.map((_, i) => {
                const angle = (i / ROLES.length) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + 38 * Math.cos(angle);
                const y = 50 + 38 * Math.sin(angle);
                return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="rgba(29, 184, 154, 0.25)" strokeWidth="0.4" />;
              })}
            </svg>
          </div>
          <ul className="space-y-3">
            {ROLES.map((r) => (
              <li key={r.name} className="flex items-start gap-3 rounded-xl border border-[#1A1A2E]/10 bg-card p-4">
                <r.icon className="mt-0.5 shrink-0 text-primary" size={20} />
                <div>
                  <div className="text-sm font-bold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="mt-16">
          <H2 className="text-2xl md:text-3xl">The four-step matching process.</H2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Pre-formed teams checked for balance.", "Teams that apply together are reviewed for functional coverage."],
              ["Founder Mixer (18–21 June).", "Idea-owners pitch in 60 seconds; joiners express interest and connect."],
              ["Program-assisted placement.", "Remaining individuals — including specialists without an idea — are placed into teams that need them."],
              ["Final balancing pass.", "Every proposed team is checked against the builder-plus-commercial minimum and locked."],
            ].map(([t, d], i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-[#1A1A2E]/10 bg-card p-5">
                <div className="amber-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold">{i + 1}</div>
                <div>
                  <div className="text-base font-bold">{t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-3xl amber-gradient p-6 text-center text-lg font-bold text-primary-foreground md:text-xl">
            No accepted participant is ever left without a team.
          </div>
        </div>
      </Section>

      {/* SESSIONS */}
      <Section tone="elev">
        <Eyebrow>Time commitment</Eyebrow>
        <H2>Two sessions a week. The rest is building.</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { t: "Tuesday, 6:00–8:00 PM EAT", h: "Teaching & build clinic", d: "A short teaching block on the week's theme, then a stage-specific clinic where teams work through real blockers with facilitators." },
            { t: "Saturday, 9:30 AM–12:00 PM EAT", h: "Workshop & cohort sync", d: "A hands-on workshop, a cross-team progress sync with peer accountability, and mentor office hours." },
            { t: "Between sessions", h: "Independent build work", d: "Teams build and log weekly milestone progress so facilitators can spot and support teams falling behind." },
          ].map((s) => (
            <div key={s.h} className="rounded-2xl border border-[#1A1A2E]/10 bg-card p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">{s.t}</div>
              <h3 className="mt-2 text-lg font-bold">{s.h}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DEMO DAY */}
      <Section>
        <Eyebrow>The finale</Eyebrow>
        <H2>How it ends: Demo Day & Gala.</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            { d: "Day 1 — Demo Day (28 July)", t: "Teams pitch their MVPs and traction to a panel of investors and ecosystem judges, with a live product expo. Outcomes are assessed here." },
            { d: "Day 2 — Ecosystem Day (29 July)", t: "The broader, more public day: panels, partner showcases, investor speed-meetings, the alumni celebration, and the awards ceremony." },
          ].map((d) => (
            <div key={d.d} className="rounded-2xl border border-[#1A1A2E]/10 bg-card p-7">
              <h3 className="text-xl font-bold">{d.d}</h3>
              <p className="mt-3 text-base text-muted-foreground">{d.t}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-primary/30 bg-primary/10 p-5 text-center text-base font-semibold">
          Awards: Best MVP · Best Traction · Best Team · People's Choice.
        </p>
      </Section>

      {/* ALUMNI */}
      <Section tone="elev">
        <Eyebrow>Cohort 1</Eyebrow>
        <H2>Meet the builders who came before you.</H2>
        <p className="mt-3 text-lg text-muted-foreground">Real people. Real products. Real clients.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {ALUMNI.map((i) => (
            <div key={i} className="rounded-2xl border border-[#1A1A2E]/10 bg-card p-6 text-center shadow-elev">
              <div className="mx-auto h-20 w-20 rounded-full amber-gradient opacity-60" aria-hidden />
              <div className="mt-4 text-sm font-bold">[ALUMNI PERSON {i} — NAME]</div>
              <div className="mt-1 text-xs text-muted-foreground">[PRODUCT — one-line description]</div>
              <div className="mt-2 text-xs text-primary">[OUTCOME]</div>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">More alumni stories coming soon.</p>

        <blockquote className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-4 border-primary bg-card/60 p-8 text-xl font-medium italic leading-relaxed md:text-2xl">
          "[ALUMNI QUOTE — e.g., 'I came in with an idea and left with a paying customer and a co-founder. The team matching changed everything.']"
          <footer className="mt-4 text-sm not-italic font-semibold text-muted-foreground">
            — [NAME], [PRODUCT], Cohort 1
          </footer>
        </blockquote>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Cohort 2 builders join this alumni community on completion.
        </p>
      </Section>

      {/* CTA */}
      <Section>
        <CTABlock heading="Ready to build?">
          <ApplyButton size="lg" />
          <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-[#1A1A2E]/15 bg-[#1A1A2E]/5 px-6 py-3.5 text-sm font-semibold hover:bg-[#1A1A2E]/10">
            See Pricing
          </Link>
        </CTABlock>
      </Section>
    </>
  );
}
