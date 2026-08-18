import { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext(null)

const initialState = {
  cart: [],
  favorites: [],
  products: [
    { id: '1', name: 'Cappuccino', price: 4.5, category: 'Coffee' },
    { id: '2', name: 'Latte', price: 4.0, category: 'Coffee' },
    { id: '3', name: 'Matcha Latte', price: 5.0, category: 'Tea' },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((p) => p.id !== action.payload) }
    case 'TOGGLE_FAVORITE':
      return state.favorites.find((f) => f.id === action.payload.id)
        ? { ...state, favorites: state.favorites.filter((f) => f.id !== action.payload.id) }
        : { ...state, favorites: [...state.favorites, action.payload] }
    default:
      return state
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
