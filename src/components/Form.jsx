import { useState } from 'react'
import InputField from './InputField'
import Button from './Button'

const initialForm = {
  fullName: '',
  email: '',
  level: 'beginner',
  message: '',
}

function Form() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const reservations = JSON.parse(localStorage.getItem('zenith_reservations') || '[]')
    const newReservation = { ...formData, date: new Date().toISOString() }
    reservations.push(newReservation)
    localStorage.setItem('zenith_reservations', JSON.stringify(reservations))
    console.log('Reserva guardada:', newReservation)
    setSubmitted(true)
    setFormData(initialForm)
  }

  if (submitted) {
    return (
      <div className="booking-form__success">
        <p>¡Gracias! Tu solicitud fue enviada. Nos pondremos en contacto pronto.</p>
        <Button text="Enviar otra solicitud" onClick={() => setSubmitted(false)} />
      </div>
    )
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <InputField id="fullName" label="Nombre completo" name="fullName" value={formData.fullName} onChange={handleChange} required />
      <InputField id="email" label="Correo electrónico" type="email" name="email" value={formData.email} onChange={handleChange} required />

      <div className="booking-form__field">
        <label htmlFor="level">Nivel de experiencia</label>
        <select id="level" name="level" value={formData.level} onChange={handleChange}>
          <option value="beginner">Principiante (Nunca he tenido un Bonsái)</option>
          <option value="intermediate">Intermedio (Tengo algunos árboles)</option>
          <option value="advanced">Avanzado (Busco perfeccionar técnicas)</option>
        </select>
      </div>

      <div className="booking-form__field">
        <label htmlFor="message">Mensaje (Opcional)</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} />
      </div>

      <Button text="Enviar Solicitud" type="submit" />
    </form>
  )
}

export default Form