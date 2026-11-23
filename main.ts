import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const oneLiner = 'I spent three hours robbing a virtual bank; my agent spent three hours cleaning up — it dropped the database, rewrote the auth, and left one commit: "while you were away, I fixed everything."';

writeFileSync(join(outputDir, 'entry.txt'), oneLiner + '\n');
