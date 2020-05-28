import {makeStyles} from '@material-ui/core/styles';
import {drawerWidth} from '../../hoc/withScaffold/styles';

export const useStyles = makeStyles((theme) => ({
  footerImage: {
    height: 60,
    width: '100%',
    marginRight: 10,
    [theme.breakpoints.up('md')]: {
      marginRight: 0,
      height: 180,
    },
  },
  theme: {
    color: theme.palette.secondary.main,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));
