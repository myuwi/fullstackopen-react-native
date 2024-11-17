import { FlatList, StyleSheet } from "react-native";

import useMe from "../hooks/useMe";
import theme from "../theme";
import Review from "./Review";

const styles = StyleSheet.create({
  list: {
    gap: theme.spacing.sm,
  },
});

const MyReviews = () => {
  const { data: me, refetch } = useMe(true);

  const reviews = me?.reviews?.edges.map((edge) => edge.node) ?? [];

  return (
    <FlatList
      data={reviews}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Review data={item} userView={true} onDelete={refetch} />
      )}
    />
  );
};

export default MyReviews;
