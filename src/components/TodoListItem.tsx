import React from "react";
import { Stack, Checkbox, DefaultButton, IconButton, TextField } from "office-ui-fabric-react";
import { TodoContext } from "../TodoContext";
interface TodoListItemProps {
  id: string;
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
    const { id } = this.props;
    const { todos, complete, remove } = this.context;
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
    const { id } = this.props;
    const { todos } = this.context;
    const { label } = todos[id];
    this.setState({
      editLabel: label,
      editing: true
    });
  };
  private onEditDone = () => {
    this.context.edit(this.props.id, this.state.editLabel);
    this.setState({
      editing: false,
      editLabel: ""
    });
  };
}

TodoListItem.contextType = TodoContext;
