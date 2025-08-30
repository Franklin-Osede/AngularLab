# 🔄 Repository Pattern - Angular Refactoring

## 📋 Overview

This project demonstrates the **Repository Pattern** implementation in Angular, showing how to refactor from direct service calls to a clean, testable architecture.

## 🎯 What You'll Learn

- **Before**: Direct API calls in services (tightly coupled)
- **After**: Repository pattern with interfaces (loosely coupled)
- **Benefits**: Better testing, maintainability, and scalability

## 📁 Project Structure

```
01-repository-pattern/
├── before/           # Legacy code with direct API calls
├── after/            # Clean code with Repository pattern
├── tests/            # Unit tests for both approaches
├── videos/           # Video scripts and assets
└── resources/        # Additional learning materials
```

## 🚀 Quick Start

### Before (Legacy)

```bash
cd before/product-app
npm install
ng serve
```

### After (Repository Pattern)

```bash
cd after/product-app
npm install
ng serve
```

## 🧪 Running Tests

```bash
# Before tests
cd before/product-app && npm test

# After tests
cd after/product-app && npm test
```

## 📊 Key Differences

| Aspect              | Before          | After           |
| ------------------- | --------------- | --------------- |
| **Testing**         | Hard to mock    | Easy to mock    |
| **Maintainability** | Tightly coupled | Loosely coupled |
| **Scalability**     | Limited         | Highly scalable |
| **Code Reuse**      | Low             | High            |

## 🎬 Video Content

- **Duration**: 12-15 minutes
- **Format**: Live Demo + Code Walkthrough
- **Focus**: Before/After comparison with practical examples

## 📚 Learning Path

1. **Before Demo**: See the legacy code issues
2. **Refactoring**: Live implementation
3. **After Demo**: Clean, testable code
4. **Testing**: Demonstrate improved testability

---

_Ready to transform your Angular architecture? Let's dive in! 🚀_
