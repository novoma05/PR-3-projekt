import { gql } from '@apollo/client';
import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Inter } from '@next/font/google';
import React from 'react';

import { ResponsiveAppBar } from '../../components/appbar';

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

const CARDS_QUERY = gql`
  query {
    cards {
      id
      title
      description
      image
      linkText
      link
    }
  }
`;

const MyPage = () => {
  const classes = useStyles();

  // const { loading, error, data } = useQuery(CARDS_QUERY);

  // const cards = data?.cards;

  // const client = new ApolloClient({
  //   uri: 'http://localhost:4000/graphql',
  //   cache: new InMemoryCache(),
  // });

  return (
    <div className={classes.root}>
      <Box component="span" sx={{ border: '1px grey' }}>
        <ResponsiveAppBar />
      </Box>
    </div>
  );
};

export default MyPage;
