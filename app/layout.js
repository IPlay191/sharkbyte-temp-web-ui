import localFont from 'next/font/local'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./globals.css"
import { MobileMenuProvider } from './context/MobileMenuContext'

export const VT323 = localFont({
  src: [
    {
      path: '../public/fonts/vt323/VT323-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/vt323/VT323-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-vt323',
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://shark-byte.io'),
  title: 'SharkByte | Miami Dade College Signature Hackathon',
  description: 'SharkByte 2026 has officially concluded! Explore our 2026 stats, projects, and sponsors as we gear up to return with a splash in 2027.',
  keywords: 'hackathon, Miami Dade College, INIT, miami dade college hackathon, mdc hackathon, SharkByte, coding, programming, Miami, Florida, SharkByte 2026, SharkByte 2027, tech event',
  authors: [{ name: 'INIT MDC North' }],
  creator: 'INIT MDC North',
  publisher: 'Miami Dade College',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shark-byte.io',
    siteName: 'SharkByte | Miami Dade College Signature Hackathon',
    title: 'SharkByte | Sea You Soon in 2027',
    description: 'Thank you to all the hackers, mentors, and sponsors who made SharkByte 2026 unforgettable. We are coming back with a splash in 2027!',
    images: [
      {
        url: '/sharkbyte-website-image.png',
        width: 1200,
        height: 630,
        alt: 'SharkByte Hackathon - Miami Dade College',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SharkByte | Miami Dade College Signature Hackathon',
    description: 'Thank you for making SharkByte 2026 unforgettable. Sea you soon in 2027!',
    images: ['/sharkbyte-website-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={VT323.variable}>
        <MobileMenuProvider>
          <Navbar />
          {children}
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  );
}