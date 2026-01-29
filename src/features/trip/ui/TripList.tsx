'use client';

import { useState } from 'react';
import { TripCard } from './TripCard';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { useTripsQuery, useDeleteTripMutation } from '../model/useTripQuery';
import { Loader2 } from 'lucide-react';

export function TripList() {
  const { data: trips, isLoading, error } = useTripsQuery();
  const deleteMutation = useDeleteTripMutation();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setDeleteId(id);
  };

  const handleConfirmDelete = async () => {
    if (deleteId) {
      await deleteMutation.mutateAsync(deleteId);
      setDeleteId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-white/60" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-400">
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  if (!trips || trips.length === 0) {
    return (
      <div className="text-center py-12 text-white/60">
        아직 기록된 여행이 없습니다. 첫 번째 여행을 추가해보세요!
      </div>
    );
  }

  const tripToDelete = trips.find((t) => t.id === deleteId);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} onDelete={handleDelete} />
        ))}
      </div>

      <DeleteConfirmModal
        open={!!deleteId}
        onOpenChange={(open) => !open && setDeleteId(null)}
        onConfirm={handleConfirmDelete}
        tripName={tripToDelete?.destination || ''}
        isLoading={deleteMutation.isPending}
      />
    </>
  );
}
