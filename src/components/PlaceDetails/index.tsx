import * as React from "react";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { IPlaceDetails } from "./types";
import { useStyles } from "./styles";

export const PlaceDetails: React.FC<IPlaceDetails> = ({
  place,
}: IPlaceDetails) => {
  console.log(place);

  const classes = useStyles();
  return (
    <>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theworlds50best.com%2Flist%2F1-50&psig=AOvVaw31aq4JKHZI2273hRC7bgQB&ust=1653820553998000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCNC41Or_gfgCFQAAAAAdAAAAABAD"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-betyween">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>
          {place?.awards?.map((award) => {
            return (
              <>
                <Box
                  my={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <img src={award.images.small} alt={award.display_image} />
                  <Typography variant="subtitle2" color="textSecondary">
                    {award.display_name}
                  </Typography>
                </Box>
              </>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};
