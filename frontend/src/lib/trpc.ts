import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { MainRouter } from "../../../backend/infra/trpc/router.ts";

export const trpc = createTRPCClient<MainRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080",
    }),
  ],
});
