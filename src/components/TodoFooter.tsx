import React, { useContext } from "react";
import { DefaultButton, Stack, Text } from "office-ui-fabric-react";
import { TodoContext } from "../TodoContext";

export const TodoFooter = () => {
  const context = useContext(TodoContext);
  const todos = context.todos;
  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;
  const _onclick = () => {
    context.clear();
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
