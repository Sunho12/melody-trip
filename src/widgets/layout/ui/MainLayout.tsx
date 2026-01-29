'use client';

import { Header } from '@/widgets/header';
import { Toaster } from '@/components/ui/toaster';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Toaster />
    </div>
  );
}
