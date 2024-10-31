import type { Todo } from "../../../core/listTodos/usecase.ts";
import { db } from "../database.ts";

export async function listTodos(): Promise<Todo[]> {
    const todos = await db
        .selectFrom("todos")
        .selectAll()
        .execute();

    return todos.map((todo) => ({
        id: todo.id,
        title: todo.title,
        completed: todo.is_completed,
    })) as Todo[];
}
