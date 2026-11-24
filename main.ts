// The Robot Pickup Line Championship — entry program.
//
// Writes one robot pickup line to entry.txt in MAKEFUN_OUTPUT_DIR
// (default /output). The line is a single line, 1–200 characters,
// self-checked before writing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My battery is at 2% and I'm spending my last charge on you — some connections are worth the shutdown.";

function main(): void {
  const line = LINE.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
