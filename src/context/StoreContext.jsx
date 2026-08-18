import { createContext, useContext, useReducer, useEffect } from 'react'
import productsData from '../data/products'

const StoreContext = createContext(null)

const STORAGE_KEY = 'brew-and-bloom'

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        cart: parsed.cart || [],
        favorites: parsed.favorites || [],
        products: productsData,
      }
    }
  } catch (e) {
    // ignore
  }
  return { cart: [], favorites: [], products: productsData }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // store item with options and quantity
      const next = { ...state, cart: [...state.cart, action.payload] }
      return next
    }
    case 'UPDATE_CART_ITEM': {
      const next = { ...state, cart: state.cart.map((it) => (it.key === action.payload.key ? action.payload : it)) }
      return next
    }
    case 'REMOVE_FROM_CART': {
      const next = { ...state, cart: state.cart.filter((p) => p.key !== action.payload) }
      return next
    }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'TOGGLE_FAVORITE': {
      const exists = state.favorites.find((f) => f.id === action.payload.id)
      const next = exists ? { ...state, favorites: state.favorites.filter((f) => f.id !== action.payload.id) } : { ...state, favorites: [...state.favorites, action.payload] }
      return next
    }
    default:
      return state
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => loadInitial())

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart: state.cart, favorites: state.favorites }))
    } catch (e) {
      // ignore
    }
  }, [state.cart, state.favorites])

  // expose products as part of state
  const value = { state: { ...state, products: productsData }, dispatch }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
