import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar'; // Import the Navbar component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Education News Portal',
  description: 'Stay updated with the latest education news',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <Navbar /> {/* Insert Navbar here */}
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
