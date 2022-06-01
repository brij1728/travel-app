import { IDetails } from "../PlaceDetails/types";

export interface IMap {
  setCoordinates: (coord: ICoordinates) => void;
  setBounds: (bounds: IBounds) => void;
  coordinates: ICoordinates;
  places: IDetails[];
  setChildClicked: (child: any) => void;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IBounds {
  ne: number | null;
  sw: number | null;
}
