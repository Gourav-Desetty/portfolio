import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { siteData } from './schemas/siteData'

export default defineConfig({
  name: 'default',
  title: 'Gourav Portfolio',

  // Use the env variable, but fallback to your ID if it's missing
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6gvgvzhw',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  
  basePath: '/portfolio/studio', 
  plugins: [structureTool(), visionTool()],
  schema: { types: [siteData] },
})