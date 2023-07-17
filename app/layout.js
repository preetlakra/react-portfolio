import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Preet Lakra',
}

export const link = {

  'twitter': 'https://twitter.com/notbeamn',
  'linkedin' : 'https://www.linkedin.com/in/preetlakra',
  'github': 'https://github.com/preetlakra'

}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
