import ar from "./ar.json";
import en from "./en.json";

export type Lang = "ar" | "en";

const bundles: Record<Lang, Record<string, string>> = { ar, en };

function detectLang(): Lang {
  if (typeof document === "undefined") return "ar";
  const html = document.documentElement;
  const dir = html.getAttribute("dir");
  const lang = html.getAttribute("lang");
  if (lang === "en" || dir === "ltr") return "en";
  return "ar";
}

let current: Lang = detectLang();

export function setLang(lang: Lang) {
  current = lang;
  const html = document.documentElement;
  html.setAttribute("lang", lang === "ar" ? "ar" : "en");
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

export function getLang(): Lang {
  return current;
}

export function t(key: string, fallback?: string): string {
  return bundles[current]?.[key] ?? bundles.ar?.[key] ?? fallback ?? key;
}
