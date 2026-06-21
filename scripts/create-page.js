#!/usr/bin/env node
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  appendFileSync,
  readFileSync,
} from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const pagesDir = join(__dirname, "..", "src", "pages");
const barrelFile = join(pagesDir, "index.ts");

// Get page name from args
const rawName = process.argv[2];

if (!rawName) {
  console.error("Please provide a page name. Usage: yarn create:page MyPage");
  process.exit(1);
}

// Convert to PascalCase
function toPascalCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}

const pageName = toPascalCase(rawName);
const pageDir = join(pagesDir, pageName);

console.log(`Creating page ${pageName}...`);

// Create directory
if (!existsSync(pageDir)) {
  mkdirSync(pageDir);
}

// 1. page.tsx
const pageContent = `import React from 'react';

const ${pageName}: React.FC = () => {
  return (
    <main>
      <h1>${pageName}</h1>
    </main>
  );
};

export default ${pageName};
`;
writeFileSync(join(pageDir, "page.tsx"), pageContent, "utf8");

// 2. index.ts
const indexContent = `export { default as ${pageName}Page } from './page';
`;
writeFileSync(join(pageDir, "index.ts"), indexContent, "utf8");

// 3. Update barrel file if it doesn't already have the export
let barrelContent = "";
if (existsSync(barrelFile)) {
  barrelContent = readFileSync(barrelFile, "utf8");
}
const exportLine = `export { ${pageName}Page } from './${pageName}';`;
if (!barrelContent.includes(exportLine)) {
  appendFileSync(barrelFile, `\n${exportLine}`, "utf8");
}

console.log(
  `✅ Page ${pageName} created successfully! Remember to add a route in src/App.tsx`,
);
