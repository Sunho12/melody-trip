'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Music, Map, MessageCircle, Plus, Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: '대시보드', icon: Music },
  { href: '/map', label: '지도', icon: Map },
  { href: '/chatbot', label: '챗봇', icon: MessageCircle },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-pastel-purple-200 bg-gradient-to-r from-pastel-purple-50 via-pastel-pink-50 to-pastel-yellow-50 backdrop-blur-xl shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pastel-purple-300 to-pastel-pink-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-pastel-purple-400">Melody Trip ✨</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    'text-pastel-purple-300 hover:text-pastel-purple-400 hover:bg-pastel-purple-100 rounded-2xl',
                    pathname === item.href && 'bg-gradient-to-r from-pastel-purple-200 to-pastel-pink-200 text-pastel-purple-400'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Add Button & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link href="/add">
              <Button className="bg-gradient-to-r from-pastel-purple-300 via-pastel-pink-300 to-pastel-yellow-300 hover:from-pastel-purple-400 hover:via-pastel-pink-400 hover:to-pastel-yellow-400 text-white shadow-lg rounded-2xl">
                <Plus className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">새 여행</span>
                <Sparkles className="w-4 h-4 ml-1" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-pastel-purple-300 rounded-full">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-to-br from-pastel-purple-50 to-pastel-pink-50 border-pastel-purple-200">
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          'w-full justify-start text-pastel-purple-300 hover:text-pastel-purple-400 hover:bg-pastel-purple-100 rounded-2xl',
                          pathname === item.href && 'bg-gradient-to-r from-pastel-purple-200 to-pastel-pink-200 text-pastel-purple-400'
                        )}
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
