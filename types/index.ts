export interface Trait {
  icon: string
  title: string
  description: string
}

export interface Skill {
  category: string
  tags: string[]
}

export interface Project {
  number: string
  title: string
  description: string
  highlights: string[]
  tags: string[]
  githubUrl: string
}

export interface SiteData {
  name: string
  tagline: string
  eyebrow: string
  email: string
  github: string
  linkedin: string
  twitter: string
  leetcode: string
  photo: string | null
  aboutHeading: string
  aboutBio: string[]
  aboutQuote: string
  traits: Trait[]
  skills: Skill[]
  projects: Project[]
  contactHeading: string
  contactSub: string
}
