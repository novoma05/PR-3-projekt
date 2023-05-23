import { gql } from 'apollo-server';

const typeDefs = gql`
  type Card {
    title: String!
    description: String!
    imageUrl: String!
    button: Button!
  }

  type Button {
    text: String!
    href: String!
    color: String!
  }

  type Query {
    card: Card!
  }
`;

const resolvers = {
  Query: {
    card: () => ({
      title: 'Example Card Title',
      description: 'Example Card Description',
      imageUrl: 'https://example.com/image.png',
      button: {
        text: 'Example Button Text',
        href: 'https://example.com',
        color: 'blue',
      },
    }),
  },
};
