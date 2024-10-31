export interface removeTodoRepository {
    (id: number): void;
}

export function removeTodo(
    id: number,
    removeTodo: removeTodoRepository,
): void {
    removeTodo(id);
}
