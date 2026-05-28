import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ShieldCheck, Users, Sparkles, Target, Compass, Network,
  CheckCircle2, ArrowRight, Calendar,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Eyebrow, H2 } from "@/components/site/Section";
import { ApplyButton } from "@/components/site/CTA";
import skyline from "@/assets/nairobi-skyline.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skillyme Africa — Cohort 2: Build Track" },
      { name: "description", content: "Build a real product. Land a real client. In six weeks. Applications close 17 June 2026." },
    ],
  }),
  component: HomePage,
});

const TRUST = [
  "6 weeks", "200–300 builders", "100% IP ownership",
  "0% equity taken", "2 sessions / week", "Nairobi-based",
];

const GROUPS = [
  { n: "01", name: "Idea Stage", who: "You have an idea but haven't started building or validating it.", value: "Turn your idea into a validated, revenue-generating MVP in six weeks — with a co-founding team and your first paying customer." },
  { n: "02", name: "Early Builder", who: "You've started building but you're stuck or unsure of the direction.", value: "Find out exactly what's holding your build back, refocus around what customers will pay for, and ship a focused MVP." },
  { n: "03", name: "Early Traction", who: "You have a working product and 1–2 clients, and you want to scale.", value: "Go from one or two clients to a repeatable engine — a defined sales process, sharper pricing, and a scaling playbook." },
];

const DIFFERENT = [
  { icon: ShieldCheck, title: "You own everything you build.", sub: "100% IP. 0% equity taken." },
  { icon: Target, title: "Judged on traction.", sub: "You're assessed on a paying client — not a slide deck." },
  { icon: Users, title: "Deliberately matched teams.", sub: "Builder + seller + operator — balanced by design." },
  { icon: Compass, title: "Facilitated by operators.", sub: "Guided by practising founders, not lecturers." },
  { icon: Sparkles, title: "AI-accelerated.", sub: "Bricklabs.AI build credits for every team." },
  { icon: Network, title: "A real network.", sub: "Mentors, investors, and a growing alumni community." },
];

const WEEKS = [
  { w: "Week 1", t: "Onboarding & Teams", d: "Teams are locked, charters signed, problems defined." },
  { w: "Week 2", t: "Customer Discovery", d: "Real interviews. Real demand signals." },
  { w: "Week 3", t: "MVP Scope & Build", d: "Leanest possible scope. Building begins." },
  { w: "Week 4", t: "Build & Sales", d: "Ship the core. Open the pipeline." },
  { w: "Week 5", t: "Close the Client", d: "First paying client or a signed letter of intent." },
  { w: "Week 6", t: "Demo Day & Gala", d: "Pitch to investors. Celebrate the outcomes." },
];

const LEAVE = [
  "A working, validated MVP",
  "A paying client or documented qualified pipeline",
  "Real customer validation evidence",
  "A co-founding team + signed Team Charter",
  "Bricklabs.AI build credits",
  "A live pitch delivered to investors",
  "A go-to-market plan",
  "Certificate of Completion",
  "Skillyme Africa alumni network access",
];

const DATES = [
  { d: "28 May", t: "Applications open" },
  { d: "6 June", t: "Free intro session" },
  { d: "17 June", t: "Applications close" },
  { d: "18–21 June", t: "Team matching" },
  { d: "22 June", t: "Program begins" },
  { d: "28–29 July", t: "Demo Day & Gala" },
];

const TIERS = [
  { name: "Individual", price: "KSh 2,500", sub: "KSh 1,250 on acceptance · KSh 1,250 by Week 2" },
  { name: "Team of 5", price: "KSh 10,000 total", sub: "KSh 2,000 per person · apply together" },
  { name: "Hardship", price: "Limited places", sub: "Weekly installments · apply in the form" },
];

