// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Define the sidebar structure explicitly
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/what-is-prompt-engineering',
      ],
    },
    {
      type: 'category',
      label: 'Prompt Engineering',
      items: [
        'prompt-engineering/best-practices',
        {
          type: 'category',
          label: 'Basic Techniques',
          items: [
            'prompt-engineering/basic-techniques/zero-shot',
            'prompt-engineering/basic-techniques/one-shot',
            'prompt-engineering/basic-techniques/few-shot',
            'prompt-engineering/basic-techniques/instruction-following',
            'prompt-engineering/basic-techniques/template-based',
            'prompt-engineering/basic-techniques/role-based',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Techniques',
          items: [
            'prompt-engineering/advanced-techniques/chain-of-thought',
            'prompt-engineering/advanced-techniques/self-reflective',
            'prompt-engineering/advanced-techniques/retrieval-augmented',
            'prompt-engineering/advanced-techniques/prompt-chaining',
            'prompt-engineering/advanced-techniques/evaluation',
            'prompt-engineering/advanced-techniques/instructional-design',
          ],
        },
        {
          type: 'category',
          label: 'Specialized Prompts',
          items: [
            'prompt-engineering/specialized-prompts/function-calling',
            'prompt-engineering/specialized-prompts/multi-modal',
            'prompt-engineering/specialized-prompts/multi-agent',
            'prompt-engineering/specialized-prompts/domain-specific',
            'prompt-engineering/specialized-prompts/conditional',
            'prompt-engineering/specialized-prompts/contextual',
            'prompt-engineering/specialized-prompts/compression',
            'prompt-engineering/specialized-prompts/output-constrained',
            'prompt-engineering/specialized-prompts/instructional',
            'prompt-engineering/specialized-prompts/multi-turn',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Responsible AI',
      items: [
        'responsible-ai/safety-ethics',
        'responsible-ai/ethical-considerations',
        'responsible-ai/adversarial',
        'responsible-ai/prompt-injection',
      ],
    },
  ],
};

export default sidebars;
