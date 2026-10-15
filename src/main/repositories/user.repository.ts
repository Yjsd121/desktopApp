import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME ?? "file:./local.db");

export async function getAllusers() {
  return;
}

export async function getInfoAuth(id: string) {
  try {
    const userInfo =await db
      .select({
        username: usersTable.username,
        user_id: usersTable.user_id,
        email: usersTable.email,
        role: usersTable.role,
      })
      .from(usersTable)
      .where(eq(usersTable.user_id, id));

    if (!userInfo) {
      return {
        success: false,
        message: "User info not foud",
      };
    }

    return {
      success: true,
      message: "User Info found",
      data: userInfo[0]
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getbyEmail(UserEmail: string, UserPass: string) {
  try {
    const user = await db
      .select({
        email: usersTable.email,
        password: usersTable.userpass,
        userid: usersTable.user_id,
      })
      .from(usersTable)
      .where(eq(usersTable.email, UserEmail));

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    if (user[0].password !== UserPass) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }
    return {
      success: true,
      message: "User found",
      data: user[0].userid,
    };
  } catch (error) {
    console.error("Drizzel query failed:", error);
    throw error;
  }
}
