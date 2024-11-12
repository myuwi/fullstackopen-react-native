import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import TextInput from "./TextInput";
import Button from "./Button";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
});

const SignIn = () => {
  const handleSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Username"
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
          />
          <TextInput
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry={true}
          />
          <Button onPress={handleSubmit}>Sign in</Button>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
