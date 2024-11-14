import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMe = () => {
  const { data, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  return {
    data: data?.me,
    loading,
  };
};

export default useMe;
