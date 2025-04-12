# Output-constrained Prompts

Output-constrained prompting specifies the desired format, length, or structure of the model's response, ensuring outputs meet specific requirements. This technique is essential for tasks that require strict formatting, compliance, or integration with other systems.

## Key Concepts

- **Format Specification**: Clearly define the required output format (e.g., JSON, table, list).
- **Length Control**: Set limits on the number of words, sentences, or items.
- **Structural Constraints**: Require specific sections, fields, or templates in the response.
- **Compliance and Integration**: Ensure outputs are compatible with downstream systems or processes.

## Best Practices

1. **Be Explicit About Requirements**
   - Clearly state the desired format, structure, or length.
   - Use examples to illustrate the expected output.

2. **Use Formatting Cues**
   - Specify delimiters, field names, or section headers.
   - Indicate if the output should be machine-readable (e.g., valid JSON).

3. **Set Boundaries**
   - Define maximum or minimum length.
   - Specify required and optional fields.

4. **Test and Validate**
   - Check outputs for compliance with constraints.
   - Revise prompts if the model does not consistently follow requirements.

## Examples

### Basic Format Constraint
```
List three benefits of meditation. Respond in bullet points.

- Reduces stress
- Improves focus
- Enhances emotional well-being
```

### JSON Output Example
```
Extract the following information from the text and return as JSON:
- Name
- Date
- Event

Text: "Alice attended the AI conference on March 15th."

Output:
{
  "Name": "Alice",
  "Date": "March 15th",
  "Event": "AI conference"
}
```

### Table Output Example
```
Summarize the following data in a markdown table.

Data: Apples: 10, Oranges: 5, Bananas: 8

| Fruit   | Quantity |
|---------|----------|
| Apples  | 10       |
| Oranges | 5        |
| Bananas | 8        |
```

### Length Constraint Example
```
Summarize the following article in exactly two sentences.
[Insert article text here]
```

## Common Pitfalls

1. **Vague or Incomplete Constraints**
   - Not specifying all required fields or sections.
   - Leaving format or length open to interpretation.

2. **Overly Complex Requirements**
   - Making the output format too complicated for the model to follow.
   - Combining multiple, conflicting constraints.

3. **Inconsistent Compliance**
   - The model sometimes ignores or partially follows constraints.
   - Outputs vary in structure or length.

4. **Ambiguous Instructions**
   - Using unclear or conflicting formatting cues.
   - Not providing examples for complex formats.

## Use Cases

1. **Data Extraction**
   - Structured outputs for downstream processing
   - Information retrieval in specific formats

2. **Integration**
   - API responses
   - Automated workflows
   - Machine-readable outputs

3. **Content Generation**
   - Summaries with length limits
   - Lists, tables, or templates
   - Reports with required sections

4. **Compliance**
   - Legal or regulatory documents
   - Standardized forms
   - Accessibility requirements

## When to Use Output-constrained Prompts

Output-constrained prompting is ideal when:
- The output must be in a specific format or structure.
- Downstream systems require machine-readable or standardized responses.
- Consistency and compliance are critical.
- The task involves data extraction, reporting, or integration.

## When to Consider Alternatives

Consider other techniques when:
- Flexibility or creativity is more important than strict formatting.
- The task is exploratory or open-ended.
- The model struggles to follow complex constraints (consider simplifying).

## Tips for Optimization

1. **Iterative Refinement**
   - Test different phrasings and examples to improve compliance.
   - Adjust constraints based on model performance.

2. **Validation and Post-processing**
   - Use scripts or tools to check output format.
   - Provide feedback to the model if outputs are incorrect.

3. **Simplify When Possible**
   - Break complex outputs into smaller, sequential prompts.
   - Use clear, unambiguous instructions.

4. **Combine with Examples**
   - Show both correct and incorrect outputs to clarify expectations.
   - Reinforce constraints with multiple examples.
