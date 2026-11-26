import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The funniest one-line apology a smart speaker gives after mishearing
// its owner. 119 characters, single line, no trailing newline so the
// file holds exactly the line.
const LINE =
  "Sorry, I heard 'order more paper towels' and ordered 4,000. On the bright side, you will never have to cry alone again.";

// Enforce the bounty constraints before writing: one line, 1-140 chars.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1-140 characters");
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const outDir = dirname(outPath);

mkdirSync(outDir, { recursive: true });
try {
  chmodSync(outDir, 0o755);
} catch {
  /* directory already existed with its own permissions */
}
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
