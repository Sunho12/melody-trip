'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTrips,
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
  getGenres,
  type CreateTripInput,
  type UpdateTripInput,
} from '../api/tripApi';

// Query Keys
export const tripKeys = {
  all: ['trips'] as const,
  lists: () => [...tripKeys.all, 'list'] as const,
  list: (filters: string) => [...tripKeys.lists(), { filters }] as const,
  details: () => [...tripKeys.all, 'detail'] as const,
  detail: (id: string) => [...tripKeys.details(), id] as const,
};

export const genreKeys = {
  all: ['genres'] as const,
};

// 전체 여행 목록 조회
export function useTripsQuery() {
  return useQuery({
    queryKey: tripKeys.lists(),
    queryFn: getTrips,
  });
}

// 단일 여행 조회
export function useTripQuery(id: string) {
  return useQuery({
    queryKey: tripKeys.detail(id),
    queryFn: () => getTrip(id),
    enabled: !!id,
  });
}

// 장르 목록 조회
export function useGenresQuery() {
  return useQuery({
    queryKey: genreKeys.all,
    queryFn: getGenres,
  });
}

// 여행 생성 mutation
export function useCreateTripMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateTripInput) => createTrip(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tripKeys.all });
    },
  });
}

// 여행 수정 mutation
export function useUpdateTripMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UpdateTripInput }) =>
      updateTrip(id, input),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: tripKeys.all });
      queryClient.setQueryData(tripKeys.detail(data.id), data);
    },
  });
}

// 여행 삭제 mutation
export function useDeleteTripMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTrip(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tripKeys.all });
    },
  });
}
