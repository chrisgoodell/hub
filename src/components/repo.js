import React from 'react';

let Repo = ({ repo }) =>
  <li>
    <div>
      <a href={repo.url}>{repo.nameWithOwner}</a>
      {' '}
      <span>({repo.stargazers.totalCount} stars, {repo.watchers.totalCount} watchers, {repo.forks.totalCount} forks)</span>
    </div>
    <div>
      <p>{repo.description}</p>
      <small>
        { repo.repositoryTopics.nodes.map(({topic, url}) =>
          <span key={topic.id}><a href={url}>{topic.name}</a>, </span>
        ) }
      </small>
    </div>
  </li>

export default Repo;
