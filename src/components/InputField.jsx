function InputField({ id, label, type = 'text', name, value, onChange, required }) {
  return (
    <div className="booking-form__field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

export default InputField