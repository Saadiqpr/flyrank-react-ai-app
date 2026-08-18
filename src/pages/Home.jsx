import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useStore } from '../context/StoreContext'
import '../App.css'

export default function Home() {
  const { state } = useStore()
  const featured = state.products.slice(0, 3)

  return (
    <>
      <header className="hero-landing">
        <div className="hero-content">
          <h1>Crafted coffee, thoughtful moments</h1>
          <p className="lead">At Brew & Bloom we source, roast, and serve specialty coffee with a focus on seasonality, sustainability and hospitality.</p>
          <div className="hero-ctas">
            <Link to="/menu" className="btn">Explore Menu</Link>
            <Link to="/about" className="btn secondary">Our Story</Link>
          </div>
        </div>

        <figure className="hero-figure" aria-hidden>
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1" alt="Barista pouring latte art" />
        </figure>
      </header>

      <section className="section" aria-labelledby="featured-heading">
        <h2 id="featured-heading">Featured Drinks</h2>
        <p style={{ color: 'var(--muted)', marginTop: 8 }}>Seasonal favorites and house classics.</p>
        <div className="featured-grid" style={{ marginTop: 20 }}>
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="story-heading">
        <h2 id="story-heading">Our Story</h2>
        <div className="story" style={{ marginTop: 16 }}>
          <div>
            <p style={{ color: 'var(--muted)' }}>Founded by roasters and baristas, Brew & Bloom started as a small roastery with a single mission: create moments worth savoring. We believe in seasonal menus, handcrafted drinks, and shops that feel like a home away from home.</p>
            <p style={{ marginTop: 12 }}><Link to="/about" className="btn secondary">Read more</Link></p>
          </div>
          <img src="https://images.unsplash.com/photo-1527169402691-a7fe5d5b3d10?q=80&w=1000&auto=format&fit=crop&s=2" alt="Interior of coffee shop" />
        </div>
      </section>

      <section className="seasonal">
        <h2>Seasonal Special — Toasted Honey Latte</h2>
        <p style={{ marginTop: 8, color: 'var(--muted)' }}>A limited-time creation featuring single-origin espresso and house-roasted honey syrup.</p>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">The Brew & Bloom Experience</h2>
        <div className="experience" style={{ marginTop: 20 }}>
          <div className="item">
            <h3>Freshly Roasted</h3>
            <p style={{ color: 'var(--muted)' }}>Beans roasted weekly by our in-house team.</p>
          </div>
          <div className="item">
            <h3>Handcrafted Drinks</h3>
            <p style={{ color: 'var(--muted)' }}>Skillful espresso and curated brewing methods.</p>
          </div>
          <div className="item">
            <h3>Welcoming Spaces</h3>
            <p style={{ color: 'var(--muted)' }}>Thoughtful spaces designed for work and conversation.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>Ready for something delicious?</h2>
        <p style={{ color: 'var(--muted)', marginTop: 8 }}>Explore our full menu or visit us in person.</p>
        <div style={{ marginTop: 16 }}>
          <Link to="/menu" className="btn">View Menu</Link>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}
