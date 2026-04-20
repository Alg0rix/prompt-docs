---
sidebar_position: 1
---

# Use AI for Coding

AI coding tools can help you:

- understand unfamiliar code
- plan features
- fix bugs
- write tests
- refactor old code
- draft docs and pull requests

Tools like GitHub Copilot, Cursor, Claude Code, and similar coding agents are most useful when you treat them like fast junior-to-mid teammates with great stamina and imperfect judgment.

They can move quickly. They can also move confidently in the wrong direction.

That means your goal is not just to get code fast.

Your goal is to get **reviewable, testable, correct** code faster.

## What a coding agent is good at

Coding agents are especially helpful for:

- exploring a codebase
- finding relevant files
- proposing implementation plans
- generating boilerplate
- writing tests from existing patterns
- making repetitive refactors
- summarizing diffs and PRs
- spotting likely bugs or edge cases

## What a coding agent is bad at

Be more careful when the task involves:

- security-sensitive changes
- money, billing, auth, or permissions
- database migrations with real data risk
- hidden business rules not written down
- large architectural changes without a plan
- code that “looks right” but is hard to verify

## The best mindset

Use the agent as:

- a researcher
- a drafter
- a code assistant
- a reviewer
- a test helper

Do **not** use it as an unchecked autopilot.

A strong workflow usually looks like this:

1. explain the goal clearly
2. give the right files and context
3. ask for a plan for larger tasks
4. implement in small steps
5. review the diff
6. run tests and checks
7. fix anything suspicious before merging

## A simple formula

Use this pattern when starting a task:

> Goal: **[what you want]**  
> Context: **[relevant files, constraints, patterns]**  
> Output: **[plan / patch / explanation / tests]**  
> Verification: **[what should pass when done]**

Example:

> Goal: add rate limiting to login attempts.  
> Context: follow the existing auth middleware pattern in `src/auth/`. Reuse existing Redis utilities if possible.  
> Output: first give me a short plan, then implement it.  
> Verification: add tests for lockout behavior and run the auth test suite.

## The big rule

If you cannot explain how the change will be verified, the task is probably too vague.

That is where coding agents usually become chaos gremlins.

## What to read next

- learn how to prompt a coding agent clearly
- learn when to ask for a plan first
- learn how to review and verify AI-generated code
- learn how rules, memory, and context affect results
