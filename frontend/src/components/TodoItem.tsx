import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { TodoListItem } from "../lib/todo";

interface TodoItemProps {
  todo: TodoListItem;
}

export function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = (id: string) => {
  };

  const deleteTodo = (id: string) => {
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
