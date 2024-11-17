import { StyleSheet, View } from "react-native";
import { format } from "date-fns";

import Surface from "./Surface";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
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

const Review = ({ data, userView }) => {
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
            {userView ? data.repository.fullName : data.user.username}
          </Text>
          <Text color="muted">{format(data.createdAt, "dd.MM.yyyy")}</Text>
        </View>
        {data.text && <Text>{data.text}</Text>}
      </View>
    </Surface>
  );
};

export default Review;
