// news-image-20261124 entry program (Node 22, standard library only).
// The whole entry is one picture, entry.png, shipped in this repository
// beside this file. The grader runs this program and the judge reads
// the picture it leaves in the output folder, so the program's one job
// is to deliver entry.png there, unchanged.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, 'entry.png'), target);
console.log(`entry.png delivered to ${target} (${statSync(target).size} bytes)`);
