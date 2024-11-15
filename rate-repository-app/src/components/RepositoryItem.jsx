import { Image, StyleSheet, View } from "react-native";
import * as Linking from "expo-linking";

import Button from "./Button";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  topContainer: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  infoContainer: {
    flex: 1,
    alignItems: "flex-start",
    gap: theme.spacing.sm,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatar: {
    height: theme.spacing.xxl,
    width: theme.spacing.xxl,
    borderRadius: theme.rounding.sm,
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    backgroundColor: theme.colors.accent,
    borderRadius: theme.rounding.sm,
  },
  stat: {
    alignItems: "center",
    gap: theme.spacing.xs,
  },
});

const Badge = ({ children, testID }) => {
  return (
    <View style={styles.badge} testID={testID}>
      <Text color="onAccent">{children}</Text>
    </View>
  );
};

const Stat = ({ label, value, testID }) => {
  const stat =
    value >= 1000 ? (value / 1000).toFixed(1).replace(".0", "") + "k" : value;

  return (
    <View style={styles.stat} testID={testID}>
      <Text weight="bold">{stat}</Text>
      <Text color="muted">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ item, singleView }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.topContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text weight="bold" size="medium" testID="fullName">
            {item.fullName}
          </Text>
          <Text color="muted" testID="description">
            {item.description}
          </Text>
          <Badge testID="language">{item.language}</Badge>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Stat
          label="Stars"
          value={item.stargazersCount}
          testID="stargazersCount"
        />
        <Stat label="Forks" value={item.forksCount} testID="forksCount" />
        <Stat label="Reviews" value={item.reviewCount} testID="reviewCount" />
        <Stat
          label="Rating"
          value={item.ratingAverage}
          testID="ratingAverage"
        />
      </View>
      {singleView && (
        <Button onPress={() => Linking.openURL(item.url)}>
          Open in GitHub
        </Button>
      )}
    </View>
  );
};

export default RepositoryItem;
