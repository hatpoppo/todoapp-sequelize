import React from "react";
import { TodoItem, Todos } from "../TodoApp.types";
import { Stack, Checkbox, DefaultButton } from "office-ui-fabric-react";
interface TodoListItemProps extends TodoItem {
  id: string;
  complete: (id: string) => void;
}

export class TodoListItem extends React.Component<TodoListItemProps, any> {
  render() {
    const { id, completed, label, complete } = this.props;
    return (
      <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
        <Checkbox label={label} checked={completed} onChange={() => complete(id)} />
      </Stack>
    );
  }
}
