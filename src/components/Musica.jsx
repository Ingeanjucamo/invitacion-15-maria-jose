import { useEffect, useRef, useState } from "react";
import "./Musica.css";

export default function Musica() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  useEffect(() => {
    const iniciarMusica = async () => {
      try {
        await audioRef.current.play();
        setReproduciendo(true);
      } catch (error) {
        // Los celulares pueden bloquear el autoplay.
        setReproduciendo(false);
      }
    };

    iniciarMusica();
  }, []);

  const cambiarMusica = async () => {
    if (!audioRef.current) return;

    if (reproduciendo) {
      audioRef.current.pause();
      setReproduciendo(false);
    } else {
      try {
        await audioRef.current.play();
        setReproduciendo(true);
      } catch (error) {
        console.log("No se pudo reproducir la música");
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/musica/cancion.mp3"
        loop
      />

      <button
        className={`boton-musica ${reproduciendo ? "sonando" : ""}`}
        onClick={cambiarMusica}
        aria-label="Controlar música"
      >
        {reproduciendo ? "♫" : "🔇"}
      </button>
    </>
  );
}