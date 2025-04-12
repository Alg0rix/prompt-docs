# One-shot Prompts

One-shot prompting is a technique where you provide a single example along with your instructions to guide the AI model. The model uses this example to better understand the expected output, format, or reasoning process for the task at hand.

## Key Concepts

- **Single Example Provided**: The prompt includes one input-output pair as a demonstration.
- **Pattern Induction**: The model infers the desired pattern or format from the example.
- **Bridging Zero-shot and Few-shot**: Offers more guidance than zero-shot, but less than few-shot.
- **Task Clarification**: The example helps clarify ambiguous instructions.

## Best Practices

1. **Choose a Representative Example**
   - Select an example that clearly demonstrates the desired output.
   - Avoid edge cases or ambiguous scenarios for the single example.
   - Ensure the example is relevant to the task.

2. **Align Example with Task**
   - Match the example’s format and complexity to the actual task.
   - Use realistic and contextually appropriate content.

3. **Explicit Instructions**
   - Combine the example with clear, direct instructions.
   - Specify any constraints or formatting requirements.

4. **Maintain Consistency**
   - Ensure the example and instructions do not contradict each other.
   - Use the same structure in both the example and the task prompt.

## Examples

### Basic Example
```
Classify the following review as positive, negative, or neutral.

Example:
Review: "The product exceeded my expectations."
Sentiment: Positive

Now classify this review:
Review: "The delivery was late and the packaging was damaged."
Sentiment:
```

### Structured Example
```
Extract the city and date from the following sentence.

Example:
Sentence: "I will visit Paris on June 10th."
City: Paris
Date: June 10th

Sentence: "Our meeting is scheduled in Tokyo for September 2nd."
City:
Date:
```

### Task-Specific Example
```
Translate the following sentence to Spanish.

Example:
English: "Good morning, how are you?"
Spanish: "Buenos días, ¿cómo estás?"

English: "Where is the nearest train station?"
Spanish:
```

## Common Pitfalls

1. **Unrepresentative Example**
   - Using an example that is too simple, too complex, or not typical of the task.
   - Example does not match the format or style of the actual task.

2. **Ambiguous Instructions**
   - Relying solely on the example without clear instructions.
   - Leaving the model to guess the task requirements.

3. **Contradictory Information**
   - Example and instructions are inconsistent.
   - Example demonstrates a different pattern than what is expected.

4. **Overgeneralization**
   - The model may apply the example too broadly, missing nuances in the actual task.

## Use Cases

1. **Classification**
   - Sentiment analysis
   - Topic labeling
   - Intent detection

2. **Extraction**
   - Entity recognition
   - Data parsing
   - Information retrieval

3. **Generation**
   - Text translation
   - Format conversion
   - Simple content creation

## When to Use One-shot

One-shot prompting is ideal when:
- The task benefits from a concrete example but does not require multiple demonstrations.
- You want to clarify the expected output format or reasoning process.
- Zero-shot prompts produce inconsistent or ambiguous results.
- The model needs minimal guidance to generalize the task.

## When to Consider Alternatives

Consider other prompting techniques when:
- The task is highly complex or requires demonstration of multiple patterns (use few-shot).
- The model still misunderstands the task after a single example.
- The example alone cannot capture the full range of expected outputs.
- You need to cover edge cases or exceptions.

## Tips for Optimization

1. **Iterative Refinement**
   - Test different examples to see which yields the best results.
   - Adjust instructions and example for clarity and relevance.

2. **Format Consistency**
   - Use the same structure for both the example and the task prompt.
   - Clearly separate the example from the actual task.

3. **Response Validation**
   - Check if the model output matches the intended pattern.
   - Revise the example or instructions if results are inconsistent.
