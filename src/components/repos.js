import React from 'react';

import Repo from './repo';

let Repos = ({ repos: { totalCount, nodes } }) =>
  <div>
    <h3>Here are your {totalCount} repositories:</h3>
    <ul>
      { nodes.map(repo =>
        <Repo key={repo.id} repo={repo} />
      ) }
    </ul>
  </div>

export default Repos;
