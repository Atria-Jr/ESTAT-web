import Navbar from './components/Layout/navbar'
import Footer from './components/Layout/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
