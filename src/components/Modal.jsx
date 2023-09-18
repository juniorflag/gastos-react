import { useState } from "react";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);

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
      >
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            type="text"
            id="nombre"
            placeholder="añade el nombre del gasto"
          />
        </div>

        <div className="campo">

          <label htmlFor="cantidad">Cantidad</label>

          <input type="number" id="cantidad" placeholder="Añade cantidad" />

        </div>

        <div className="campo">

          <label htmlFor="categoria">Categoria</label>
          <select name="" id="categoria" >
                <option value="">Seleccione</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">suscripciones</option>



          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
