import { IDetails, RapidAPIResponse } from '../types';

import axios from 'axios';

const parseStringToNumber = (str?: string): number => {
  if (str === undefined) {
    return 0;
  }
  const num = parseFloat(str);
  return isNaN(num) ? 0 : num;
};

export const getPlacesData = async (
  type: string,
  sw: any,
  ne: any
): Promise<IDetails[]> => {
  console.info('getPlacesData', type, sw, ne);
  const {
    data: { data: places },
  } = await axios.get(
    `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: ne.lng,
        tr_longitude: sw.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '526e135b97mshbb7147b8f8ac803p10e490jsn8faeb586e778',
      },
    }
  );

  return places.map((place: RapidAPIResponse) => ({
    ...place,
    rating: parseStringToNumber(place.rating),
    num_reviews: parseStringToNumber(place.num_reviews),
  }));
};
