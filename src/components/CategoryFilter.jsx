export default function CategoryFilter({ categories = [], selected, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }} aria-label="Filter categories">
      {categories.map((c) => (
        <button key={c} onClick={() => onSelect(c)} className={`btn ${selected === c ? '' : 'secondary'}`} aria-pressed={selected === c}>
          {c}
        </button>
      ))}
    </div>
  )
}
