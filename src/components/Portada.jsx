import "./Portada.css";

export default function Portada({ onAbrir }) {
  return (
    <section className="portada portada-plantilla">
      <img src="/plantillas/portada-castillo.png" alt="Escena de quinceañera" className="portada-fondo" />
      <div className="portada-velo" />
      <div className="portada-contenido">
        <p className="portada-frase">Hay momentos en la vida<br />que se vuelven inolvidables...</p>
        <div className="portada-corona">♕</div>
        <h1>MIS XV</h1>
        <h2>María José</h2>
        <div className="portada-apellido">VERA MORENO</div>
        <div className="portada-separador"><span></span><b>♥</b><span></span></div>
        <p className="portada-sueño">Acompáñame a celebrar<br />este sueño...</p>
        <button className="btn-abrir" onClick={onAbrir}>ABRIR INVITACIÓN <strong>›</strong></button>
      </div>
    </section>
  );
}
