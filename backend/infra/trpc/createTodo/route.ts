import { t } from "../trpc.ts";
import { createTodo } from "../../../core/createTodo/usecase.ts";
import { z } from "https://deno.land/x/zod/mod.ts";
import { saveTodo } from "../../repository/createTodo/repository.ts";

export const createTodoRouter = t.router({
    create: t.procedure
        .input(
            z.object({
                title: z.string(),
                description: z.string().optional(),
            }),
        ).mutation(async ({ input }) => {
            console.log("creating a todo");
            return await createTodo(input, saveTodo);
        }),
});
