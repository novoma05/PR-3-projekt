import { gql, useQuery } from '@apollo/client';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { ButtonComp } from '../../../components/button-component';

const GET_CARD_DATA = gql`
  query GetCardData {
    cards {
      title
      description
      imageUrl
      button {
        text
        href
        color
      }
    }
  }
`;

export function CardComponent() {
  const { loading, error, data } = useQuery(GET_CARD_DATA);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const { title, description, imageUrl, button } = data.card;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="O nás" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonComp
          text={button.text}
          href={button.href}
          color={button.color}
        />
      </CardActions>
    </Card>
  );
}
