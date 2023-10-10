import { SetStateAction, type FC, Dispatch } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import "./Modal.css";
import { Typography } from "../Typography/Typography";

interface ModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ setOpen }) => {
  return (
    <div className="ModalDiv">
      <Formik
        initialValues={{ title: "", priority: "" }}
        onSubmit={() => setOpen(false)}
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
        {() => (
          <Form>
            <div className="ModalFormSection">
              <Typography text="Title:" fontSize={"10px"} fontWeight={"bold"} />
              <Field type="title" name="title" className="ModalField" />
              <ErrorMessage
                name="title"
                className="ModalErrorMessage"
                component={"div"}
              />
            </div>
            <div className="ModalFormSection">
              <Typography
                text="Priority:"
                fontSize={"10px"}
                fontWeight={"bold"}
              />
              <Field type="priority" name="priority" className="ModalField" />
              <ErrorMessage
                name="priority"
                className="ModalErrorMessage"
                component={"div"}
              />
            </div>
            <div>
              <button type="submit" className="ModalSubmit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
