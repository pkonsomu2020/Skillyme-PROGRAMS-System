import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/skillyme-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Cohort 2" },
  { to: "/organizers", label: "Organizers" },
  { to: "/pricing", label: "Pricing" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070B1A]/90 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Skillyme Africa" className="h-8 w-8 object-contain" />
          <span className="text-base font-bold tracking-tight md:text-lg">
            Skillyme <span className="text-primary">Africa</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.slice(0, 4).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://skillyme-lms-system-ozjx.vercel.app/apply"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full amber-gradient px-5 py-2.5 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03] md:inline-block"
          >
            Apply Now
          </a>
          <a
            href="https://skillyme-lms-system-ozjx.vercel.app/apply"
            target="_blank"
            rel="noreferrer"
            className="rounded-full amber-gradient px-4 py-2 text-xs font-semibold shadow-glow md:hidden"
          >
            Apply
          </a>
          <button
            className="rounded-md p-2 text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#0F1328] md:hidden">
          <nav className="flex flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-white/90"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
