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
    return await listTodos();
}
