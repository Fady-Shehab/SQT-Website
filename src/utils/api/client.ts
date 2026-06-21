/**
 * API client configuration and base fetch wrapper.
 *
 * @summary Centralised HTTP client with retry logic for backend cold starts.
 */

const API_BASE = "https://sqt-website-backend-production.up.railway.app/api";

interface RequestOptions extends Omit<RequestInit, "headers"> {
  headers?: Record<string, string>;
  /** Maximum retry attempts for transient failures (default 5) */
  retries?: number;
}

/**
 * Fetch with exponential backoff for backend cold starts.
 * Retries on 5xx errors and network failures.
 *
 * @param url - Full or relative URL to fetch
 * @param options - Fetch options with optional retry count
 * @param attempt - Internal — current attempt number
 */
export async function fetchWithRetry(
  url: string,
  options: RequestOptions = {},
  attempt: number = 1
): Promise<Response> {
  const maxRetries = options.retries ?? 5;

  try {
    const res = await fetch(`${API_BASE}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (res.ok) return res;
    if (res.status < 500) return res;

    if (attempt < maxRetries) {
      const delay = Math.min(2000 * Math.pow(2, attempt - 1), 10000);
      await new Promise((r) => setTimeout(r, delay));
      return fetchWithRetry(url, options, attempt + 1);
    }

    return res;
  } catch {
    if (attempt < maxRetries) {
      const delay = Math.min(2000 * Math.pow(2, attempt - 1), 10000);
      await new Promise((r) => setTimeout(r, delay));
      return fetchWithRetry(url, options, attempt + 1);
    }
    throw new Error("تعذر الاتصال بالخادم بعد عدة محاولات");
  }
}

/**
 * GET request helper.
 *
 * @param url - API endpoint path (e.g. `/users`)
 * @param options - Additional fetch options
 */
export async function get<T = unknown>(url: string, options: RequestOptions = {}): Promise<T> {
  const res = await fetchWithRetry(url, { ...options, method: "GET" });
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`);
  return res.json();
}

/**
 * POST request helper.
 *
 * @param url - API endpoint path
 * @param body - Request body
 * @param options - Additional fetch options
 */
export async function post<T = unknown>(
  url: string,
  body: unknown,
  options: RequestOptions = {}
): Promise<T> {
  const res = await fetchWithRetry(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${url} failed: ${res.status}`);
  return res.json();
}

/**
 * PATCH request helper.
 *
 * @param url - API endpoint path
 * @param body - Request body
 * @param options - Additional fetch options
 */
export async function patch<T = unknown>(
  url: string,
  body: unknown,
  options: RequestOptions = {}
): Promise<T> {
  const res = await fetchWithRetry(url, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`PATCH ${url} failed: ${res.status}`);
  return res.json();
}
