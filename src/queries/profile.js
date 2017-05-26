import { gql } from 'react-apollo';

export default gql`
  query ProfileQuery($includeReposBy: [RepositoryAffiliation]) {
    viewer {
      id
      avatarUrl
      url
      login
      name
      organizations(first: 10) {
        nodes {
          id
          login
        }
        totalCount
      }
      repositories(first: 50, affiliations: $includeReposBy, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          ...repos
        }
        totalCount
      }
    }
  }

  fragment repos on Repository {
    id
    url
    nameWithOwner
    description
    isPrivate
    repositoryTopics(first: 50) {
      nodes {
        topic {
          id
          name
        }
        url
      }
    }
    owner {
      id
      login
    }
    stargazers {
      totalCount
    }
    forks {
      totalCount
    }
    watchers {
      totalCount
    }
  }
`
