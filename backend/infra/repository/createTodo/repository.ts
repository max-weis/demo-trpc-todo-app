import type { Todo } from "../../../core/createTodo/createTodo.ts";
import { db } from "../database.ts";

export async function saveTodo(todo: Todo) {
    return await db
        .insertInto("todos")
        .values({
            title: todo.title,
            description: todo.description,
            is_completed: todo.completed,
        })
        .executeTakeFirst();
}
