/**
 * Authentication service.
 *
 * @summary Handles login, registration, token management, and session state.
 */

const API_BASE = "https://sqt-website-backend-production.up.railway.app/api";
const TOKEN_KEY = "sharq-token";
const USER_KEY = "sharq-user";

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

/** Credentials for login */
export interface LoginPayload {
  email: string;
  password: string;
  remember?: boolean;
}

/** Registration data */
export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

/** Auth API response shape */
export interface AuthResponse {
  token: string;
  user: StoredUser;
}

/**
 * Store auth token and user data.
 * Uses `localStorage` if remember-me, otherwise `sessionStorage`.
 *
 * @param token - JWT token
 * @param user - User object
 * @param remember - Whether to persist across sessions
 */
export function storeSession(token: string, user: StoredUser, remember = false): void {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem(TOKEN_KEY, token);
  storage.setItem(USER_KEY, JSON.stringify(user));
}

/**
 * Clear all stored auth data from both storage types.
 */
export function clearSession(): void {
  [localStorage, sessionStorage].forEach((s) => {
    s.removeItem(TOKEN_KEY);
    s.removeItem(USER_KEY);
  });
}

/**
 * Retrieve the stored auth token.
 */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
}

/**
 * Retrieve the stored user object.
 */
export function getStoredUser(): StoredUser | null {
  const raw =
    localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
}

/**
 * Check if a user is currently logged in.
 */
export function isLoggedIn(): boolean {
  return !!getToken() && !!getStoredUser();
}

/**
 * Login with email and password.
 *
 * @param payload - Login credentials
 * @returns Auth response with token and user
 */
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: payload.email, password: payload.password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "فشل تسجيل الدخول");
  }

  const data: AuthResponse = await res.json();
  storeSession(data.token, data.user, payload.remember);
  return data;
}

/**
 * Register a new user account.
 *
 * @param payload - Registration data
 * @returns Auth response with token and user
 */
export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "فشل إنشاء الحساب");
  }

  const data: AuthResponse = await res.json();
  storeSession(data.token, data.user, false);
  return data;
}

/**
 * Logout — clears session and redirects to home.
 */
export function logout(): void {
  clearSession();
  window.location.href = "/";
}
