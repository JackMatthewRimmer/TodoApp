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
          if (values.priority === "") {
            errors.priority = "Priority Required";
          }
          return errors;
        }}
      >
        {(errors) => (
          <Form>
            <div className="ModalFormSection">
              <div className="ModalFieldTitle">
                <Typography
                  text="Title:"
                  fontSize={"6px"}
                  fontWeight={"bold"}
                />
              </div>
              <Field
                type="title"
                name="title"
                className="ModalField"
                placeholder={"Title Required"}
              />
            </div>
            <div className="ModalFormSection">
              <div className="ModalFieldTitle">
                <Typography
                  text="Priority:"
                  fontSize={"6px"}
                  fontWeight={"bold"}
                />
              </div>
              <Field
                as="select"
                className="ModalField"
                type="priority"
                name="priority"
              >
                <option value={""} label="Please Select a Priority"></option>
                <option value={"1"} label="Prority 1"></option>
                <option value={"2"} label="Priority 2"></option>
                <option value={"3"} label="Priority 3"></option>
                <option value={"4"} label="Priority 4"></option>
              </Field>
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
