export interface IMap {
  setCoordinates: (coord: ICoordinates) => void;
  setBounds: (bounds: IBounds) => void;
  coordinates: ICoordinates;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IBounds {
  ne: number | null;
  sw: number | null;
}
