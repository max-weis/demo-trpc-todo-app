import process from "node:process";
import { serve } from "https://deno.land/std@0.181.0/http/server.ts";
import { mainRouter } from "./infra/trpc/router.ts";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

var port = Number(process.env.PORT) || 8080;

const handler = (req: Request): Response | Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:" + port,
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
      },
    });
  }

  // Handle tRPC requests
  return fetchRequestHandler({
    endpoint: "/",
    req,
    router: mainRouter,
    createContext: () => ({}),
  });

  return new Response("Not Found", { status: 404 });
};

serve(handler, { port: port });
