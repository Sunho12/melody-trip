'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Plane, Globe, Music } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';

interface BasicStatsProps {
  trips: TripWithSong[];
}

export function BasicStats({ trips }: BasicStatsProps) {
  const totalTrips = trips.length;
  const uniqueCountries = new Set(trips.map((t) => t.country)).size;
  const totalSongs = trips.length;

  const stats = [
    {
      icon: Plane,
      label: '총 여행',
      value: `${totalTrips}회`,
      color: 'text-sky-500',
      bgColor: 'bg-sky-100',
    },
    {
      icon: Globe,
      label: '방문 국가',
      value: `${uniqueCountries}개국`,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100',
    },
    {
      icon: Music,
      label: '기록된 음악',
      value: `${totalSongs}곡`,
      color: 'text-rose-500',
      bgColor: 'bg-rose-100',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="bg-white shadow-sm border-gray-100"
        >
          <CardContent className="flex items-center gap-4 p-4">
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
