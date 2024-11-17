import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    height: 56,
    paddingHorizontal: theme.spacing.lg,
    flexDireciton: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.rounding.sm,
  },
  active: {
    opacity: 0.9,
  },
  variants: {
    accent: {
      button: { backgroundColor: theme.colors.accent },
      text: { color: theme.colors.onAccent },
    },
    error: {
      button: { backgroundColor: theme.colors.error },
      text: { color: theme.colors.onError },
    },
  },
});

const AppBar = ({ children, style, variant = "accent", ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles.variants[variant].button,
        pressed && styles.active,
        style,
      ]}
      {...rest}
    >
      <Text weight="bold" style={styles.variants[variant].text}>
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBar;
