import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (order) => {
  const orderBy = order?.startsWith("rating") ? "RATING_AVERAGE" : "CREATED_AT";
  const orderDirection = order?.endsWith("Asc") ? "ASC" : "DESC";

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy,
      orderDirection,
    },
  });

  return {
    repositories: data?.repositories,
    loading,
  };
};

export default useRepositories;
