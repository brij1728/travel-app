import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material';
import { Marker } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';

import { useStyles } from './styles';
import { IMap } from './types';

export const Map: React.FC<IMap> = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}: IMap) => {
  const apiKey = 'AIzaSyAvMbG9aP_j_39rknHkFcgdLuMBXXwWNQQ';

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');

  const onChange = (e: any) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

  return (
    <>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          // options={''}
          onChange={onChange}
          onChildClick={(child: any) => setChildClicked(child)}
        >
          {places?.map((place, i) => {
            // console.log(place);

            return (
              <>
                <Marker
                  // className={classes.markerContainer}
                  // lat={Number(place.latitude)}
                  // lng={Number(place.longitude)}
                  position={{
                    lat: Number(place.latitude),
                    lng: Number(place.longitude),
                  }}
                  key={i}
                >
                  {!isDesktop ? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                  ) : (
                    <Paper elevation={3} className={classes.paper}>
                      <Typography
                        className={classes.typography}
                        variant="subtitle2"
                        gutterBottom
                      >
                        {place.name}
                      </Typography>
                      <img
                        className={classes.pointer}
                        src={
                          place.photo
                            ? place.photo.images.large.url
                            : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theworlds50best.com%2Flist%2F1-50&psig=AOvVaw31aq4JKHZI2273hRC7bgQB&ust=1653820553998000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCNC41Or_gfgCFQAAAAAdAAAAABAD'
                        }
                        alt={place.name}
                      />
                      <Rating
                        size="small"
                        value={Number(place.rating)}
                        readOnly
                      />
                    </Paper>
                  )}
                </Marker>
              </>
            );
          })}
        </GoogleMapReact>
      </div>
    </>
  );
};
