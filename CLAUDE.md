# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is xxe.page, a Next.js-based web application focused on XXE (XML External Entity) testing and education. The project is designed to demonstrate XXE vulnerabilities and testing methodologies in a controlled environment.

## Development Commands

```bash
# Start development server
npm run dev

# Build the application
npm run build

# Export static site
npm run export

# Build and serve production build (runs export first)
npm start
```

## Architecture

The application uses Next.js with static site generation (SSG):

- **pages/index.js** - Empty home page component (currently minimal)
- **pages/post/[id].js** - Dynamic post detail page using `getStaticPaths` and `getStaticProps` for SSG. Fetches post data from jsonplaceholder.typicode.com at build time
- **components/post.js** - Reusable post component for displaying post summaries with links

The project uses Next.js's static export functionality, building to an `out/` directory that is served using the `serve` package.

## Custom Agent

This repository includes a specialized **xxe-security-auditor** agent located in `.claude/agents/xxe-security-auditor.md`. This agent should be used when:
- Analyzing code for XXE vulnerabilities
- Designing secure XML parsing implementations
- Creating XXE test payloads for security assessments
- Reviewing XML processing logic for security flaws
- Providing XXE prevention and remediation guidance

Given the nature of this project (XXE testing page), always consider security implications when adding XML processing functionality.
