import { IDetails } from '../PlaceDetails/types';

export interface IPlaces {
  places: IDetails[];
  childClicked: number | null;
  isLoading: boolean;
  type: string;
  setType: (e: any) => void;
  rating: number;
  setRating(e: any): void;
}
