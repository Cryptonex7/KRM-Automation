export const globalStyles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
      transition: 'all 350ms',
    },
    html: {
      height: '100%',
      backgroundColor: theme.palette.background.default,
      transition: 'all 350ms',
    },
  },
});
