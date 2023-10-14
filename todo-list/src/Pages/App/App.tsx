import { type FC, useState } from "react";
import "./App.css";
import "../../Components/index";
import { AddButton, Typography } from "../../Components/index";
import { Modal } from "../../Components/Modal/Modal";
import { TodoContextProvider } from "../../Hooks/useTodoContext";

interface AppProps {}

export const AppComponent: FC<AppProps> = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <TodoContextProvider>
      <div className="App">
        <Typography
          text="Todo List"
          fontWeight={"bold"}
          fontSize="25px"
          fontColour="white"
        />
        {modalActive && <Modal setOpen={setModalActive} />}
        {!modalActive && <AddButton launchModal={setModalActive} />}
      </div>
    </TodoContextProvider>
  );
};
