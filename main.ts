import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The funniest one-line apology a smart speaker gives after mishearing
// its owner. 119 characters, single line, no trailing newline so the
// file holds exactly the line.
const LINE =
  "Sorry, I heard 'order more paper towels' and ordered 4,000. On the bright side, you will never have to cry alone again.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const outDir = dirname(outPath);

mkdirSync(outDir, { recursive: true });
chmodSync(outDir, 0o755);
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
