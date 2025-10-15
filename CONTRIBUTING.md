# Contributing to GitHub Profile README Generator

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

<a href="https://discord.gg/HHMs7Eg" target="blank">
<img src="https://img.shields.io/discord/735303195105951764?color=%23677BC4&label=Join%20Community&style=flat-square" alt="join discord community of github profile readme generator"/>
</a>

Please note we have a code of conduct, please follow it in all your interactions with the project.

## 🚀 Tech Stack

This project is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **Forms**: [React Hook Form](https://react-hook-form.com/) for form management
- **Analytics**: [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4) with privacy compliance
- **Testing**: [Vitest](https://vitest.dev/) for unit testing
- **Linting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code quality

## 🛠️ Development Setup

### Prerequisites

- **Node.js**: Version 18.17 or higher
- **npm**: Version 9 or higher (comes with Node.js)
- **Git**: For version control

### Local Development

1. **Fork & Clone the repository**

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/github-profile-readme-generator.git
cd github-profile-readme-generator
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables** (optional)

```bash
# Copy the example environment file
cp env.example .env.local

# Add your Google Analytics ID if you want to test analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. **Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Export static site

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript type checking

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:ui      # Run tests with UI
```

## 📝 Pull Request Process

### Before You Start

1. **Check existing issues** to see if your feature/bug is already being worked on
2. **Create an issue** if one doesn't exist for your contribution
3. **Join our Discord** to discuss your ideas with the community
4. **Read our [Code Style Guide](CODE_STYLE_GUIDE.md)** to understand our coding standards

### Making Changes

1. **Create a feature branch** from `main`

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

2. **Follow our coding standards**
   - Use TypeScript with strict mode
   - Follow the existing code style (ESLint + Prettier)
   - Write meaningful commit messages
   - Add tests for new features
   - Update documentation if needed

3. **Test your changes**

```bash
# Run all checks before submitting
npm run lint        # Check code style
npm run type-check  # Check TypeScript
npm run test        # Run tests
npm run build       # Ensure it builds successfully
```

4. **Commit your changes**

```bash
# Use conventional commit messages
git add .
git commit -m "feat: add new skill category filter"
# or
git commit -m "fix: resolve mobile navigation issue"
```

### Submitting Your PR

1. **Push your branch**

```bash
git push origin feature/your-feature-name
```

2. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Screenshots for UI changes
   - Reference to any related issues

3. **PR Requirements**:
   - ✅ All tests pass
   - ✅ No TypeScript errors
   - ✅ ESLint passes
   - ✅ Builds successfully
   - ✅ Follows our code style guide
   - ✅ Includes tests for new features
   - ✅ Updates documentation if needed

### Review Process

1. **Automated checks** will run on your PR
2. **Maintainers** will review your code
3. **Address feedback** by pushing new commits to your branch
4. **Merge** happens after approval from maintainers

## 🎯 Contribution Guidelines

### What We're Looking For

- **Bug fixes** with clear reproduction steps
- **New features** that align with the project's goals
- **Performance improvements** with benchmarks
- **Accessibility improvements** following WCAG guidelines
- **Documentation** improvements and translations
- **Test coverage** improvements

### Areas That Need Help

- 🌍 **Internationalization** (i18n) support
- 📱 **Mobile experience** improvements
- ♿ **Accessibility** enhancements
- 🎨 **UI/UX** improvements
- 🧪 **Test coverage** expansion
- 📚 **Documentation** improvements
- 🔧 **Developer experience** tools

### Component Development

When creating new components:

```tsx
// Follow this structure for new components
interface ComponentProps {
  // Define clear prop types
  title: string;
  onAction?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Component = ({ title, onAction, variant = 'primary' }: ComponentProps) => {
  // Component logic here

  return <div className="component-styles">{/* JSX here */}</div>;
};
```

### File Organization

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
│   ├── forms/          # Form-related components
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   └── ui/             # Basic UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
└── constants/          # Application constants
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Steps to reproduce** the bug
2. **Expected behavior** vs actual behavior
3. **Screenshots** or screen recordings if applicable
4. **Browser/OS information**
5. **Console errors** if any

Use our [bug report template](https://github.com/rahuldkjain/github-profile-readme-generator/issues/new/choose) for consistency.

## 💡 Suggesting Features

For feature requests:

1. **Check existing issues** to avoid duplicates
2. **Describe the problem** you're trying to solve
3. **Propose a solution** with examples
4. **Consider the impact** on existing users
5. **Be open to discussion** and alternative approaches

## 🏷️ Issue Labels

We use labels to organize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `documentation` - Improvements to docs
- `accessibility` - A11y improvements
- `performance` - Performance improvements

## 📋 Code Review Checklist

Before requesting review, ensure:

- [ ] Code follows our style guide
- [ ] All tests pass locally
- [ ] TypeScript compiles without errors
- [ ] ESLint passes without warnings
- [ ] Component is accessible (proper ARIA labels, keyboard navigation)
- [ ] Mobile-responsive design
- [ ] Performance considerations addressed
- [ ] Documentation updated if needed
- [ ] Commit messages are clear and descriptive

## 🎉 Recognition

Contributors are recognized in:

- **README.md** contributors section
- **All Contributors** bot for automated recognition
- **Release notes** for significant contributions
- **Discord community** shoutouts

## 📞 Getting Help

- **Discord**: [Join our community](https://discord.gg/HHMs7Eg)
- **Issues**: [GitHub Issues](https://github.com/rahuldkjain/github-profile-readme-generator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/rahuldkjain/github-profile-readme-generator/discussions)

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to GitHub Profile README Generator! 🚀
