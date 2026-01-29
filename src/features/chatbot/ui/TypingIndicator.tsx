'use client';

import { Bot, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-white" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl rounded-tl-sm px-5 py-3 shadow-md border border-purple-100">
        <div className="flex gap-1.5">
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
            className="w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
          />
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
            className="w-2.5 h-2.5 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full"
          />
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
            className="w-2.5 h-2.5 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