const FAQ = [
  ["Do I need to already have an idea to apply?", "No. If you don't have an idea, apply as a joiner — we match you into a team building something you're aligned with. The most valuable people in a cohort are often strong operators and sellers who join an idea rather than bring one."],
  ["Do I need to be technical to apply?", "No. We deliberately build teams that balance technical and non-technical skills. If you can sell, run a team, grow a product, or bring deep sector knowledge, there is a place for you."],
  ["What if I already have a team?", "Apply as a pre-formed team of five on one application. You're accepted or declined as a unit, at the group rate of KSh 10,000 total. If your team is missing a key function (e.g., no seller), we'll flag it and help you complete it."],
  ["Is it really free to apply?", "Yes. Completely free. You only pay once you've received and accepted an offer."],
  ["When exactly do I pay?", "After you receive an acceptance offer. The standard fee is KSh 2,500, split into two installments: KSh 1,250 on acceptance, KSh 1,250 by end of Week 2. Hardship applicants pay KSh 500/week for 5 weeks."],
  ["Who owns what I build?", "You and your team own 100% of the IP in your MVP and any product you build. Skillyme Africa and all partners take no equity and no IP. This is in writing in the Participant Agreement."],
  ["How are teams matched?", "Every team is deliberately built to have at minimum a Builder and a Commercial (seller). The matching process uses your application data — role, skills, sector interest, stage group — plus a live Founder Mixer event from 18–21 June where idea-owners pitch and joiners express interest. No accepted participant is ever left without a team."],
  ["What is the time commitment?", "Two live sessions per week (Tuesday evenings and Saturday mornings) plus independent build work. Realistically 15–25 hours per week if you want to reach the milestones. This is a serious commitment — apply only if you can genuinely dedicate this time from 22 June to 29 July."],
  ["What if I fall behind?", "Facilitators monitor weekly milestone progress and reach out early to lagging teams. There is structured peer accountability at every Saturday session. You're not alone — but you do have to show up."],
  ["What is the free intro session on 6 June?", "A free, public live session open to everyone — no application required. We'll show you exactly how the program works, share Cohort 1 outcomes, run a short live workshop, and answer questions. Register from the Home page."],
  ["What happens at Demo Day?", "On 28–29 July, teams present their MVPs and traction to a panel of investors and ecosystem leaders. Day 1 is the Demo Day proper — pitches and product showcases. Day 2 is the broader Ecosystem Day with panels, investor speed-meetings, and the awards ceremony."],
  ["Is there a refund if I withdraw?", "Fees are non-refundable once Week 1 begins. If you withdraw in writing before Week 1, you receive a refund less a small administrative fee."],
  ["How do I get the Bricklabs.AI build credits?", "Credits are issued to your team after teams are locked in Week 1, along with a short usage guide."],
];



