import type { Song } from '../song';

export interface Trip {
  id: string;
  destination: string;
  country: string;
  continent: string;
  travel_category: string;
  travel_date: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  song_id: string;
  song?: Song;
  created_at?: string;
}

export interface TripWithSong extends Trip {
  song: Song & {
    genre: {
      id: string;
      name: string;
      code: string;
      color: string;
    };
  };
}
