'use client';

import { BasicStats } from './BasicStats';
import { GenreStats } from './GenreStats';
import { ContinentStats } from './ContinentStats';
import { CategoryStats } from './CategoryStats';
import type { TripWithSong } from '@/entities/trip';

interface StatsSectionProps {
  trips: TripWithSong[];
}

export function StatsSection({ trips }: StatsSectionProps) {
  return (
    <div className="space-y-6">
      <GenreStats trips={trips} />
      <ContinentStats trips={trips} />
      <CategoryStats trips={trips} />
      <BasicStats trips={trips} />
    </div>
  );
}
