'use client';

import { MainLayout } from '@/widgets/layout';
import { ChatContainer } from '@/features/chatbot';
import { useTripsQuery } from '@/features/trip';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ChatbotPage() {
  const { data: trips } = useTripsQuery();

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        {/* 헤더 */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-rose-400" />
              음악 기반 여행 챗봇
            </h1>
            <p className="text-gray-500">
              좋아하는 음악을 알려주시면 어울리는 여행지를 추천해 드려요
            </p>
          </div>
        </div>

        {/* 챗봇 */}
        <ChatContainer trips={trips} />
      </div>
    </MainLayout>
  );
}
