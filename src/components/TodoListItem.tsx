import React from "react";
import { TodoItem, Todos } from "../TodoApp.types";
import { Stack, Checkbox, DefaultButton, IconButton, TextField } from "office-ui-fabric-react";
interface TodoListItemProps {
  id: string;
  todos: Todos;
  complete: (id: string) => void;
  edit: (id: string, label: string) => void;
  remove: (id: string) => void;
}

interface TodoListItemState {
  editing: boolean;
  editLabel: string;
}
export class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {
  constructor(props) {
    super(props);
    this.state = { editing: false, editLabel: "" };
  }
  render() {
    const { id, todos, complete, remove } = this.props;
    return (
      <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
        {!this.state.editing && (
          <>
            <Checkbox label={todos[id].label} checked={todos[id].completed} onChange={() => complete(id)} />
            <div>
              <IconButton iconProps={{ iconName: "Edit" }} onClick={this.onEdit}></IconButton>
              <IconButton iconProps={{ iconName: "Delete" }} onClick={() => remove(id)}></IconButton>
            </div>
          </>
        )}
        {this.state.editing && (
          <Stack.Item grow>
            <Stack horizontal>
              <Stack.Item grow>
                <TextField value={this.state.editLabel} onChange={this.onChange} />
              </Stack.Item>
              <DefaultButton onClick={this.onEditDone}>Save</DefaultButton>
            </Stack>
          </Stack.Item>
        )}
      </Stack>
    );
  }
  private onChange = evt => {
    this.setState({
      editLabel: evt.target.value
    });
  };
  private onEdit = () => {
    const { todos, id } = this.props;
    const { label } = todos[id];
    this.setState({
      editLabel: label,
      editing: true
    });
  };
  private onEditDone = () => {
    this.props.edit(this.props.id, this.state.editLabel);
    this.setState({
      editing: false,
      editLabel: ""
    });
  };
}
