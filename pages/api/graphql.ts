/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable sonarjs/no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-useless-catch */
import axios from 'axios';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { gql } from 'graphql-tag';
import { createSchema, createYoga } from 'graphql-yoga';

import { verifyToken } from '../../server/verifyToken';

type Context = {
  user?: DecodedIdToken | undefined;
};

const typeDefs = gql`
  type Query {
    users: [User!]!
    githubUsers: [GithubUser!]!
    testquery: [Testquery]
  }
  type User {
    name: String
  }
  type GithubUser {
    id: ID!
    login: String!
    avatarUrl: String!
  }
  type Testquery {
    jmeno: String
    adresa: String
    oblibene_cislo: Int
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return [{ name: 'Nextjs' }];
    },
    githubUsers: async (root_, args_, context: Context) => {
      try {
        const users = await axios.get('https://api.github.com/users');
        return users.data.map(({ id, login, avatar_url: avatarUrl }) => ({
          id,
          login,
          avatarUrl,
        }));
      } catch (error) {
        throw error;
      }
    },
    testquery: () => {
      return [
        {
          jmeno: 'test',
          adresa: 'tady',
          oblibene_cislo: 4,
        },
      ];
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
  context: async (context) => {
    const auth = context.request.headers.get('authorization');
    console.log(auth);
    return {
      user: auth ? await verifyToken(auth) : undefined,
    } as Context;
  },
});
