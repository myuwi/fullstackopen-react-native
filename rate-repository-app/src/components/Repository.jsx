import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { format } from "date-fns";

import Surface from "./Surface";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import theme from "../theme";

const styles = StyleSheet.create({
  list: {
    gap: theme.spacing.sm,
  },
  container: {
    flexDirection: "row",
  },
  topContainer: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  rating: {
    width: theme.spacing.xxl,
    height: theme.spacing.xxl,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.accent,
    borderWidth: 2,
    borderRadius: theme.spacing.lg,
  },
  infoContainer: {
    flex: 1,
    alignItems: "flex-start",
    gap: theme.spacing.sm,
  },
});

const Review = ({ data }) => {
  return (
    <Surface style={styles.container}>
      <View style={styles.rating}>
        <Text color="accent" size="medium" weight="bold">
          {data.rating}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text weight="bold" size="medium">
            {data.user.username}
          </Text>
          <Text color="muted">{format(data.createdAt, "dd.MM.yyyy")}</Text>
        </View>
        {data.text && <Text>{data.text}</Text>}
      </View>
    </Surface>
  );
};

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
