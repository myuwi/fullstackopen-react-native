import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMe = (includeReviews = false) => {
  const { data, loading, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews },
  });

  return {
    data: data?.me,
    loading,
    refetch,
  };
};

export default useMe;
