import { SiteData } from '@/types'

const icons = {
  github: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  // linkedin: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z"/></svg>,
  twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  leetcode: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M16.102 17.93l-2.697 2.607c-.466.466-1.057.733-1.702.733-.586 0-1.14-.219-1.564-.617l-4.654-4.776c-.925-.899-1.236-2.248-.818-3.44.418-1.192 1.474-2.012 2.712-2.126l1.133-.107.314-1.12c.394-1.406 1.66-2.387 3.109-2.387 1.297 0 2.448.736 3.012 1.92l.407.855 1.027-.233c.304-.069.605-.104.897-.104 1.973 0 3.576 1.604 3.576 3.576 0 1.292-.687 2.434-1.736 3.077l-.826.5-.188.965zm-13.74 1.062l1.414-1.414c.195-.195.512-.195.707 0l.707.707c.195.195.195.512 0 .707l-1.414 1.414c-.195.195-.512.195-.707 0l-.707-.707c-.195-.195-.195-.512 0-.707z"/></svg>,
  email: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>,
}

interface ContactProps {
  data: Pick<SiteData, 'email' | 'github' | 'linkedin' | 'twitter' | 'leetcode' | 'contactHeading' | 'contactSub'>
}

export default function Contact({ data }: ContactProps) {
  const socials = [
    { href: data.github, label: 'GitHub', icon: icons.github },
    // { href: data.linkedin, label: 'LinkedIn', icon: icons.linkedin },
    { href: data.twitter, label: 'Twitter', icon: icons.twitter },
    { href: data.leetcode, label: 'LeetCode', icon: icons.leetcode },
    { href: `mailto:${data.email}`, label: 'Email', icon: icons.email },
  ].filter(s => s.href)

  return (
    <section id="contact" className="text-center pb-36">
      <div className="wrapper flex flex-col items-center">
        <p className="section-label reveal">04 — Contact</p>
        <h2 className="reveal">
          Let&apos;s <em>{data.contactHeading || 'Connect'}</em>
        </h2>
        <p className="sub reveal">{data.contactSub || 'Always open to interesting conversations, collaborations, and new opportunities. Reach out anytime.'}</p>
        <div className="contact-actions reveal">
          <a href={`mailto:${data.email}`} className="btn-primary">Send an Email</a>
          {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener" className="btn-ghost">LinkedIn</a>}
        </div>
        <div className="social-grid reveal">
          {socials.map((s, i) => (
            <a key={i} href={s.href!} target={s.href?.startsWith('mailto') ? undefined : '_blank'} rel="noopener" className="social-link">
              {s.icon}{s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
