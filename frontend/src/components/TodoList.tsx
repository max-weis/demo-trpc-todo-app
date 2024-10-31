"use client";

import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem.tsx";
import { TodoForm } from "./TodoForm.tsx";
import { TodoFilter } from "./TodoFilter.tsx";
import { trpc } from "../lib/trpc.ts";
import { TodoListItem } from "../lib/todo.ts";

export function TodoList() {
  const [todos, setTodos] = useState<TodoListItem[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await trpc.listTodos.list.query() as TodoListItem[];
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  const addTodo = (title: string) => {
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      <TodoForm onAdd={addTodo} />
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      <div className="space-y-2">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}
