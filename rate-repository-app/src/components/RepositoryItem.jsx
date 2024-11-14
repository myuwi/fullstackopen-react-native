import { Image, StyleSheet, View } from "react-native";
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

const Badge = ({ children }) => {
  return (
    <View style={styles.badge}>
      <Text color="onAccent">{children}</Text>
    </View>
  );
};

const Stat = ({ label, value }) => {
  const stat =
    value >= 1000 ? (value / 1000).toFixed(1).replace(".0", "") + "k" : value;

  return (
    <View style={styles.stat}>
      <Text weight="bold">{stat}</Text>
      <Text color="muted">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text weight="bold" size="medium">
            {item.fullName}
          </Text>
          <Text color="muted">{item.description}</Text>
          <Badge>{item.language}</Badge>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Stat label="Stars" value={item.stargazersCount} />
        <Stat label="Forks" value={item.forksCount} />
        <Stat label="Reviews" value={item.reviewCount} />
        <Stat label="Rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
