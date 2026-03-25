import Studio from './Studio'

// This stays here because it's a server-side build instruction
export const generateStaticParams = () => {
  return [{ tool: [] }];
};

export const dynamic = 'force-static';

export default function StudioPage() {
  return <Studio />
}