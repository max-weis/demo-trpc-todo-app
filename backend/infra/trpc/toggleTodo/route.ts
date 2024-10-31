import { t } from "../trpc.ts";
import { toggleTodo } from "../../../core/toggleTodo/usecase.ts";
import { z } from "https://deno.land/x/zod/mod.ts";
import { toggleTodo as toggleTodoRepository } from "../../repository/toggleTodo/repository.ts";

export const toggleTodoRouter = t.router({
    toggle: t.procedure
        .input(
            z.object({
                id: z.number(),
            }),
        ).mutation(async ({ input }) => {
            console.log("toggling a todo with id", input.id);
            return await toggleTodo(input.id, toggleTodoRepository);
        }),
});
