import React from "react";
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from "office-ui-fabric-react";
import { FilterTypes } from "../store";
import { actions } from "../actions";
import { connect } from "react-redux";

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
}
interface TodoHeaderState {
  labelInput: string;
}

class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props) {
    super(props);
    this.state = { labelInput: "" };
  }

  render() {
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
    this.props.setFilter(item.props.headerText as FilterTypes);
  };
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
  _onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: "" });
  };
}
const TodoHeaderConnect = connect(
  state => ({}),
  dispatch => ({
    addTodo: label => dispatch(actions.addTodo(label)),
    setFilter: filter => dispatch(actions.setFilter(filter))
  })
)(TodoHeader);

export { TodoHeaderConnect as TodoHeader };
