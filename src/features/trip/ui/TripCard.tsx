'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Music, Calendar, Edit, Trash2 } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Link from 'next/link';

interface TripCardProps {
  trip: TripWithSong;
  onDelete?: (id: string) => void;
}

export function TripCard({ trip, onDelete }: TripCardProps) {
  const genreColor = trip.song?.genre?.color || '#6366f1';

  return (
    <Card className="group relative overflow-hidden bg-white shadow-sm border-gray-100 hover:shadow-md transition-all duration-300">
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ backgroundColor: genreColor }}
      />
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{trip.destination}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{trip.country}</span>
            </div>
          </div>
          <Badge
            className="text-xs"
            style={{
              backgroundColor: `${genreColor}20`,
              color: genreColor,
              borderColor: genreColor,
            }}
          >
            {trip.song?.genre?.name || '장르 없음'}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-gray-700">
          <Music className="w-4 h-4 text-rose-400" />
          <span className="text-sm">
            {trip.song?.title} - {trip.song?.artist}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>
              {format(new Date(trip.travel_date), 'yyyy년 M월 d일', { locale: ko })}
            </span>
          </div>
          <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
            {trip.travel_category}
          </Badge>
        </div>

        {trip.notes && (
          <p className="text-sm text-gray-400 line-clamp-2">{trip.notes}</p>
        )}
      </CardContent>

      <CardFooter className="pt-0 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          asChild
        >
          <Link href={`/edit/${trip.id}`}>
            <Edit className="w-4 h-4 mr-1" />
            수정
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-400 hover:text-red-500 hover:bg-red-50"
          onClick={() => onDelete?.(trip.id)}
        >
          <Trash2 className="w-4 h-4 mr-1" />
          삭제
        </Button>
      </CardFooter>
    </Card>
  );
}
