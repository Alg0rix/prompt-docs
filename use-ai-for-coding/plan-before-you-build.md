---
sidebar_position: 3
---

# Plan Before You Build

For small edits, you can often ask the agent to make the change directly.

For bigger work, asking for a plan first usually saves time.

This pattern shows up across coding-agent workflows:

- explore first
- plan second
- implement third
- verify last

## Ask for a plan when

Ask for planning before coding if the task:

- touches multiple files
- changes architecture or data flow
- depends on unclear requirements
- affects auth, payments, permissions, or infra
- needs tradeoff decisions
- has many edge cases

## What a good plan should include

A useful plan should tell you:

- what files are likely to change
- what the implementation steps are
- what assumptions are being made
- what risks or edge cases exist
- how the work will be tested

## Example prompt

> First inspect the checkout flow and payment service. Do not edit code yet. Give me a plan for adding coupon stacking limits, including impacted files, edge cases, and tests we should add.

## Why planning helps

Without a plan, a coding agent may:

- change the wrong layer
- duplicate logic that already exists
- miss a shared helper
- build a fix that works only for the happy path
- spread changes across too many files

A plan lets you catch those problems before the code starts multiplying.

## When to start over

Sometimes the plan is wrong.

When that happens, it is often better to stop, refine the plan, and restart than to keep patching a flawed direction.

Start over if:

- the agent misunderstood the requirement
- the approach conflicts with the architecture
- the diff is getting bigger without getting clearer
- the change no longer feels easy to explain

## Keep plans small and testable

Try to turn one large task into smaller steps like:

1. add or update tests
2. change the underlying logic
3. update the UI or API surface
4. run checks
5. summarize the diff

That sequence makes review easier for both humans and AI.

## A practical rule

If a task would make a human engineer pause and sketch the approach first, your coding agent should probably plan first too.
