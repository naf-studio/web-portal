# Contributing to Web Portal

Thank you for your interest in contributing to the web-portal project at NAF Studio. This document outlines our engineering standards, contribution workflow, and static web architectural conventions.

---

## 1. Branching Strategy & Workflow

This project adheres to a streamlined Trunk-based Development model:

- `main`: The stable production branch. All modifications targeting `main` must be submitted via a Pull Request (PR) and pass all continuous integration checks.
- Working branches should be branched directly from `main` using structured naming:
  - `feat/<short-description>`: New portal sections, navigation components, or UI views.
  - `fix/<short-description>`: Bug fixes, broken links, or cross-browser styling issues.
  - `style/<short-description>`: CSS adjustments, typography updates, or layout refinements.
  - `refactor/<short-description>`: Code restructuring without functional behavior changes.
  - `chore/<short-description>`: Tooling updates (ESLint, Prettier) or CI maintenance.
  - `docs/<short-description>`: Documentation updates.

---

## 2. Commit Standards: Conventional & Atomic Commits

### 2.1. Conventional Commits

All commit messages must adhere to the Conventional Commits specification:

```text
<type>(<scope>): <short description in lowercase>
```

- Allowed Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.
- Optional Scope: Component or asset name (e.g., `navigation`, `clipboard`, `styles`, `assets`).
- Description: Concise imperative sentence in lowercase without trailing punctuation.

### 2.2. Atomic Commits

- Each commit must address a single logical concern.
- Never mix formatting changes, asset additions, and functional JavaScript logic within the same commit.
- Every commit must leave the project in a working state.

---

## 3. Code Style & Documentation Standards

### 3.1. Tooling & Verification Pipeline

- Package Manager: `npm`.
- Linter: `eslint` (configured via `eslint.config.mjs`).
- Formatter: `prettier` (configured via `.prettierrc`).
- Run static checks prior to committing:
  ```bash
  npm run lint
  npm run format:check
  ```

### 3.2. Comment Hygiene & JSDoc

- Write clean, self-documenting code. Avoid trivial line-by-line comments (e.g., `// hide element`, `// return value`).
- JSDoc Standards is required for all JavaScript utility functions and event handlers:
  - Concise imperative summary in the first line.
  - Explicit `@param` and `@returns` type annotations.

---

## 4. Static Web Architecture & Clean Code Principles

- Keep HTML markup (`index.html`), stylesheet rules (`assets/css/styles.css`), and client behaviors (`assets/js/scripts.js`) strictly separated.
- Store static media inside `assets/images/` using clear, hyphenated lowercase filenames (`copy-button.png`, `server-icon.png`).
- Ensure responsive layouts function across desktop and mobile viewports, using resilient fallback implementations (e.g., `navigator.clipboard` with legacy fallback).

---

## 5. Pull Request Process

1. Ensure your feature branch is rebased on top of the latest `main`.
2. Verify all local checks pass: `npm run lint` and `npm run format:check`.
3. Open a Pull Request on GitHub. The pre-configured template will be populated automatically.
4. Provide a clear summary of your changes and reference relevant issues (e.g., `Closes #12`).
5. Merging requires passing CI workflows and maintainer approval.
