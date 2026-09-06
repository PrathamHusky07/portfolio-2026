import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const CANONICAL_URL = 'https://prathameshkulkarni.com'

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    template: '%s | Prathamesh Kulkarni',
    default: 'Prathamesh Kulkarni — AI Analytics Engineer',
  },
  description:
    'AI Analytics Engineer building production multi-agent LLM systems and analytics platforms. Stack: LangGraph, Databricks, dbt, MLflow, Python, BigQuery.',
  openGraph: {
    type: 'website',
    url: CANONICAL_URL,
    siteName: 'Prathamesh Kulkarni',
    title: 'Prathamesh Kulkarni — AI Analytics Engineer',
    description:
      'AI Analytics Engineer building production multi-agent LLM systems and analytics platforms. Stack: LangGraph, Databricks, dbt, MLflow, Python, BigQuery.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Prathamesh Kulkarni — AI Analytics Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prathamesh Kulkarni — AI Analytics Engineer',
    description:
      'AI Analytics Engineer building production multi-agent LLM systems and analytics platforms. Stack: LangGraph, Databricks, dbt, MLflow, Python, BigQuery.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prathamesh Kulkarni',
  url: CANONICAL_URL,
  jobTitle: 'AI Analytics Engineer',
  sameAs: [
    'https://www.linkedin.com/in/prathameshkulkarni23/',
    'https://github.com/PrathamHusky07',
  ],
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
