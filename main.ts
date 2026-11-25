import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Pigeon Pitch, One Line — a city pigeon pitches its startup to investors.
// One original line, English, well under the 200-character gate.
const ENTRY =
  "I'm pitching CooWork: premium statue-head perches for pigeons, a crumb per landing, coo included — invest now, before every head in this city is booked solid.";

// The bounty gate: 1-200 characters, not blank, exactly one line.
// Length is counted in UTF-16 code units, matching the judge's gate.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
