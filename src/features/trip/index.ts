// API
export {
  getTrips,
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
  getGenres,
  type CreateTripInput,
  type UpdateTripInput,
} from './api/tripApi';

// Hooks
export {
  useTripsQuery,
  useTripQuery,
  useGenresQuery,
  useCreateTripMutation,
  useUpdateTripMutation,
  useDeleteTripMutation,
  tripKeys,
  genreKeys,
} from './model/useTripQuery';

// UI Components
export { TripCard } from './ui/TripCard';
export { TripForm, type TripFormValues } from './ui/TripForm';
export { TripList } from './ui/TripList';
export { DeleteConfirmModal } from './ui/DeleteConfirmModal';
