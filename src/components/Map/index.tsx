import * as React from "react";

import GoogleMapReact from "google-map-react";
import { IMap } from "./types";
import { useMediaQuery } from "@mui/material";
import { useStyles } from "./styles";

export const Map: React.FC<IMap> = ({
  coordinates,
  setCoordinates,
  setBounds,
}: IMap) => {
  const apiKey = "AIzaSyAvMbG9aP_j_39rknHkFcgdLuMBXXwWNQQ";
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const onChange = (e: any) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds(e.marginBounds.ne, e.marginBounds.sw);
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
          // onChildClick={``}
        ></GoogleMapReact>
      </div>
    </>
  );
};
