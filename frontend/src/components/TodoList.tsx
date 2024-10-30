import React from "react";
import { TodoItem } from "./TodoItem.tsx";
import { trpc } from "@/lib/trpc.ts";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const {
    todos,
    isLoading,
    isError,
    error,
  } = trpc.userList.useQuery();

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  
  if (isError) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center">Todo List</h1>
      <div className="space-y-2">
        {todos.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={() => console.log("Toggle todo:", todo.id)}
            onDelete={() => console.log("Delete todo:", todo.id)}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-gray-500">
          No todos yet. Start adding some!
        </p>
      )}
    </div>
  );
}
