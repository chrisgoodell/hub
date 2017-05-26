import React from 'react';

let Orgs = ({ orgs: { totalCount, nodes } }) =>
  <div>
    <h3>You are in {totalCount} organizations:</h3>
    <ul>
      { nodes.map(org =>
        <li key={org.id}>{org.login}</li>
      ) }
    </ul>
  </div>


export default Orgs;
