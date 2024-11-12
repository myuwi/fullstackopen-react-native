import { View } from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const TextField = (props) => {
  const [field, meta, helpers] = useField(props.name);
  const error = meta.touched && meta.error;

  return (
    <View style={{ gap: theme.spacing.xs }}>
      <TextInput
        value={field.value}
        onBlur={() => helpers.setTouched(true)}
        onChangeText={helpers.setValue}
        error={error}
        {...props}
      />
      {error && <Text color="error">{error}</Text>}
    </View>
  );
};

export default TextField;
