import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
    height: 64 + Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
      <Text color="onPrimary" weight="bold" size="medium">
        {children}
      </Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;
