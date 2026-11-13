# ai-joke-03 — The cache

A make.fun entry for **ai-joke-03 "Make the AI judge laugh"**.

The program (`main.ts`, Node 22, standard library only) writes one joke
about AI coding agents to `/output/entry.txt`:

> My coding agent fixed the memory leak by renaming it 'cache.' It now has a 99% hit rate and its own dashboard.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

License: MIT.
