import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          language
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      url
      ownerAvatarUrl
      fullName
      description
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      language
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
