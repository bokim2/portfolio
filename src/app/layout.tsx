import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Menu from '../components/menu/menu';
import SectionsNav from '@/components/sectionsNav/sectionsNav';
import ActiveSectionContextProvider from './context/activeSection';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bo Kim',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Menu />
          <main>{children}</main>
          {/* {children} */}
          {/* <div> */}
          {/* </div> */}
          {/* <SectionsNav /> */}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
