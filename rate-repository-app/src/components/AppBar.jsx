import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";
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

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
