---
sidebar_position: 8
---

# Tool-Specific Notes

The exact buttons and commands differ across products, but the best practices are remarkably similar.

## GitHub Copilot

GitHub’s official guidance for Copilot Chat emphasizes:

- start broad, then get specific
- give examples
- break complex tasks into smaller tasks
- avoid ambiguity
- point Copilot at relevant code
- keep history relevant by starting new threads when the task changes

That means Copilot usually works better when you:

- open the relevant files
- highlight the code you want help with
- ask focused questions
- refine the prompt instead of repeating it unchanged

Useful official reading:

- [Prompt engineering for GitHub Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
- [Quickstart for GitHub Copilot](https://docs.github.com/en/copilot/get-started/quickstart)
- [About agentic memory for GitHub Copilot](https://docs.github.com/en/copilot/concepts/agents/copilot-memory)

## Cursor

Cursor’s docs strongly emphasize:

- planning before implementation for larger work
- keeping diffs reviewable
- reviewing and testing AI-generated code
- using project rules for reusable guidance
- letting the agent verify work with tests, linting, and type checks

Useful official reading:

- [Developing features](https://cursor.com/learn/creating-features)
- [Reviewing and testing code](https://cursor.com/learn/reviewing-testing)
- [Rules](https://cursor.com/docs/rules)

## Claude Code

Anthropic’s Claude Code docs repeatedly stress:

- give the agent a way to verify its work
- explore first, then plan, then code
- provide specific context with files, screenshots, or commands
- keep persistent instructions concise
- manage context aggressively in long sessions
- use subagents or parallel sessions for cleaner workflows

Useful official reading:

- [Best Practices for Claude Code](https://code.claude.com/docs/en/best-practices)
- [Common workflows](https://code.claude.com/docs/en/common-workflows)
- [How Claude remembers your project](https://code.claude.com/docs/en/memory)

## What these tools agree on

Across Copilot, Cursor, Claude Code, and other agent-style tools, the shared advice is:

- be clear
- be specific
- scope the task
- give context
- plan bigger work
- verify results
- review the diff
- keep reusable instructions concise
- reset context when the conversation gets messy

If you learn those habits, they transfer well between tools.

The interface changes.

The discipline does not.
