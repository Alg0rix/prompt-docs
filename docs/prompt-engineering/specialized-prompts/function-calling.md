# Function-calling/Tool-use Prompts

Function-calling or tool-use prompting enables the language model to invoke external tools, APIs, or functions as part of its response, often by following a specific schema or instruction. This approach is essential for integrating language models with real-world systems and automating complex workflows.

## Key Concepts

- **Function Invocation**: The model generates structured outputs that trigger external functions or APIs.
- **Schema Compliance**: Responses must match a predefined schema (e.g., JSON, parameter list).
- **Automation**: Enables the model to perform actions, retrieve data, or control systems.
- **Separation of Concerns**: The model focuses on intent and parameters, while external tools handle execution.

## Best Practices

1. **Define Clear Schemas**
   - Specify the required fields, types, and structure for function calls.
   - Use examples to illustrate the expected output.

2. **Explicit Instructions**
   - Clearly state when and how the model should call a function.
   - Indicate any constraints or conditions for tool use.

3. **Validate Outputs**
   - Check that the model’s responses match the schema.
   - Handle errors or incomplete outputs gracefully.

4. **Limit Scope**
   - Restrict available functions to those relevant for the task.
   - Avoid overloading the model with too many options.

## Examples

### Basic Function Call
```
You can call the function get_weather(city) to retrieve weather information.

User: "What's the weather in Tokyo?"

Expected output:
{
  "function": "get_weather",
  "parameters": {
    "city": "Tokyo"
  }
}
```

### API Integration Example
```
When the user asks for a stock price, call the get_stock_price(symbol) function.

User: "Show me the price of AAPL."

Expected output:
{
  "function": "get_stock_price",
  "parameters": {
    "symbol": "AAPL"
  }
}
```

### Tool-use with Multiple Functions
```
Available functions:
- search_flights(origin, destination, date)
- book_hotel(city, check_in, check_out)

User: "Find me a flight from Paris to Rome on May 10th and book a hotel in Rome for two nights."

Expected output:
[
  {
    "function": "search_flights",
    "parameters": {
      "origin": "Paris",
      "destination": "Rome",
      "date": "2023-05-10"
    }
  },
  {
    "function": "book_hotel",
    "parameters": {
      "city": "Rome",
      "check_in": "2023-05-10",
      "check_out": "2023-05-12"
    }
  }
]
```

## Common Pitfalls

1. **Schema Mismatch**
   - The model outputs responses that do not match the required format.
   - Missing or extra fields in the function call.

2. **Ambiguous Instructions**
   - Not specifying when to use a function versus a natural language response.
   - Unclear or conflicting tool-use guidelines.

3. **Overuse or Underuse**
   - The model calls functions unnecessarily or fails to call them when needed.
   - Not handling edge cases or errors.

4. **Security and Safety Risks**
   - Allowing the model to trigger sensitive or dangerous actions without safeguards.
   - Not validating user input before execution.

## Use Cases

1. **Automation**
   - Scheduling meetings
   - Sending emails or messages
   - Controlling smart devices

2. **Data Retrieval**
   - Weather, stock, or news APIs
   - Database queries
   - Information lookup

3. **Workflow Integration**
   - Orchestrating multi-step processes
   - Chaining tool calls for complex tasks
   - Integrating with business systems

4. **Conversational Agents**
   - Virtual assistants
   - Customer support bots
   - Interactive applications

## When to Use Function-calling/Tool-use Prompts

Function-calling/tool-use prompting is ideal when:
- The model needs to interact with external systems or APIs.
- Automation or data retrieval is required.
- Structured, machine-readable outputs are necessary.
- The task involves multi-step workflows or integrations.

## When to Consider Alternatives

Consider other techniques when:
- The task can be handled with natural language alone.
- Security or safety concerns outweigh the benefits of automation.
- The model struggles to consistently produce valid function calls.

## Tips for Optimization

1. **Iterative Testing**
   - Test with a variety of inputs and edge cases.
   - Refine schemas and instructions based on model performance.

2. **Error Handling**
   - Design prompts to handle invalid or incomplete outputs.
   - Provide fallback responses or clarifications.

3. **Schema Reinforcement**
   - Use multiple examples to reinforce the required format.
   - Highlight common mistakes and how to avoid them.

4. **Monitor and Audit**
   - Track function calls for correctness and safety.
   - Regularly review and update available tools and schemas.
