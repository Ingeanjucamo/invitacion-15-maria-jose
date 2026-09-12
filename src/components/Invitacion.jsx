import { useEffect, useState } from "react";
import "./Invitacion.css";
import Historia from "./Historia";
import Padres from "./Padres";
import Ubicacion from "./Ubicacion";
import LluviaSobres from "./LluviaSobres";
import Confirmacion from "./Confirmacion";
import Final from "./Final";
import Musica from "./Musica";
import Menu from "./Menu";

export default function Invitacion() {
  const fechaEvento = new Date("2026-09-26T20:00:00");
  const calcularTiempo = () => {
    const diferencia = fechaEvento - new Date();
    if (diferencia <= 0) return { dias:0, horas:0, minutos:0, segundos:0 };
    return {
      dias: Math.floor(diferencia / 86400000),
      horas: Math.floor((diferencia / 3600000) % 24),
      minutos: Math.floor((diferencia / 60000) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
    };
  };
  const [tiempo,setTiempo]=useState(calcularTiempo());
  useEffect(()=>{const id=setInterval(()=>setTiempo(calcularTiempo()),1000);return()=>clearInterval(id)},[]);
  return (
    <div className="invitacion">
      <Musica /><Menu />
      <section id="inicio" className="inicio-invitacion seccion-plantilla plantilla-5">
        <div className="plantilla-contenido inicio-contenido">
          <p className="etiqueta-princesa">CON MUCHA ALEGRÍA</p>
          <h1>Mis 15 Años</h1>
          <h2>María José</h2>
          <div className="apellido">VERA MORENO</div>
          <div className="ornamento">♡</div>
          <p className="mensaje">Quiero compartir contigo este momento tan especial de mi vida. Tu presencia hará que esta noche sea aún más inolvidable.</p>
          <div className="datos-evento">
            <div><b>26</b><span>SEPTIEMBRE<br />2026</span></div>
            <div><b>8:00</b><span>P. M.</span></div>
            <div><b>♥</b><span>ANTIGUAS<br />PALMERAS</span></div>
          </div>
          <p className="cuenta-titulo">CUENTA REGRESIVA</p>
          <div className="contador">
            <div><strong>{tiempo.dias}</strong><span>Días</span></div><div><strong>{String(tiempo.horas).padStart(2,"0")}</strong><span>Horas</span></div><div><strong>{String(tiempo.minutos).padStart(2,"0")}</strong><span>Min.</span></div><div><strong>{String(tiempo.segundos).padStart(2,"0")}</strong><span>Seg.</span></div>
          </div>
        </div>
      </section>
      <Padres /><Historia /><Ubicacion /><LluviaSobres /><Confirmacion /><Final />
    </div>
  );
}
