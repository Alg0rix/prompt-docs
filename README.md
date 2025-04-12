# Prompt Engineering Guide

A comprehensive resource for prompt engineering in Large Language Models (LLMs). This documentation website provides guides, techniques, and best practices for effectively working with AI language models.

## About This Project

The Prompt Engineering Guide covers:

- **Fundamentals**: Introduction to prompt engineering concepts
- **Basic Techniques**: Zero-shot, one-shot, few-shot, and role-based prompting
- **Advanced Techniques**: Chain-of-Thought, Retrieval-Augmented Generation (RAG), and prompt chaining
- **Specialized Prompts**: Function calling, multi-modal interactions, and output constraints
- **Responsible AI**: Safety, ethics, and mitigating risks like prompt injection

Visit the live site at [https://docs.promptllm.xyz](https://docs.promptllm.xyz)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
