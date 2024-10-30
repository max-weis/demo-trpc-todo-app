import { db } from "./database.ts";

import { publicProcedure, router } from "./trpc.ts";

const appRouter = router({
  userList: publicProcedure
    .query(() => {
      return db.selectFrom("todos").selectAll().execute();
    }),
});

export type AppRouter = typeof appRouter;
