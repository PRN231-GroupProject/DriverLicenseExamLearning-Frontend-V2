import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from './components'
import AuthProvider from '@/context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <AuthProvider>
            <Navbar/>
            <main className='flex-1'>{children}</main>
            <Footer/>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
