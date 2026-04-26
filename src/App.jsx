// Componente principal de la app - Franyelis

import AppRouter from './routes/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App