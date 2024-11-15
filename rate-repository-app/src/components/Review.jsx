import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";

import Button from "./Button";
import Surface from "./Surface";
import TextField from "./TextField";
import useCreateReview from "../hooks/useCreateReview";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .typeError("Rating must be a number between 0 and 100")
    .required("Rating is required"),
  text: yup.string(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Surface>
          <TextField name="ownerName" placeholder="Repository owner name" />
          <TextField name="repositoryName" placeholder="Repository name" />
          <TextField name="rating" placeholder="Rating between 0 and 100" />
          <TextField name="text" placeholder="Review" />
          <Button onPress={handleSubmit}>Create a review</Button>
        </Surface>
      )}
    </Formik>
  );
};

const Review = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();

  const handleSubmit = async (values) => {
    try {
      const review = {
        ...values,
        rating: Number(values.rating),
      };

      await createReview(review);
      navigate(`/repository/${values.ownerName}.${values.repositoryName}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewForm onSubmit={handleSubmit} />;
};

export default Review;
