'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Globe, MapPin } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';

interface MapStatsProps {
  trips: TripWithSong[];
}

export function MapStats({ trips }: MapStatsProps) {
  const uniqueCountries = new Set(trips.map((t) => t.country)).size;
  const markersCount = trips.filter((t) => t.latitude && t.longitude).length;

  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardContent className="p-4">
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-sky-400" />
            <span className="text-gray-800">
              <strong>{uniqueCountries}</strong>
              <span className="text-gray-500 ml-1">개국 방문</span>
            </span>
          </div>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-400" />
            <span className="text-gray-800">
              <strong>{markersCount}</strong>
              <span className="text-gray-500 ml-1">개 마커</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
