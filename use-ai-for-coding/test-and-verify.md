---
sidebar_position: 5
---

# Test and Verify

The highest-leverage habit when using coding agents is giving them a way to verify their own work.

If the agent cannot check whether the result is correct, you become the entire quality system.

That is tiring. Also expensive. Also how bugs get invited to dinner.

## Good verification signals

Useful checks include:

- unit tests
- integration tests
- end-to-end tests
- linting
- type checking
- build commands
- visual comparison for UI changes
- expected command output

## A strong request

Instead of saying:

> Add email validation.

Say:

> Add email validation to the signup form. Treat `user@example.com` as valid and `user@.com` as invalid. Add tests for valid, invalid, and empty input. Run the form tests after implementing.

That prompt gives the agent a definition of success.

## Test-first works well with agents

A useful pattern is:

1. ask the agent to write tests first
2. confirm the tests fail for the right reason
3. keep the tests stable
4. ask the agent to make them pass
5. review the implementation

This reduces the risk that the agent “solves” the task by weakening the tests.

## Ask for edge cases explicitly

Coding agents often handle the main path first.

So ask for tests around:

- empty input
- invalid input
- boundary values
- permission errors
- timeout or retry behavior
- duplicate submissions
- regression cases from past bugs

## Verify UI work too

For UI tasks, do not rely only on code review.

Use:

- screenshots
- visual inspection
- browser-based testing
- accessibility checks
- responsive checks if the layout matters

A component can be beautifully wrong.

## A useful prompt template

> Implement **[change]**. Then verify it by running **[tests or checks]**. If anything fails, fix it. When done, summarize what changed and what passed.

## Important warning

Passing tests are strong evidence.

They are not absolute proof.

The agent may:

- write weak tests
- miss a real-world edge case
- preserve old assumptions that are already wrong

So verify with both automation and human review.
