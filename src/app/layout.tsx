import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';

import Menu from '../components/menu/menu';
import SectionsNav from '@/components/sectionsNav/sectionsNav';
import ActiveSectionContextProvider from './context/activeSection';
import Loading from './loading';
import SimpleTestLoader from '@/components/loaders/simpleTestLoader';

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
          <SimpleTestLoader />
          <Suspense fallback={<Loading />}>
            <main>{children}</main>
          </Suspense>
          {/* {children} */}
          {/* <div> */}
          {/* </div> */}
          {/* <SectionsNav /> */}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
