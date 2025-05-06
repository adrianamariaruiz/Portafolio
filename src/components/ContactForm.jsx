import React, { useState, useEffect, useCallback } from "react";
import { submitForm } from "../helpers/submitForm";
import Modal from "./Modal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const expresions = {
    userEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
  };

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "El campo del nombre está vacío";
    if (!message.trim()) newErrors.message = "El campo del mensaje está vacío";
    if (!email.trim()) {
      newErrors.email = "El campo del email está vacío";
    } else if (!expresions.userEmail.test(email)) {
      newErrors.email = "El formato del email es incorrecto";
    }
    return newErrors;
  }, [name, email, message]);

  useEffect(() => {
    if (!isSubmitted) return;
    const newErrors = validateForm();
    setErrors(newErrors);
  }, [name, email, message, isSubmitted, validateForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const result = await submitForm({ name, email, message });

      if (result.success) {
        setOpen(true);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
        setIsSubmitted(false);
      } else {
        setErrors({ submit: result.error });
        setOpen(false);
      }
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="contact__form">
      <form
        className="form__content"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="form__title">Contáctame</h2>

        <div className="input__cont">
          <input
            className={`input__form ${
              errors.name ? "input__error" : name ? "input__validate" : ""
            }`}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="labelText">
            Nombre
          </label>
        </div>
        {errors.name && <p className="message__error">{errors.name}</p>}

        <div className="input__cont">
          <input
            className={`input__form ${
              errors.email ? "input__error" : email ? "input__validate" : ""
            }`}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="labelText">
            Email
          </label>
        </div>
        {errors.email && <p className="message__error">{errors.email}</p>}

        <div className="input__cont">
          <textarea
            className={`textarea__form ${
              errors.message
                ? "textarea__error"
                : message
                ? "input__validate"
                : ""
            }`}
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor="message" className="labelText">
            Deja tu mensaje
          </label>
        </div>
        {errors.message && <p className="message__error">{errors.message}</p>}

        <button type="submit" className="btn__primary">
          Enviar
        </button>
      </form>

      <Modal open={open} closeModal={closeModal} />
    </div>
  );
};

export default ContactForm;
