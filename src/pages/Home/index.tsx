import * as React from "react";

import { Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { ICoordinates } from "../../components/Map/types";
import { List } from "../../components/List";
import { Map } from "../../components/Map";
import { getPlacesData } from "../../api";
import { useStyles } from "./styles";

export const Home = () => {
  const classes = useStyles();

  // const initialCoordinates = { lat: 0, lng: 0 };
  // console.log(initialCoordinates);

  // type coordinates = { lat: number; lng: number };

  const [places, setPlaces] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState<ICoordinates>({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = React.useState<number | null>(null);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // React.useEffect(() => {
  //   getPlacesData().then((data) => {
  //     console.log(data);
  //     setPlaces(places);
  //   });
  // }, [bounds, coordinates]);

  return (
    <>
      <Header />
      <Grid container spacing={3} width="100%">
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};
