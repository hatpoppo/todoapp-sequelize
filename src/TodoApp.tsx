import React from "react";
import { TodoHeader } from "./components/TodoHeader";
import { TodoFooter } from "./components/TodoFooter";
import { TodoList } from "./components/TodoList";
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
        <TodoHeader addTodo={this._addTodo} setFilter={this._filter} filter={filter}></TodoHeader>
        <TodoList todos={todos} filter={filter} complete={this._complete}></TodoList>
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
  private _addTodo = label => {
    const { todos } = this.state;
    const id = index++;
    this.setState({
      todos: { ...todos, [id]: { label, completed: false } }
    });
  };
  private _filter = filter => {
    this.setState({
      filter: filter
    });
  };
  private _complete = id => {
    const { todos } = this.state;
    const todo = todos[id];
    const newTodos = { ...todos, [id]: { ...todo, completed: !todo.completed } };
    this.setState({
      todos: newTodos
    });
  };
}
