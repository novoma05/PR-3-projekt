import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

import { ResponsiveAppBar } from '../../components/appbar';

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  menuButton: {
    marginLeft: 20,
  },
}));

const MyPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="span" sx={{ border: '1px grey' }}>
        <ResponsiveAppBar />
      </Box>
    </div>
  );
};

export default MyPage;
