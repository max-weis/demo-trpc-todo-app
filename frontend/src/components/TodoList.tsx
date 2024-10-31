"use client";

import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem.tsx";
import { TodoForm } from "./TodoForm.tsx";
import { trpc } from "../lib/trpc.ts";
import { Todo } from "../lib/todo.ts";

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const fetchedTodos = await trpc.listTodos.list.query() as Todo[];
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="space-y-4">
      <TodoForm onTodoAdded={fetchTodos} />
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
          />
        ))}
      </div>
    </div>
  );
}
