'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { TripWithSong } from '@/entities/trip';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface WorldMapClientProps {
  trips: TripWithSong[];
  onMarkerClick?: (trip: TripWithSong) => void;
}

// 장르별 색상 마커 아이콘 생성
function createColoredIcon(color: string) {
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="32" height="32">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `;

  return L.divIcon({
    html: svgIcon,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

export function WorldMapClient({ trips, onMarkerClick }: WorldMapClientProps) {
  // 좌표가 있는 여행만 필터링
  const tripsWithCoords = trips.filter(
    (trip) => trip.latitude && trip.longitude
  );

  // 중심 좌표 계산
  const center: [number, number] =
    tripsWithCoords.length > 0
      ? [
          tripsWithCoords.reduce((sum, t) => sum + (t.latitude || 0), 0) /
            tripsWithCoords.length,
          tripsWithCoords.reduce((sum, t) => sum + (t.longitude || 0), 0) /
            tripsWithCoords.length,
        ]
      : [35.9078, 127.7669]; // 대한민국 중심

  // 지도 범위 제한 (무한 스크롤 방지)
  const maxBounds: [[number, number], [number, number]] = [
    [-85, -180],
    [85, 180],
  ];

  return (
    <div className="h-[500px] rounded-lg overflow-hidden border border-gray-200">
      <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        .leaflet-popup-content-wrapper {
          background: white;
          color: #1f2937;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-tip {
          background: white;
        }
        .leaflet-popup-content {
          margin: 12px;
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={3}
        minZoom={2}
        maxZoom={18}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />
        {tripsWithCoords.map((trip) => {
          const color = trip.song?.genre?.color || '#6366f1';
          return (
            <Marker
              key={trip.id}
              position={[trip.latitude!, trip.longitude!]}
              icon={createColoredIcon(color)}
              eventHandlers={{
                click: () => onMarkerClick?.(trip),
              }}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-bold text-lg mb-1 text-gray-800">{trip.destination}</h3>
                  <p className="text-gray-500 text-sm mb-2">{trip.country}</p>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <p className="text-rose-500 text-sm">
                      🎵 {trip.song?.title} - {trip.song?.artist}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {format(new Date(trip.travel_date), 'yyyy년 M월 d일', {
                        locale: ko,
                      })}
                    </p>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
