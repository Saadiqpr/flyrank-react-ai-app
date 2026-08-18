import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from '../context/StoreContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { state } = useStore()

  const cartCount = state.cart.length
  const favCount = state.favorites.length

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link to="/">Brew & Bloom</Link>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Toggle navigation</span>
          ☰
        </button>

        <nav id="primary-navigation" className={`main-nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/favorites">
            Favorites{favCount > 0 ? <span className="badge" aria-hidden>{favCount}</span> : null}
          </NavLink>
          <NavLink to="/cart">
            Cart{cartCount > 0 ? <span className="badge" aria-hidden>{cartCount}</span> : null}
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}
