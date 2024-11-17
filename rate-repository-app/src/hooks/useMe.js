import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMe = (includeReviews = false) => {
  const { data, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews },
  });

  return {
    data: data?.me,
    loading,
  };
};

export default useMe;
