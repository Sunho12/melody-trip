'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';

interface GenreStatsProps {
  trips: TripWithSong[];
}

export function GenreStats({ trips }: GenreStatsProps) {
  // 장르별 통계 계산
  const genreStats = trips.reduce((acc, trip) => {
    const genreName = trip.song?.genre?.name || '미분류';
    const genreColor = trip.song?.genre?.color || '#6366f1';

    if (!acc[genreName]) {
      acc[genreName] = { count: 0, color: genreColor };
    }
    acc[genreName].count++;
    return acc;
  }, {} as Record<string, { count: number; color: string }>);

  const sortedGenres = Object.entries(genreStats)
    .sort(([, a], [, b]) => b.count - a.count);

  const maxCount = Math.max(...Object.values(genreStats).map((g) => g.count));

  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
          <Music className="w-5 h-5 text-rose-400" />
          음악 장르별 통계
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sortedGenres.length === 0 ? (
          <p className="text-gray-400 text-sm">데이터가 없습니다</p>
        ) : (
          <div className="space-y-3">
            {sortedGenres.map(([genre, { count, color }]) => (
              <div key={genre} className="space-y-1">
                <div className="flex items-center justify-between">
                  <Badge
                    className="text-xs"
                    style={{
                      backgroundColor: `${color}20`,
                      color: color,
                      borderColor: color,
                    }}
                  >
                    {genre}
                  </Badge>
                  <span className="text-sm text-gray-500">{count}회</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(count / maxCount) * 100}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
