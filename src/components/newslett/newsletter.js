import React, { useState } from "react";
import "./newsletter.css";

const News = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [nombreValid, setNombreValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [takeNombre, setTakeNombre] = useState(false);
  const [takeMail, setTakeMail] = useState(false);

  const handleNews = () => {
    if (nombreValid && emailValid) {
      const body = {
        email: email,
        name: nombre
      };
      fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((resp) => {
          alert(resp.message);
          setNombre("");
          setEmail("");
        })
        .catch((error) => alert("error ->", error));
    } else {
      setTakeNombre(true);
      setTakeMail(true);
    }
  };

  const validarEmail = (email) => {
    setEmail(email);
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    regex.test(email) ? setEmailValid(true) : setEmailValid(false);
  };

  const validarNombre = (name) => {
    setNombre(name);
    name !== "" ? setNombreValid(true) : setNombreValid(false);
  };

  return (
    <div className="contenedor_news">
      <h2>¡Únete a nuestras novedades y promociones!</h2>
      <div className="contenedor-form">
        <form onSubmit={handleNews}>
          <div className="contenedor-nombre">
            <input
              type="text"
              id="nombre"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => validarNombre(e.target.value)}
              onBlur={() => setTakeNombre(true)}
            />
            {takeNombre && !nombreValid && (
              <span className="error-field">Nombre inválido</span>
            )}
          </div>
          <div className="contenedor-mail">
          <input 
          type="mail"
          name="mail"
          id="mail"
          placeholder="Ingresa tu mail"
          value={email}
          onChange={e => validarEmail(e.target.value)}
          onBlur={() => setTakeMail(true)}
          />
          {takeMail && !emailValid && <span className="error-field">Email inválido</span>}
          </div>
          <button
            id="sus"
            type="submit"
            value="Suscribirme"
            onClick={e => {
              e.stopPropagation()
              e.preventDefault()
              handleNews()
            }}
            
            >Suscribirme</button>
        </form>
      </div>
    </div>
  );
};

export default News;
