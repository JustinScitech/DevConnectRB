import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './footer';
import Sidebar from '@/components/Search/Sidebar';
import Navbar from '@/components/Search/Navbar';
import SidebarToggleWrapper from './SidebarToggleWrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevConnect',
  description: 'Helping Roblox Developers Find The Right Studios',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <SidebarToggleWrapper>
          <div className="flex justify-center">
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Footer />
        </SidebarToggleWrapper>
      </body>
    </html>
  )
}


