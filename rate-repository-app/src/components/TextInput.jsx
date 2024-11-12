import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.surface,
    height: 56,
    paddingHorizontal: theme.spacing.md - 1,
    borderRadius: theme.rounding.sm,
    borderColor: theme.colors.outline,
    borderWidth: 1,
    fontSize: theme.fontSizes.body,
  },
});

const TextInput = (props) => {
  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;
