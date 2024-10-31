import { t } from "./trpc.ts";
import { createTodoRouter } from "./createTodo/route.ts";
import { listTodosRouter } from "./listTodos/route.ts";
import { toggleTodoRouter } from "./toggleTodo/route.ts";
import { removeTodoRouter } from "./removeTodo/route.ts";

export const mainRouter = t.router({
    createTodo: createTodoRouter,
    listTodos: listTodosRouter,
    toggleTodo: toggleTodoRouter,
    removeTodo: removeTodoRouter,
});

export type MainRouter = typeof mainRouter;
