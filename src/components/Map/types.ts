import { IBounds, ICoordinates, IDetails } from '../../types';

export interface IMap {
  setCoordinates: (coord: ICoordinates) => void;
  setBounds: (bounds: IBounds) => void;
  coordinates: ICoordinates;
  places: IDetails[];
  setChildClicked: (child: any) => void;
}
