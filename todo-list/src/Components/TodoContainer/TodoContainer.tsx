import { type FC } from "react";
import { useTodoContext } from "../../Hooks/useTodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoData } from "../../Common";
import { AddButton } from "../AddButton/AddButton";
import "./TodoContainer.css";

interface TodoContainerProps {}

export const TodoContainer: FC<TodoContainerProps> = () => {
  const { todoContext } = useTodoContext();
  return (
    <>
      <div className="TodoContainerDiv">
        {todoContext.map((todo: TodoData) => (
          <TodoItem todoData={todo} />
        ))}
      </div>
      <div className="TodoAddButtonDiv">
        <AddButton />
      </div>
    </>
  );
};
