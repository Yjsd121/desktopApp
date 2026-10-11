export async function getAllusers() {
  return;
}
export async function getbyEmail(UserEmail: string, UserPass: string) {
  console.log("Searching user:", UserEmail);
  try {
    const user = {
      email: "yadetjsd@gmail.com",
      password: "yaderjsd348d",
    };

    if (!user) {
      return { ok: false, token: "malo" };
    }

    if (user.password !== UserPass) {
      return { ok: false, token: "malo" };
    }

    return { ok: true, token: "bien" };
  } catch (error) {
    console.error("Prisma query failed:", error);
    throw error;
  }
}
