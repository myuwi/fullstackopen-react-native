import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.accent,
    height: 56,
    paddingHorizontal: theme.spacing.lg,
    flexDireciton: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.rounding.sm,
  },
  active: {
    backgroundColor: theme.colors.accent + "E6",
  },
});

const AppBar = ({ children, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.active]}
      {...rest}
    >
      <Text color="onAccent" weight="bold">
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBar;
