import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gourav Desetty — Software Developer',
  description: 'AI/ML Engineer & Software Developer portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              var theme = localStorage.getItem('theme') || 'light';
              document.documentElement.setAttribute('data-theme', theme);
              if (theme === 'dark') document.documentElement.classList.add('dark');
            } catch(e) {}
          `
        }}/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}