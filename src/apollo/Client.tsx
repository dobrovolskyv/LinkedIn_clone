import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://selestat.stepzen.net/api/esteemed-frog/__graphql',
  headers: {'Authorization':'apikey selestat::stepzen.io+1000::f7f01b4c75e70f68604a7e390e8b682516c72b175ab569d1a0edc10040357b6c'},
  cache: new InMemoryCache(),
});


export default client;