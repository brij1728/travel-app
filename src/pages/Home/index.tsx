import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import { getPlacesData } from '../../api';
import { Header } from '../../components/Header';
import { List } from '../../components/List';
import { Map } from '../../components/Map';
import { IBounds, ICoordinates } from '../../components/Map/types';

export const Home = () => {
  const [places, setPlaces] = useState<any>([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = useState<IBounds>({ ne: null, sw: null });

  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('rating');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place: any) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [places, rating]);

  useEffect(() => {
    console.log(bounds, coordinates);
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data);
        setPlaces(data);
        setFilteredPlaces([]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
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
