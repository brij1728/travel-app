import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    margin: theme.spacing(1, 1, 1, 0),
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
