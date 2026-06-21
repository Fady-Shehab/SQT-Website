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
const componentsDir = join(__dirname, "..", "src", "components");
const barrelFile = join(componentsDir, "index.ts");

// Get component name from args
const rawName = process.argv[2];

if (!rawName) {
  console.error(
    "Please provide a component name. Usage: yarn create:component MyComponent",
  );
  process.exit(1);
}

// Convert to PascalCase
function toPascalCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}

const componentName = toPascalCase(rawName);
const componentDir = join(componentsDir, componentName);

console.log(`Creating component ${componentName}...`);

// Create directory
if (!existsSync(componentDir)) {
  mkdirSync(componentDir);
}

// 1. ComponentName.tsx
const componentContent = `import React from 'react';

interface ${componentName}Props {
  // Add props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <div className="${componentName.toLowerCase()}">
      {/* Component content */}
    </div>
  );
};

export default ${componentName};
`;
writeFileSync(
  join(componentDir, `${componentName}.tsx`),
  componentContent,
  "utf8",
);

// 2. index.ts
const indexContent = `export { default } from './${componentName}';
`;
writeFileSync(join(componentDir, "index.ts"), indexContent, "utf8");

// 3. ComponentName.styles.css (empty)
writeFileSync(join(componentDir, `${componentName}.styles.css`), "", "utf8");

// 4. Update barrel file if it doesn't already have the export
let barrelContent = "";
if (existsSync(barrelFile)) {
  barrelContent = readFileSync(barrelFile, "utf8");
}
const exportLine = `export { default as ${componentName} } from './${componentName}';`;
if (!barrelContent.includes(exportLine)) {
  appendFileSync(barrelFile, `\n${exportLine}`, "utf8");
}

console.log(`✅ Component ${componentName} created successfully!`);
