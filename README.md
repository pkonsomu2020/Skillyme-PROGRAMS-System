# Skillyme Africa — Cohort 2: Build Track

This is the official website and application portal landing page for **Skillyme Africa — Cohort 2: Build Track**. 
The program is a selective, outcome-based startup build accelerator based in Nairobi, aimed at helping founders and builders ship a real product and land a real client in six weeks.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) with [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & custom components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [Bun](https://bun.sh/)

## 📂 Project Structure

- `src/routes/`: Contains all the page components utilizing TanStack file-based routing.
  - `index.tsx`: The landing page with the main value proposition, timeline, and FAQs.
  - `about.tsx`: Details about the cohort roles, matching process, and Demo Day.
  - `pricing.tsx`: Details about the pricing tiers.
  - `apply.tsx`: The application portal link and instructions.
  - `organizers.tsx`: Information about the team and organizers.
  - `__root.tsx`: The root layout encompassing the Navbar (`Header.tsx`) and Footer (`Footer.tsx`).
- `src/components/ui/`: Reusable, generic UI components (e.g., Accordions).
- `src/components/site/`: Site-specific components like the Header, Footer, and CTA blocks.

## 💻 Running Locally

To run the project locally, ensure you have [Bun](https://bun.sh/) or npm installed.

1. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

3. Open your browser and navigate to `http://localhost:8080/`.

## 🌐 Deployment (Vercel)

This project is configured to be deployed on Vercel at **programs.skillyme.africa**.

1. **Vercel Dashboard**: 
   - Import this Git repository into your Vercel dashboard.
   - Vercel will automatically detect the Vite framework.
2. **Domain Configuration**:
   - Go to your project's **Settings > Domains** in Vercel.
   - Add `programs.skillyme.africa`.
   - Update your DNS records (CNAME) on your domain registrar (e.g., Cloudflare, Namecheap) to point `programs` to `cname.vercel-dns.com`.
3. The included `vercel.json` provides the basic routing framework and domain alias for Vercel.

## 📝 License

© 2026 Skillyme Africa. All rights reserved.
