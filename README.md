# Angular Lab – Enterprise Learning Platform

**Work in Progress**

Comprehensive Angular learning repository featuring microfrontends architecture, code smells exercises, design patterns, and enterprise-grade development practices.

**Angular** **TypeScript** **Module Federation** **RxJS** **NestJS**

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

Angular Lab is a comprehensive learning platform designed to demonstrate advanced Angular development skills through practical examples, exercises, and real-world patterns. The repository is organized into three main learning tracks:

### Core Learning Tracks

**1. Microfrontends Labs**

- Enterprise-grade microfrontends architecture with Module Federation
- Complete domain separation and independent bounded contexts
- Event-driven communication patterns
- Production-ready examples with debugging capabilities

**2. Code Smells Collection**

- 100 practical code smell exercises organized in 10 groups
- Before/after examples with detailed explanations
- Test-driven refactoring practice
- Real-world Angular anti-patterns and solutions

**3. Design Patterns & Concepts**

- Repository Pattern implementation
- SOLID principles in Angular context
- Advanced TypeScript patterns
- Architecture decision records

### Key Features

- **Module Federation**: Microfrontends with independent deployment
- **Domain-Driven Design**: Complete separation of bounded contexts
- **Event-Driven Architecture**: Loose coupling through events
- **Code Quality**: 100+ code smell exercises with solutions
- **Testing Strategy**: Unit, integration, and E2E test examples
- **TypeScript Best Practices**: Strict mode and advanced patterns
- **RxJS Patterns**: Reactive programming with proper error handling
- **State Management**: Signals, NgRx, and custom state solutions

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Shell Application                        │
│              (Orchestration & Routing)                      │
└───────────────────────┬─────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│  Microfrontend│ │  Microfrontend│ │  Microfrontend│
│   Domain A    │ │   Domain B    │ │   Domain C    │
│               │ │               │ │               │
│  - Own State  │ │  - Own State  │ │  - Own State  │
│  - Own API    │ │  - Own API    │ │  - Own API    │
│  - Own Logic  │ │  - Own Logic  │ │  - Own Logic  │
└───────┬───────┘ └───────┬───────┘ └───────┬───────┘
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                  ┌───────▼───────┐
                  │  Event Bus    │
                  │ (Communication)│
                  └───────────────┘
```

### Technology Stack

**Frontend:**

- Angular 17+ (Standalone Components)
- TypeScript (Strict Mode)
- RxJS (Reactive Programming)
- Module Federation (Webpack 5)
- TailwindCSS / SCSS

**Backend (where applicable):**

- NestJS
- TypeScript
- RESTful APIs

**Development Tools:**

- Angular CLI
- Webpack Bundle Analyzer
- ESLint + Prettier
- Jasmine + Karma (Unit Tests)
- Playwright (E2E Tests)

**Architecture Patterns:**

- Domain-Driven Design (DDD)
- Repository Pattern
- Event-Driven Architecture
- CQRS (Command Query Responsibility Segregation)
- SOLID Principles

---

## Project Structure

```
angular-lab/
├── day01-ecommerce-mf/          # E-commerce Microfrontends
│   ├── apps/
│   │   ├── shell/               # Application shell (Port 4200)
│   │   ├── mf-catalog/          # Catalog domain (Port 4201)
│   │   ├── mf-orders/           # Orders domain (Port 4202)
│   │   └── mf-customers/        # Customers domain (Port 4203)
│   └── libs/
│       ├── design-system/       # Shared UI components
│       ├── shared-utils/        # Common utilities
│       └── api-types/           # Shared TypeScript interfaces
│
├── day02-analytics-mf/          # Analytics Microfrontends
│   ├── apps/
│   │   ├── shell/
│   │   ├── mf-ingestion/        # Data ingestion domain
│   │   ├── mf-dashboard/        # Dashboard domain
│   │   └── mf-admin/            # Admin domain
│   └── libs/
│
├── day03-realtime-mf/           # Realtime Collaboration
│   ├── apps/
│   │   ├── shell/
│   │   ├── mf-editor/           # Editor domain
│   │   ├── mf-comments/         # Comments domain
│   │   └── mf-activity/         # Activity feed domain
│   └── libs/
│
├── code-smells/                 # Code Smells Collection
│   ├── group-01-component-design/    # Smells 1-10
│   │   ├── 01-god-component/
│   │   ├── 02-tight-coupling/
│   │   ├── 03-service-locator/
│   │   └── ...
│   ├── group-02-performance/           # Smells 11-20
│   ├── group-03-testing/               # Smells 21-30
│   ├── group-04-security/              # Smells 31-40
│   ├── group-05-maintainability/       # Smells 41-50
│   ├── group-06-angular-specific/     # Smells 51-60
│   ├── group-07-rxjs-patterns/        # Smells 61-70
│   ├── group-08-state-management/     # Smells 71-80
│   ├── group-09-api-integration/       # Smells 81-90
│   └── group-10-ui-ux-patterns/        # Smells 91-100
│
├── concepts/                    # Design Patterns & Concepts
│   ├── 01-repository-pattern/
│   │   ├── before/              # Anti-pattern example
│   │   ├── after/               # Refactored solution
│   │   └── tests/               # Test comparisons
│   └── ...
│
├── .vscode/                     # VS Code configuration
│   └── launch.json              # Debugging configurations
│
├── package.json                 # Root workspace configuration
└── README.md                    # This file
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Angular CLI**: v17.0.0 or higher
- **Git**: For version control

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd angular-lab

