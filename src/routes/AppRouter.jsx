import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Philosophy from '../pages/Philosophy'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRouter