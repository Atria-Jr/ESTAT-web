import Footer from './components/Layout/footer.tsx'
import Navbar from './components/Layout/navbar.tsx'
import Routes from './Routes.tsx'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={Routes} />
      <Footer />
    </div>
  )
}

export default App
