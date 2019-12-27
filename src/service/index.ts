import { TodoItem, Store } from "../store";
const HOST = "http://localhost:4000";

export const add = async (id: string, todo: TodoItem) => {
  const response = await fetch(`${HOST}/todos/${id}`, {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo)
  }).then(response => {
    return response.json();
  });
};

export const update = async (id: string, todo: TodoItem) => {
  const response = await fetch(`${HOST}/todos/${id}`, {
    method: "put",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo)
  }).then(response => {
    return response.json();
  });
};

export const remove = async (id: string) => {
  const respoinse = await fetch(`${HOST}/todos/${id}`, {
    method: "delete"
  }).then(response => {
    return response.json();
  });
};
export const getAll = async () => {
  const response = await fetch(`${HOST}/todos`, {
    method: "get"
  });
  return response.json();
};

export const updateAll = async (todos: Store["todos"]) => {
  const response = await fetch(`${HOST}/todos`, {
    method: "post",
    headers: { "content-type": "application/json+" },
    body: JSON.stringify(todos)
  }).then(response => {
    return response.json();
  });
};
