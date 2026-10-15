import { getbyEmail, getInfoAuth } from "./user.repository";
import { createSession } from "../auth/session.manager";

export async function Login(email: string, pass: string) {
  try {
    const user = await getbyEmail(email, pass);

    if (!user.data) {
      return {
        ok: false,
        message: "User not foud",
      };
    }
    const userInfo = await getInfoAuth(user.data);

    if (!userInfo.data) {
      return;
    }
    const token = createSession(userInfo.data);

    return {
      success: true,
      message: "Login Success",
      data: token,
    };
  } catch (err) {
    console.log(err);
  }
}
