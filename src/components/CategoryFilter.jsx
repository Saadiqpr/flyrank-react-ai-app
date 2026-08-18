export default function CategoryFilter({ categories = [], selected, onSelect }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Categories">
      {categories.map((c) => (
        <button key={c} onClick={() => onSelect(c)} className={`category-pill ${selected === c ? 'active' : ''}`} aria-pressed={selected === c} role="tab">
          {c}
        </button>
      ))}
    </div>
  )
}
