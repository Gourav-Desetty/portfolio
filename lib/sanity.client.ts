import { createClient } from 'next-sanity'
import { sanityApiVersion, sanityDataset, sanityProjectId } from './sanityEnv'

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
})
