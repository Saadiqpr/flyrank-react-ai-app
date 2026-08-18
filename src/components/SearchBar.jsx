import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(q) }} style={{ display: 'flex', gap: 8 }}>
      <label htmlFor="search" className="sr-only">Search menu</label>
      <input id="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search coffee, tea, pastries..." style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', minWidth: 200 }} />
      <button className="btn" type="submit">Search</button>
    </form>
  )
}
