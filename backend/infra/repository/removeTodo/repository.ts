import { db } from "../database.ts";

export async function removeTodo(todoId: number) {
    return await db
        .deleteFrom("todos")
        .where("id", "=", todoId)
        .execute();
}
