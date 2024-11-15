import { FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import theme from "../theme";

const styles = StyleSheet.create({
  list: {
    gap: theme.spacing.sm,
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories?.edges.map((edge) => edge.node) ?? [];

  return (
    <FlatList
      data={repositoryNodes}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
