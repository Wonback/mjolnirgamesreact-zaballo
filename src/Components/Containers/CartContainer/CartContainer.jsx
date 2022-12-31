import { React, useState } from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import "./cart.css";

const CartContainer = () => {
  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } =
    useCartContext();

  return (
    <div className="carrito">
      {cartList.length !== 0 ? (
        <>
          {cartList.map((prod) => (
            <div key={prod.id}>
              <div className="w-50">
                <img src={prod.foto} alt="" className="w-25" />
              </div>
              Nombre: {prod.nombre} - Categoria: {prod.categoria} - precio:{" "}
              {prod.precio} - cantidad: {prod.cantidad}
              <button
                onClick={() => eliminarPorItem(prod.id)}
                className="btn btn-danger"
              >
                {" "}
                X{" "}
              </button>
            </div>
          ))}
          <h4>El precio total es: {precioTotal()} </h4>

          <button className="btn btn-danger" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </>
      ) : (
        <>
          <h2>Carrito vacio, vuelva al home</h2>
          <Link to="/"> Home </Link>
        </>
      )}
    </div>
  );
};

export default CartContainer;
