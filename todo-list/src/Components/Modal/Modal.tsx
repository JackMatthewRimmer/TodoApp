import { SetStateAction, type FC, Dispatch } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import "./Modal.css";
import { Typography } from "../Typography/Typography";
import { CrossSvg } from "../../Svgs";

interface ModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ setOpen }) => {
  return (
    <div className="ModalDiv">
      <CrossSvg
        width={"15px"}
        height={"15px"}
        className="ModalCrossButton"
        onClick={() => setOpen(false)}
      />
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
              <Field
                type="title"
                name="title"
                className="ModalField"
                placeholder={"Title Required"}
              />
            </div>
            <div className="ModalFormSection">
              <Typography
                text="Priority:"
                fontSize={"10px"}
                fontWeight={"bold"}
              />
              <Field
                type="priority"
                name="priority"
                className="ModalField"
                placeholder={"Priority Required"}
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
