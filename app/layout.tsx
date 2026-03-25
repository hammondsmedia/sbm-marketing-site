import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HMM Small Business Marketing | Digital Marketing for Local Businesses',
  description:
    'Hammonds Media helps small businesses grow through strategic social media, SEO, email marketing, and paid advertising. Based in Oklahoma, serving local businesses nationwide.',
  keywords: 'small business marketing, local SEO, social media management, digital marketing Oklahoma',
  openGraph: {
    title: 'HMM Small Business Marketing',
    description: 'Marketing that actually works for small businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Typekit — carbona-variable */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
