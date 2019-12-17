import React from "react";
import { Todos } from "../TodoApp.types";
import { DefaultButton, Stack, Text } from "office-ui-fabric-react";

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
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount <= 1 ? "" : "s"}
      </Text>
      <DefaultButton onClick={_onclick}>Clear DefaultButton</DefaultButton>
    </Stack>
  );
};
