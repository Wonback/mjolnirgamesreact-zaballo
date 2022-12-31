import React from "react";
import { useState } from "react";

const ItemCount = ({ stock = 5, initial = 1, alAgregar }) => {
  const [contador, setContador] = useState(initial);
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  return (
    <div className="card m-5">
      <div className="card-header">
        <label htmlFor="">{contador}</label>
      </div>
      <div className="card-body">
        <button onClick={sumar} className="btn btn-outline-primary">
          {" "}
          +{" "}
        </button>
        <button onClick={restar} className="btn btn-outline-primary">
          {" "}
          -{" "}
        </button>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-outline-success btn-block"
          onClick={() => alAgregar(contador)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
