import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

import { useStyles } from './styles';
import { IPlaceDetails } from './types';

export const PlaceDetails: React.FC<IPlaceDetails> = ({
  place,
  selected,
  refProp,
}: IPlaceDetails) => {
  console.log(place.location_id, selected, refProp);

  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theworlds50best.com%2Flist%2F1-50&psig=AOvVaw31aq4JKHZI2273hRC7bgQB&ust=1653820553998000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCNC41Or_gfgCFQAAAAAdAAAAABAD'
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            {Number(place.rating) > 0 ? (
              <>
                <Rating
                  name="read-only"
                  value={Number(place.rating)}
                  readOnly
                />
                <Typography gutterBottom variant="subtitle1">
                  {place.num_reviews} reviews
                </Typography>
              </>
            ) : (
              `No rating available`
            )}
          </Box>
          <Box display="flex" justifyContent="space-between">
            {Number(place.price_level) > 0 ? (
              <>
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {place.price_level}
                </Typography>
              </>
            ) : (
              ``
            )}
          </Box>
          <Box display="flex" justifyContent="space-betyween">
            {Number(place.ranking) > 0 ? (
              <>
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {place.ranking}
                </Typography>
              </>
            ) : (
              ``
            )}
          </Box>
          {place?.awards?.map((award) => {
            return (
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
            );
          })}

          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}

          {place?.address && (
            <Typography
              component={Stack}
              direction="row"
              gutterBottom
              variant="subtitle2"
              color="textSecondary"
              className={classes.subtitle}
              align="left"
              alignItems="center"
              justifyContent="flex-start"
            >
              <LocationOnIcon fontSize="small" />
              {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              gutterBottom
              component={Stack}
              direction="row"
              variant="subtitle2"
              color="textSecondary"
              className={classes.spacing}
              align="left"
              alignItems="center"
              justifyContent="flex-start"
            >
              <PhoneIcon fontSize="small" />
              {place.phone}
            </Typography>
          )}
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, '_black')}
            >
              Trip Advisor
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, '_black')}
            >
              Website
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
