import { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [abierto, setAbierto] = useState(false);

  const irA = (seccion) => {
    const elemento = document.getElementById(seccion);

    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setAbierto(false);
  };

  return (
    <div className="menu-flotante">
      {abierto && (
        <div className="menu-opciones">
          <button onClick={() => irA("inicio")}>
            🏠 <span>Inicio</span>
          </button>

          <button onClick={() => irA("padres")}>
            👑 <span>Mis padres</span>
          </button>

          <button onClick={() => irA("historia")}>
            💜 <span>Mi historia</span>
          </button>

          <button onClick={() => irA("ubicacion")}>
            📍 <span>Ubicación</span>
          </button>

          <button onClick={() => irA("sobres")}>
            💌 <span>Lluvia de sobres</span>
          </button>

          <button onClick={() => irA("confirmacion")}>
            📝 <span>Confirmar asistencia</span>
          </button>

          <button onClick={() => irA("final")}>
            ✨ <span>Final</span>
          </button>
        </div>
      )}

      <button
        className={`boton-menu ${abierto ? "activo" : ""}`}
        onClick={() => setAbierto(!abierto)}
        aria-label="Abrir menú"
      >
        {abierto ? "×" : "☰"}
      </button>
    </div>
  );
}