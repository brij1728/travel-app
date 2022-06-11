import axios from 'axios';

export const getPlacesData = async (type: string, sw: any, ne: any) => {
  try {
    const {
      data: { data },
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
          'x-rapidapi-key':
            'ee5a53f019msh5e0389f0e667481p1b2a20jsn94875c033f76',
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
    // if (error) {
    //   return error.message;
    // }
  }
};
