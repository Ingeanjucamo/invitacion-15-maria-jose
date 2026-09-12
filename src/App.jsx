import { useState } from "react";

import Portada from "./components/Portada";
import Invitacion from "./components/Invitacion";

function App() {

  const [abierta, setAbierta] = useState(false);

  return (

    <>

      {!abierta ? (

        <Portada
          onAbrir={() => setAbierta(true)}
        />

      ) : (

        <Invitacion />

      )}

    </>

  );
}

export default App;