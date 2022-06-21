import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';

import { getPlacesData } from '../../api';
import { Header } from '../../components/Header';
import { List } from '../../components/List';
import { Map } from '../../components/Map';
import { IBounds, ICoordinates } from '../../components/Map/types';
import { IDetails } from '../../components/PlaceDetails/types';

export const Home = () => {
  const [places, setPlaces] = useState<IDetails[]>([]);
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const filteredPlaces = useMemo(() => {
    if (!places?.length) {
      return [];
    }
    if (rating) {
      return places.filter((place) => place.rating >= rating);
    } else {
      return places;
    }
  }, [places, rating]);
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
        setCoordinates({
          lat: parseFloat(latitude.toFixed(2)),
          lng: parseFloat(longitude.toFixed(2)),
        });
      }
    );
  }, []);

  const debounceTimeoutId = useRef<number | null>(null);
  useEffect(() => {
    console.log(bounds.ne, bounds.sw, coordinates.lat, coordinates.lng);
    if (
      !type ||
      !bounds.ne ||
      !bounds.sw ||
      !coordinates.lat ||
      !coordinates.lng
    ) {
      return;
    }

    setPlaces([]);
    setIsLoading(true);
    setErrorMessage('');

    if (debounceTimeoutId.current) {
      window.clearTimeout(debounceTimeoutId.current);
    }

    debounceTimeoutId.current = window.setTimeout(async () => {
      try {
        const placesData = await getPlacesData(type, bounds.sw, bounds.ne);
        setPlaces(placesData);
      } catch (err) {
        console.error(err);
        setErrorMessage(`Could not fetch data`);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }, [type, bounds.ne, bounds.sw, coordinates.lat, coordinates.lng]);

  if (!!errorMessage) {
    return (
      <Box>
        <Typography component="h1" color="error">
          {errorMessage}
        </Typography>
      </Box>
    );
  }

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
