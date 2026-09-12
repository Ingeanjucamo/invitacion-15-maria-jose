import "./Ubicacion.css";

export default function Ubicacion() {
  const abrirMapa = () => window.open("https://www.google.com/maps/search/?api=1&query=Antiguas+Palmeras", "_blank");
  return (
    <section id="ubicacion" className="ubicacion seccion-plantilla plantilla-4">
      <div className="plantilla-contenido ubicacion-contenido">
        <p className="etiqueta-princesa">UNA NOCHE MÁGICA</p>
        <h2>El lugar</h2>
        <div className="tarjeta-lugar">
          <div className="pin-grande">♕</div>
          <h3>Antiguas Palmeras</h3>
          <p>Sábado 26 de septiembre de 2026<br />8:00 p. m.</p>
          <p className="ubicacion-frase">Una noche especial merece un lugar especial.</p>
          <button className="btn-mapa" onClick={abrirMapa}>VER UBICACIÓN ↗</button>
        </div>
      </div>
    </section>
  );
}
