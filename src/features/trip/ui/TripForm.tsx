'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CONTINENTS, TRAVEL_CATEGORIES } from '@/shared/config';
import { useGenresQuery } from '../model/useTripQuery';
import { Loader2, MapPin, Music, Plane } from 'lucide-react';
import type { TripWithSong } from '@/entities/trip';

const tripFormSchema = z.object({
  destination: z.string().min(1, '여행지를 입력해주세요'),
  country: z.string().min(1, '국가를 입력해주세요'),
  continent: z.string().min(1, '대륙을 선택해주세요'),
  travel_category: z.string().min(1, '카테고리를 선택해주세요'),
  travel_date: z.string().min(1, '날짜를 선택해주세요'),
  latitude: z.union([z.number(), z.literal(undefined)]).optional(),
  longitude: z.union([z.number(), z.literal(undefined)]).optional(),
  notes: z.string().optional(),
  song_title: z.string().min(1, '곡 제목을 입력해주세요'),
  song_artist: z.string().min(1, '아티스트를 입력해주세요'),
  genre_id: z.string().min(1, '장르를 선택해주세요'),
});

export type TripFormValues = z.infer<typeof tripFormSchema>;

interface TripFormProps {
  defaultValues?: Partial<TripFormValues>;
  trip?: TripWithSong;
  onSubmit: (values: TripFormValues) => void;
  isLoading?: boolean;
  submitLabel?: string;
}

export function TripForm({
  defaultValues,
  trip,
  onSubmit,
  isLoading,
  submitLabel = '저장',
}: TripFormProps) {
  const { data: genres, isLoading: genresLoading } = useGenresQuery();

  const form = useForm<TripFormValues>({
    resolver: zodResolver(tripFormSchema),
    defaultValues: trip
      ? {
          destination: trip.destination,
          country: trip.country,
          continent: trip.continent,
          travel_category: trip.travel_category,
          travel_date: trip.travel_date,
          latitude: trip.latitude,
          longitude: trip.longitude,
          notes: trip.notes || '',
          song_title: trip.song?.title || '',
          song_artist: trip.song?.artist || '',
          genre_id: trip.song?.genre_id || '',
        }
      : {
          destination: '',
          country: '',
          continent: '',
          travel_category: '',
          travel_date: '',
          latitude: undefined,
          longitude: undefined,
          notes: '',
          song_title: '',
          song_artist: '',
          genre_id: '',
          ...defaultValues,
        },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* 여행 정보 */}
        <Card className="bg-white shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Plane className="w-5 h-5 text-sky-400" />
              여행 정보
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">여행지</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="예: 도쿄, 파리, 뉴욕"
                        className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">국가</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="예: 일본, 프랑스, 미국"
                        className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <FormField
                control={form.control}
                name="continent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">대륙</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-800">
                          <SelectValue placeholder="대륙 선택" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CONTINENTS.map((continent) => (
                          <SelectItem key={continent} value={continent}>
                            {continent}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="travel_category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">카테고리</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-800">
                          <SelectValue placeholder="카테고리 선택" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TRAVEL_CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="travel_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">여행 날짜</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="bg-gray-50 border-gray-200 text-gray-800"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      위도 (선택)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        placeholder="예: 35.6762"
                        className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      경도 (선택)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        placeholder="예: 139.6503"
                        className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">메모 (선택)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="여행에 대한 추억을 기록해보세요..."
                      className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* 음악 정보 */}
        <Card className="bg-white shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Music className="w-5 h-5 text-rose-400" />
              음악 정보
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="song_title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">곡 제목</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="예: Dynamite"
                        className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="song_artist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">아티스트</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="예: BTS"
                        className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="genre_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">장르</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={genresLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-800">
                        <SelectValue
                          placeholder={genresLoading ? '로딩 중...' : '장르 선택'}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {genres?.map((genre) => (
                        <SelectItem key={genre.id} value={genre.id}>
                          <span className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: genre.color }}
                            />
                            {genre.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-400 to-amber-400 hover:from-rose-500 hover:to-amber-500 text-white shadow-md"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              저장 중...
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </form>
    </Form>
  );
}
