import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");

      return;
    }
    setMensaje(null);
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form action="" className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" className="" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupesto;
