import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, H2 } from "@/components/site/Section";
import { ApplyButton } from "@/components/site/CTA";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Skillyme Africa Cohort 2" },
      { name: "description", content: "Simple, fair pricing. You pay nothing until you receive an acceptance offer." },
      { property: "og:title", content: "Pricing — Skillyme Africa Cohort 2" },
      { property: "og:description", content: "Free to apply. Pay only after acceptance." },
    ],
  }),
  component: PricingPage,
});

const TIERS = [
  {
    name: "Individual",
    price: "KSh 2,500",
    blurb: "For applicants joining as an individual.",
    split: "KSh 1,250 on acceptance + KSh 1,250 by end of Week 2.",
  },
  {
    name: "Team of Five",
    price: "KSh 10,000 total",
    blurb: "For a pre-formed team of five applying together on one application. Accepted or declined as a unit. If team composition changes during matching, members revert to the individual rate.",
    split: "KSh 5,000 on acceptance + KSh 5,000 by end of Week 2.",
    sub: "KSh 2,000 per person",
    featured: true,
  },
  {
    name: "Hardship Place",
    price: "Limited",
    blurb: "Discretionary places for students, unemployed, low-income or refugee applicants. Apply via the application form. Places are capped and granted at the program's discretion.",
    split: "KSh 500 per week for 5 weeks, starting Week 1.",
    note: "Total: KSh 2,500 — the same as the individual fee, simply on a longer schedule.",
  },
];

const SCHEDULE = [
  ["On acceptance", "KSh 1,250", "KSh 5,000", "—"],
  ["Week 1", "—", "—", "KSh 500"],
  ["End of Week 2", "KSh 1,250", "KSh 5,000", "KSh 500"],
  ["Week 3", "—", "—", "KSh 500"],
  ["Week 4", "—", "—", "KSh 500"],
  ["Week 5", "—", "—", "KSh 500"],
  ["TOTAL", "KSh 2,500", "KSh 10,000", "KSh 2,500"],
];

const STEPS = [
  "Submit your application — free, no card required.",
  "Your application is reviewed and scored by the program team.",
  "If accepted, you receive a formal offer email with payment instructions and the Participant Agreement.",
  "You have 5 days to pay your first installment and confirm your place. Unpaid offers are released to waitlisted applicants.",
  "Sign the Participant Agreement — this confirms your place, your team-matching consent, and the IP ownership terms.",
  "Attend the Founder Mixer (18–21 June) and get matched into your team.",
  "The program begins 22 June. The second installment is due by end of Week 2.",
];

const POLICIES = [
  "Applying is free. No card required to apply.",
  "Your place is confirmed only after payment of the first installment.",
  "Fees are non-refundable once Week 1 begins.",
  "Withdrawal in writing before Week 1 begins is refundable less a small administrative fee.",
  "The Team of Five rate applies only to genuine pre-formed teams accepted as a unit. If matching dissolves the team, members pay the individual rate.",
  "Hardship places are capped at 15 per cohort.",
];

const FAQ = [
  ["Can I pay in full upfront?", "Yes — you can pay the full amount on acceptance if you prefer."],
  ["What if I'm accepted but can't pay within 5 days?", "Contact us immediately. We'll do our best to accommodate genuine circumstances. Silence results in the offer being released to the waitlist."],
  ["What payment methods are accepted?", "[M-PESA / BANK TRANSFER — ADD DETAILS HERE]"],
  ["Is there a late-payment fee?", "No fee, but late payment of the second installment triggers a written warning. Non-payment by end of Week 4 results in removal from the program."],
];

function PricingPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-[#070B1A] px-4 py-20 md:px-8 md:py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Money matters</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            Pricing & Payment
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Simple, fair, and you only pay after you've been accepted.
          </p>
        </div>
      </section>

      {/* Banner */}
      <div className="amber-gradient px-4 py-7 text-center text-base font-bold text-primary-foreground md:text-xl md:py-9">
        Applying is completely free. You pay nothing until you receive an acceptance offer and choose to confirm your place.
      </div>

      {/* TIERS */}
      <Section>
        <Eyebrow>Tiers</Eyebrow>
        <H2>Choose your tier.</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-3xl border p-7 shadow-elev ${
                t.featured
                  ? "border-primary/50 bg-card ring-2 ring-primary/40"
                  : "border-white/[0.06] bg-card"
              }`}
            >
              {t.featured && (
                <span className="mb-3 inline-flex w-fit rounded-full amber-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Best value
                </span>
              )}
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">{t.price}</p>
              {t.sub && <p className="mt-1 text-sm text-muted-foreground">{t.sub}</p>}
              <p className="mt-4 text-sm text-muted-foreground">{t.blurb}</p>
              <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-xs">
                <div className="font-bold uppercase tracking-wider text-primary">Payment</div>
                <p className="mt-2 text-foreground/90">{t.split}</p>
                {t.note && <p className="mt-2 text-muted-foreground">{t.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SCHEDULE */}
      <Section tone="elev">
        <Eyebrow>At a glance</Eyebrow>
        <H2>Payment schedule.</H2>

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-white/[0.06] bg-card md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="px-5 py-4 font-semibold">When</th>
                <th className="px-5 py-4 font-semibold">Individual</th>
                <th className="px-5 py-4 font-semibold">Team of 5</th>
                <th className="px-5 py-4 font-semibold">Hardship</th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row, i) => (
                <tr key={i} className={`border-t border-white/[0.06] ${row[0] === "TOTAL" ? "bg-primary/10 font-bold" : ""}`}>
                  {row.map((c, j) => (
                    <td key={j} className="px-5 py-4">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked */}
        <div className="mt-10 space-y-3 md:hidden">
          {SCHEDULE.map((row, i) => (
            <div key={i} className={`rounded-2xl border p-5 ${row[0] === "TOTAL" ? "border-primary/40 bg-primary/10" : "border-white/[0.06] bg-card"}`}>
              <div className="text-xs font-bold uppercase tracking-wider text-primary">{row[0]}</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                <div><div className="text-[10px] text-muted-foreground">Individual</div>{row[1]}</div>
                <div><div className="text-[10px] text-muted-foreground">Team of 5</div>{row[2]}</div>
                <div><div className="text-[10px] text-muted-foreground">Hardship</div>{row[3]}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Eyebrow>Step by step</Eyebrow>
        <H2>How it works.</H2>
        <ol className="mt-10 space-y-4">
          {STEPS.map((s, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-white/[0.06] bg-card p-5">
              <div className="amber-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold">{i + 1}</div>
              <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{s}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-5">
          <Lock className="mt-0.5 shrink-0 text-primary" size={20} />
          <p className="text-sm font-semibold">
            Payment details (M-Pesa / bank) are sent only in acceptance emails — they are not published publicly.
          </p>
        </div>
      </Section>

      {/* POLICIES */}
      <Section tone="elev">
        <Eyebrow>Policies</Eyebrow>
        <H2>Policies.</H2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {POLICIES.map((p) => (
            <li key={p} className="rounded-xl border border-white/[0.06] bg-card p-4 text-sm leading-relaxed text-foreground/90">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section>
        <Eyebrow>FAQ</Eyebrow>
        <H2>Pricing questions.</H2>
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={i} value={`p-${i}`} className="rounded-xl border border-white/[0.06] bg-card px-5">
                <AccordionTrigger className="text-left text-sm font-semibold md:text-base">{q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section tone="elev">
        <div className="rounded-3xl border border-white/[0.06] glass p-8 text-center md:p-14">
          <h3 className="text-2xl font-bold md:text-4xl">Ready to apply?</h3>
          <div className="mt-6">
            <ApplyButton size="lg" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Free to apply. Takes 10–12 minutes.</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Prefer to read first? <Link to="/about" className="text-primary hover:underline">About Cohort 2 →</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
