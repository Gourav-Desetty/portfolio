import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { siteData } from './schemas/siteData'

export default defineConfig({
  name: 'gourav-portfolio',
  title: 'Gourav Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool(), visionTool()],
  schema: { types: [siteData] },
  basePath: '/portfolio/studio',
})
