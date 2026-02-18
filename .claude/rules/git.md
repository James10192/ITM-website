# Git Rules

## Commit Format (Conventional Commits)

```
<type>(<scope>): <short description in imperative English>

[optional body — explain the WHY if not obvious]
```

**Types:** `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`, `style`, `ci`

**Scopes:** Defined per project in the project's CLAUDE.md. Use a short noun representing
the area of change (e.g. `auth`, `gallery`, `api`, `ui`, `db`, `config`).

**Rules:**
- Description ≤ 72 characters
- Imperative English: "add" not "added", "fix" not "fixed"
- NO "Generated with Claude Code" or "Co-Authored-By"
- NO WIP commits on develop/main

**Examples:**
```
feat(auth): add JWT refresh token rotation
fix(gallery): prevent image overflow on mobile
refactor(api): extract validation into shared middleware
perf(db): add index on orders.user_id
test(contact): add form validation edge case tests
docs(readme): add environment setup instructions
chore(deps): update Next.js to 15.2.0
```

## Branch Strategy

```
main        ← production (protected)
staging     ← pre-production / QA (optional)
develop     ← integration branch (base for all features)
feature/*   ← feature/user-authentication
fix/*       ← fix/login-redirect-loop
hotfix/*    ← hotfix/payment-crash
chore/*     ← chore/update-dependencies
```

**Rule:** Always branch from `develop`, never from `main`.

## Pull Requests

- Title = main commit message
- Body: context + what changed + how to test
- At least 1 reviewer required
- CI must pass before merge
- Squash merge into develop
- Delete branch after merge

## Never Do

```bash
# FORBIDDEN — direct push to protected branches
git push origin main
git push origin develop

# FORBIDDEN — force push on shared branches
git push --force origin develop

# FORBIDDEN — commit secrets
git add .env

# FORBIDDEN — large dump commits
git commit -m "fix stuff and update things"

# FORBIDDEN — WIP commits on shared branches
git commit -m "WIP"
```
