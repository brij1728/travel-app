export interface IPlaceDetails {
  place: IDetails;
}

export interface IDetails {
  name?: string;
  photo?: IPhoto;
}

export interface IPhoto {
  images: {
    large: {
      url: string;
    };
  };
}
