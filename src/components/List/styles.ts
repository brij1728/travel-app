import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&: .MuiFormControl-root': {
      paddingRight: '10px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  container: {
    padding: '25px',

    justifyContent: 'space-between',
  },
  formControl: {
    '&: .css-1nrlq1o-MuiFormControl-root': {
      paddingRight: '10px',
    },

    // display: "flex",
    justifyContent: 'space-between',

    margin: theme.spacing(2),
    padding: theme.spacing(0, 1, 0, 0),
    minWidth: 120,
  },
  selectType: {
    paddingRight: '10px',
  },
  list: {
    height: '75vh',
    overflow: 'auto',
  },
  loading: {},
}));
