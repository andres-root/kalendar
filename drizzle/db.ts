import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";


// Initialize Neon Client
const sql = neon(process.env.DATABASE_URL!);

// Create and export a drizzle instance
export const db = drizzle(sql, { schema });
