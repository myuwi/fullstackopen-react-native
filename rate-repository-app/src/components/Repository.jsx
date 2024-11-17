import { FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";

import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import theme from "../theme";
import Review from "./Review";

const styles = StyleSheet.create({
  list: {
    gap: theme.spacing.sm,
  },
});

const Repository = () => {
  const { id } = useParams();
  const { data: repository, loading } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;

  const reviews = repository.reviews?.edges.map((edge) => edge.node) ?? [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <Review data={item} />}
      keyExtractor={({ id }) => id}
      contentContainerStyle={styles.list}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} singleView={true} />
      )}
    />
  );
};

export default Repository;
