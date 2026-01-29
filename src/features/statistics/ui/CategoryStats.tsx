'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Compass } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';

interface CategoryStatsProps {
  trips: TripWithSong[];
}

const CATEGORY_COLORS: Record<string, string> = {
  도시: '#6366f1',
  자연: '#22c55e',
  해변: '#06b6d4',
  문화: '#a855f7',
  모험: '#f97316',
  휴양: '#ec4899',
};

const CATEGORY_ICONS: Record<string, string> = {
  도시: '🏙️',
  자연: '🌲',
  해변: '🏖️',
  문화: '🏛️',
  모험: '🧗',
  휴양: '🧘',
};

export function CategoryStats({ trips }: CategoryStatsProps) {
  // 카테고리별 통계 계산
  const categoryStats = trips.reduce((acc, trip) => {
    const category = trip.travel_category || '미분류';

    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category]++;
    return acc;
  }, {} as Record<string, number>);

  const sortedCategories = Object.entries(categoryStats)
    .sort(([, a], [, b]) => b - a);

  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
          <Compass className="w-5 h-5 text-amber-400" />
          카테고리별 통계
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sortedCategories.length === 0 ? (
          <p className="text-gray-400 text-sm">데이터가 없습니다</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {sortedCategories.map(([category, count]) => {
              const color = CATEGORY_COLORS[category] || '#6366f1';
              const icon = CATEGORY_ICONS[category] || '📍';
              return (
                <Badge
                  key={category}
                  className="text-sm px-3 py-1.5"
                  style={{
                    backgroundColor: `${color}20`,
                    color: color,
                    borderColor: color,
                  }}
                >
                  {icon} {category} {count}회
                </Badge>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
