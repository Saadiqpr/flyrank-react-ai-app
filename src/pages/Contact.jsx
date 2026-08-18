import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="container">
      <h1>Contact</h1>
      {sent ? (
        <div style={{ padding: 40 }}>
          <h2>Thanks — we received your message</h2>
          <p style={{ color: 'var(--muted)' }}>We typically reply within 1–2 business days.</p>
        </div>
      ) : (
        <form onSubmit={submit} style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
          <label>
            Name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </label>
          <label>
            Email
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </label>
          <label>
            Message
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6} required />
          </label>
          <button className="btn" type="submit">Send message</button>
        </form>
      )}
    </section>
  )
}
