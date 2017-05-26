import React from 'react';
import { graphql } from 'react-apollo';

import Orgs from './components/orgs';
import Repos from './components/repos';

import profileQuery from './queries/profile';

let Profile = ({ data: { loading, viewer } }) =>
  loading ?
    <h2>Loading...</h2>
  :
    <div className="App">
      <img src={viewer.avatarUrl} />
      <h1>Hello, {viewer.name} (<a href={viewer.url}>{viewer.login}</a>)</h1>
      <Orgs orgs={viewer.organizations} />
      <Repos repos={viewer.repositories} />
    </div>

let query = graphql(profileQuery, { options: {
  variables: {
    includeReposBy: "OWNER"
  }
} });

let enhance = query;

export default enhance(Profile);
