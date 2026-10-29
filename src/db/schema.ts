import { sql } from "drizzle-orm";
import { float } from "drizzle-orm/cockroach-core/columns/float";

import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull(),
  user_id: text("user_id").notNull().unique(),
  email: text().notNull().unique(),
  userpass: text().notNull(),
  role: text().notNull(),
  createat: text("createat")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const ProductTable = sqliteTable("ProductTable", {
  id: int().primaryKey({ autoIncrement: true }),
  sku: text().notNull().unique(),
  name: text().notNull(),
  category: text().notNull(),
  status: text().notNull(),
  stock: int().notNull(),
  price: float().notNull(),
  supplier: text().notNull(),
  description: text().notNull(),
  image: text().notNull(),
});

