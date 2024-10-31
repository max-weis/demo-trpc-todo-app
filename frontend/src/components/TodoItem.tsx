import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Todo } from "../lib/todo";
import { trpc } from "../lib/trpc";
import { useState } from "react";

interface TodoItemProps {
  onDeleted: (id: number) => void;
  todoItem: Todo;
}

export function TodoItem({ todoItem, onDeleted }: TodoItemProps) {
  const [todo, setTodo] = useState<Todo>(todoItem);

  const toggleTodo = (id: number) => {
    trpc.toggleTodo.toggle.mutate({
      id,
    });
    setTodo({ ...todo, completed: !todo.completed });
  };

  const deleteTodo = (id: number) => {
    trpc.removeTodo.remove.mutate({
      id,
    });
    onDeleted(id);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-grow ${
          todo.completed ? "line-through text-muted-foreground" : ""
        }`}
      >
        {todo.title}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        className="h-8 w-8 p-0"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
