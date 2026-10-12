import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";
export async function getAllusers() {
  return;
}
const db = drizzle(process.env.DB_FILE_NAME ?? "file:./local.db");
export async function getbyEmail(UserEmail: string, UserPass: string) {
  try {
    const user = await db
      .select({
        email: usersTable.email,
        password: usersTable.userpass,
      })
      .from(usersTable)
      .where(eq(usersTable.email, UserEmail));

    if (!user) {
      return { ok: false, token: "malo" };
    }

    if (user[0].password !== UserPass) {
      return { ok: false, token: "malo" };
    }

    return { ok: true, token: "bien" };
  } catch (error) {
    console.error("Drizzel query failed:", error);
    throw error;
  }
}
