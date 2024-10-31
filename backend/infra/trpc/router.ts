import { t } from "./trpc.ts";
import { createTodoRouter } from "./createTodo/route.ts";
import { listTodosRouter } from "./listTodos/route.ts";

export const mainRouter = t.router({
    createTodo: createTodoRouter,
    listTodos: listTodosRouter,
});

export type MainRouter = typeof mainRouter;
