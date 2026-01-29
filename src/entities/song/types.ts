import type { Genre } from '../genre';

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre_id: string;
  genre?: Genre;
  created_at?: string;
}
