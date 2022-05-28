import * as React from "react";

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { IPlaces } from "./types";
import { PlaceDetails } from "../PlaceDetails";
import { useStyles } from "./styles";

export const List: React.FC<IPlaces> = ({ places }: IPlaces) => {
  const classes = useStyles();
  const [type, setType] = React.useState("restaurants");
  const [rating, setRating] = React.useState(0);

  const onChangeType = (event: any) => {
    setType(event.target.value);
  };
  const onChangeRating = (event: any) => {
    setRating(event.target.value);
  };

  // const places = [
  //   { name: "Cool Place" },
  //   { name: "Best Beer" },
  //   { name: "Best Steak" },
  // ];

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h5">
          Restaurants, Hotels & Attractions around you
        </Typography>

        <FormControl className={classes.formControl} margin="normal">
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={onChangeType}
            className={classes.selectType}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} margin="normal">
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={onChangeRating}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={3} className={classes.list}>
          {places?.map((place, index) => {
            return (
              <>
                <Grid item key={index}>
                  <PlaceDetails place={place} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
