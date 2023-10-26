import React, { useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  const { state } = useContext(ContextGlobal);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleName = (e) => {
    const nameValue = e.target.value;

    if (nameValue.trim() === "" || nameValue.trim() !== nameValue || nameValue.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: false,
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      name: nameValue,
    }));
  };

  const handleEmail = (e) => {
    const emailValue = e.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: false,
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      email: emailValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.name || errors.email) {
      setSuccessMessage("El formulario no se completó de forma correcta.");
    } else {
      setSuccessMessage(`¡Muchas gracias por contactarnos, ${formData.name}! Responderemos a la brevdad.`);
    }

    setTimeout(() => {
      setSuccessMessage("");
    }, 10000);
  };

  return (
    <div className={state.theme}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ingrese su nombre." value={formData.name} onChange={handleName} />
        {errors.name && <span className="error-message">El nombre ingresado no es válido.</span>}

        <input type="email" name="email" placeholder="Ingrese su correo electrónico." value={formData.email} onChange={handleEmail} />
        {errors.email && <span className="error-message">El correo electrónico ingresado no es válido.</span>}

        <button type="submit">Enviar</button>
      </form>
      {successMessage && <div className="error-message">{successMessage}</div>}
    </div>
  );
};

export default Form;