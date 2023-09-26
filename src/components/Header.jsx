import NuevoPresupesto from "./NuevoPresupesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
}) => {
  return (
    <header>
      <h1>Planificador de gasto</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
            gastos={gastos}
            presupuesto={presupuesto}
        />
      ) : (
        <NuevoPresupesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
