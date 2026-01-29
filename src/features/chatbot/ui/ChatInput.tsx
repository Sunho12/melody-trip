'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="음악 장르나 여행지를 입력해주세요..."
        className="flex-1 bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
        disabled={disabled}
      />
      <Button
        type="submit"
        size="icon"
        className="bg-gradient-to-r from-rose-400 to-amber-400 hover:from-rose-500 hover:to-amber-500"
        disabled={disabled || !input.trim()}
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}
