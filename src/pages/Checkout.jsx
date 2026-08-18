import { useState } from 'react'
import { useStore } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { state, dispatch } = useStore()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', method: 'pickup', address: '' })
  const [errors, setErrors] = useState({})

  const subtotal = state.cart.reduce((s, it) => s + ((it.price || 0) * (it.qty || 1)), 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  function validate() {
    const e = {}
    if (!form.name) e.name = 'Name is required'
    if (!form.email || !form.email.includes('@')) e.email = 'Valid email required'
    if (!form.phone) e.phone = 'Phone is required'
    if (form.method === 'delivery' && !form.address) e.address = 'Address required for delivery'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function submit(e) {
    e.preventDefault()
    if (!validate()) return
    const orderNumber = 'BB' + Math.floor(Math.random() * 900000 + 100000)
    // Clear cart
    dispatch({ type: 'CLEAR_CART' })
    navigate('/confirmation', { state: { orderNumber, total } })
  }

  return (
    <section className="container">
      <h1>Checkout</h1>
      {state.cart.length === 0 ? (
        <div style={{ padding: 40, color: 'var(--muted)' }}>Your cart is empty.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24 }}>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <label>
              Name
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </label>
            <label>
              Email
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </label>
            <label>
              Phone
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
            </label>

            <div>
              <label>
                <input type="radio" name="method" value="pickup" checked={form.method === 'pickup'} onChange={() => setForm({ ...form, method: 'pickup' })} /> Pickup
              </label>
              <label style={{ marginLeft: 12 }}>
                <input type="radio" name="method" value="delivery" checked={form.method === 'delivery'} onChange={() => setForm({ ...form, method: 'delivery' })} /> Delivery
              </label>
            </div>

            {form.method === 'delivery' && (
              <label>
                Address
                <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
              </label>
            )}

            <button className="btn" type="submit">Place order — ${total.toFixed(2)}</button>
          </form>

          <aside style={{ border: '1px solid var(--border)', padding: 16, borderRadius: 8 }}>
            <h3>Order Summary</h3>
            {state.cart.map((it) => (
              <div key={it.key} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span>{it.name} x{it.qty || 1}</span>
                <span>${((it.price || 0) * (it.qty || 1)).toFixed(2)}</span>
              </div>
            ))}
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
          </aside>
        </div>
      )}
    </section>
  )
}
