import { ApolloClient, createNetworkInterface } from 'react-apollo';

let networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    let token = localStorage.getItem('token');
    req.options.headers.authorization = `Bearer ${token}`;
    next();
  }
}]);

export default () =>
  new ApolloClient({
    networkInterface
  })
