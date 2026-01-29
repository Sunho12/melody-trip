'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="🎵 음악 장르나 여행지를 입력해주세요..."
        className="flex-1 bg-white border-2 border-purple-200 focus:border-purple-400 text-gray-800 placeholder:text-purple-300 rounded-full px-5 shadow-sm transition-all"
        disabled={disabled}
      />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          type="submit"
          size="icon"
          className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 hover:from-purple-500 hover:via-pink-500 hover:to-rose-500 rounded-full w-12 h-12 shadow-lg relative overflow-hidden"
          disabled={disabled || !input.trim()}
        >
          <motion.div
            animate={{ rotate: disabled ? 0 : [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {input.trim() ? (
              <Send className="w-5 h-5" />
            ) : (
              <Sparkles className="w-5 h-5" />
            )}
          </motion.div>
        </Button>
      </motion.div>
    </form>
  );
}
