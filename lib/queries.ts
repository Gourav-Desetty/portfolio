import { client } from './sanity.client'

export async function getSiteData() {
  return client.fetch(`*[_type == "siteData"][0]{
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