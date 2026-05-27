import localFont from 'next/font/local'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./globals.css"
import { MobileMenuProvider } from './context/MobileMenuContext'

// define a custom font
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

// define metadata, this is used by the browser
// to show additional information for your site
export const metadata = {
  title: 'SharkByte 2026 | Miami Dade College Hackathon',
  description: 'Join SharkByte, Miami Dade College\'s official hackathon! A free 3-day tech sprint November 6-8, 2026 in Miami, FL. Build innovative projects, learn new skills, and connect with fellow developers. Open to anyone 18+.',
  keywords: 'hackathon, Miami Dade College, INIT, miami dade college hackathon, mdc hackathon, SharkByte, coding, programming, Miami, Florida, event',
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
  }
  ,openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shark-byte.io',
    siteName: 'SharkByte 2026 | Miami Dade College Signature Hackathon',
    title: 'SharkByte 2026 | Miami Dade College Signature Hackathon',
    description: 'Join SharkByte, Miami Dade College\'s official hackathon! A free 3-day tech sprint November 6-8, 2026 in Miami, FL. Build innovative projects, learn new skills, and connect with fellow developers.',
    images: [
      {
        url: 'https://i.ibb.co/Kj4jgkm8/image.png',
        width: 1200,
        height: 630,
        alt: 'SharkByte 2026 Hackathon - Miami Dade College',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MobileMenuProvider>
          {<Navbar /> }
          {children}
          <Footer/>
        </MobileMenuProvider>
      </body>
    </html>
  );
}
