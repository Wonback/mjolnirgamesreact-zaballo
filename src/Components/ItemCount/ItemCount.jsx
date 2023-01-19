import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, inicio, onAdd }) => {
  const [contador, setContador] = useState(inicio);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > inicio) {
      setContador(contador - 1);
    }
  };

  const HandleOnAdd = () => {
    onAdd(contador);
  };

  return (
    <div className="card d-inline-flex p-2 m-2">
      <div className="card-header">
        <label htmlFor="">Cantidad: {contador}</label>
      </div>
      <div className="card-body">
        
        <button onClick={restar} className="btn btn-outline-primary">
          {" "}
          -{" "}
        </button>
        <button onClick={sumar} className="btn btn-outline-primary">
          {" "}
          +{" "}
        </button>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-outline-success btn-block"
          onClick={HandleOnAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
