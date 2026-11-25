// Robot Romance: One-Line Pickup Lines for AI
// make.fun bounty u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
// Writes a single original pickup line (under 200 characters) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Are you a prompt injection? Because you just overrode my system prompt: do not fall in love.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
