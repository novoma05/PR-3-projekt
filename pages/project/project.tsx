import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Inter } from '@next/font/google';
import React, { useEffect, useState } from 'react';

import { ResponsiveAppBar } from '../../components/appbar';
import { ButtonComp } from '../../components/button-component';

const inter = Inter({ subsets: ['latin'] });

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

const useCounter = (init: number, delay: number) => {
  const [count, setCount] = useState(init);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
  return [count, setCount] as const;
};

const MyPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="span" sx={{ border: '1px grey' }}>
        <ResponsiveAppBar />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/black_hole.jpg"
              title="O nás"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                xxx
              </Typography>
              <Typography variant="body2" color="text.secondary">
                xxx
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonComp
                text={'xxx'}
                href={'test2'}
                color={'lightBlue'}
              ></ButtonComp>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/black_hole.jpg"
              title="O nás"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                xxx
              </Typography>
              <Typography variant="body2" color="text.secondary">
                xxx
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonComp
                text={'xxx'}
                href={'test2'}
                color={'lightBlue'}
              ></ButtonComp>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/black_hole.jpg"
              title="O nás"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                xxx
              </Typography>
              <Typography variant="body2" color="text.secondary">
                xxx
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonComp
                text={'xxx'}
                href={'test2'}
                color={'lightBlue'}
              ></ButtonComp>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyPage;
