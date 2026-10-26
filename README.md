# Forge Technologies — Website

A clean, responsive static website for **Forge Technologies**, a freelance digital solutions company serving startups, retail shops, small businesses, and entrepreneurs.

---

## Brand Details

- **Company**: FORGE TECHNOLOGIES
- **Instagram**: [@forge_technologies](https://instagram.com/forge_technologies)
- **Email**: [contact.forgetechnologies@gmail.com](mailto:contact.forgetechnologies@gmail.com)
- **Positioning**: Freelance digital solutions for startups and retail businesses
- **Visual Direction**: Premium dark obsidian tech studio aesthetic inspired by modern AI labs (such as Sarvam AI) with subtle electric cyan/blue accents (`#38BDF8`), dark glassmorphic cards, Cal Sans headings, and Geist Mono technical metadata.
- **Brand Mark**: Official metallic geometric emblem & typography lockup seamlessly integrated in Header, Footer, and Favicon.

---

## Pages & Structure

1. **Home (`/`)**:
   - **Interactive 3D Hero (`ForgeCanvas3D`)**: Real-time WebGL interactive crystalline polyhedron and node lattice that smoothly reacts to cursor movement, with automatic `prefers-reduced-motion` compliance.
   - **Positioning & Trust Metrics**: 100% sovereign code ownership, fixed milestone scoping, 14-day defect warranty, and Web3Forms integration.
   - **Instant Scope & Milestone Estimator**: Interactive presets for Retail & E-Commerce, Startup MVP, AI Customer Assistants, and Brand Systems.
   - **Featured Services**: Quick links to all 7 specialized services.
   - **Engineering Stack & Frameworks (`TechStackMatrix`)**: Interactive filterable matrix showcasing React 19, TypeScript, Java/Spring Boot, Flutter, PostgreSQL, and LangChain RAG pipelines.
   - **Project Blueprints (`BlueprintShowcase`)**: Demonstrated real-world system architectures and problem-solver case studies.
   - **The Freelance Studio Advantage**: Clear comparison against bloated agencies and unvetted gig platforms.
   - **Four-Step Project Flow & High-Converting CTA Banner**.

2. **About (`/about`)**:
   - Company introduction, engineering philosophy, and craft ethos.
   - Detailed breakdown of target audiences (Retail Shops, Emerging Startups, Small Businesses, Entrepreneurs).
   - Core values: Tailored Solutions, Direct Communication, Budget-Conscious Work, Reliable Support.
   - Strict honesty standard: no fabricated client names, synthetic awards, or inflated metrics.

3. **Services (`/services`)**:
   Comprehensive catalog of all 7 service domains:
   - **Website Development**: Business sites, e-commerce, portfolios, custom bespoke builds.
   - **Web & Frontend Development**: Modern HTML, CSS, JavaScript, responsive interfaces, interactive dashboards.
   - **Mobile App Development**: Custom iOS/Android apps, operational business tools.
   - **Java Development**: Robust Java backend software, APIs, database integration.
   - **AI & Machine Learning**: AI chatbots, RAG-based knowledge assistants, automated workflows.
   - **Graphic Design & Branding**: Logo design, brand style guides, promotional posters, retail creatives.
   - **Social Media Management**: Content calendars, Instagram business styling, brand visibility.

4. **Products (`/products`)**:
   - Honest showcase of Forge Technologies' product incubation lab.
   - Covers upcoming tools: Retail Workflow Tools, Startup Launch Scaffolds, and AI Micro-Automations.
   - Early access and tool feedback inquiry form.
   - CTA to commission custom software solutions today.

5. **Contact (`/contact`)**:
   - Direct contact links: `contact.forgetechnologies@gmail.com` and `@forge_technologies` on Instagram.
   - Comprehensive Project Requirements Form (Name, Email, Business Name, Service of Interest, Budget Range, Timeline, Description).
   - Live frontend validation with accessible error messaging.
   - **Web3Forms API Integration**: Submits client inquiries asynchronously to `https://api.web3forms.com/submit` using `VITE_WEB3FORMS_ACCESS_KEY` or direct key configuration.
   - Privacy-respecting failover that formats a project brief, triggers the default email client, and provides 1-click clipboard copy + Gmail Web links as fallbacks.

6. **Policies & Client Agreement (`/policies`, `/terms`, `/privacy`)**:
   - **Client Service Terms**: Milestone-based scoping, 100% intellectual property & source code ownership, structured revision rounds, payment terms, and 14-day defect warranty.
   - **Privacy Policy**: GDPR-aligned data handling, Web3Forms integration disclosure, zero third-party tracking, strict project confidentiality (NDA friendly).
   - **Revisions & Refund Policy**: Transparent criteria for revision cycles, pre-commencement deposit refunds, and fair milestone settlements.

---

## Local Development

Ensure you have Node.js 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

The application runs at `http://localhost:3000` (or the port specified by Vite).

---

## Production Build & Static Deployment

Build the static distribution files:

```bash
npm run build
```

This generates production-ready static assets in the `dist/` directory.

### Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and import the repository.
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

*Note: The included `vercel.json` automatically manages client-side SPA routing rewrites.*

### Deploying to GitHub Pages

#### Option A: Custom Domain or User/Org Site (`username.github.io`)
No base path required.

1. Build with `npm run build`.
2. Push the contents of the `dist/` folder to the `gh-pages` branch (or configure GitHub Actions to deploy `dist/`).
3. The included `public/404.html` and router handle deep linking automatically.

#### Option B: Project Subfolder (`username.github.io/forge-technologies/`)
If deploying to a GitHub Pages repository subfolder:

1. In `vite.config.ts`, set the `base` property:
   ```ts
   export default defineConfig({
     base: '/forge-technologies/', // Replace with your repository name
     // ...
   });
   ```
2. Build and deploy `dist/`. Deep links are handled via the router's automatic hash and query fallback (`#/about` or `/?p=/about`).

---

## Production Email Delivery Pipeline (Resend + Vercel Serverless)

The application features a secure, production-grade email delivery pipeline powered by **Resend** and **Vercel Serverless Functions**:

1. **Direct Backend API Route (`/api/contact`)**:
   - The frontend validates form inputs client-side, enforces rate-limiting/duplicate submission prevention, and posts to `/api/contact`.
   - The serverless handler validates all required fields, enforces HTTPS security, and constructs both plain text and rich HTML emails.
2. **Reliable Studio Notification**:
   - Dispatches a formatted notification email directly to `contact.forgetechnologies@gmail.com` with `replyTo` set to the client's email for 1-click direct response.
3. **Automated Client Confirmation**:
   - Sends a confirmation receipt email to the client acknowledging their submission and providing a permanent record of their inquiry.
4. **Resilience & Fallbacks**:
   - If network or API delivery fails, clear error diagnostics are presented without ever displaying false success screens.
   - Users can copy their formatted brief to the clipboard or open it in Gmail with a single click.

### Environment Variables
Configure the following variables in **Vercel Project Settings → Environment Variables** (and locally in `.env.local`):

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | **Required**: API key from [resend.com/api-keys](https://resend.com/api-keys) | `re_123456789_abcdef...` |
| `FROM_EMAIL` | Sender address (verified domain or sandbox) | `Forge Technologies <onboarding@resend.dev>` |
| `TO_EMAIL` | Intended recipient studio inbox | `contact.forgetechnologies@gmail.com` |

---

## Assets to Supply in Future Revisions

When ready to update the site with permanent company assets:
- **Logo / Mark Files**: If a custom vector SVG logo is produced, it can replace the typographic `F` wordmark in `src/components/Header.tsx` and `src/components/Footer.tsx`.
- **Real Portfolio Projects**: Replace or append real case studies in a new dedicated portfolio section once client engagements are completed and permissions are granted.
- **Product Releases**: When internal tools transition from the R&D stage to public beta/launch, their URLs, screenshots, and documentation can be placed into `src/pages/ProductsPage.tsx`.
