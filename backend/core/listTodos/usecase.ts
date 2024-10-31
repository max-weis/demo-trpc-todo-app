export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface listTodosRepository {
    (): Promise<Todo[]>;
}

export async function listTodos(
    listTodos: listTodosRepository,
): Promise<Todo[]> {
    return await listTodos();
}
