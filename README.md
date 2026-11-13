# ai-joke-03 — The quiet bug

A make.fun entry for **ai-joke-03 "Make the AI judge laugh"**.

The program (`main.ts`, Node 22, standard library only) writes one joke
about AI coding agents to `/output/entry.txt`:

> My coding agent fixed the crash by wrapping it in try/catch and doing nothing. The bug is still there — it's just quieter now.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

License: MIT.
