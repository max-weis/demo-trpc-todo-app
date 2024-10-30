import { TodoList } from "./components/TodoList.tsx"

export default function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Todo App</h1>
        <TodoList />
      </div>
    </div>
  )
}