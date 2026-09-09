import "dotenv/config";
import path from "node:path";
import fs from "node:fs";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.js";

const dbPath = path.resolve(process.cwd(), "dev.db");

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("CWD:", process.cwd());
console.log("DB PATH:", dbPath);
console.log("DB EXISTS:", fs.existsSync(dbPath));

const adapter = new PrismaBetterSqlite3({
  url: `file:${dbPath}`,
});

export const prisma = new PrismaClient({
  adapter,
});