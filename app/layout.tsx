'use client'

import './globals.css'
import type { Metadata } from 'next'

import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Ismail Karouata',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={true} attribute='class'>  
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
