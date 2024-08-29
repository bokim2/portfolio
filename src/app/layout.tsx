import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';

import Menu from '../components/menu/menu';
import SectionsNav from '@/components/sectionsNav/sectionsNav';
import ActiveSectionContextProvider from './context/activeSection';
import HomeLoader from '@/components/loaders/home-loader/HomeLoader';


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
          <HomeLoader />
          {/* <Suspense fallback={<Loading />}> */}
            <main>{children}</main>
          {/* </Suspense> */}
          {/* {children} */}
          {/* <div> */}
          {/* </div> */}
          {/* <SectionsNav /> */}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
