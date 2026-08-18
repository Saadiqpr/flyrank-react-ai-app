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
    <main>
      <section className="menu-hero" aria-hidden>
        <div className="menu-hero-inner container">
          <div className="menu-hero-copy">
            <h1>Our Menu</h1>
            <p className="lead">Thoughtfully sourced, expertly prepared. Explore our selection of seasonal drinks and freshly baked goods.</p>
          </div>
          <div className="menu-hero-search">
            <SearchBar onSearch={setQuery} />
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 18 }}>
        <div className="category-row" role="tablist" aria-label="Menu categories">
          <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
        </div>

        <div style={{ marginTop: 20 }}>
          {results.length === 0 ? (
            <div className="empty-state">
              <h3>No results</h3>
              <p>We couldn't find any items that match. Try a different category or clear your search.</p>
              <div style={{ marginTop: 12 }}>
                <button className="btn" onClick={() => { setCategory('All'); setQuery('') }}>Reset filters</button>
              </div>
            </div>
          ) : (
            <div className="product-grid">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
