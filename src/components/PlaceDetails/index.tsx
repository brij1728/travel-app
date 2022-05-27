import * as React from "react";

import { IPlaceDetails } from "./types";
import { useStyles } from "./styles";

export const PlaceDetails: React.FC<IPlaceDetails> = ({
  name,
}: IPlaceDetails) => {
  const classes = useStyles();
  return <div>{name}</div>;
};
