import { type FC, useState } from "react";
import "./App.css";
import "../../Components/index";
import { AddButton, Typography } from "../../Components/index";
import { Modal } from "../../Components/Modal/Modal";
import { TodoContextProvider } from "../../Hooks/useTodoContext";

interface AppProps {}

export const AppComponent: FC<AppProps> = () => {
  return (
    <TodoContextProvider>
      <div className="App">
        <Typography
          text="Todo List"
          fontWeight={"bold"}
          fontSize="25px"
          fontColour="white"
        />
        <Modal />
        <AddButton />
      </div>
    </TodoContextProvider>
  );
};
