export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface listTodosRepository {
    (): Promise<Todo[]>;
}

export async function listTodos(
    listTodos: listTodosRepository,
): Promise<Todo[]> {
    const todos = await listTodos();
    todos.sort((a, b) => a.id - b.id);
    return todos;
}
