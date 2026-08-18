import { useStore } from '../context/StoreContext'
import ProductCard from '../components/ProductCard'

export default function Favorites() {
  const { state } = useStore()

  return (
    <section className="container">
      <h1>Favorites</h1>
      {state.favorites.length === 0 ? (
        <div style={{ padding: 40, color: 'var(--muted)' }}>You haven't saved any favorites yet.</div>
      ) : (
        <div className="featured-grid">
          {state.favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  )
}
