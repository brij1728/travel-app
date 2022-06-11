import {
  CircularProgress,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { createRef, useEffect, useRef } from 'react';

import { PlaceDetails } from '../PlaceDetails';
import { useStyles } from './styles';
import { IPlaces } from './types';

export const List: React.FC<IPlaces> = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}: IPlaces) => {
  const classes = useStyles();

  const elRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

  useEffect(() => {
    if (!places?.length) {
      return;
    }
    for (const p of places) {
      if (!elRefs.current[p.location_id]) {
        elRefs.current[p.location_id] = createRef();
      }
    }
  }, [elRefs, places]);

  const onChangeType = (event: any) => {
    setType(event.target.value);
  };
  const onChangeRating = (event: any) => {
    setRating(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h5">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Container>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={type}
                onChange={onChangeType}
                className={classes.selectType}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  {' '}
                  <em>Type</em>
                </MenuItem>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select value={rating} onChange={onChangeRating}>
                <MenuItem value="rating">
                  {' '}
                  <em>Select Rating</em>
                </MenuItem>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>
          </Container>

          <Grid container spacing={3} className={classes.list} marginTop="30px">
            {places?.map((place, index) => {
              return (
                <>
                  <Grid
                    ref={elRefs.current[place.location_id]}
                    item
                    key={place.location_id}
                  >
                    <PlaceDetails
                      place={place}
                      selected={childClicked === index}
                      refProp={elRefs.current[place.location_id]}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </>
      )}
    </Container>
  );
};
