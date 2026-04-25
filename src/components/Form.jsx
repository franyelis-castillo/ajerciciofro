import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    email: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("form", JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
      />

      <InputField
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <Button text="Enviar" />
    </form>
  );
};

export default Form;