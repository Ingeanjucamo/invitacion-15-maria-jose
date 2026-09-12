import { useState } from "react";
import "./Confirmacion.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [acompanantes, setAcompanantes] = useState("0");

  const [confirmado, setConfirmado] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  const confirmar = async (e) => {
    e.preventDefault();

    setError("");

    if (!nombre.trim() || !asistencia) {
      alert("Por favor completa tu nombre y confirma si asistirás.");
      return;
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      setError(
        "No están configuradas las variables de conexión con Supabase."
      );

      console.error("Faltan variables de Supabase:", {
        SUPABASE_URL,
        SUPABASE_ANON_KEY: SUPABASE_ANON_KEY ? "OK" : "FALTA",
      });

      return;
    }

    setGuardando(true);

    try {
      const datos = {
        nombre: nombre.trim(),
        asistencia: asistencia === "si",
        acompanantes:
          asistencia === "si" ? Number(acompanantes) : 0,
      };

      console.log("Enviando confirmación:", datos);

      const respuesta = await fetch(
        `${SUPABASE_URL}/rest/v1/confirmaciones_xv`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify(datos),
        }
      );

      console.log("Respuesta Supabase:", respuesta.status);

      if (!respuesta.ok) {
        const textoError = await respuesta.text();

        console.error("ERROR SUPABASE:", textoError);

        throw new Error(
          `Supabase respondió ${respuesta.status}: ${textoError}`
        );
      }

      console.log("✅ CONFIRMACIÓN GUARDADA CORRECTAMENTE");

      setConfirmado(true);
    } catch (error) {
      console.error("❌ ERROR GUARDANDO CONFIRMACIÓN:", error);

      setError(
        "No pudimos guardar tu confirmación. Por favor intenta nuevamente."
      );
    } finally {
      setGuardando(false);
    }
  };

  return (
    <section id="confirmacion" className="confirmacion">

      <div className="confirmacion-decoracion decoracion-1">
        ✦
      </div>

      <div className="confirmacion-decoracion decoracion-2">
        🦋
      </div>

      <div className="confirmacion-contenido">

        {!confirmado ? (
          <>
            <p className="confirmacion-superior">
              SERÁ UN HONOR CONTAR CONTIGO
            </p>

            <h2>
              ¿Nos acompañas?
            </h2>

            <div className="linea-confirmacion">
              <span></span>
              <span>♥</span>
              <span></span>
            </div>

            <p className="confirmacion-mensaje">
              Queremos compartir contigo
              <br />
              este momento tan especial.
            </p>

            <form
              className="formulario-confirmacion"
              onSubmit={confirmar}
            >

              {/* NOMBRE */}

              <div className="campo">

                <label htmlFor="nombre-invitado">
                  Tu nombre
                </label>

                <input
                  id="nombre-invitado"
                  name="nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={nombre}
                  onChange={(e) =>
                    setNombre(e.target.value)
                  }
                  autoComplete="name"
                />

              </div>

              {/* ASISTENCIA */}

              <div className="campo">

                <label>
                  ¿Asistirás?
                </label>

                <div className="opciones">

                  <button
                    type="button"
                    className={
                      asistencia === "si"
                        ? "opcion seleccionada"
                        : "opcion"
                    }
                    onClick={() =>
                      setAsistencia("si")
                    }
                  >
                    <span>♡</span>
                    Sí, asistiré
                  </button>

                  <button
                    type="button"
                    className={
                      asistencia === "no"
                        ? "opcion seleccionada"
                        : "opcion"
                    }
                    onClick={() =>
                      setAsistencia("no")
                    }
                  >
                    <span>♡</span>
                    No podré asistir
                  </button>

                </div>

              </div>

              {/* ACOMPAÑANTES */}

              {asistencia === "si" && (

                <div className="campo">

                  <label htmlFor="acompanantes">
                    Número de acompañantes
                  </label>

                  <select
                    id="acompanantes"
                    name="acompanantes"
                    value={acompanantes}
                    onChange={(e) =>
                      setAcompanantes(e.target.value)
                    }
                  >
                    <option value="0">
                      Solo yo
                    </option>

                    <option value="1">
                      1 acompañante
                    </option>

                    <option value="2">
                      2 acompañantes
                    </option>

                    <option value="3">
                      3 acompañantes
                    </option>

                    <option value="4">
                      4 acompañantes
                    </option>

                  </select>

                </div>

              )}

              {/* ERROR */}

              {error && (
                <div
                  style={{
                    color: "#8b3d8f",
                    background: "#f8eafa",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    marginBottom: "15px",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}

              {/* BOTÓN */}

              <button
                className="btn-confirmar"
                type="submit"
                disabled={guardando}
              >

                <span>
                  {guardando
                    ? "GUARDANDO..."
                    : "CONFIRMAR ASISTENCIA"}
                </span>

                <span>
                  ♥
                </span>

              </button>

            </form>
          </>
        ) : (

          /* CONFIRMACIÓN EXITOSA */

          <div className="confirmacion-exitosa">

            <div className="check-confirmacion">
              ✓
            </div>

            <p className="gracias-pequeno">
              ¡MUCHAS GRACIAS!
            </p>

            <h2>
              {asistencia === "si"
                ? "Te esperamos ♥"
                : "Te vamos a extrañar ♥"}
            </h2>

            <p>
              {asistencia === "si"
                ? `Hemos registrado tu asistencia${
                    acompanantes !== "0"
                      ? ` con ${acompanantes} acompañante${
                          acompanantes !== "1"
                            ? "s"
                            : ""
                        }`
                      : ""
                  }.`
                : "Gracias por avisarnos con anticipación."}
            </p>

            <div className="corazon-final">
              ♡
            </div>

            <button
              className="btn-volver"
              onClick={() => {
                setConfirmado(false);
                setError("");
              }}
            >
              MODIFICAR RESPUESTA
            </button>

          </div>

        )}

      </div>

    </section>
  );
}