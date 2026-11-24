// The Robot Pickup Line Championship — entry program.
// Writes one pickup line to /output/entry.txt. Deterministic: the same
// bytes on every run. Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I don't have a heart, just a cooling fan — but it spins twice as fast whenever you walk by.";

// Self-check the gate before writing: the entry must be a single line of
// UTF-8 text, 1 to 200 characters, not only white space. Fail loudly
// instead of handing the grader a bad file. The 91-character line clears
// it, with room to spare, and holds no newline by construction.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`line fails the 1-200 character gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
