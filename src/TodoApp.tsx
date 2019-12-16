import React from "react";
import { TodoFooter } from "./components/TodoFooter";
import { FileTypes, Todos } from "./TodoApp.types";
let index = 0;

export class TodoApp extends React.Component<{}, { todos: Todos; filter: FileTypes }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: {},
      filter: "all"
    };
  }
  render() {
    const { filter, todos } = this.state;
    return (
      <div>
        <TodoFooter clear={this._clear} todos={todos}></TodoFooter>
      </div>
    );
  }
  private _clear = () => {
    const { todos } = this.state;
    const newTodos: Todos = {};
    Object.keys(this.state.todos).forEach(id => {
      if (todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });
  };
}
