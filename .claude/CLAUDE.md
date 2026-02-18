# Claude Code — Workflow Instructions

These instructions apply to this project and complement the root `CLAUDE.md`.

## Git

- Follow `.claude/rules/git.md` for commit format and branch strategy
- Never add "Generated with Claude Code" or "Co-Authored-By" to commits
- Never stage or commit `.env`, `.env.*`, or any file containing secrets

## Planning

- For any non-trivial change (new feature, multi-file bug fix, refactor):
  use `/plan-and-confirm` — explore first, present the plan, wait for OKAY before writing code
- For trivial changes (typos, single-line fixes, copy edits): proceed directly
- Never guess at patterns — always read existing code before writing new code

## Code Style

- Match the conventions already present in the project (see root CLAUDE.md)
- Keep solutions minimal — only implement what was asked
- No over-engineering, no premature abstractions, no unrequested features

## Skills Available

| Skill | When to use |
|---|---|
| `/commit` | Creating a conventional commit |
| `/plan-and-confirm` | Before any non-trivial implementation |
| `/code-review` | Reviewing changes before a PR |
| `/create-pr` | Creating a pull request |
| `/run-tests` | Running tests and quality checks |
| `/new-endpoint` | Scaffolding a new API route/endpoint |
| `/worktree-start` | Starting work on a GitHub issue |
| `/worktree-finish` | Finalizing a worktree and creating a PR |
