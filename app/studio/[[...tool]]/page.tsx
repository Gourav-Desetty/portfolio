'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity/config'
export const dynamic = 'force-static';
// Add this block below your imports
export const generateStaticParams = () => {
  return [{ tool: [] }];
};

export default function StudioPage() {
  return <NextStudio config={config} />
}