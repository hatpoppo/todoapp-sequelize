import React from "react";
import { TodoItem, Todos } from "../TodoApp.types";

interface TodoListItemProps extends TodoItem {
  id: string;
  complete: (id: string) => void;
}

export class TodoListItem extends React.Component<TodoListItemProps, any> {
  render() {
    const { id, completed, label, complete } = this.props;
    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => complete(id)}></input>
          {label}
        </label>
      </li>
    );
  }
}
