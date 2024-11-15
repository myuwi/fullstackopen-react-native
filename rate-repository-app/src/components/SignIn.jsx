import { Formik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import Surface from "./Surface";
import TextField from "./TextField";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Surface>
          <TextField name="username" placeholder="Username" />
          <TextField
            name="password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button onPress={handleSubmit}>Sign in</Button>
        </Surface>
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
