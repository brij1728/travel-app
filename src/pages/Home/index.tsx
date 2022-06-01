import * as React from "react";

import { IBounds, ICoordinates } from "../../components/Map/types";

import { Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Map } from "../../components/Map";
import { getPlacesData } from "../../api";
import { useState } from "react";
import { useStyles } from "./styles";

export const Home = () => {
  const classes = useStyles();

  const [places, setPlaces] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState<ICoordinates>({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = React.useState<IBounds>({ ne: null, sw: null });

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  React.useEffect(() => {
    console.log(bounds, coordinates);
    setIsLoading(true);
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data);
        setPlaces(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [bounds, coordinates]);

  return (
    <>
      <Header />
      <Grid container spacing={3} width="100%">
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};
