'use client'

import { useEffect, useState } from 'react'
import { sanityApiVersion, sanityDataset, sanityProjectId } from '@/lib/sanityEnv'

/** Matches lib/queries.ts — latest Site Data doc’s resume file URL (published API). */
const RESUME_QUERY = `*[_type == "siteData"] | order(_updatedAt desc)[0]{"resumeUrl": resume.asset->url}`

interface ResumeLinkProps {
  /** From SSR / build — used until client fetch completes */
  initialHref: string
  className?: string
  children: React.ReactNode
}

export default function ResumeLink({ initialHref, className, children }: ResumeLinkProps) {
  const [href, setHref] = useState(initialHref)

  useEffect(() => {
    const qs = new URLSearchParams({ query: RESUME_QUERY })
    const url = `https://${sanityProjectId}.api.sanity.io/v${sanityApiVersion}/data/query/${sanityDataset}?${qs}`

    fetch(url, { cache: 'no-store' })
      .then((r) => r.json())
      .then((json: { result?: { resumeUrl?: string | null } }) => {
        const next = json.result?.resumeUrl
        if (typeof next === 'string' && next.length > 0) setHref(next)
      })
      .catch(() => {
        /* keep initialHref */
      })
  }, [])

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
