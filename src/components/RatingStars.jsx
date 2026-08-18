export default function RatingStars({ value = 0, size = 14 }) {
  const stars = []
  const full = Math.floor(value)
  const half = value - full >= 0.5
  for (let i = 0; i < 5; i++) {
    if (i < full) stars.push('★')
    else if (i === full && half) stars.push('☆')
    else stars.push('☆')
  }
  return (
    <div aria-hidden style={{ color: 'var(--accent-2)', fontSize: size, letterSpacing: 2 }}>
      {stars.join(' ')} <span style={{ color: 'var(--muted)', fontSize: 12, marginLeft: 8 }}>{value.toFixed(1)}</span>
    </div>
  )
}
