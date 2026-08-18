import { useLocation, Link } from 'react-router-dom'

export default function Confirmation() {
  const { state } = useLocation()
  const order = state?.orderNumber || '—'
  const total = state?.total ? `$${state.total.toFixed(2)}` : ''
  return (
    <section className="container" style={{ textAlign: 'center', padding: 48 }}>
      <h1>Thank you</h1>
      <p style={{ color: 'var(--muted)' }}>Your order <strong>{order}</strong> was placed successfully. {total && <span>Amount: {total}</span>}</p>
      <div style={{ marginTop: 24 }}>
        <Link to="/menu" className="btn">Back to Menu</Link>
      </div>
    </section>
  )
}
