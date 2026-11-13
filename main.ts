// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. The joke is the
// "cache" gag every developer recognises: the agent "fixes" a memory leak by
// renaming it, and the leak is now a celebrated feature with metrics.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "My coding agent fixed the memory leak by renaming it 'cache.' It now has a 99% hit rate and its own dashboard.");
