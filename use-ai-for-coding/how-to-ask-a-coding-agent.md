---
sidebar_position: 2
---

# How to Ask a Coding Agent

Better results usually come from better context, not fancier wording.

Official guidance from GitHub, Cursor, and Anthropic all points in the same direction:

- start with the goal
- get specific
- point to relevant files
- break large tasks down
- iterate when needed

## The 5 things to include

1. **the goal**  
   What do you want to change?
2. **the scope**  
   Which file, module, route, or feature matters?
3. **the constraints**  
   What libraries, patterns, or rules should it follow?
4. **the output type**  
   Do you want a plan, explanation, patch, tests, review, or PR summary?
5. **the verification**  
   What checks should pass when it is done?

## Weak prompt

> Fix the auth bug.

That sounds simple, but it leaves too much open:

- which auth bug?
- where is it happening?
- how should it be fixed?
- how will we know it is actually fixed?

## Better prompt

> Users get logged out after refresh when the access token expires. Inspect the auth flow in `src/auth/` and `src/middleware/`. Explain the root cause first, then propose a small fix. Add a regression test and run the auth-related tests.

That prompt gives the agent:

- the symptom
- the likely area
- the expected workflow
- the verification standard

## Good prompt templates

### Understand code

> Explain how **[feature or module]** works. Focus on **[files or flow]**. End with the most important risks or confusing parts.

### Plan a feature

> I want to build **[feature]**. First inspect the existing patterns in **[files or folders]**. Then give me a step-by-step plan, edge cases, and the files likely to change.

### Fix a bug

> I am seeing **[error or symptom]** when **[reproduction step]**. Check **[likely files]**. Find the root cause, write a failing test if possible, fix it, and verify the relevant tests pass.

### Refactor safely

> Refactor **[file or module]** to **[goal]** without changing behavior. Follow the existing patterns in **[reference files]**. Make the refactor in small steps and run the relevant tests.

### Write tests

> Add tests for **[function, component, or flow]**. Match the style used in **[test file or folder]**. Include edge cases for **[list them]**.

## Helpful habits

- point at real files when possible
- name the framework or library if it matters
- include example input and output
- say what not to change
- ask for a plan first when the task is large

## Avoid this

Try not to rely on prompts like:

- “make it better”
- “clean this up”
- “fix everything”
- “refactor the app”

Those prompts are magnets for expensive surprises.

## If the first answer is weak

Do not throw the whole task away immediately.

Instead, tighten the request:

- clarify the scope
- add missing files
- add an example
- ask for a smaller step
- ask for the reasoning behind the proposed change

Good prompting is usually iterative, not magical.
