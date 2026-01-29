import type { Metadata } from 'next';
import { Jua } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const jua = Jua({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jua',
});

export const metadata: Metadata = {
  title: 'Melody Trip - 음악과 함께하는 여행 기록',
  description: '좋아하는 음악과 함께 여행을 기록하고, AI 추천을 받아보세요.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body
        className={`${jua.variable} font-[var(--font-jua)] antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
