import { t } from "../trpc.ts";
import { listTodos } from "../../../core/listTodos/usecase.ts";
import { listTodos as listTodosRepository } from "../../repository/listTodos/repository.ts";

export const listTodosRouter = t.router({
    list: t.procedure.query(async () => {
        console.log("listing todos")
        return await listTodos(listTodosRepository);
    }),
});
