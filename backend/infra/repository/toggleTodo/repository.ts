import { db } from "../database.ts";

export async function toggleTodo(todoId: number) {
    return await db
        .updateTable("todos")
        .set((eb) => ({
            is_completed: eb.not("is_completed"),
        }))
        .where("id", "=", todoId)
        .executeTakeFirst();
}
