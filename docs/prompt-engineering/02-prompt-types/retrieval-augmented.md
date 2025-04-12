# Retrieval-augmented Prompts

Retrieval-augmented prompting integrates external search or database results into the prompt, allowing the language model to access up-to-date or domain-specific information beyond its training data. This approach is essential for tasks that require factual accuracy, current events, or specialized knowledge.

## Key Concepts

- **External Knowledge Integration**: Incorporating retrieved documents, search results, or database entries into the prompt.
- **Context Expansion**: Supplementing the model’s knowledge with relevant, up-to-date information.
- **Fact-based Reasoning**: Enabling the model to ground its responses in external sources.
- **Dynamic Information**: Accessing information that changes over time or is outside the model’s training window.

## Best Practices

1. **Curate Relevant Context**
   - Select the most pertinent search results or documents.
   - Remove irrelevant or redundant information.

2. **Clearly Separate Sources**
   - Use formatting or section headers to distinguish retrieved content from instructions or questions.
   - Cite sources or provide links when possible.

3. **Summarize or Highlight Key Points**
   - Condense long documents to the most relevant excerpts.
   - Highlight facts or data points needed for the task.

4. **Prompt for Source-based Reasoning**
   - Instruct the model to base its answer only on the provided context.
   - Ask for citations or references in the response.

## Examples

### Basic Retrieval-augmented Prompt
```
Context: "The Eiffel Tower is located in Paris and was completed in 1889."

Question: "When was the Eiffel Tower built and where is it located?"
```

### Search Results Example
```
Search results:
1. "OpenAI was founded in December 2015 by Elon Musk, Sam Altman, and others."
2. "OpenAI's mission is to ensure that artificial general intelligence benefits all of humanity."

Question: "Who founded OpenAI and what is its mission?"
```

### Database Entry Example
```
Database record:
Product: "SuperWidget 3000"
Release date: "2022-09-15"
Features: "Wireless, waterproof, 10-hour battery life"

Question: "What are the main features of the SuperWidget 3000?"
```

### Multi-source Example
```
Document 1: "Vitamin D is important for bone health."
Document 2: "Sunlight exposure helps the body produce vitamin D."

Question: "How can people get vitamin D and why is it important?"
```

## Common Pitfalls

1. **Irrelevant or Noisy Context**
   - Including too many or unrelated search results.
   - Overwhelming the model with unnecessary information.

2. **Outdated or Incorrect Sources**
   - Using stale or inaccurate data.
   - Failing to verify the reliability of sources.

3. **Ambiguous References**
   - Not clarifying which source to use for which part of the answer.
   - Mixing information from conflicting sources without resolution.

4. **Ignoring Provided Context**
   - The model answers from its own knowledge instead of the retrieved data.
   - Not grounding responses in the supplied information.

## Use Cases

1. **Question Answering**
   - Factual queries
   - Current events
   - Domain-specific knowledge

2. **Summarization**
   - Condensing retrieved documents
   - Multi-source synthesis

3. **Fact-checking**
   - Verifying claims against external sources
   - Citing evidence

4. **Personalization**
   - Using user-specific data from databases
   - Context-aware recommendations

## When to Use Retrieval-augmented Prompts

Retrieval-augmented prompting is ideal when:
- The task requires up-to-date or domain-specific information.
- Factual accuracy and source grounding are important.
- The model’s training data is insufficient or outdated.
- Multi-source synthesis or citation is needed.

## When to Consider Alternatives

Consider other techniques when:
- The task can be completed with the model’s internal knowledge.
- Reliable external sources are unavailable.
- Simpler, standalone prompts are sufficient.

## Tips for Optimization

1. **Source Selection**
   - Prioritize high-quality, relevant sources.
   - Remove duplicates and irrelevant entries.

2. **Context Formatting**
   - Use clear labels and structure for each source.
   - Separate context from instructions and questions.

3. **Grounding Instructions**
   - Direct the model to use only the provided context.
   - Ask for citations or evidence in the response.

4. **Iterative Testing**
   - Experiment with different context lengths and formats.
   - Refine prompts based on model performance and accuracy.
