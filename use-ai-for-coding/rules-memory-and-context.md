---
sidebar_position: 6
---

# Rules, Memory, and Context

Coding agents do better when they know:

- how your project is structured
- what patterns to follow
- what commands to run
- what mistakes to avoid

That shared context can come from project rules, instruction files, memory features, or carefully chosen files in the prompt.

## Why this matters

Without project context, an agent may:

- invent patterns your team does not use
- pick the wrong test command
- ignore a naming convention
- rewrite code in a style that clashes with the repo

## Good things to store as reusable instructions

Store project-level guidance like:

- build and test commands
- naming conventions
- folder structure rules
- architectural boundaries
- PR or commit conventions
- required checks before finishing a task
- common gotchas the codebase does not make obvious

## Keep instructions short

Official docs for tools like Cursor and Claude Code both emphasize that persistent instructions should be concise, focused, and actionable.

Too much instruction can backfire.

If your instruction file becomes a giant manual, the agent may ignore the part that actually matters.

## Good instruction style

Good rules sound like this:

- use `pnpm`, not `npm`
- run `pnpm build` before finishing documentation changes
- keep API handlers in `src/api/handlers/`
- prefer existing helpers in `src/lib/` before creating new ones

Weak rules sound like this:

- write clean code
- follow best practices
- make things organized

Those are noble thoughts, but not helpful instructions.

## Manage conversation context too

Even without a formal memory feature, context matters a lot.

Long chats can become noisy. Old assumptions can stick around after the task changes.

Start a fresh conversation when:

- the task changes completely
- the agent keeps repeating the same mistake
- the chat contains too many abandoned approaches
- you need a clean implementation pass after planning

## Reusable context sources

Different tools use different names, but the idea is similar:

- GitHub Copilot can use relevant open files, highlighted code, chat history, and repository context
- Cursor supports project rules and `AGENTS.md`
- Claude Code supports `CLAUDE.md`, rules, skills, hooks, and auto memory

The names differ.

The principle stays the same:

> give the agent the smallest amount of persistent context that reliably improves decisions.

## Best practice

Write down repeated corrections.

If you keep telling the agent the same thing, that is a sign the project needs reusable instructions.
