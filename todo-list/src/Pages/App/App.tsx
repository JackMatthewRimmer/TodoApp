import { type FC, useState } from "react";
import "./App.css";
import "../../Components/index";
import { AddButton, TitleBar, Typography } from "../../Components/index";
import { Modal } from "../../Components/Modal/Modal";
import { TodoContextProvider } from "../../Hooks/useTodoContext";
import { TodoData } from "../../Common";
import { TodoItem } from "../../Components";
import { v4 as uuidv4 } from "uuid";

interface AppProps {}

export const AppComponent: FC<AppProps> = () => {
  const testTodo: TodoData = {
    uuid: uuidv4(),
    title: "test",
    priority: "test",
  };
  return (
    <TodoContextProvider>
      <div className="App">
        <TitleBar />
        <Modal />
        <AddButton />
        <TodoItem todoData={testTodo} />
      </div>
    </TodoContextProvider>
  );
};
