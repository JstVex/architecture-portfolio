import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Architecture portfolio',
  description: 'Architecture portfolio of April',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
