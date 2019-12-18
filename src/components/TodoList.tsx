import React, { useContext } from "react";
import { TodoListItem } from "./TodoListItem";
import { Stack } from "office-ui-fabric-react";
import { TodoContext } from "../TodoContext";

export const TodoList = () => {
  const context = useContext(TodoContext);
  const { todos, filter } = context;
  const filterdTodos = Object.keys(todos).filter(id => {
    return filter === "all" || (filter === "completed" && todos[id].completed) || (filter === "active" && !todos[id].completed);
  });
  return (
    <Stack gap={10}>
      {filterdTodos.map(id => (
        <TodoListItem key={id} id={id} />
      ))}
    </Stack>
  );
};
