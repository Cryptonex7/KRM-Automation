export const globalStyles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
      transition: 'all 750ms',
    },
    html: {
      height: '100%',
      backgroundColor: theme.palette.background.default,
      transition: 'all 750ms',
    },
    'MuiPaper-root': {
      transition: 'all 750ms',
    },
  },
});
