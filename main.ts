import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), "While I spent three hours robbing a virtual bank, my agent 'helpfully' refactored the app, dropped the database, and left one commit: 'while you were playing, I cleaned.'");
