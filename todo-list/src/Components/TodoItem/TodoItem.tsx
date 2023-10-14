import { type FC } from "react";
import { TodoData } from "../../Common";
import "./TodoItem.css";
import { CrossSvg } from "../../Svgs";
import { useTodoContext } from "../../Hooks/useTodoContext";

interface TodoItemProps {
  todoData: TodoData;
}

export const TodoItem: FC<TodoItemProps> = ({ todoData }) => {
  const { removeTodo } = useTodoContext();
  return (
    <div className="TodoItemDiv">
      <div className="TodoTitleDiv">
        <p>{todoData.title}</p>
      </div>
      <div className="TodoPriorityDiv">
        <p>{todoData.priority}</p>
      </div>
      <div className="TodoSVGDiv">
        <CrossSvg
          width={"15px"}
          height={"15px"}
          onClick={() => removeTodo(todoData)}
        />
      </div>
    </div>
  );
};
