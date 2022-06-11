import { Grid } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

import { getPlacesData } from '../../api';
import { Header } from '../../components/Header';
import { List } from '../../components/List';
import { Map } from '../../components/Map';
import { IBounds, ICoordinates } from '../../components/Map/types';

export const Home = () => {
  const [places, setPlaces] = useState<any>([]);
  const [rating, setRating] = useState('');

  const filteredPlaces = useMemo(
    () =>
      !rating ? places.filter((place: any) => place.rating > rating) : places,
    [places, rating]
  );
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = useState<IBounds>({ ne: null, sw: null });

  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState('restaurants');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(bounds, coordinates);
    if (!type || !bounds.ne || !bounds.sw || !coordinates) {
      return;
    }
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [type, bounds, coordinates]);

  return (
    <>
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={8} width="100%">
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};
