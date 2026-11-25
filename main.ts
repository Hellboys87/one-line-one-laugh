import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My accountant told me to diversify, so now I lose money in four currencies and a coin named after a dog.";

// A one-line entry must stay one line and under 200 characters.
if (line.length > 200 || line.includes("\n")) {
  throw new Error(
    `entry line invalid: ${line.length} chars, single line required`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
