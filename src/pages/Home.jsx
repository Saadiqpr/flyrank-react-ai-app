import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useStore } from '../context/StoreContext'
import '../App.css'

export default function Home() {
  const { state } = useStore()
  const featured = state.products.filter((p) => p.featured).slice(0, 3)
  const seasonal = state.products.find((p) => p.id === 'p11') || featured[0]
  const favorites = state.products.slice(0, 6)

  return (
    <main>
      <header
        className="home-hero"
        role="img"
        aria-label="Barista pouring latte art in warm café setting"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(20,12,8,0.55), rgba(20,12,8,0.25)), url(${new URL('../assets/hero.png', import.meta.url).href})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-inner">
          <div className="hero-copy">
            <small className="eyebrow">SPECIALTY COFFEE • EST. 2024</small>
            <h1 className="display">Your daily ritual,
              <br />beautifully brewed.</h1>
            <p className="lead">At Brew & Bloom we craft seasonal coffees with careful attention to origin, roast, and hospitality. Slow down — there is a lot to savor.</p>

            <div className="hero-actions">
              <Link to="/menu" className="btn primary large">Explore the Menu</Link>
              <Link to="/about" className="btn secondary large">Our Story</Link>
            </div>

            <div className="hero-meta">
              <span>Open today: 7am–7pm</span>
              <span className="dot" aria-hidden>•</span>
              <span>123 Artisan Ave</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section featured-collection" aria-labelledby="featured-heading">
        <div className="section-inner">
          <div>
            <h2 id="featured-heading">Signature Drinks</h2>
            <p className="muted">Three of our house favorites, crafted with intention.</p>
          </div>

          <div className="featured-grid">
            {featured.map((p, i) => (
              <div key={p.id} className={`featured-item ${i === 0 ? 'large' : 'small'}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-split" aria-labelledby="our-story">
        <div className="story-inner">
          <figure className="story-image" aria-hidden>
            <img src="https://images.unsplash.com/photo-1527169402691-a7fe5d5b3d10?q=80&w=1600&auto=format&fit=crop&s=2" alt="Warm café interior with sunlight" />
          </figure>

          <div className="story-copy">
            <small className="eyebrow">OUR STORY</small>
            <h2 id="our-story">Born from curiosity, brewed for company.</h2>
            <p className="muted">We began as a small roastery with a simple curiosity — how good could a cup be if every step were considered? From origin relationships to daily service, we design each moment around flavor and care.</p>
            <p className="muted">Our team roasts weekly, trains thoughtfully, and builds menus that highlight seasonality. Whether you take your coffee to go or linger for an hour, we aim to make the cup memorable.</p>

            <ul className="highlights">
              <li><strong>5,000+</strong><span>cups served</span></li>
              <li><strong>12</strong><span>single origins</span></li>
              <li><strong>Daily</strong><span>fresh-baked pastries</span></li>
            </ul>

            <p style={{ marginTop: 12 }}><Link to="/about" className="btn secondary">Discover Our Story</Link></p>
          </div>
        </div>
      </section>

      <section className="section experience" aria-labelledby="experience-heading">
        <h3 id="experience-heading">The Brew & Bloom Experience</h3>
        <div className="experience-grid">
          <div className="exp-item">
            <div className="icon" aria-hidden>☕</div>
            <h4>Roasted with intention</h4>
            <p className="muted">Seasonal lots roasted to highlight sweetness and clarity.</p>
          </div>
          <div className="exp-item">
            <div className="icon" aria-hidden>🫖</div>
            <h4>Handcrafted daily</h4>
            <p className="muted">Thoughtful techniques and exacting standards.</p>
          </div>
          <div className="exp-item">
            <div className="icon" aria-hidden>🌿</div>
            <h4>Made for slow moments</h4>
            <p className="muted">Spaces and service to support focus and conversation.</p>
          </div>
          <div className="exp-item">
            <div className="icon" aria-hidden>🥐</div>
            <h4>Fresh from the oven</h4>
            <p className="muted">Pastries baked each morning with seasonal ingredients.</p>
          </div>
        </div>
      </section>

      <section className="section seasonal-feature" aria-labelledby="season-heading">
        <div className="seasonal-inner">
          <figure className="seasonal-media" aria-hidden>
            <img src={seasonal.image} alt={seasonal.name} />
          </figure>
          <div className="seasonal-copy">
            <small className="eyebrow">SEASONAL</small>
            <h3 id="season-heading">Summer at Brew & Bloom</h3>
            <p className="muted">Try our {seasonal.name}, a limited-time favorite that pairs single-origin espresso with house ingredients.</p>
            <div className="season-actions">
              <Link to={`/product/${seasonal.id}`} className="btn">View</Link>
              <Link to="/menu" className="btn secondary">Order</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section customer-favorites" aria-labelledby="favorites-heading">
        <h2 id="favorites-heading">Customer Favorites</h2>
        <p className="muted">Handpicked by our baristas and guests.</p>
        <div className="favorites-grid">
          {favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="section testimonials" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading">What people say</h2>
        <div className="test-grid">
          <blockquote className="quote">“An absolutely gorgeous cup — rich, balanced, and never rushed. A neighborhood gem.”<cite>— Alex R.</cite></blockquote>
          <blockquote className="quote">“The pastries are as thoughtful as the coffee. Perfect place to slow down.”<cite>— Rina S.</cite></blockquote>
          <blockquote className="quote">“Service and flavor both top-notch. I order the honey latte every time.”<cite>— Mateo L.</cite></blockquote>
        </div>
      </section>

      <section className="section final-cta final-hero">
        <div className="final-inner">
          <h2>Make today a little slower.</h2>
          <p className="muted">Explore our menu and find your new favorite ritual.</p>
          <div style={{ marginTop: 12 }}>
            <Link to="/menu" className="btn primary large">Explore our menu</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
