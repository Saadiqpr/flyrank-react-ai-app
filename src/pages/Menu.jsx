import ProductCard from '../components/ProductCard'
import { useState, useMemo } from 'react'
import { useStore } from '../context/StoreContext'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

export default function Menu() {
  const { state } = useStore()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => ['All', ...Array.from(new Set(state.products.map((p) => p.category || 'Other')))], [state.products])

  const results = useMemo(() => {
    return state.products.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (!query) return true
      const q = query.toLowerCase()
      return p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q)
    })
  }, [state.products, query, category])

  return (
    <section className="container">
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <h1>Menu</h1>
          <p style={{ color: 'var(--muted)' }}>Explore our handcrafted drinks and fresh pastries.</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <SearchBar onSearch={setQuery} />
        </div>
      </header>

      <div style={{ marginTop: 18 }}>
        <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
      </div>

      <div style={{ marginTop: 20 }}>
        {results.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>
            No items found. Try a different category or search term.
          </div>
        ) : (
          <div className="featured-grid">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
