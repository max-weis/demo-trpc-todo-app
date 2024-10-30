import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface TodoItemProps {
  id: number
  text: string
  completed: boolean
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`todo-${id}`}
        checked={completed}
        onCheckedChange={() => onToggle(id)}
      />
      <label
        htmlFor={`todo-${id}`}
        className={`flex-grow ${completed ? 'line-through text-muted-foreground' : ''}`}
      >
        {text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(id)}
        className="h-8 w-8 p-0"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}