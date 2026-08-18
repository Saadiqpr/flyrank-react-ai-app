import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'

export default function ProductCard({ product }) {
  const { dispatch, state } = useStore()
  const isFav = state.favorites.find((f) => f.id === product.id)

  return (
    <article className="product-card">
      <div className="product-media" aria-hidden>
        <div style={{ height: 120, background: 'var(--social-bg)', borderRadius: 8 }} />
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>Add</button>
          <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: product })} aria-pressed={!!isFav}>
            {isFav ? 'Unfavorite' : 'Favorite'}
          </button>
          <Link to={`/product/${product.id}`}>Details</Link>
        </div>
      </div>
    </article>
  )
}
