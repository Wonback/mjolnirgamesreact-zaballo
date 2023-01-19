import { React, useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

const ItemDetail = ({ DetalleProduct }) => {
  const [isCant, setIsCant] = useState(false);
  const { agregarCarrito } = useCartContext();
  const onAdd = (cantidad) => {
    agregarCarrito({ ...DetalleProduct, cantidad });
    setIsCant(true);
  };

  return (
    <div
      key={DetalleProduct.id}
      className="container border border-3 border-primary rounded"
    >
      <div className="row ">
        <div className="itemlistsection col">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src={DetalleProduct.foto}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title>{DetalleProduct.nombre}</Card.Title>
              <Card.Text>Precio: ${DetalleProduct.precio}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="">
          {isCant ? (
            <div className="card d-inline-flex p-2 m-2">
              <NavLink to="/carrito">
                <button className="btn btn-outline-primary">
                  Ir al carrtio
                </button>
              </NavLink>
              <NavLink to="/">
                <button className="btn btn-outline-success">
                  Seguir comprando{" "}
                </button>
              </NavLink>
            </div>
          ) : (
            <ItemCount stock={DetalleProduct.stock} inicio={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
