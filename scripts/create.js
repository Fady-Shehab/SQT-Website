#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync, appendFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(q) {
  return new Promise((r) => rl.question(q, r));
}

// ─── Helpers ──────────────────────────────────────────────
function toPascal(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}

function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function toCamel(str) {
  const p = toPascal(str);
  return p.charAt(0).toLowerCase() + p.slice(1);
}

// ─── Commands ──────────────────────────────────────────────
function help() {
  console.log(`
  Usage
    yarn create                    Interactive mode
    yarn create:help               Show this help

  Commands
    yarn create:string <name> [en] [ar]
      Add a translation string to both language files.
      Omit a value or pass "null" to skip a language.

    yarn create:component <name>
      Scaffold a component with barrel export.

    yarn create:page <name>
      Scaffold a page with barrel export.

  Examples
    yarn create:string welcome "Welcome" "مرحبا"
    yarn create:string onlyAr null "عربي فقط"
    yarn create:string onlyEn "English only" null
    yarn create:component Button
    yarn create:page About
`);
}

function createString(name, enVal, arVal) {
  const arPath = join(root, "src", "utils", "strings", "ar.json");
  const enPath = join(root, "src", "utils", "strings", "en.json");

  if (!existsSync(arPath)) {
    console.error("ar.json not found at", arPath);
    process.exit(1);
  }
  if (!existsSync(enPath)) {
    console.error("en.json not found at", enPath);
    process.exit(1);
  }

  const key = toCamel(name);
  if (!key) {
    console.error("Invalid string name");
    process.exit(1);
  }

  const addToJson = (filePath, value) => {
    if (!value || value === "null") return;
    const data = JSON.parse(readFileSync(filePath, "utf8"));
    data[key] = value;
    writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  };

  if (enVal && enVal !== "null") addToJson(enPath, enVal);
  if (arVal && arVal !== "null") addToJson(arPath, arVal);

  const langs = [];
  if (enVal && enVal !== "null") langs.push("en");
  if (arVal && arVal !== "null") langs.push("ar");
  console.log(`✅ Added "${key}" to [${langs.join(", ")}]`);
}

function createComponent(name) {
  const cName = toPascal(name);
  if (!cName) {
    console.error("Invalid component name");
    process.exit(1);
  }
  const dir = join(root, "src", "components", cName);
  const barrel = join(root, "src", "components", "index.ts");

  if (existsSync(dir)) {
    console.error(`Component "${cName}" already exists`);
    process.exit(1);
  }

  mkdirSync(dir, { recursive: true });

  const tsx = [
    `const ${cName} = () => {`,
    `  return <div className="${toKebab(cName)}">{/* ${cName} */}</div>;`,
    `};`,
    ``,
    `export default ${cName};`,
  ].join("\n");
  writeFileSync(join(dir, `${cName}.tsx`), tsx + "\n", "utf8");

  const index = `export { default } from './${cName}';\n`;
  writeFileSync(join(dir, "index.ts"), index, "utf8");

  let barrelContent = existsSync(barrel) ? readFileSync(barrel, "utf8") : "";
  const line = `export { default as ${cName} } from './${cName}';`;
  if (!barrelContent.includes(line)) {
    appendFileSync(barrel, `\n${line}`, "utf8");
  }

  console.log(`✅ Component "${cName}" created`);
}

function createPage(name) {
  const pName = toPascal(name);
  if (!pName) {
    console.error("Invalid page name");
    process.exit(1);
  }
  const dir = join(root, "src", "pages", pName);
  const barrel = join(root, "src", "pages", "index.ts");
  const routePath = "/" + toKebab(pName);

  if (existsSync(dir)) {
    console.error(`Page "${pName}" already exists`);
    process.exit(1);
  }

  mkdirSync(dir, { recursive: true });

  const page = [
    `export default function ${pName}Page() {`,
    `  return (`,
    `    <main>`,
    `      <h1>${pName}</h1>`,
    `    </main>`,
    `  );`,
    `}`,
  ].join("\n");
  writeFileSync(join(dir, `${pName}.tsx`), page + "\n", "utf8");

  const index = `export { default as ${pName}Page } from './${pName}';\n`;
  writeFileSync(join(dir, "index.ts"), index, "utf8");

  let barrelContent = existsSync(barrel) ? readFileSync(barrel, "utf8") : "";
  const line = `export { ${pName}Page } from './${pName}';`;
  if (!barrelContent.includes(line)) {
    appendFileSync(barrel, `\n${line}`, "utf8");
  }

  console.log(`✅ Page "${pName}" created — add a <Route path="${routePath}" element={<${pName}Page />} /> in src/App.tsx`);
}

// ─── Dispatch ──────────────────────────────────────────────
const sub = process.argv[2];
const subMap = {
  string: "createString",
  component: "createComponent",
  page: "createPage",
  help: "help",
  "--help": "help",
  "-h": "help",
};

if (sub && subMap[sub]) {
  const fn = subMap[sub];
  if (fn === "help") { help(); process.exit(0); }
  eval(`${fn}("${process.argv.slice(3).join('","')}")`);
  process.exit(0);
}

if (sub === "string") {
  createString(process.argv[3], process.argv[4], process.argv[5]);
  process.exit(0);
}

// Interactive mode
(async () => {
  console.log("\n  ╭─────────────────────────────╮");
  console.log("  │  What would you like to create?  │");
  console.log("  ╰─────────────────────────────╯\n");
  console.log("  1)  Component");
  console.log("  2)  Page");
  console.log("  3)  String (translation)");
  console.log("  4)  Help\n");

  const ans = (await ask("  Choice [1-4]: ")).trim();
  if (ans === "1") {
    const n = (await ask("  Component name: ")).trim();
    if (n) createComponent(n);
  } else if (ans === "2") {
    const n = (await ask("  Page name: ")).trim();
    if (n) createPage(n);
  } else if (ans === "3") {
    const k = (await ask("  String key (camelCase): ")).trim();
    const en = (await ask("  English value (or null): ")).trim();
    const ar = (await ask("  Arabic value (or null): ")).trim();
    if (k) createString(k, en, ar);
  } else {
    help();
  }
  rl.close();
})();
