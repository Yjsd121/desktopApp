import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME ?? "file:./local.db");

export async function CreateProduct() {
  try {
  } catch (err) {
    console.log("Error Creating product", err);
  }
}
