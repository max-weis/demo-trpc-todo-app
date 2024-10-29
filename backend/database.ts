import Pool from "pg-pool";
import { Kysely, PostgresDialect } from "kysely";
import process from "node:process";
import { DB } from "./db.d.ts";

const dialect = new PostgresDialect({
    pool: new Pool({
        user: process.env.PG_USER || "user",
        password: process.env.PG_PASSWORD || "password",
        host: process.env.PG_HOST || "localhost",
        port: Number(process.env.PG_PORT) || 5432,
        database: process.env.PG_DATABASE || "todo",
    }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
    dialect,
});
