---
sidebar_position: 4
---

# Review Every Change

AI-generated code should be reviewed like human-written code.

Sometimes reviewed even more carefully.

A coding agent can produce code that:

- compiles
- looks consistent
- sounds confident
- still contains subtle bugs

## What to review

When checking an AI-generated diff, look for:

- logic that only handles the happy path
- duplicated code that should reuse an existing helper
- missing error handling
- incorrect assumptions about null, empty, or invalid states
- security problems
- changes that are larger than necessary
- edits in files that seem unrelated

## Good review questions

Ask the agent or yourself:

- What edge cases does this miss?
- Does this follow our existing pattern?
- Could this break backward compatibility?
- Is there already a utility that does this?
- What would a reviewer probably question in this diff?
- Can this change be split into smaller commits?

## Watch the diff, not just the answer

The final explanation can sound polished even when the implementation is messy.

The diff is where the truth lives.

Pay attention if the agent:

- edits many files without a clear reason
- rewrites working code for style only
- adds new abstractions too early
- changes tests to fit broken logic
- removes checks instead of fixing the root cause

## Keep changes reviewable

Large AI-generated commits are harder to trust.

Smaller, logical changes are easier to:

- understand
- test
- revert
- review in pull requests

Whenever possible, prefer one clear change at a time.

## Use AI to review AI

A useful trick is to ask the coding agent to review its own work or review the current branch.

That does **not** replace human review, but it can surface:

- missing tests
- naming problems
- suspicious edge cases
- style mismatches
- reviewer questions you should answer in the PR

## Human responsibility still wins

If the code is going to production, a human should understand:

- what changed
- why it changed
- how it was verified
- what risks remain

If you cannot explain those four things, do not merge just because the diff looks tidy.
