import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import RatingStars from './RatingStars'

export default function ProductCard({ product }) {
  const { dispatch, state } = useStore()
  const isFav = state.favorites.find((f) => f.id === product.id)

  function addToCart() {
    // assign a unique key for cart item to allow distinct options
    const key = `${product.id}-${Date.now()}`
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, key, qty: 1, options: {} } })
  }

  return (
    <article className="product-card" aria-labelledby={`p-${product.id}`}>
      <div className="product-media">
        <img src={product.image} alt={product.name} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
      </div>
      <div className="product-body">
        <h3 id={`p-${product.id}`}>{product.name}</h3>
        <RatingStars value={product.rating || 0} />
        <p style={{ color: 'var(--muted)' }}>{product.description}</p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
          <strong style={{ color: 'var(--text-h)' }}>${product.price.toFixed(2)}</strong>
          <button className="btn" onClick={addToCart}>Add</button>
          <button className="btn secondary" onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: product })} aria-pressed={!!isFav}>
            {isFav ? '♥' : '♡'}
          </button>
          <Link to={`/product/${product.id}`} className="btn secondary">Details</Link>
        </div>
      </div>
    </article>
  )
}
