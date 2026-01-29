'use client';

import { useRouter } from 'next/navigation';
import { MainLayout } from '@/widgets/layout';
import { TripForm, useCreateTripMutation, type TripFormValues } from '@/features/trip';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function AddTripPage() {
  const router = useRouter();
  const { toast } = useToast();
  const createMutation = useCreateTripMutation();

  const handleSubmit = async (values: TripFormValues) => {
    try {
      await createMutation.mutateAsync({
        destination: values.destination,
        country: values.country,
        continent: values.continent,
        travel_category: values.travel_category,
        travel_date: values.travel_date,
        latitude: values.latitude,
        longitude: values.longitude,
        notes: values.notes,
        song: {
          title: values.song_title,
          artist: values.song_artist,
          genre_id: values.genre_id,
        },
      });

      toast({
        title: '여행 기록 추가 완료',
        description: `${values.destination} 여행이 성공적으로 저장되었습니다.`,
      });

      router.push('/');
    } catch (error) {
      console.error('Create trip error:', error);
      toast({
        title: '오류 발생',
        description: '여행 기록을 저장하는 데 실패했습니다.',
        variant: 'destructive',
      });
    }
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* 헤더 */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">새 여행 추가</h1>
            <p className="text-gray-500">음악과 함께한 여행을 기록하세요</p>
          </div>
        </div>

        {/* 폼 */}
        <TripForm
          onSubmit={handleSubmit}
          isLoading={createMutation.isPending}
          submitLabel="여행 추가"
        />
      </div>
    </MainLayout>
  );
}
