import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import AppClientLayout from './AppClientLayout'
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: '%s | Jack Creative Lab',
    default: 'Jack Creative Lab - Refonte de sites web pour PME',
  },
  description: 'Studio créatif spécialisé dans la refonte de sites web modernes, élégants et performants pour PME ambitieuses. Transformez votre présence digitale.',
  openGraph: {
    title: 'Jack Creative Lab - Refonte de sites web pour PME',
    description: 'Studio créatif spécialisé dans la refonte de sites web modernes, élégants et performants pour PME ambitieuses.',
    url: 'https://jackcreativelab.github.io/jack-creative-lab-website/',
    siteName: 'Jack Creative Lab',
    images: [
      {
        url: 'https://jackcreativelab.github.io/jack-creative-lab-website/jack_pub.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jack Creative Lab',
    url: 'https://jackcreativelab.github.io/jack-creative-lab-website/',
    logo: 'https://jackcreativelab.github.io/jack-creative-lab-website/logo_jack_creative_lab.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jack.creative.lab@gmail.com',
      contactType: 'Customer Service',
    },
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${sourceSans.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <AppClientLayout>{children}</AppClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}