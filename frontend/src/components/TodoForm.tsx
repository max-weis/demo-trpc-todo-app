import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trpc } from "../lib/trpc.ts";

interface TodoFormProps {
  onTodoAdded: () => void;
}

export function TodoForm({ onTodoAdded }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      try {
        await trpc.createTodo.create.mutate({
          title: text.trim(),
        });
        setText("");
        onTodoAdded();
      } catch (error) {
        console.error("Failed to create todo:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-grow"
      />
      <Button type="submit">
        Add
      </Button>
    </form>
  );
}
