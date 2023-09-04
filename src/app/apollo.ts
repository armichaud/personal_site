import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const basicAuthLink = setContext((_, { headers }) => {
    const username = 'armichaud';
    const password = process.env.GITHUB_AUTH_KEY;
  
    const basicAuth = btoa(`${username}:${password}`);
  
    return {
      headers: {
        ...headers,
        Authorization: `Basic ${basicAuth}`,
      },
    };
});

client.setLink(basicAuthLink.concat(httpLink));

export const GET_CONTRIBUTIONS = gql`
    query {
        user(login: "armichaud") {
            contributionsCollection {
                pullRequestContributions(first: 100) {
                totalCount
                nodes {
                    pullRequest {
                            repository {
                                nameWithOwner
                            }
                        }
                    }
                }
            }
        }
    }
`

export default client;
