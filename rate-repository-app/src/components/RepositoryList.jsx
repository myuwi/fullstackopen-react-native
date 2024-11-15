import { useState } from "react";
import { FlatList, StyleSheet, Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";
import { Searchbar } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import theme from "../theme";

const styles = StyleSheet.create({
  list: {
    gap: theme.spacing.sm,
  },
  search: {
    margin: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.rounding.sm,
    backgroundColor: theme.colors.surface,
  },
});

const RepositoryListHeader = ({ order, setOrder, query, setQuery }) => {
  return (
    <View>
      <Searchbar
        style={styles.search}
        theme={{ colors: { primary: theme.colors.onSurface } }}
        value={query}
        onChangeText={setQuery}
      />
      <Picker selectedValue={order} onValueChange={(val) => setOrder(val)}>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="ratingDesc" />
        <Picker.Item label="Lowest rated repositories" value="ratingAsc" />
      </Picker>
    </View>
  );
};

export const RepositoryListContainer = ({
  repositories,
  order,
  setOrder,
  query,
  setQuery,
}) => {
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
      ListHeaderComponent={
        <RepositoryListHeader
          order={order}
          setOrder={setOrder}
          query={query}
          setQuery={setQuery}
        />
      }
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState();
  const [query, setQuery] = useState();
  const [debouncedQuery] = useDebounce(query, 500);
  const { repositories } = useRepositories(debouncedQuery, order);

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      query={query}
      setQuery={setQuery}
    />
  );
};

export default RepositoryList;
