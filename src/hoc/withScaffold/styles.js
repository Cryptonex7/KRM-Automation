export const drawerWidth = 300;

export const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    zIndex: 1100,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    background: theme.palette.primary.main,
    boxShadow: theme.palette.shadows.header,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    alingItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    margin: 'auto 15px',
    width: 200,
  },
  langToggle: {
    flexGrow: 1,
  },
  theme: {
    color: theme.palette.secondary.main,
  },
  phone: {
    color: theme.palette.secondary.main,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: '100vh',
  },
  headerText: {
    fontSize: 1,
    fontWeight: 700,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      textAlign: 'center',
    },
  },
  headerSubText: {
    fontSize: 10,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('md')]: {
      fontSize: 10,
      textAlign: 'center',
    },
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  activeTab: {
    backgroundColor: theme.palette.background.default,
  },
  noBorder: {
    border: 'none',
  },
});