# Install all dependencies
npm install

# Or install dependencies for specific workspaces
npm run install:all
```

### Environment Setup

Each microfrontend project is self-contained and can be run independently. The root `package.json` provides convenience scripts to run multiple projects concurrently.

### Running Projects

#### Microfrontends Labs

**Day 01 - E-commerce:**

```bash
npm run dev:day01
```

- Shell: http://localhost:4200
- Catalog MF: http://localhost:4201
- Orders MF: http://localhost:4202
- Customers MF: http://localhost:4203

**Day 02 - Analytics:**

```bash
npm run dev:day02
```

- Shell: http://localhost:4200
- Ingestion MF: http://localhost:4201
- Dashboard MF: http://localhost:4202
- Admin MF: http://localhost:4203

**Day 03 - Realtime:**

```bash
npm run dev:day03
```

- Shell: http://localhost:4200
- Editor MF: http://localhost:4201
- Comments MF: http://localhost:4202
- Activity MF: http://localhost:4203

#### Code Smells Exercises

Navigate to any code smell exercise:

```bash
cd code-smells/group-01-component-design/02-tight-coupling
npm install
npm test
```

Each exercise includes:

- Problematic code (intentionally bad)
- Empty test files for practice
- Detailed README with explanation
- Solution hints

#### Design Patterns

```bash
cd concepts/01-repository-pattern
# Compare before/after implementations
# Review test files
# Study the refactoring process
```

---

## Development

### Microfrontends Development

Each microfrontend is an independent Angular application that can be developed, tested, and deployed separately.

**Key Principles:**

- **Domain Independence**: Each MF owns its domain logic
- **No Direct Dependencies**: Communication via events only
- **Shared Contracts**: TypeScript interfaces for type safety
- **Module Federation**: Runtime module loading

**Development Workflow:**

1. Start the shell application
2. Start individual microfrontends
3. Use hot module replacement for development
4. Debug with VS Code launch configurations

### Code Smells Development

Each code smell exercise follows this structure:

1. **Identify the Problem**: Review the problematic code
2. **Understand the Impact**: Read the detailed explanation
3. **Implement Solution**: Refactor following best practices
4. **Verify with Tests**: Complete the empty test files
5. **Compare Solutions**: Review the solution hints

### Debugging

**VS Code Configuration:**

1. Open the project in VS Code
2. Go to "Run and Debug" (Ctrl+Shift+D / Cmd+Shift+D)
3. Select the appropriate debug configuration
4. Set breakpoints in any microfrontend or exercise

**Debug Endpoints:**

- Visit `/debug` in any shell application for debugging tools
- Console logging with structured output
- Network monitoring for module federation

**Angular DevTools:**

- Component tree inspection
- State management debugging
- Performance profiling

---

## Testing

### Test Strategy

**Unit Tests:**

- Jasmine + Karma for Angular components
- Test coverage for business logic
- Mocking strategies for dependencies

**Integration Tests:**

- Component integration testing
- Service integration with HTTP mocks
- Module federation integration

**E2E Tests:**

- Playwright for end-to-end scenarios
- Cross-microfrontend communication testing
- User workflow validation

### Running Tests

```bash
# Run all tests across workspaces
npm run test:all

# Run tests for specific workspace
cd day01-ecommerce-mf/apps/shell
npm test

# Run tests with coverage
npm run test:cov

# Run E2E tests (requires apps to be running)
npm run e2e
```

### Code Smells Testing

Each code smell exercise includes test files that need to be completed:

```bash
cd code-smells/group-01-component-design/02-tight-coupling
npm test
# Tests will fail initially - implement the solution to make them pass
```

---

## Documentation

### Microfrontends Documentation

Each microfrontend project includes:

- Architecture diagrams
- Domain boundaries explanation
- Communication patterns
- API contracts
- Deployment guides

### Code Smells Documentation

Each code smell includes:

- Problem description
- Symptoms identification
- Impact analysis
- Solution approach
- Before/after code examples
- Test requirements

### Design Patterns Documentation

Each pattern includes:

- Problem statement
- Pattern explanation
- Implementation guide
- Before/after comparison
- Test examples

---

## Roadmap

### Completed

- Microfrontends architecture with Module Federation
- Day 01 E-commerce implementation
- Code smells collection structure (100 exercises)
- Repository Pattern example
- Testing infrastructure
- Debugging configurations

### In Progress

- Day 02 Analytics implementation
- Day 03 Realtime implementation
- Additional design patterns
- CI/CD pipelines
- Documentation expansion

### Planned

- Additional microfrontend examples
- Advanced state management patterns
- Performance optimization guides
- Security best practices
- Deployment automation
- Video tutorials

---

## Contributing

This is a learning repository. Contributions, suggestions, and improvements are welcome. Please follow these guidelines:

1. Maintain code quality standards
2. Add tests for new features
3. Update documentation
4. Follow TypeScript strict mode
5. Use conventional commit messages

---

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

## Support

For questions, issues, or contributions:

- Review documentation in each project folder
- Check existing issues
- Create new issues for bugs or feature requests

**Built for Angular developers who want to master enterprise-grade patterns and practices.**
