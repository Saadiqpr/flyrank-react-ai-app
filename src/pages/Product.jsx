import { useParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { useState } from 'react'

export default function Product() {
  const { id } = useParams()
  const { state, dispatch } = useStore()
  const product = state.products.find((p) => p.id === id)
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState(product?.sizes?.[0] || null)
  const [milk, setMilk] = useState(product?.milk?.[0] || null)
  const [selectedAddons, setSelectedAddons] = useState([])

  if (!product) return <section style={{ padding: 24 }}><h2>Product not found</h2></section>

  function toggleAddon(a) {
    setSelectedAddons((s) => (s.find((x) => x.name === a.name) ? s.filter((x) => x.name !== a.name) : [...s, a]))
  }

  const addonsTotal = selectedAddons.reduce((s, a) => s + (a.price || 0), 0)
  const base = product.price
  const total = ((base + addonsTotal) * qty)

  function addToCart() {
    const key = `${product.id}-${Date.now()}`
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, key, qty, options: { size, milk, addons: selectedAddons } } })
  }

  return (
    <section className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 24 }}>
        <div>
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 10, objectFit: 'cover', boxShadow: 'var(--shadow)' }} />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p style={{ color: 'var(--muted)' }}>{product.description}</p>
          <p style={{ marginTop: 12 }}><strong>${product.price.toFixed(2)}</strong></p>

          {product.sizes && (
            <div style={{ marginTop: 12 }}>
              <label>Size</label>
              <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                {product.sizes.map((s) => (
                  <button key={s} className={`btn ${size === s ? '' : 'secondary'}`} onClick={() => setSize(s)} aria-pressed={size === s}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {product.milk && (
            <div style={{ marginTop: 12 }}>
              <label>Milk</label>
              <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                {product.milk.map((m) => (
                  <button key={m} className={`btn ${milk === m ? '' : 'secondary'}`} onClick={() => setMilk(m)} aria-pressed={milk === m}>{m}</button>
                ))}
              </div>
            </div>
          )}

          {product.addons && product.addons.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <label>Add-ons</label>
              <div style={{ display: 'flex', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
                {product.addons.map((a) => (
                  <button key={a.name} onClick={() => toggleAddon(a)} className={`btn ${selectedAddons.find((x) => x.name === a.name) ? '' : 'secondary'}`}>{a.name} +${a.price.toFixed(2)}</button>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
            <label>Quantity</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="btn secondary">-</button>
              <div style={{ padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 6 }}>{qty}</div>
              <button onClick={() => setQty((q) => q + 1)} className="btn">+</button>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <button className="btn" onClick={addToCart}>Add to cart — ${total.toFixed(2)}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
