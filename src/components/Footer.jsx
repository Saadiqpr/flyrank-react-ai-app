export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Brew & Bloom</h4>
          <p>123 Artisan Ave, Coffee City — Open daily 7am–7pm</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <p>hello@brewandbloom.example</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Brew & Bloom</div>
    </footer>
  )
}
