import React from "react";
import { TodoListItem } from "./TodoListItem";
import { FileTypes, Todos } from "../TodoApp.types";
import { Stack } from "office-ui-fabric-react";
interface TodoListProps {
  todos: Todos;
  filter: FileTypes;
  complete: (id: string) => void;
  edit: (id: string, label: string) => void;
  remove: (id: string) => void;
}

export class TodoList extends React.Component<TodoListProps, any> {
  render() {
    const { todos, complete, filter, edit, remove } = this.props;
    const filterdTodos = Object.keys(todos).filter(id => {
      return filter === "all" || (filter === "completed" && todos[id].completed) || (filter === "active" && !todos[id].completed);
    });
    return (
      <Stack gap={10}>
        {filterdTodos.map(id => (
          <TodoListItem key={id} id={id} complete={complete} todos={todos} edit={edit} remove={remove}></TodoListItem>
        ))}
      </Stack>
    );
  }
}
