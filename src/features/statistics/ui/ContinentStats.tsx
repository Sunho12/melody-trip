'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';

interface ContinentStatsProps {
  trips: TripWithSong[];
}

const CONTINENT_COLORS: Record<string, string> = {
  아시아: '#ef4444',
  유럽: '#3b82f6',
  북미: '#22c55e',
  남미: '#f97316',
  아프리카: '#a855f7',
  오세아니아: '#06b6d4',
};

export function ContinentStats({ trips }: ContinentStatsProps) {
  // 대륙별 통계 계산
  const continentStats = trips.reduce((acc, trip) => {
    const continent = trip.continent || '미분류';

    if (!acc[continent]) {
      acc[continent] = { count: 0, countries: new Set<string>() };
    }
    acc[continent].count++;
    acc[continent].countries.add(trip.country);
    return acc;
  }, {} as Record<string, { count: number; countries: Set<string> }>);

  const sortedContinents = Object.entries(continentStats)
    .sort(([, a], [, b]) => b.count - a.count);

  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
          <Globe className="w-5 h-5 text-sky-400" />
          대륙별 통계
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sortedContinents.length === 0 ? (
          <p className="text-gray-400 text-sm">데이터가 없습니다</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {sortedContinents.map(([continent, { count, countries }]) => {
              const color = CONTINENT_COLORS[continent] || '#6366f1';
              return (
                <Badge
                  key={continent}
                  className="text-sm px-3 py-1.5"
                  style={{
                    backgroundColor: `${color}20`,
                    color: color,
                    borderColor: color,
                  }}
                >
                  {continent} {count}회 / {countries.size}국
                </Badge>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
