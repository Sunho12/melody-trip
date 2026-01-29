'use client';

import { useEffect, useState } from 'react';
import type { TripWithSong } from '@/entities/trip';

interface WorldMapProps {
  trips: TripWithSong[];
  onMarkerClick?: (trip: TripWithSong) => void;
}

export function WorldMap({ trips, onMarkerClick }: WorldMapProps) {
  const [MapComponent, setMapComponent] = useState<React.ComponentType<WorldMapProps> | null>(null);

  useEffect(() => {
    // 동적으로 맵 컴포넌트를 임포트 (SSR 방지)
    import('./WorldMapClient').then((mod) => {
      setMapComponent(() => mod.WorldMapClient);
    });
  }, []);

  if (!MapComponent) {
    return (
      <div className="h-[500px] bg-white/5 rounded-lg flex items-center justify-center">
        <div className="text-white/60">지도를 불러오는 중...</div>
      </div>
    );
  }

  return <MapComponent trips={trips} onMarkerClick={onMarkerClick} />;
}
