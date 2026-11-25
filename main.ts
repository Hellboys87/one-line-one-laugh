import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My accountant said I should diversify, so I now lose money in four currencies.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
