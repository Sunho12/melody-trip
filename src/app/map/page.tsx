'use client';

export const dynamic = 'force-dynamic';

import { MainLayout } from '@/widgets/layout';
import { WorldMap, MapStats, GenreLegend } from '@/features/map';
import { useTripsQuery, useGenresQuery } from '@/features/trip';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function MapPage() {
  const { data: trips, isLoading: tripsLoading } = useTripsQuery();
  const { data: genres, isLoading: genresLoading } = useGenresQuery();

  const isLoading = tripsLoading || genresLoading;

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">세계 지도</h1>
            <p className="text-gray-500">음악과 함께한 여행지를 지도에서 확인하세요</p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-rose-400" />
          </div>
        ) : (
          <>
            {/* 지도 통계 */}
            <MapStats trips={trips || []} />

            {/* 지도 */}
            <WorldMap trips={trips || []} />

            {/* 범례 */}
            {genres && genres.length > 0 && <GenreLegend genres={genres} />}
          </>
        )}
      </div>
    </MainLayout>
  );
}
