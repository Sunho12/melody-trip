import { supabase } from '@/shared/api';
import type { TripWithSong } from '@/entities/trip';
import type { Genre } from '@/entities/genre';

export interface CreateTripInput {
  destination: string;
  country: string;
  continent: string;
  travel_category: string;
  travel_date: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  song: {
    title: string;
    artist: string;
    genre_id: string;
  };
}

export interface UpdateTripInput {
  destination?: string;
  country?: string;
  continent?: string;
  travel_category?: string;
  travel_date?: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  song?: {
    title: string;
    artist: string;
    genre_id: string;
  };
}

// 전체 여행 목록 조회 (songs, genres JOIN)
export async function getTrips(): Promise<TripWithSong[]> {
  const { data, error } = await supabase
    .from('trips')
    .select(`
      *,
      song:songs(
        *,
        genre:genres(*)
      )
    `)
    .order('travel_date', { ascending: false });

  if (error) throw error;
  return data as TripWithSong[];
}

// 단일 여행 조회
export async function getTrip(id: string): Promise<TripWithSong> {
  const { data, error } = await supabase
    .from('trips')
    .select(`
      *,
      song:songs(
        *,
        genre:genres(*)
      )
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as TripWithSong;
}

// 여행 + 음악 생성
export async function createTrip(input: CreateTripInput): Promise<TripWithSong> {
  // 1. 먼저 song 생성
  const { data: songData, error: songError } = await supabase
    .from('songs')
    .insert({
      title: input.song.title,
      artist: input.song.artist,
      genre_id: input.song.genre_id,
    })
    .select()
    .single();

  if (songError) throw songError;

  // 2. trip 생성
  const { data: tripData, error: tripError } = await supabase
    .from('trips')
    .insert({
      destination: input.destination,
      country: input.country,
      continent: input.continent,
      travel_category: input.travel_category,
      travel_date: input.travel_date,
      latitude: input.latitude,
      longitude: input.longitude,
      notes: input.notes,
      song_id: songData.id,
    })
    .select(`
      *,
      song:songs(
        *,
        genre:genres(*)
      )
    `)
    .single();

  if (tripError) throw tripError;
  return tripData as TripWithSong;
}

// 여행 수정
export async function updateTrip(id: string, input: UpdateTripInput): Promise<TripWithSong> {
  // 먼저 기존 trip 조회
  const { data: existingTrip, error: fetchError } = await supabase
    .from('trips')
    .select('song_id')
    .eq('id', id)
    .single();

  if (fetchError) throw fetchError;

  // song 정보가 있으면 업데이트
  if (input.song) {
    const { error: songError } = await supabase
      .from('songs')
      .update({
        title: input.song.title,
        artist: input.song.artist,
        genre_id: input.song.genre_id,
      })
      .eq('id', existingTrip.song_id);

    if (songError) throw songError;
  }

  // trip 업데이트
  const tripUpdateData: Record<string, unknown> = {};
  if (input.destination !== undefined) tripUpdateData.destination = input.destination;
  if (input.country !== undefined) tripUpdateData.country = input.country;
  if (input.continent !== undefined) tripUpdateData.continent = input.continent;
  if (input.travel_category !== undefined) tripUpdateData.travel_category = input.travel_category;
  if (input.travel_date !== undefined) tripUpdateData.travel_date = input.travel_date;
  if (input.latitude !== undefined) tripUpdateData.latitude = input.latitude;
  if (input.longitude !== undefined) tripUpdateData.longitude = input.longitude;
  if (input.notes !== undefined) tripUpdateData.notes = input.notes;

  const { data: tripData, error: tripError } = await supabase
    .from('trips')
    .update(tripUpdateData)
    .eq('id', id)
    .select(`
      *,
      song:songs(
        *,
        genre:genres(*)
      )
    `)
    .single();

  if (tripError) throw tripError;
  return tripData as TripWithSong;
}

// 여행 삭제
export async function deleteTrip(id: string): Promise<void> {
  // 먼저 trip의 song_id 조회
  const { data: trip, error: fetchError } = await supabase
    .from('trips')
    .select('song_id')
    .eq('id', id)
    .single();

  if (fetchError) throw fetchError;

  // trip 삭제
  const { error: tripError } = await supabase
    .from('trips')
    .delete()
    .eq('id', id);

  if (tripError) throw tripError;

  // song 삭제
  const { error: songError } = await supabase
    .from('songs')
    .delete()
    .eq('id', trip.song_id);

  if (songError) throw songError;
}

// 장르 목록 조회
export async function getGenres(): Promise<Genre[]> {
  const { data, error } = await supabase
    .from('genres')
    .select('*')
    .order('name');

  if (error) throw error;
  return data as Genre[];
}
