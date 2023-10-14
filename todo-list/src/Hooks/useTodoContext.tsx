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

interface TodoProviderProps {
  children: ReactElement;
}

interface todoContext {
  todoContext: TodoData[];
  setTodoContext: Dispatch<SetStateAction<TodoData[]>>;
  addTodo: (item: TodoData) => void;
  removeTodo: (item: TodoData) => void;
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

  const addTodo = (item: TodoData) => {
    setTodoContext([item, ...todoContext]);
  };

  const removeTodo = (item: TodoData) => {
    setTodoContext(todoContext.filter((todo: TodoData) => todo.id !== item.id));
  };

  const contextValue: todoContext = {
    todoContext,
    setTodoContext,
    addTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
