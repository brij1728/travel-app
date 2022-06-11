import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";

import { Autocomplete } from "@react-google-maps/api";
import { IHeader } from "./types";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInput } from "../SearchInput";
import { useState } from "react";
import { useStyles } from "./styles";

export const Header: React.FC<IHeader> = ({ setCoordinates }: IHeader) => {
  const classes = useStyles();

  const [autoComplete, setAutocomplete] = useState(null);

  const onLoad = (autoC: any) => setAutocomplete(autoC);
  // const onPlaceChanged = () => {
  //   const lat = autoComplete.getPlace().geometry.location.lat();
  //   const lng = autoComplete.getPlace().gemeters.location.lng();
  //   setCoordinates({lat, lng});
  // };

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
