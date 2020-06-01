import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tabs: {
    fontSize: 14,
    fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  indicator: {
    backgroundColor: theme.palette.stats.active,
  },
}));