function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={skyline}
            alt="Nairobi city skyline at night"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B1A]/60 via-[#070B1A]/85 to-[#070B1A]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Cohort 2 · Build Track · Nairobi
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              Build a real product. <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#00E0B8] to-[#7B3CFF] bg-clip-text text-transparent" style={{ textShadow: "0 0 40px rgba(123,60,255,0.3)" }}>
                Land a real client.
              </span>{" "}
              In six weeks.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#D9E2F2] md:text-xl">
              Skillyme Africa Cohort 2 is a selective build accelerator. We place you in a balanced team, you build and sell a real product — and you keep 100% of the IP.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ApplyButton size="lg" />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-[#00E0B8] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#00E0B8] backdrop-blur transition hover:bg-[#00E0B8]/[0.08]"
              >
                How It Works
              </a>
            </div>
            <p className="mt-5 text-sm text-[#D9E2F2]/60">
              Applications close <span className="text-white">17 June 2026</span> · Limited cohort · Applying is free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRADIENT ACCENT LINE */}
      <div className="accent-line" />

      {/* TRUST BAR */}
      <div className="border-y border-white/[0.06] bg-[#0F1328] px-4 py-8 md:px-8 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-6">
          {TRUST.map((t) => (
            <div key={t} className="text-sm font-bold text-[#00E0B8] md:text-base">{t}</div>
          ))}
        </div>
      </div>

      {/* SELECTION */}
      <Section>
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <Eyebrow>The Standard</Eyebrow>
            <H2>This is a selective program.</H2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We accept a limited cohort each cycle. Every application is read and scored on the clarity of your thinking and your commitment to build — not on how polished your idea sounds. Strong applicants are matched into deliberately balanced teams alongside founders, builders and operators chosen the same way.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl amber-gradient p-8 shadow-glow">
              <p className="text-2xl font-bold leading-snug text-primary-foreground">
                Applying is completely free.
              </p>
              <p className="mt-3 text-primary-foreground/85">
                You only pay after you've been accepted and chosen to confirm your place.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* THREE GROUPS */}
      <Section id="who-its-for" tone="elev">
        <Eyebrow>Who it's for</Eyebrow>
        <H2>Which stage are you at?</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.n} className="group flex flex-col rounded-3xl border border-white/[0.06] bg-card p-7 shadow-elev transition-transform hover:-translate-y-1">
              <div className="amber-gradient inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold">{g.n}</div>
              <h3 className="mt-5 text-2xl font-bold">Group {parseInt(g.n)} · {g.name}</h3>
              <p className="mt-3 text-sm font-medium text-foreground/90">{g.who}</p>
              <p className="mt-3 text-sm text-muted-foreground">{g.value}</p>
              <span className="mt-5 inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                This is me
              </span>
              <a
                href="https://skillyme-lms-system-ozjx.vercel.app/apply"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                Apply <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* DIFFERENT */}
      <Section id="different">
        <Eyebrow>What sets it apart</Eyebrow>
        <H2>Why this program, not another one?</H2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENT.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/[0.06] bg-card p-6 shadow-elev">
              <f.icon className="text-primary" size={28} />
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works" tone="elev">
        <Eyebrow>The Journey</Eyebrow>
        <H2>Six weeks. One MVP. One paying client.</H2>
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {WEEKS.map((w, i) => (
            <div key={w.w} className="relative rounded-2xl border border-white/[0.06] bg-card p-5 shadow-elev">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">{w.w}</div>
              <div className="absolute right-4 top-4 text-3xl font-extrabold text-white/10">{i + 1}</div>
              <h3 className="mt-2 text-base font-bold">{w.t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Two live sessions per week — Tuesday evenings and Saturday mornings. Plus independent build work. <span className="text-foreground font-semibold">22 June – 29 July 2026.</span>
        </p>
      </Section>

      {/* LEAVE WITH */}
      <Section>
        <Eyebrow>The outcome</Eyebrow>
        <H2>What you walk away with.</H2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {LEAVE.map((l) => (
            <div key={l} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-card/60 p-5">
              <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} />
              <span className="text-sm font-medium md:text-base">{l}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* KEY DATES */}
      <Section tone="elev">
        <Eyebrow>Key dates</Eyebrow>
        <H2>The timeline.</H2>
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {DATES.map((d, i) => (
            <div key={d.d} className="rounded-2xl border border-white/[0.06] bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Step {i + 1}</div>
              <div className="mt-2 text-lg font-bold">{d.d}</div>
              <div className="mt-1 text-sm text-muted-foreground">{d.t}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-primary/30 bg-primary/10 p-7 md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-primary">
                <Calendar size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Free Intro Session</span>
              </div>
              <p className="mt-3 text-base text-foreground md:text-lg">
                Join our free public intro session on 6 June — open to everyone, no application needed. We'll show you exactly how the program works and run a live workshop.
              </p>
            </div>
            <a
              href="[FREE SESSION REGISTRATION LINK]"
              className="inline-flex shrink-0 items-center gap-2 rounded-full amber-gradient px-6 py-3 text-sm font-semibold shadow-glow"
            >
              Register for Free Intro Session <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>

      {/* PRICING PREVIEW */}
      <Section>
        <Eyebrow>Pricing</Eyebrow>
        <H2>Simple, fair pricing. Pay only if you're accepted.</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/[0.06] bg-card p-7 shadow-elev">
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="mt-3 text-3xl font-extrabold text-primary">{t.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center text-base font-semibold text-foreground">
          You pay nothing to apply. Payment is only triggered by an acceptance offer.
        </div>
        <div className="mt-6 text-center">
          <Link to="/pricing" className="text-sm font-semibold text-primary hover:underline">
            Full pricing and payment details →
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="elev">
        <Eyebrow>FAQ</Eyebrow>
        <H2>Your questions, answered.</H2>
        <div className="mt-10 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={i} value={`f-${i}`} className="rounded-xl border border-white/[0.06] bg-card px-5">
                <AccordionTrigger className="text-left text-sm font-semibold md:text-base">{q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* APPLY */}
      <Section id="apply">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Apply</Eyebrow>
          <H2>Apply for Cohort 2</H2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            This form takes about 10–12 minutes. Applying is free. Applications close 17 June 2026.
          </p>
          <ApplyButton size="lg" />
          <p className="mt-4 text-sm text-muted-foreground">
            Opens our secure application portal in a new tab.
          </p>
        </div>
      </Section>
    </>
  );
}
