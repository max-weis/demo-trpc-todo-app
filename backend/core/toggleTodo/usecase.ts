export interface toggleTodoRepository {
    (id: number): void;
}

export function toggleTodo(
    id: number,
    toggleTodo: toggleTodoRepository,
): void {
    toggleTodo(id);
}
