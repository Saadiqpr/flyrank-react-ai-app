import { useStore } from '../context/StoreContext'

export default function Favorites() {
  const { state } = useStore()

  return (
    <section style={{ padding: 24 }}>
      <h1>Favorites</h1>
      {state.favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {state.favorites.map((p) => (
            <li key={p.id}>{p.name} — ${p.price.toFixed(2)}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
