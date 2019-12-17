import React from "react";
import { FileTypes } from "../TodoApp.types";
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from "office-ui-fabric-react";
interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FileTypes) => void;
  filter: FileTypes;
}

interface TodoHeaderState {
  labelInput: string;
}

export class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props: TodoHeaderProps) {
    super(props);
    this.state = { labelInput: "" };
  }

  render() {
    const { filter, setFilter } = this.props;
    return (
      <Stack>
        <Stack>
          <Text variant="xxLarge">
            todos <Text variant="mediumPlus">use ui-fablic</Text>{" "}
          </Text>
        </Stack>
        <Stack horizontal>
          <Stack.Item grow>
            <TextField value={this.state.labelInput} onChange={this._onChange} placeholder="add todo"></TextField>
          </Stack.Item>
          <PrimaryButton onClick={this._onAdd}>Add</PrimaryButton>
        </Stack>
        <Pivot onLinkClick={this._onFilter}>
          <PivotItem headerText="all" />
          <PivotItem headerText="active" />
          <PivotItem headerText="completed" />
        </Pivot>
      </Stack>
    );
  }
  _onFilter = item => {
    this.props.setFilter(item.props.headerText as FileTypes);
  };
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
  _onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: "" });
  };
}
