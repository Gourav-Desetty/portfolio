# Gourav Desetty — Portfolio

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Sanity.io**.

## Stack
- **Next.js 15** (App Router, Server Components)
- **TypeScript** — full type safety
- **Tailwind CSS** — utility classes + custom CSS variables for theming
- **Sanity.io** — headless CMS for all portfolio content

## Project Structure
```
gourav-portfolio/
├── app/
│   ├── page.tsx              # Main page (server component)
│   ├── layout.tsx            # Root layout with fonts
│   ├── globals.css           # All design tokens + custom CSS
│   └── studio/[[...tool]]/
│       └── page.tsx          # Sanity Studio at /studio
├── components/
│   ├── Navbar.tsx            # Floating pill nav + theme toggle
│   ├── Hero.tsx              # Hero section with photo upload
│   ├── About.tsx             # About + traits grid
│   ├── Skills.tsx            # Skills table
│   ├── Projects.tsx          # Project cards
│   ├── Contact.tsx           # Contact + social links
│   └── ScrollReveal.tsx      # Scroll animation client component
├── lib/
│   ├── sanity.client.ts      # Sanity client config
│   ├── queries.ts            # GROQ queries
│   └── fallbackData.ts       # Static fallback (no Sanity needed)
├── sanity/
│   ├── config.ts             # Sanity studio config
│   └── schemas/
│       └── siteData.ts       # Content schema
└── types/
    └── index.ts              # TypeScript interfaces
```

## Getting Started

### Without Sanity (uses static data)
```bash
npm install
npm run dev
```
Open http://localhost:3000 — works immediately with fallback data.

### With Sanity CMS
1. Create a project at https://sanity.io
2. Update `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
3. Run `npm run dev` and go to http://localhost:3000/studio
4. Add your content in the Studio — it will be fetched automatically

## Deploying
Deploy to Vercel with one click. Add the env variables in Vercel dashboard.
