import { useParams } from "react-router-native";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const Repository = () => {
  const { id } = useParams();
  const { data: repository, loading } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;

  return <RepositoryItem item={repository} singleView={true} />;
};

export default Repository;
