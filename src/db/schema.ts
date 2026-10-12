import { sql } from "drizzle-orm";
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
