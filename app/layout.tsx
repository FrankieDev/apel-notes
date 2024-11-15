import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${openSans.className}  antialiased`}>{children}</body>
    </html>
  )
}
