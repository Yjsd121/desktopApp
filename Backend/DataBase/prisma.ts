import "dotenv/config";
import path from "node:path";
import fs from "node:fs";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.js";

const dbPath = path.resolve(process.cwd(), "dev.db");

const adapter = new PrismaBetterSqlite3({
  url: `file:${dbPath}`,
});

export const prisma = new PrismaClient({
  adapter,
});