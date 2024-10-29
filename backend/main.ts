import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import { db } from "./database.ts";

const router = new Router();
router.get("/todos", async (ctx) => {
  const todos = await db.selectFrom("todos").selectAll().execute();
  ctx.response.body = JSON.stringify(todos);
});

const app = new Application();
const port = 8080;

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://localhost:${port}`);

app.listen({ port: port });
