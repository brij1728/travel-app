export interface IPlaceDetails {
  place: IDetails;
}

export interface IDetails {
  name?: string;
  photo?: IPhoto;
  price_level?: string;
  ranking?: string;
  awards?: IAward[];
}

export interface IPhoto {
  images: {
    large: {
      url: string;
    };
  };
}

export interface IAward {
  images: {
    small: string;
  };
  display_image: string;
  display_name: string;
}
