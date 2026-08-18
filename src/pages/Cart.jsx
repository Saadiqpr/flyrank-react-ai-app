import { useStore } from '../context/StoreContext'

export default function Cart() {
  const { state, dispatch } = useStore()

  const subtotal = state.cart.reduce((s, it) => s + ((it.price || 0) * (it.qty || 1) + (it.options?.addons?.reduce((a, b) => a + (b.price || 0), 0) || 0)), 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  function updateQty(item, qty) {
    const updated = { ...item, qty }
    dispatch({ type: 'UPDATE_CART_ITEM', payload: updated })
  }

  return (
    <section className="container">
      <h1>Cart</h1>
      {state.cart.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>
          Your cart is empty. <a href="/menu">Continue shopping</a>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {state.cart.map((it) => (
              <div key={it.key} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, borderBottom: '1px solid var(--border)' }}>
                <img src={it.image} alt={it.name} style={{ width: 84, height: 64, objectFit: 'cover', borderRadius: 8 }} />
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontWeight: 600 }}>{it.name}</div>
                  <div style={{ color: 'var(--muted)' }}>{it.options?.size || ''} {it.options?.milk ? `• ${it.options.milk}` : ''}</div>
                  <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button className="btn secondary" onClick={() => updateQty(it, Math.max(1, (it.qty || 1) - 1))}>-</button>
                    <div style={{ padding: '6px 10px', border: '1px solid var(--border)', borderRadius: 6 }}>{it.qty || 1}</div>
                    <button className="btn" onClick={() => updateQty(it, (it.qty || 1) + 1)}>+</button>
                    <button className="btn secondary" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: it.key })}>Remove</button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>${((it.price || 0) * (it.qty || 1)).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <aside style={{ border: '1px solid var(--border)', padding: 16, borderRadius: 8 }}>
            <h3>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontWeight: 700 }}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div style={{ marginTop: 12 }}>
              <a className="btn" href="/checkout">Proceed to checkout</a>
            </div>
          </aside>
        </div>
      )}
    </section>
  )
}
