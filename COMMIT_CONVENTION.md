# 📝 Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification for automated changelog generation and semantic versioning.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

| Type       | Description              | Version Bump |
| ---------- | ------------------------ | ------------ |
| `feat`     | New feature              | Minor        |
| `fix`      | Bug fix                  | Patch        |
| `perf`     | Performance improvement  | Patch        |
| `refactor` | Code refactoring         | Patch        |
| `docs`     | Documentation changes    | Patch        |
| `style`    | Code style changes       | Patch        |
| `test`     | Adding or updating tests | Patch        |
| `build`    | Build system changes     | Patch        |
| `ci`       | CI/CD changes            | Patch        |
| `chore`    | Maintenance tasks        | No bump      |

## Breaking Changes

Add `BREAKING CHANGE:` in the footer or `!` after type to indicate breaking changes:

```bash
feat!: remove deprecated API endpoints

BREAKING CHANGE: The old API endpoints have been removed. Use the new v2 endpoints instead.
```

## Examples

### Features

```bash
feat: add GitHub auto-fill integration
feat(ui): implement dark mode toggle
feat!: migrate to Next.js 15 App Router
```

### Bug Fixes

```bash
fix: resolve skill selection persistence issue
fix(mobile): correct responsive navigation layout
fix(a11y): improve keyboard navigation for forms
```

### Performance

```bash
perf: optimize image loading with next/image
perf(build): reduce bundle size by 30%
```

### Documentation

```bash
docs: update installation instructions
docs(api): add TypeScript examples
docs(readme): fix broken demo links
```

### Refactoring

```bash
refactor: convert components to TypeScript
refactor(store): migrate to Zustand state management
```

## Scopes (Optional)

Use scopes to indicate the area of change:

- `ui` - User interface components
- `api` - API related changes
- `build` - Build system
- `ci` - Continuous integration
- `docs` - Documentation
- `test` - Testing
- `a11y` - Accessibility
- `perf` - Performance
- `mobile` - Mobile-specific changes

## Tools

### Commitizen (Recommended)

Install commitizen for interactive commit messages:

```bash
npm install -g commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

Use `git cz` instead of `git commit`:

```bash
git add .
git cz
```

### VS Code Extension

Install "Conventional Commits" extension for VS Code to get commit message templates.

## Automated Release Process

1. **Commit** using conventional format
2. **Push** to master branch
3. **Release Please** analyzes commits
4. **Creates PR** with changelog and version bump
5. **Merge PR** to trigger release and deployment

## Examples in Practice

```bash
# Adding new feature
git commit -m "feat(ui): add accessibility menu with font size controls"

# Fixing bug
git commit -m "fix(mobile): resolve navigation menu overflow on small screens"

# Breaking change
git commit -m "feat!: migrate to Next.js 15 App Router

BREAKING CHANGE: Pages directory structure has changed.
See migration guide for updating custom pages."

# Performance improvement
git commit -m "perf(build): implement code splitting for 50% bundle reduction"

# Documentation update
git commit -m "docs(contributing): add TypeScript coding standards"
```

## Benefits

- ✅ **Automated changelogs** - No manual changelog maintenance
- ✅ **Semantic versioning** - Automatic version bumps based on commit types
- ✅ **Release notes** - Rich, categorized release notes
- ✅ **Consistency** - Standardized commit history
- ✅ **Tooling integration** - Works with Release Please, semantic-release, etc.
