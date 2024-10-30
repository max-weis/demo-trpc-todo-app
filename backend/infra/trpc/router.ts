import { t } from "./trpc.ts";
import { createTodoRouter } from "./createTodo/createTodoRoute.ts";

export const mainRouter = t.router({
    createTodo: createTodoRouter,
});

export type MainRouter = typeof mainRouter;
