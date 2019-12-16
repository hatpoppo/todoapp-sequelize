import React from "react";
import { TodoListItem } from "./TodoListItem";
import { FileTypes, Todos } from "../TodoApp.types";

interface TodoListProps {
  todos: Todos;
  filter: FileTypes;
  complete: (id: string) => void;
}

export class TodoList extends React.Component<TodoListProps, any> {
  render() {
    const { todos, complete, filter } = this.props;
    const filterdTodos = Object.keys(todos).filter(id => {
      return filter === "all" || (filter === "completed" && todos[id].completed) || (filter === "active" && !todos[id].completed);
    });
    return (
      <ul className="todos">
        {filterdTodos.map(id => (
          <TodoListItem key={id} id={id} complete={complete} {...todos[id]}></TodoListItem>
        ))}
      </ul>
    );
  }
}
