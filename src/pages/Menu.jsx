import ProductCard from '../components/ProductCard'
import { useStore } from '../context/StoreContext'

export default function Menu() {
  const { state } = useStore()

  return (
    <section style={{ padding: 24 }}>
      <h1>Menu</h1>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {state.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
