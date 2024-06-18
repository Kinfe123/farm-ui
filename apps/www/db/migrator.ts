

import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import {drizzle} from "drizzle-orm/postgres-js"
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL!
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

async function main(){
    await migrate(db , {migrationsFolder: "./db/migrations" , migrationsTable: "my_migration"})
    await sql.end()
    process.exit(0)
}
main()

