import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.briankarmo.com'),
  title: 'Brian | Software Developer',
  description: 'Explore Brian\'s portfolio, showcasing full‑scale projects and modern software development using Shopify Liquid, React, and Next.js.',
  keywords: 'Brian, software developer, full‑scale projects, web development, React, Next.js, Shopify Liquid, JavaScript, Tailwind CSS',
  author: 'Brian',
  openGraph: {
    type: 'website',
    title: 'Brian | Software Developer',
    description: 'Explore Brian\'s portfolio, showcasing full‑scale projects and modern software development using Shopify Liquid, React, and Next.js.',
    url: 'https://brian-portfolio.com/',
    siteName: 'Brian Portfolio',
    images: [
      {
        url: '/heroImage-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Brian - Software Developer',
      },
      {
        url: '/heroImage-600x315.png',
        width: 600,
        height: 315,
        alt: 'Brian - Software Developer',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian | Software Developer',
    description: 'Explore Brian\'s portfolio, showcasing full‑scale projects and modern software development using Shopify Liquid, React, and Next.js.',
    creator: '@brian',
    images: [
      {
        url: '/heroImage-1200x630.png',
        alt: 'Brian - Software Developer',
      }
    ],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/heroImage-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/heroImage-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/heroImage-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/heroImage.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#0EA5E9',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
        <meta name="msapplication-navbutton-color" content="#0EA5E9" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0EA5E9" />
        <meta property="og:background" content="#0EA5E9" />
        
        {/* Additional social media meta tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Brian - Software Developer" />
        
        {/* Twitter specific meta tags */}
        <meta name="twitter:image:alt" content="Brian - Software Developer" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/heroImage.png" />
        <link rel="preload" as="image" href="/heroImage-1200x630.png" />
        
        <link rel="icon" type="image/png" sizes="32x32" href="/heroImage-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/heroImage-16x16.png" />
        <link rel="shortcut icon" href="/heroImage.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 