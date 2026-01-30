# Elegant Context

A shopping cart application built with React, designed to practice **best practices of `useReducer` and React Context**.

## Overview

Elegant Context is a small e-commerce-style app where users can browse clothing products, add them to a cart, and adjust quantities. The focus is on clean, scalable state management using the Context API combined with `useReducer`.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- No external state management libraries—pure React patterns

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Learning Focus: useReducer + Context Best Practices

This project demonstrates several best practices when combining `useReducer` with React Context, following patterns from [Kent C. Dodds' "How to use React Context effectively"](https://kentcdodds.com/blog/how-to-use-react-context-effectively):

### 1. **Reducer Pattern with Typed Actions**

State updates are handled through a reducer with a discriminated union of actions:

```typescript
type Action =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'UPDATE_ITEM'; payload: { productId: string; amount: number } };
```

This ensures type safety—TypeScript knows exactly which payload shape each action type expects.

### 2. **Context + useReducer Together**

Instead of managing state with `useState` in the provider, the app uses `useReducer`:

- **Reducer**: Pure function that handles all state transitions in one place
- **Context**: Provides both `state` and `dispatch` to any descendant component

This separation keeps logic predictable and makes it easy to add new actions without scattering state updates across components.

### 3. **Custom Hook with Provider Validation**

The `useShoppingCart()` hook wraps `useContext` and throws a clear error if used outside the provider:

```typescript
function useShoppingCart() {
  const context = React.useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
}
```

This prevents silent failures and gives developers immediate feedback when the provider is missing.

### 4. **Immutable State Updates**

The reducer always returns new state objects rather than mutating existing ones. Arrays are copied before modification (`[...state.items]`), and objects are spread (`{ ...existingCartItem }`). This aligns with React's expectations and enables proper re-renders.

### 5. **Exhaustive Action Handling**

The reducer's `default` case throws for unknown actions, catching typos and ensuring all action types are explicitly handled.

## Project Structure

```
src/
├── store/
│   └── shopping-cart-context.tsx   # Context, reducer, provider, and hook
├── components/
│   ├── Header/                     # Cart button with item count
│   ├── Shop/                       # Product grid container
│   ├── Product/                    # Individual product with "Add to Cart"
│   └── CartModal/
│       ├── index.tsx               # Modal dialog wrapper
│       └── Cart/                   # Cart contents and quantity controls
├── types/
│   └── product.ts
└── dummy-products.ts
```

## How It Works

1. **`ShoppingCartProvider`** wraps the app in `App.tsx`, making cart state available everywhere.
2. **`Product`** components dispatch `ADD_ITEM` when "Add to Cart" is clicked.
3. **`Header`** reads `state.items` to show the cart count and opens the cart modal.
4. **`Cart`** displays items and dispatches `UPDATE_ITEM` to change quantities (or remove items when quantity reaches 0).

## References

- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively) — Kent C. Dodds

## License

Private project for learning purposes.
