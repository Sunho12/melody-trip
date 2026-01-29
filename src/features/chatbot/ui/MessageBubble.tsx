'use client';

import { Bot, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Message } from './ChatContainer';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
          isUser
            ? 'bg-gradient-to-br from-pink-400 via-rose-400 to-red-400'
            : 'bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400'
        }`}
      >
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
          </div>
        )}
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15 }}
        className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-md ${
          isUser
            ? 'bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-tr-sm'
            : 'bg-gradient-to-br from-purple-50 to-indigo-50 text-gray-800 rounded-tl-sm border border-purple-100'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap leading-relaxed">
          {message.content}
        </p>
      </motion.div>
    </motion.div>
  );
}
