import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D1F2D] px-4 py-12 md:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Skillyme Africa Logo" className="h-6 w-auto object-contain" />
              <span className="font-bold">Skillyme Africa</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Cohort 2: Build Track — a selective, outcome-based startup build accelerator.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Navigate</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Cohort 2</Link></li>
              <li><Link to="/organizers" className="hover:text-white">Organizers</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><a href="https://portal.skillyme.africa/apply" target="_blank" rel="noreferrer" className="hover:text-white">Apply Now</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
            <p className="text-sm text-white/70">[CONTACT EMAIL]</p>
            <p className="mt-4 text-sm text-white/70">
              In partnership with Chiromo Forge, Austroune Group and Bricklabs.AI.
            </p>
          </div>
        </div>
        <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-xs text-white/70">
          <p>Skillyme Africa handles your personal data in line with Kenya's Data Protection Act, 2019.</p>
          <p>© 2026 Skillyme Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
