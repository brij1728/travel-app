export interface IPlaceDetails {
  place: IDetails;
  selected: boolean;
  refProp: any;
}

export interface IDetails {
  name?: string;
  photo?: IPhoto;
  price_level?: string;
  ranking?: string;
  awards?: IAward[];
  cuisine?: ICuisine[];
  location_id: string;
  address: string;
  phone?: string;
  web_url: string;
  website?: string;
  latitude?: string;
  longitude?: string;
  rating: number;
  num_reviews: number;
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

export interface ICuisine {
  name: string;
}
