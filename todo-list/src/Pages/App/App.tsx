import { type FC, useState } from "react";
import "./App.css";
import "../../Components/index";
import { AddButton, Typography } from "../../Components/index";
import { Modal } from "../../Components/Modal/Modal";

interface AppProps {}

export const AppComponent: FC<AppProps> = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Typography text="Hello World" fontSize="50px" fontColour="white" />
        {modalActive && (
          <Typography text="Modal Active" fontSize="50px" fontColour="white" />
        )}
        <Modal></Modal>
        <AddButton launchModal={setModalActive} />
      </header>
    </div>
  );
};
