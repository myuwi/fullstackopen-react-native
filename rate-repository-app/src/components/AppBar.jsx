import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.lg,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
    height: 64 + Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
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
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/signin">Sign in</AppBarTab>
    </View>
  );
};

export default AppBar;
