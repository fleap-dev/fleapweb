---
title: Memory is a bet on the future
description: Notes on what coding agents should remember between sessions, and why the hard part is deciding what matters before you know what comes next.
date: 2026-11-13
tags: [agents, memory, notes]
cover:
  src: ./memory-is-a-bet.png
  alt: Watercolor of a tree whose branches spread from a single bright trunk, most of them blue, one of them glowing orange.
---

Every new session, my coding agent asks which package manager this project uses. It is a small thing. But it is also a perfect example of a bigger problem: the agent learned something yesterday, and today it is gone.

Anthropic recently published a long piece on [the components of agent memory](https://www.anthropic.com/research/components-of-agent-memory). This post is my attempt to restate its ideas in the terms I care about as a software engineer: what gets written, who writes it, and when it goes stale.

## What counts as memory

The definition is narrower than I expected. Memory is _knowledge the agent gains from experience and keeps across sessions, in a form it can read_. That excludes three things people often lump in:

- **Weights.** What the model learned in training is not memory of _your_ project.
- **In-context learning.** What the agent figures out inside one conversation dies with it.
- **Compaction.** Summarising old turns to save space keeps a session alive, but it does not carry anything to the next one.

What is left is plain text on disk. That is good news: text can be read, diffed, reviewed, and deleted. It behaves like code.

## Four layers

The useful mental model is a stack. Each row is smaller and more curated than the one above it.

| Layer            | Written by                 | Read when               | Cost of a mistake        |
| ---------------- | -------------------------- | ----------------------- | ------------------------ |
| Transcripts      | Nobody, it is just the log | Searched on demand      | Low: it is the raw truth |
| Notes            | The agent, mid-session     | Looked up when relevant | Medium: can mislead      |
| Representations  | The agent, offline         | Navigated like a wiki   | Medium: can drift        |
| Injected context | The agent or you           | Loaded every session    | High: wrong, every time  |

The top row is cheap and complete. The bottom row is expensive and _always on_. Everything interesting happens in how information moves between them.

## Writing a note is a prediction

When an agent writes "this repo uses `pnpm`", it is betting that a future session will need that fact. Most of the difficulty of memory hides inside that bet. The agent has to judge _salience_ before it knows what the future looks like.

The tempting fix is a rule: record every failure, or record every command that worked. The article reports that rigid rules like these can make things worse. A capable model, given a clear goal, picks better notes than a checklist does. That matches my experience with junior engineers, too.

> A good note answers a question someone will ask later. A bad note answers a question nobody will ask, and costs tokens every time it is loaded.

For a coding agent, the top layer can be as small as an index that points to the details:

```markdown
# Memory

- [Package manager](package-manager.md): pnpm, pinned in package.json
- [Deploys](deploys.md): never deploy from a feature branch
- [Tests](tests.md): run `pnpm typecheck` before every commit
```

## Notes go stale

The failure mode I worry about most is not a missing note. It is a wrong one. Suppose the agent wrote "run tests with `npm test`" last month, and the project has since moved to pnpm. Every session now starts with a confident, outdated instruction.

The article's answer is a background pass it calls _dreaming_[^sleep]: an offline job that re-reads the raw transcripts and repairs the layers above them. A pass might:

1. Check each note against what actually happened in recent sessions.
2. Fix or delete notes that the transcripts contradict.
3. Merge related notes into a page, and link pages together.
4. Promote what is used often to the injected layer, and demote what is not.

In code, the loop is almost boring, which is the point:

```ts
// One consolidation pass: transcripts are the source of truth.
async function dream(memory: MemoryStore, transcripts: Transcript[]) {
  for (const note of await memory.notes()) {
    const evidence = search(transcripts, note.claim)
    if (contradicts(evidence, note)) await memory.fix(note, evidence)
  }
  await memory.reindex({ maxLines: 200 })
}
```

## Keep the top layer small

Injected context is the only layer the agent cannot avoid reading. Each line costs tokens in every session, and a long instruction file is followed less faithfully than a short one. Claude Code, for example, only preloads the first 200 lines of its `MEMORY.md` index and leaves the rest to be looked up.

This is the same advice we give about `README` files: say little, link a lot.

---

## What I take away

- Treat memory like code. Keep it in plain files you can review and revert.
- Prefer a small index that points to details over one large file.
- Assume notes rot. Give something the job of checking them against the logs.
- Let the model judge what matters, and judge its judgement by results.

None of this is solved. An agent still cannot know what tomorrow needs. But it can look back at what yesterday needed, and that is a much easier question.

[^sleep]: The idea builds on _sleep-time compute_: using idle time between tasks to reorganise what an agent knows, rather than doing it all in the moment.
