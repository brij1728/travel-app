export interface IMap {
  setCoordinates: (coord: ICoordinates) => void;
  setBounds: (ne: number | null, sw: number | null) => void;
  coordinates: ICoordinates;
}

export interface ICoordinates {
  lat: any;
  lng: any;
}
