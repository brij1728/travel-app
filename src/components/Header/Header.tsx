import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { SearchInput } from '../SearchInput';
import { useStyles } from './styles';
import { IHeader } from './types';

export const Header: React.FC<IHeader> = ({ setCoordinates }: IHeader) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h5">Explore New Places</Typography>
          {/* <Autocomplete onLoad={onLoad}> */}
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div> */}
          {/* </Autocomplete> */}
          <SearchInput placeholder="Search City..." />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
