import { useState, useEffect } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("")
  const [fecha, setFecha] = useState("")


  const [mensaje, setMensaje] = useState("");

  useEffect(() => {


    if(Object.keys(gastoEditar).length > 0){

        setNombre(gastoEditar.nombre);
        setCantidad(gastoEditar.cantidad);
        setCategoria(gastoEditar.categoria);
        setId(gastoEditar.id);
        setFecha(gastoEditar.fecha); 

    }

  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando formulario");
    if ([nombre, cantidad, categoria].includes("")) {
      console.log("fallo");
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 3000);
    } else {
      guardarGasto({ nombre, cantidad, categoria,id ,fecha});
    }
  };

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    

    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="ocultar-modal" onClick={ocultarModal} />
      </div>
      <form
        action=""
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>
          {gastoEditar.nombre
            ? "Editar Gasto"
            : "Nuevo Gasto"}
        </legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            type="text"
            id="nombre"
            placeholder="añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            type="number"
            id="cantidad"
            placeholder="Añade cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name=""
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Seleccione</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="casa">Casa</option>

            <option value="suscripciones">suscripciones</option>
          </select>
        </div>

        <input type="submit" value={gastoEditar.nombre
            ? "EDITAR GASTO"
            : "AÑADIR GASTO"} />
      </form>
    </div>
  );
};

export default Modal;
