export interface IHeader {
  setCoordinates: (coord: ICoordinates) => void;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}
