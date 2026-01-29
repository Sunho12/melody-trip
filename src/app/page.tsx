'use client';

export const dynamic = 'force-dynamic';

import { MainLayout } from '@/widgets/layout';
import { TripList } from '@/features/trip';
import { StatsSection } from '@/features/statistics';
import { useTripsQuery } from '@/features/trip';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const { data: trips, isLoading } = useTripsQuery();

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* 페이지 타이틀 */}
        <div className="bg-gradient-to-r from-pastel-purple-100 via-pastel-pink-100 to-pastel-yellow-100 p-6 rounded-3xl shadow-lg">
          <h1 className="text-4xl text-pastel-purple-400 mb-2">🎵 대시보드 ✨</h1>
          <p className="text-pastel-purple-300 text-lg">음악과 함께한 여행의 기록을 확인하세요</p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-pastel-pink-400" />
          </div>
        ) : (
          <>
            {/* 통계 섹션 */}
            <StatsSection trips={trips || []} />

            {/* 최근 여행 목록 */}
            <div>
              <h2 className="text-2xl text-pastel-purple-400 mb-4">🌟 최근 여행</h2>
              <TripList />
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}
