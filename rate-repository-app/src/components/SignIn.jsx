import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import TextField from "./TextField";
import theme from "../theme";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

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
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <TextField name="username" placeholder="Username" />
          <TextField
            name="password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button onPress={handleSubmit}>Sign in</Button>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
