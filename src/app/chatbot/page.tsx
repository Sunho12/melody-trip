'use client';

export const dynamic = 'force-dynamic';

import { MainLayout } from '@/widgets/layout';
import { ChatContainer } from '@/features/chatbot';
import { useTripsQuery } from '@/features/trip';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Jua } from 'next/font/google';

const jua = Jua({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function ChatbotPage() {
  const { data: trips } = useTripsQuery();

  return (
    <MainLayout>
      <div className={`max-w-3xl mx-auto space-y-6 ${jua.className}`}>
        {/* 헤더 */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-2xl shadow-md">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-purple-600 hover:bg-white/50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-rose-400" />
              음악 기반 여행 챗봇 ✨
            </h1>
            <p className="text-purple-600 text-base mt-1">
              🎵 좋아하는 음악을 알려주시면 어울리는 여행지를 추천해 드려요!
            </p>
          </div>
        </div>

        {/* 챗봇 */}
        <ChatContainer trips={trips} />
      </div>
    </MainLayout>
  );
}
