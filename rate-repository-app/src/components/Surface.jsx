import { StyleSheet, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  surface: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
});

const Surface = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.surface, style]} {...rest}>
      {children}
    </View>
  );
};

export default Surface;
