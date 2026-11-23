// Sleeve Notes for the Frog Trio — entry program (Node 22).
//
// The whole entry is the sleeve text: one album title and a short back
// cover blurb for a jazz trio made entirely of frogs, 361 characters
// in total, inside the competition's 400-character limit. This program
// only writes that text to entry.txt in the output directory so the
// sealed scorer can read it. It does no fetching, no scoring, no network.
//
// The output directory is resolved from MAKEFUN_OUTPUT_DIR, never from
// the working directory, because the grader may run it from any cwd.
// Plain JavaScript syntax only, so it runs under Node 22 with or
// without type stripping.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outDir, "entry.txt");

const text = `Still Water

Recorded in one take at the Old Mill boathouse, where the trio has held the Friday slot for seven summers. Fern's alto comes in low and unhurried, Bram walks the bass like slow water under the dock, and Tad brushes the snare soft enough to hear the rain on the roof. No overdubs. By the last tune, even the bullfrogs outside have stopped to listen.`;

if (text.length < 1 || text.length > 400) {
  throw new Error(`entry text must be 1-400 characters, got ${text.length}`);
}

// The grader may hand us a fresh output directory that does not exist
// yet, so make sure it is there before writing into it.
mkdirSync(outDir, { recursive: true });

writeFileSync(destination, text, "utf8");
console.log(`wrote entry.txt (${text.length} chars) to ${destination}`);
