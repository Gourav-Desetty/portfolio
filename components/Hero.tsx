'use client'
import { useRef, useState } from 'react'
import { SiteData } from '@/types'

const GithubIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" /></svg>
const EmailIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
const UserIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10 opacity-30"><circle cx="12" cy="8" r="5" /><path d="M3 21c0-5 4-9 9-9s9 4 9 9" /></svg>

const codeLines = [
  { text: '> Gourav Desetty', delay: 0.0 },
  { text: '  role: "AI/ML Engineer"', delay: 0.3 },
  { text: '', delay: 0.0 },
  { text: '  stack: [', delay: 0.6 },
  { text: '    "PyTorch",  "LangChain",', delay: 0.9 },
  { text: '    "FastAPI",  "Docker",', delay: 1.2 },
  { text: '    "MLflow",   "Qdrant"', delay: 1.5 },
  { text: '  ],', delay: 1.8 },
  { text: '', delay: 0.0 },
  { text: '  university: "ITER, SOA",', delay: 2.1 },
  { text: '  degree:     "B.Tech CSE",', delay: 2.4 },
  { text: '', delay: 0.0 },
  { text: '  available:  true', delay: 2.7 },
]

function CodeBlock() {
  return (
    <div style={{
      background: 'var(--bg2)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      padding: '1.5rem',
      fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace',
      fontSize: '0.75rem',
      lineHeight: '1.7',
      color: 'var(--muted)',
      width: '100%',
      maxWidth: '340px'
    }}>
      {/* Traffic lights */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '1.25rem' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
      </div>

      {/* Lines */}
      {codeLines.map((line, i) => (
        <div
          key={i}
          style={{
            opacity: 0,
            animation: `fadeUp 0.4s ease forwards`,
            animationDelay: `${line.delay + 0.5}s`,
            minHeight: '1.6em',
            whiteSpace: 'pre',
          }}
        >
          {line.text.startsWith('>') ? (
            <span>
              <span style={{ color: 'var(--accent)' }}>&gt;</span>
              {line.text.slice(1)}
            </span>
          ) : line.text.includes('true') ? (
            <span>
              {line.text.replace('true', '')}
              <span style={{ color: '#28c840' }}>true</span>
            </span>
          ) : line.text.includes('"') ? (
            <span>
              {line.text.split('"').map((part, j) =>
                j % 2 === 1
                  ? <span key={j} style={{ color: 'var(--text)', opacity: 0.9 }}>&quot;{part}&quot;</span>
                  : <span key={j}>{part}</span>
              )}
            </span>
          ) : (
            <span>{line.text}</span>
          )}
        </div>
      ))}

      {/* Blinking cursor */}
      <div className="code-cursor" />
    </div>

  )
}

interface HeroProps {
  data: Pick<SiteData, 'name' | 'tagline' | 'eyebrow' | 'email' | 'github' | 'linkedin' | 'photo'>
}

export default function Hero({ data }: HeroProps) {
  const [photoSrc, setPhotoSrc] = useState<string | null>(data.photo || null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => setPhotoSrc(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const [first, ...rest] = (data.name || 'Gourav Desetty').split(' ')
  const last = rest.join(' ')

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 text-left">
      <div className="wrapper">
        <div className="hero-inner">

          {/* Left: text */}
          <div className="hero-text">
            <p className="hero-eyebrow hero-anim">{data.eyebrow || 'Available for opportunities'}</p>
            <h1 className="hero-name hero-anim">
              {first} <em>{last}</em>
            </h1>
            <p className="hero-tagline hero-anim">{data.tagline}</p>
            <div className="hero-actions hero-anim">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>
            <div className="hero-links hero-anim">
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener" className="hero-link">
                  <GithubIcon />GitHub
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener" className="hero-link">
                  <LinkedinIcon />LinkedIn
                </a>
              )}
              {data.email && (
                <a href={`mailto:${data.email}`} className="hero-link">
                  <EmailIcon />{data.email}
                </a>
              )}
            </div>
            <div className="hero-scroll hero-anim">
              <div className="scroll-line" />
              scroll to explore
            </div>
          </div>

          {/* Right: animated code block */}
          {/* Photo slot — commented out, restore by replacing CodeBlock with photo div below */}
          {/*
          <div className="hero-photo hero-anim">
            <div className="hero-photo-frame group" onClick={() => inputRef.current?.click()}>
              {photoSrc ? (
                <img src={photoSrc} alt={data.name} className="w-full h-full object-cover block" />
              ) : (
                <div className="hero-photo-placeholder">
                  <UserIcon />
                  <span className="text-[0.72rem] tracking-widest uppercase opacity-50">Add your photo</span>
                </div>
              )}
              <div className="photo-upload-label opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Upload photo</span>
              </div>
              <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
            </div>
          </div>
          */}
          <div className="hero-photo hero-anim">
            <CodeBlock />
          </div>

        </div>
      </div>
    </section>
  )
}