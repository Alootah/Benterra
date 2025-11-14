import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700']
})
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'BENTERRA COFFEE TRADING | Premium Yemeni Green Coffee',
  description: 'Genuine Yemeni green coffee samples for UAE roasters. Premium microlots from Haimah, Haraz, and Khawlan. 100g and 250g sample packs.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
