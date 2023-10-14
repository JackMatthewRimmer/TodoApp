import {
  SetStateAction,
  type FC,
  type Dispatch,
  useState,
  ReactElement,
  createContext,
  useContext,
} from "react";
import { type TodoData } from "../Common";
import { v4 as uuidv4 } from "uuid";

interface TodoProviderProps {
  children: ReactElement;
}

interface todoContext {
  todoContext: TodoData[];
  setTodoContext: Dispatch<SetStateAction<TodoData[]>>;
  addTodo: (title: string, priorty: number) => void;
  removeTodo: (item: TodoData) => void;
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}

export const TodoContext = createContext<todoContext | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("Context was used from outside a provider");
  return context;
};

export const TodoContextProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todoContext, setTodoContext] = useState<TodoData[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);

  const addTodo = (title: string, priority: number) => {
    const item: TodoData = {
      uuid: uuidv4(),
      title,
      priority,
    };

    window.localStorage.setItem("todoData", JSON.stringify(todoContext));
    console.log(window.localStorage);

    setTodoContext([item, ...todoContext]);
  };

  const removeTodo = (item: TodoData) => {
    setTodoContext(
      todoContext.filter((todo: TodoData) => todo.uuid !== item.uuid)
    );
  };

  const contextValue: todoContext = {
    todoContext,
    setTodoContext,
    addTodo,
    removeTodo,
    modalActive,
    setModalActive,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
