import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <h1 className="hero__title">El arte de la paciencia</h1>
      <p className="hero__subtitle">
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        Un espacio para reconectar con la naturaleza.
      </p>
      <Link to="/contact" className="hero__cta">
        Reserva un taller
      </Link>
    </section>
  )
}

export default Home