import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GithubUser = {
  __typename?: 'GithubUser';
  avatarUrl: Scalars['String'];
  id: Scalars['ID'];
  login: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  githubUsers: Array<GithubUser>;
  testquery?: Maybe<Array<Maybe<Testquery>>>;
  users: Array<User>;
};

export type Testquery = {
  __typename?: 'Testquery';
  adresa?: Maybe<Scalars['String']>;
  jmeno?: Maybe<Scalars['String']>;
  oblibene_cislo?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
};

export type PeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type PeopleQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name?: string | null }>, githubUsers: Array<{ __typename?: 'GithubUser', id: string, login: string, avatarUrl: string }>, testquery?: Array<{ __typename?: 'Testquery', jmeno?: string | null, adresa?: string | null, oblibene_cislo?: number | null } | null> | null };


export const PeopleDocument = gql`
    query people {
  users {
    name
  }
  githubUsers {
    id
    login
    avatarUrl
  }
  testquery {
    jmeno
    adresa
    oblibene_cislo
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function usePeopleQuery(baseOptions?: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
      }
export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
        }
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;