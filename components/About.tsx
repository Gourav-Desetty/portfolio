import { SiteData } from '@/types'

interface AboutProps {
  data: Pick<SiteData, 'aboutHeading' | 'aboutBio' | 'aboutQuote' | 'traits'>
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about">
      <div className="wrapper" style={{ textAlign: 'left' }}>
        <p className="section-label reveal">01 — About</p>
        <div className="about-grid">
          <div className="reveal">
            <h2 dangerouslySetInnerHTML={{ __html: (data.aboutHeading || 'Build.<br/>Learn.<br/>Repeat.') }} />
            {(data.aboutBio || []).map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
            <blockquote className="about-quote">&ldquo;{data.aboutQuote}&rdquo;</blockquote>
          </div>
          <div className="traits-grid reveal">
            {(data.traits || []).map((trait, i) => (
              <div key={i} className="trait-card">
                <div className="trait-icon">{trait.icon}</div>
                <div className="trait-title">{trait.title}</div>
                <div className="trait-desc">{trait.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
