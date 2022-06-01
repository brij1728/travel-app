import * as React from "react";

import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { createRef, useEffect, useState } from "react";

import { IPlaces } from "./types";
import { PlaceDetails } from "../PlaceDetails";
import { useStyles } from "./styles";

export const List: React.FC<IPlaces> = ({
  places,
  childClicked,
  isLoading,
}: IPlaces) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill(1)
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  const onChangeType = (event: any) => {
    setType(event.target.value);
  };
  const onChangeRating = (event: any) => {
    setRating(event.target.value);
  };

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h5">
          Restaurants, Hotels & Attractions around you
        </Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
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
                    <Grid ref={elRefs[index]} item key={index}>
                      <PlaceDetails
                        place={place}
                        selected={Number(childClicked === index)}
                        refProp={elRefs[index]}
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </>
        )}
      </div>
    </>
  );
};
