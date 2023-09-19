import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './footer'
import Sidebar from '@/components/Search/Sidebar'
import Navbar from '@/components/Search/Navbar'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'DevConnect',
  description: 'Helping Roblox Developers Find The Right Studios',
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="relative">
        <Navbar/>
      <div className="h-screen flex flex-row justify-start">
          <Sidebar/>
          {children}
        </div>
<Footer/>
        </body>
    </html>
  )
}
