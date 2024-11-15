import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";

import Button from "./Button";
import Surface from "./Surface";
import TextField from "./TextField";
import useSignUp from "../hooks/useSignUp";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .label("Username")
    .min(5)
    .max(30)
    .required("${label} is required"),
  password: yup
    .string()
    .label("Password")
    .min(5)
    .max(50)
    .required("${label} is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "", confirmPassword: "" }}
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
          <TextField
            name="confirmPassword"
            placeholder="Password confirmation"
            secureTextEntry={true}
          />
          <Button onPress={handleSubmit}>Sign up</Button>
        </Surface>
      )}
    </Formik>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();

  const handleSubmit = async ({ username, password }) => {
    try {
      await signUp({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpForm onSubmit={handleSubmit} />;
};

export default SignUp;
