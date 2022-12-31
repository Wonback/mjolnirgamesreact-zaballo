import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [isCant, setIsCant] = useState(false);
  const { agregarCarrito } = useCartContext;
  const onAdd = (cantidad) => {
    agregarCarrito({ ...product, cantidad });
    setIsCant(true);
  };

  return (
    <div className="container border border-3 border-primary rounded">
      <div className="row">
        <div className="col">
          <img src={product.foto} alt="foto del producto" className="w-50" />
          <h3>Nombre: {product.nombre}</h3>
          <h3>Genero: {product.categoria}</h3>
          <h3>Precio: ${product.precio}</h3>
        </div>
        <div className="col">
          {isCant ? (
            <>
              <Link to="/carrito">
                <button className="btn btn-outline-primary">
                  Ir al carrtio
                </button>
              </Link>
              <Link to="/">
                <button className="btn btn-outline-success">
                  Seguir comprando{" "}
                </button>
              </Link>
            </>
          ) : (
            <ItemCount stock={5} initial={1} alAgregar={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
