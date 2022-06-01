import { IDetails } from "../PlaceDetails/types";

export interface IPlaces {
  places: IDetails[];
  childClicked: number | null;
  isLoading: boolean;
}
