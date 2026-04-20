/**
 * Same defaults as sanity/config.ts so Studio, Next build, and GitHub Actions
 * stay aligned when NEXT_PUBLIC_* env vars are missing (common on Pages CI).
 */
export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || '6gvgvzhw'
export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production'
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || '2024-01-01'
