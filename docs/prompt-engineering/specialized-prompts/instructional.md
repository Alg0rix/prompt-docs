# Instructional/System Prompts

Instructional or system prompts provide explicit instructions or system-level messages to guide the language model's behavior, tone, or output format. These prompts are essential for setting boundaries, defining tasks, and ensuring the model responds in a controlled and predictable manner.

## Key Concepts

- **Explicit Instructions**: Directly tell the model what to do, how to behave, or what format to use.
- **System Messages**: Set the overall context, rules, or persona for the model.
- **Behavioral Control**: Influence the model’s tone, verbosity, and style.
- **Task Framing**: Clearly define the scope and requirements of the task.

## Best Practices

1. **Be Direct and Unambiguous**
   - Use clear, concise language.
   - Avoid vague or open-ended instructions.
   - Specify exactly what you want the model to do.

2. **Set Boundaries and Constraints**
   - Define what the model should and should not do.
   - Include formatting, length, or style requirements.
   - State any limitations or exclusions.

3. **Use System-level Framing**
   - Start with a system message or instruction that sets the context.
   - Reinforce the desired behavior throughout the prompt.

4. **Combine with Examples (if needed)**
   - Pair instructions with examples for clarity.
   - Use input-output pairs to demonstrate expectations.

## Examples

### Basic Instructional Prompt
```
Summarize the following article in three sentences or less.
Article: [Insert article text here]
```

### System Message Example
```
You are a helpful and concise assistant. Always answer in bullet points.
Question: What are the main causes of climate change?
```

### Formatting Constraint Example
```
List three benefits of regular exercise. Respond in a numbered list.
```

### Behavioral Control Example
```
Respond to all questions in a formal and professional tone.
Question: How should I prepare for a job interview?
```

## Common Pitfalls

1. **Vague Instructions**
   - Not specifying the desired output format or style.
   - Leaving room for interpretation that leads to inconsistent results.

2. **Overly Complex or Contradictory Instructions**
   - Giving too many or conflicting requirements.
   - Making the prompt hard for the model to follow.

3. **Lack of Context**
   - Failing to provide necessary background or task framing.
   - Assuming the model knows implicit expectations.

4. **Ignoring Model Limitations**
   - Expecting the model to follow instructions beyond its capabilities.
   - Not testing for edge cases or ambiguous scenarios.

## Use Cases

1. **Task Definition**
   - Summarization
   - Paraphrasing
   - Data extraction

2. **Behavioral Control**
   - Tone and style adjustment
   - Formality or informality
   - Length constraints

3. **Output Formatting**
   - Lists, tables, or structured data
   - Code generation with specific style
   - Consistent response templates

4. **System-level Guidance**
   - Setting the model’s persona or role
   - Defining boundaries for safe or ethical responses

## When to Use Instructional/System Prompts

Instructional/system prompts are ideal when:
- You need precise control over the model’s output or behavior.
- The task requires a specific format, tone, or style.
- You want to set boundaries or rules for the model.
- Consistency and predictability are important.

## When to Consider Alternatives

Consider other techniques when:
- The task benefits from demonstration (use one-shot or few-shot).
- The model consistently misinterprets instructions (add examples or context).
- The output requires creativity or open-ended responses (relax constraints).

## Tips for Optimization

1. **Iterative Testing**
   - Refine instructions based on model outputs.
   - Test with different phrasings for clarity.

2. **Combine with Examples**
   - Use examples to reinforce instructions.
   - Show both correct and incorrect outputs if needed.

3. **Monitor for Drift**
   - In multi-turn conversations, restate instructions as needed.
   - Remind the model of constraints if it deviates.

4. **Validate Outputs**
   - Check for compliance with instructions.
   - Revise prompts if results are inconsistent or off-target.
