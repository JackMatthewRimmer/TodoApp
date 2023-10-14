import { type FC } from "react";
import { Field, Formik, Form } from "formik";
import "./Modal.css";
import { Typography } from "../Typography/Typography";
import { CrossSvg } from "../../Svgs";
import { useTodoContext } from "../../Hooks/useTodoContext";

interface ModalProps {}

export const Modal: FC<ModalProps> = () => {
  const { modalActive, setModalActive, addTodo } = useTodoContext();

  const handleSubmit = (values: { title: string; priority: string }) => {
    addTodo(values.title, values.priority);
    setModalActive(false);
  };

  if (!modalActive) return null;

  return (
    <div className="ModalDiv">
      <CrossSvg
        width={"15px"}
        height={"15px"}
        className="ModalCrossButton"
        onClick={() => setModalActive(false)}
      />
      <Formik
        initialValues={{ title: "", priority: "" }}
        onSubmit={handleSubmit}
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
