import * as React from 'react';

import { DUMMY_PRODUCTS } from '../dummy-products';

type State = {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}

type Action =
  | { type: 'ADD_ITEM'; payload: string; }
  | { type: 'UPDATE_ITEM'; payload: { productId: string; amount: number; }; };

type Dispatch = (action: Action) => void;

const ShoppingCartContext = React.createContext<
  { state: State; dispatch: Dispatch; } | undefined
>(undefined);

function shoppingCartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.payload
        );
        if (!product) {
          throw new Error(`Product not found: ${action.payload}`);
        }
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        ...state, // not needed here because we have only one value
        items: updatedItems,
      };
    }

    case 'UPDATE_ITEM': {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [state, dispatch] = React.useReducer(shoppingCartReducer, { items: [] }
  );

  const value = {
    state,
    dispatch,
  };

  return (
    <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
  );
}

function useShoppingCart() {
  const context = React.useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }

  return context;
}

export { ShoppingCartProvider, useShoppingCart };