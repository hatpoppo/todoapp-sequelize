import React from "react";
import { Stack, Checkbox, DefaultButton, IconButton, TextField } from "office-ui-fabric-react";
import { actions } from "../actions";
import { Store } from "../store";
import { connect } from "react-redux";

interface TodoListItemProps {
  id: string;
  todos: Store["todos"];
  complete: (id: string) => void;
  edit: (id: string, label) => void;
  remove: (id: string) => void;
}

interface TodoListItemState {
  editing: boolean;
  editLabel: string;
}
class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {
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
    const { id, todos } = this.props;
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

const ConnectedTodoListItem = connect(
  (state: Store) => ({ todos: state.todos }),
  dispatch => ({
    edit: (id: string, label: string) => dispatch(actions.edit(id, label)),
    remove: (id: string) => dispatch(actions.remove(id)),
    complete: (id: string) => dispatch(actions.complete(id))
  })
)(TodoListItem);

export { ConnectedTodoListItem as TodoListItem };
