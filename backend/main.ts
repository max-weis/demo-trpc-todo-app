import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { mainRouter } from "./infra/trpc/router.ts";

const server = createHTTPServer({
  router: mainRouter,
  createContext() {
    return {};
  },
  middleware: (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "*");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      res.writeHead(200);
      res.end();
      return;
    }

    next();
  },
  maxBodySize: 100 * 1024 * 1024, // 100MB limit
  batching: {
    enabled: true,
  },
});

console.log("🚀 Server listening on port 8080");
server.listen(8080);
