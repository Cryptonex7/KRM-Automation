import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, .05)',
    backdropFilter: 'blur(5px)',
    padding: '10px 0',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: 10,
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  bottomMargin: {
    marginBottom: 50,
  },
}));
