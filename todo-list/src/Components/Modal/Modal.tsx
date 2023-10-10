import { type FC } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";

interface ModalProps {}

export const Modal: FC<ModalProps> = () => {
  return (
    <>
      <Formik
        initialValues={{ title: "", priority: "" }}
        onSubmit={() => alert("submitted")}
        validate={(values) => {
          const errors: { [key: string]: string } = {};
          if (!values.title) {
            errors.title = "Title Required";
          }
          if (!values.priority) {
            errors.priority = "Priority Required";
          }
          return errors;
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Field type="title" name="title" />
            <ErrorMessage name="title" />
            <Field type="priority" name="priority" />
            <ErrorMessage name="priority" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
