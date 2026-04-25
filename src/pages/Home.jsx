import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">

      <Header />

      <main className="hero">
        <h2>El arte de la paciencia</h2>

        <p>
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
          Un espacio para reconectar con la naturaleza.
        </p>

        <button>Reserva un Taller</button>
      </main>

      <Footer />

    </div>
  );
};

export default Home;