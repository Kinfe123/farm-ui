// src/index.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
var connectionString = process.env.DATABASE_URL;
var client = postgres(connectionString);
var db = drizzle(client);
export {
  db
};
//# sourceMappingURL=index.mjs.map