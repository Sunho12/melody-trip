'use client';

import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { Bot, Sparkles } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatContainerProps {
  trips?: TripWithSong[];
}

export function ChatContainer({ trips = [] }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        '안녕하세요! 🎵✨ 저는 음악과 여행을 연결해주는 AI 도우미예요! 좋아하는 음악 장르나 분위기를 알려주시면 어울리는 여행지를 추천해 드릴게요. 또는 여행지를 말씀해주시면 그곳에 어울리는 음악을 추천해 드릴 수도 있어요! 💫',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setStreamingMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          trips: trips.map((t) => ({
            destination: t.destination,
            country: t.country,
            continent: t.continent,
            travel_category: t.travel_category,
            song: t.song?.title,
            artist: t.song?.artist,
            genre: t.song?.genre?.name,
          })),
        }),
      });

      const data = await response.json();
      const responseText = data.message || '죄송합니다, 응답을 생성하는 데 문제가 발생했습니다.';

      // 타이핑 효과
      setIsLoading(false);
      const words = responseText.split('');
      for (let i = 0; i < words.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 20));
        setStreamingMessage(words.slice(0, i + 1).join(''));
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setStreamingMessage('');
    } catch (error) {
      console.error('Chat error:', error);
      setIsLoading(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '죄송합니다, 서버와 통신하는 데 문제가 발생했습니다. 다시 시도해주세요. 😢',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Card className="flex flex-col h-[600px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 shadow-xl border-purple-100 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin relative">
        {/* 귀여운 배경 패턴 */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl">🎵</div>
          <div className="absolute top-32 right-20 text-3xl">✨</div>
          <div className="absolute bottom-20 left-32 text-3xl">🌟</div>
          <div className="absolute bottom-40 right-16 text-4xl">💫</div>
          <div className="absolute top-48 left-20 text-2xl">🎶</div>
        </div>

        <div className="relative z-10">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && <TypingIndicator />}
          {streamingMessage && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400">
                <div className="relative">
                  <Bot className="w-5 h-5 text-white" />
                  <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
                </div>
              </div>
              <div className="max-w-[80%] px-5 py-3 rounded-2xl shadow-md bg-gradient-to-br from-purple-50 to-indigo-50 text-gray-800 rounded-tl-sm border border-purple-100">
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {streamingMessage}
                  <span className="inline-block w-1 h-4 bg-purple-400 ml-1 animate-pulse" />
                </p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t border-purple-100 bg-white/50 backdrop-blur-sm">
        <ChatInput onSend={handleSendMessage} disabled={isLoading || !!streamingMessage} />
      </div>
    </Card>
  );
}
