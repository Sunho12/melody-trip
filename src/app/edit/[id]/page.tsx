'use client';

import { useParams, useRouter } from 'next/navigation';
import { MainLayout } from '@/widgets/layout';
import {
  TripForm,
  useTripQuery,
  useUpdateTripMutation,
  useDeleteTripMutation,
  type TripFormValues,
} from '@/features/trip';
import { DeleteConfirmModal } from '@/features/trip/ui/DeleteConfirmModal';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trash2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function EditTripPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const id = params.id as string;

  const { data: trip, isLoading } = useTripQuery(id);
  const updateMutation = useUpdateTripMutation();
  const deleteMutation = useDeleteTripMutation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSubmit = async (values: TripFormValues) => {
    try {
      await updateMutation.mutateAsync({
        id,
        input: {
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
        },
      });

      toast({
        title: '여행 기록 수정 완료',
        description: `${values.destination} 여행이 성공적으로 수정되었습니다.`,
      });

      router.push('/');
    } catch (error) {
      console.error('Update trip error:', error);
      toast({
        title: '오류 발생',
        description: '여행 기록을 수정하는 데 실패했습니다.',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync(id);

      toast({
        title: '여행 기록 삭제 완료',
        description: '여행 기록이 삭제되었습니다.',
      });

      router.push('/');
    } catch (error) {
      console.error('Delete trip error:', error);
      toast({
        title: '오류 발생',
        description: '여행 기록을 삭제하는 데 실패했습니다.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-rose-400" />
        </div>
      </MainLayout>
    );
  }

  if (!trip) {
    return (
      <MainLayout>
        <div className="text-center py-20">
          <p className="text-gray-500">여행 기록을 찾을 수 없습니다.</p>
          <Link href="/">
            <Button variant="link" className="text-rose-500 mt-4">
              대시보드로 돌아가기
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">여행 수정</h1>
              <p className="text-gray-500">{trip.destination} 여행 정보를 수정하세요</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-red-400 hover:text-red-500 hover:bg-red-50"
            onClick={() => setShowDeleteModal(true)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            삭제
          </Button>
        </div>

        {/* 폼 */}
        <TripForm
          trip={trip}
          onSubmit={handleSubmit}
          isLoading={updateMutation.isPending}
          submitLabel="수정 완료"
        />

        {/* 삭제 확인 모달 */}
        <DeleteConfirmModal
          open={showDeleteModal}
          onOpenChange={setShowDeleteModal}
          onConfirm={handleDelete}
          tripName={trip.destination}
          isLoading={deleteMutation.isPending}
        />
      </div>
    </MainLayout>
  );
}
