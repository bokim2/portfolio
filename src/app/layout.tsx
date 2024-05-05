import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Menu from '../components/menu/menu';
import Transition from './transition';

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
        
        <Menu />
        <Transition>{children}</Transition>
      {/* {children} */}
      {/* <div> */}
      {/* </div> */}
      </body>
    </html>
  );
}
