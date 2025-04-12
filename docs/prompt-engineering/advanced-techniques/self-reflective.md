# Self-reflective/Meta Prompts

Self-reflective or meta prompting asks the language model to critique, analyze, or improve its own output, encouraging self-evaluation and iterative refinement. This technique is valuable for enhancing output quality, reducing errors, and fostering more thoughtful responses.

## Key Concepts

- **Self-critique**: The model reviews and evaluates its own responses.
- **Iterative Refinement**: The model revises outputs based on self-analysis or feedback.
- **Meta-cognition**: The model reasons about its own reasoning process.
- **Error Detection**: The model identifies and corrects mistakes in its outputs.

## Best Practices

1. **Prompt for Specific Reflection**
   - Ask the model to check for accuracy, clarity, or completeness.
   - Request identification of potential errors or ambiguities.

2. **Encourage Stepwise Review**
   - Have the model break down its answer and assess each part.
   - Use multi-step prompts: generate, critique, then revise.

3. **Set Clear Evaluation Criteria**
   - Define what aspects to critique (e.g., factuality, logic, tone).
   - Provide examples of good and bad self-reflection.

4. **Iterate as Needed**
   - Allow for multiple rounds of reflection and revision.
   - Compare initial and improved outputs.

## Examples

### Basic Self-critique
```
Prompt: "Summarize the following article."

[Model generates summary]

Now, review your summary for accuracy and completeness. List any errors or missing information.
```

### Iterative Refinement
```
Prompt: "Write a short story about a lost dog."

[Model writes story]

Now, critique your story for plot holes or inconsistencies. Then, rewrite the story to address these issues.
```

### Meta Reasoning
```
Prompt: "Solve the math problem: 12 x 8 + 15."

[Model provides answer]

Explain your reasoning step by step. Then, check your answer for calculation errors.
```

### Error Detection
```
Prompt: "Translate the sentence to French: 'The cat is sleeping on the chair.'"

[Model provides translation]

Now, check your translation for grammatical or vocabulary errors and correct them if needed.
```

## Common Pitfalls

1. **Superficial Reflection**
   - The model gives generic or shallow critiques.
   - Fails to identify real issues in its output.

2. **Over-correction**
   - The model makes unnecessary changes or introduces new errors.
   - Excessive self-doubt leads to degraded output.

3. **Inconsistent Criteria**
   - The model uses different standards for each review.
   - Lacks focus on the most important aspects.

4. **Reflection Fatigue**
   - Too many iterations lead to diminishing returns.
   - The process becomes inefficient or repetitive.

## Use Cases

1. **Quality Assurance**
   - Fact-checking and error correction
   - Improving clarity and coherence

2. **Education and Training**
   - Teaching self-editing and critical thinking
   - Stepwise problem solving

3. **Creative Writing**
   - Story or essay improvement
   - Style and tone refinement

4. **Complex Reasoning**
   - Multi-step math or logic problems
   - Debugging code or processes

## When to Use Self-reflective/Meta Prompts

Self-reflective/meta prompting is ideal when:
- Output quality and accuracy are critical.
- The task benefits from iterative improvement.
- Complex reasoning or multi-step solutions are required.
- Teaching or training critical thinking skills.

## When to Consider Alternatives

Consider other techniques when:
- The task is simple or does not benefit from self-review.
- Time or resource constraints limit iterative refinement.
- The model struggles to provide meaningful self-critique.

## Tips for Optimization

1. **Guide the Reflection**
   - Use targeted questions for self-review.
   - Focus on the most relevant aspects for the task.

2. **Limit Iterations**
   - Set a maximum number of review cycles.
   - Stop when improvements plateau.

3. **Combine with External Feedback**
   - Use human or automated review alongside self-reflection.
   - Compare model self-critique with external evaluations.

4. **Validate Improvements**
   - Check that revisions actually enhance the output.
   - Avoid unnecessary or counterproductive changes.
