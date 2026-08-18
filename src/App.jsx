import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'
import Contact from './pages/Contact'
import { StoreProvider } from './context/StoreContext'

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="contact" element={<Contact />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
