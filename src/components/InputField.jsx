const InputField = ({ type, placeholder, name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default InputField;