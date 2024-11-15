import { useState } from "react";
import { FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import theme from "../theme";

const styles = StyleSheet.create({
  list: {
    gap: theme.spacing.sm,
  },
  picker: {
    height: theme.spacing.xxl,
  },
});

export const RepositoryListContainer = ({ repositories, order, setOrder }) => {
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
      ListHeaderComponent={() => {
        return (
          <Picker
            style={styles.picker}
            selectedValue={order}
            onValueChange={(val) => setOrder(val)}
          >
            <Picker.Item label="Latest repositories" value="latest" />
            <Picker.Item
              label="Highest rated repositories"
              value="ratingDesc"
            />
            <Picker.Item label="Lowest rated repositories" value="ratingAsc" />
          </Picker>
        );
      }}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState();
  const { repositories } = useRepositories(order);

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
    />
  );
};

export default RepositoryList;
