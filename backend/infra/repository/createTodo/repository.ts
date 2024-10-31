import type { Todo } from "../../../core/createTodo/usecase.ts";
import { db } from "../database.ts";

export async function saveTodo(todo: Todo) {
    return await db
        .insertInto("todos")
        .values({
            title: todo.title,
            is_completed: todo.completed,
        })
        .executeTakeFirst();
}
