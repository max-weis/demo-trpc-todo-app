import { t } from "./trpc.ts";
import { createTodoRouter } from "./createTodo/route.ts";
import { listTodosRouter } from "./listTodos/route.ts";
import { toggleTodoRouter } from "./toggleTodo/route.ts";

export const mainRouter = t.router({
    createTodo: createTodoRouter,
    listTodos: listTodosRouter,
    toggleTodo: toggleTodoRouter,
});

export type MainRouter = typeof mainRouter;
