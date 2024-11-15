import { Pressable, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";
import useMe from "../hooks/useMe";
import useSignOut from "../hooks/useSignOut";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
    height: 64 + Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
  scrollContainer: {
    flex: 1,
    gap: theme.spacing.xl,
    alignItems: "center",
  },
});

const AppBarTab = ({ to, children }) => {
  return (
    <Link to={to}>
      <Text color="onPrimary" weight="bold" size="medium">
        {children}
      </Text>
    </Link>
  );
};

const AppBarButton = ({ onPress, children }) => {
  return (
    <Pressable onPress={onPress}>
      <Text color="onPrimary" weight="bold" size="medium">
        {children}
      </Text>
    </Pressable>
  );
};

const AppBar = () => {
  const { data: me } = useMe();
  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab to="/">Repositories</AppBarTab>
        {me ? (
          <>
            <AppBarTab to="/review">Create a review</AppBarTab>
            <AppBarButton onPress={signOut}>Sign out</AppBarButton>
          </>
        ) : (
          <AppBarTab to="/signin">Sign in</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
