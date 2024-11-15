import { useMutation } from "@apollo/client";
import useSignIn from "./useSignIn";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const [signIn] = useSignIn();

  const signUp = async (credentials) => {
    await mutate({ variables: { user: credentials } });
    await signIn(credentials);
  };

  return [signUp, result];
};

export default useSignUp;
