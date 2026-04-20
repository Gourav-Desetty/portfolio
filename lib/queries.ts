import { client } from './sanity.client'

export async function getSiteData() {
  // Prefer the most recently updated document — [*][0] is undefined when many
  // "Site Data" docs exist (e.g. several "Untitled"), so the site could show the wrong one.
  return client.fetch(`*[_type == "siteData"] | order(_updatedAt desc)[0]{
    name, tagline, eyebrow, email, github, linkedin, twitter, leetcode,
    aboutHeading, aboutBio, aboutQuote,
    "photo": photo.asset->url,
    "resumeUrl": resume.asset->url,
    traits[]{ icon, title, description },
    skills[]{ category, tags },
    projects[]{ number, title, description, highlights, tags, githubUrl },
    contactHeading, contactSub
  }`)
}