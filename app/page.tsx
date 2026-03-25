import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ScrollReveal from '@/components/ScrollReveal'
import { fallbackData } from '@/lib/fallbackData'
import { SiteData } from '@/types'

// Try to fetch from Sanity; fall back to static data if not configured
async function getData(): Promise<SiteData> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId || projectId === 'your_project_id') return fallbackData
  try {
    const { getSiteData } = await import('@/lib/queries')
    const data = await getSiteData()
    return data || fallbackData
  } catch {
    return fallbackData
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <>
      <Navbar />
      <ScrollReveal />

      <Hero data={data} />
      <div className="divider" />

      <About data={data} />
      <div className="divider" />

      <Skills data={data} />
      <div className="divider" />

      <Projects data={data} />
      <div className="divider" />

      <Contact data={data} />

      <div className="footer-bar">
        <footer>
          <p>© 2026 Gourav Desetty. All rights reserved.</p>
          <p>Built with passion &amp; dedication.</p>
        </footer>
      </div>
    </>
  )
}
