import { type FC, useState } from "react";
import "./App.css";
import "../../Components/index";
import {
  AddButton,
  TitleBar,
  TodoContainer,
  Typography,
} from "../../Components/index";
import { Modal } from "../../Components/Modal/Modal";
import { TodoContextProvider } from "../../Hooks/useTodoContext";

interface AppProps {}

export const AppComponent: FC<AppProps> = () => {
  return (
    <TodoContextProvider>
      <div className="App">
        <TitleBar />
        <Modal />
        <TodoContainer />
      </div>
    </TodoContextProvider>
  );
};
