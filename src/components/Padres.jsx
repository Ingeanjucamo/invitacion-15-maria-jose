import "./Padres.css";

export default function Padres() {
  return (
    <section id="padres" className="padres seccion-plantilla plantilla-1">
      <div className="plantilla-contenido padres-contenido">
        <p className="etiqueta-princesa">CON TODO NUESTRO AMOR</p>
        <h2>Mis padres</h2>
        <div className="ornamento">♡</div>
        <p className="padres-intro">Gracias por acompañarme y ser parte de este día tan especial.</p>
        <div className="padres-nombres">
          <div className="padre"><span>♥</span><strong>Edwin Alberto Vera</strong></div>
          <div className="padre"><span>♥</span><strong>Martha Bibiana Moreno</strong></div>
        </div>
        <p className="padres-frase">Con ustedes comenzó mi historia y con ustedes quiero celebrar este nuevo capítulo.</p>
      </div>
    </section>
  );
}
