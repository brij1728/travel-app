import {
  CircularProgress,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  styled,
} from '@mui/material';
import { createRef, useEffect, useState } from 'react';

import { PlaceDetails } from '../PlaceDetails';
import { useStyles } from './styles';
import { IPlaces } from './types';

const ListWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  // position: "absolute",
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill(1)
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
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
    </Container>
  );
};
