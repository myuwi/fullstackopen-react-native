import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import TextField from "./TextField";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

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

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const handleSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={handleSubmit} />;
};

export default SignIn;
