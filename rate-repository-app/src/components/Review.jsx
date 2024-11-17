import { Alert, StyleSheet, View } from "react-native";
import { format } from "date-fns";

import Button from "./Button";
import Surface from "./Surface";
import Text from "./Text";
import theme from "../theme";
import useDeleteReview from "../hooks/useDeleteReview";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
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
  buttonContainer: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  button: {
    flex: 1,
  },
});

const Review = ({ data, userView, onDelete }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const handleViewRepository = () =>
    navigate(`/repository/${data.repository.id}`);

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "DELETE",
          onPress: async () => {
            await deleteReview(data.id);
            await onDelete();
          },
        },
      ],
    );
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.topContainer}>
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
      </View>
      {userView && (
        <View style={styles.buttonContainer}>
          <Button onPress={handleViewRepository} style={styles.button}>
            View repository
          </Button>
          <Button variant="error" onPress={handleDelete} style={styles.button}>
            Delete review
          </Button>
        </View>
      )}
    </Surface>
  );
};

export default Review;
