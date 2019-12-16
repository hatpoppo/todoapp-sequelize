import React from "react";
import { Todos } from "../TodoApp.types";

interface TodoFooterProps {
  clear: () => void;
  todos: Todos;
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;
  const _onclick = () => {
    props.clear();
  };
  return (
    <footer>
      <span>
        {itemCount} item{itemCount <= 1 ? "" : "s"}
      </span>
      <button onClick={_onclick} className="submit">
        Clear Button
      </button>
    </footer>
  );
};
