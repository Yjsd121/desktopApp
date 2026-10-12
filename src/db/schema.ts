import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull(),
  user_id: int().notNull().unique(),
  email: text().notNull().unique(),
  userpass: text().notNull(),
  role: text().notNull(),
  createat: text()
    .$default(() => new Date().toISOString())
    .notNull(),
});
