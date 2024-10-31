export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface saveTodoRepository {
    (todo: Todo): void;
}

export function createTodo(
    data: { title: string; description?: string },
    saveTodo: saveTodoRepository,
): void {
    const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: data.title,
        completed: false,
    };

    saveTodo(newTodo);
}
