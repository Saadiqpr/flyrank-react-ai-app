import { useStore } from '../context/StoreContext'

export default function Cart() {
  const { state, dispatch } = useStore()

  return (
    <section style={{ padding: 24 }}>
      <h1>Cart</h1>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.cart.map((p) => (
            <li key={p.id}>
              {p.name} — ${p.price.toFixed(2)} <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: p.id })}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
