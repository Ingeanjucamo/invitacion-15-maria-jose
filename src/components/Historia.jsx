import "./Historia.css";

export default function Historia() {
  return (
    <section id="historia" className="historia seccion-plantilla plantilla-3">
      <div className="plantilla-contenido historia-contenido">
        <p className="etiqueta-princesa">PEQUEÑOS MOMENTOS</p>
        <h2>Mi Historia</h2>
        <p className="historia-subtitulo">GRANDES RECUERDOS</p>

        <div className="historia-fotos">
          <div className="foto foto-grande"><img src="/maria-jose.jpeg" alt="Foto de María José" /></div>
          <div className="foto foto-uno"><img src="/maria-bebe.jpeg" alt="Foto de bebé" /></div>
          <div className="foto foto-dos"><img src="/maria-jose-1.jpeg" alt="Foto de María José" /></div>
        </div>

        <p className="historia-texto">Hoy, la misma niña de grandes sueños está por cumplir uno de ellos... <span>🦋</span></p>
        <div className="historia-xv">MIS XV ♡</div>
      </div>
    </section>
  );
}
