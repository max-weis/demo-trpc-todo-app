export interface Todo {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
}

export interface saveTodoRepository {
    (todo: Todo): void;
}

export async function createTodo(
    data: { title: string; description?: string },
    saveTodo: saveTodoRepository,
): Promise<void> {
    const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: data.title,
        description: data.description || "",
        completed: false,
    };

    return await saveTodo(newTodo);
}
