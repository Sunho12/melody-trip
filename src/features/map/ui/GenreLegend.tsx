'use client';

import { Card, CardContent } from '@/components/ui/card';
import type { Genre } from '@/entities/genre';

interface GenreLegendProps {
  genres: Genre[];
}

export function GenreLegend({ genres }: GenreLegendProps) {
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardContent className="p-4">
        <p className="text-sm text-gray-500 mb-3">장르 색상 범례</p>
        <div className="flex flex-wrap gap-3">
          {genres.map((genre) => (
            <div key={genre.id} className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: genre.color }}
              />
              <span className="text-sm text-gray-700">{genre.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
