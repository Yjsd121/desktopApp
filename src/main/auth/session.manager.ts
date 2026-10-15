import { randomBytes } from "node:crypto";

export interface AuthUser {
  user_id: string;
  username: string;
  email: string;
  role: string;
}

interface Session {
  user: AuthUser;
  createdAt: number;
}

const sessions = new Map<string, Session>();

const SESSION_DURATION = 8 * 60 * 60 * 1000;

export function createSession(user: AuthUser) {
  const token = randomBytes(32).toString("hex");

  sessions.set(token, {
    user,
    createdAt: Date.now(),
  });

  return token;
}

export function getSession(token: unknown): AuthUser | null {
  if (typeof token !== "string") return null;

  const session = sessions.get(token);

  if (!session) return null;

  if (Date.now() - session.createdAt >= SESSION_DURATION) {
    sessions.delete(token);
    return null;
  }

  return session.user;
}

export function destroySession(token: unknown): boolean {
  if (typeof token !== "string") return false;

  return sessions.delete(token);
}
