import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoFooter } from "./TodoFooter";
import { TodoList } from "./TodoList";
import { Stack } from "office-ui-fabric-react";

export const TodoApp = () => {
  return (
    <Stack horizontalAlign="center">
      <Stack style={{ width: 400 }} gap={25}>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </Stack>
    </Stack>
  );
};
