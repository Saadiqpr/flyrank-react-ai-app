import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../App.css'

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
