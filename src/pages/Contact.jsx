import Form from '../components/Form'

function Contact() {
  return (
    <section className="page-section">
      <h1 className="page-section__title">Reserva un Taller</h1>
      <p className="page-section__intro">
        Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
      </p>
      <Form />
    </section>
  )
}

export default Contact