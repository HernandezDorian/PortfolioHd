import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [CodeError, setCodeError] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    switch (CodeError) {
      case 0:
        setErrorMsg("");
        break;
      case 400:
        setErrorMsg("Le formulaire à un soucis");
        break;
      default:
        setErrorMsg("Une erreur inconnue s'est produite");
        break;
    }
  }, [CodeError]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zivrshm",
        "template_uqjktk7",
        e.target,
        "1L6kXy1XiNzSwv8EL"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setCodeError(0); // Reset CodeError to 0 on successful email send
        },
        (error) => {
          setCodeError(error.status);
        }
      );
  }

  return (
    <form className="Footer__contact__form" onSubmit={sendEmail}>
      <input
        className="Footer__contact__form__input"
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom"
      />
      <input
        className="Footer__contact__form__input"
        type="email"
        id="email"
        name="email"
        placeholder="Votre email"
      />
      <textarea
        className="Footer__contact__form__input"
        id="message"
        name="message"
        placeholder="Votre message"
      ></textarea>
      {CodeError !== 0 && (
        <p className="Footer__contact__form__error">{errorMsg}</p>
      )}
      <button type="submit" className="button">
        Envoyer
      </button>
    </form>
  );
}
