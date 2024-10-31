import { t } from "../trpc.ts";
import { removeTodo } from "../../../core/removeTodo/usecase.ts";
import { z } from "https://deno.land/x/zod/mod.ts";
import { removeTodo as removeTodoRepository } from "../../repository/removeTodo/repository.ts";

export const removeTodoRouter = t.router({
    remove: t.procedure
        .input(
            z.object({
                id: z.number(),
            }),
        ).mutation(async ({ input }) => {
            console.log("removing todo with id", input.id);
            return await removeTodo(input.id, removeTodoRepository);
        }),
});
