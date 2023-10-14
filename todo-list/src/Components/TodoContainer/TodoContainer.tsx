import { type FC, useMemo } from "react";
import { useTodoContext } from "../../Hooks/useTodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoData } from "../../Common";
import { AddButton } from "../AddButton/AddButton";
import "./TodoContainer.css";

interface TodoContainerProps {}

export const TodoContainer: FC<TodoContainerProps> = () => {
  const { todoContext } = useTodoContext();
  const orderedTodos: TodoData[] = useMemo(() => {
    return todoContext.sort((a, b) => b.priority - a.priority);
  }, [todoContext]);
  return (
    <>
      <div className="TodoContainerDiv">
        {orderedTodos.map((todo: TodoData) => (
          <TodoItem todoData={todo} />
        ))}
      </div>
      <div className="TodoAddButtonDiv">
        <AddButton />
      </div>
    </>
  );
};
