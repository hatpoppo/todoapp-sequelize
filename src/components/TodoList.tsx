import React, { useContext } from "react";
import { TodoListItem } from "./TodoListItem";
import { Stack } from "office-ui-fabric-react";
import { Store } from "../store";
import { connect } from "react-redux";

interface TodoListProps {
  todos: Store["todos"];
  filter: Store["filter"];
}
const TodoList = (props: TodoListProps) => {
  const { todos, filter } = props;
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
const ConnectedTodoList = connect((state: Store) => ({ ...state }))(TodoList);
export { ConnectedTodoList as TodoList };
