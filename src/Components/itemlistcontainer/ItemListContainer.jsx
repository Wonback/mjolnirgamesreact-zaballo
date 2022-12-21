import React from "react";
import { useState, useEffect } from "react";
import { mostrarproductos } from "./Fetch.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    mostrarproductos()
      .then((logrado) => setProductos(logrado))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="itemlistsection">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        productos.map((product) => (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.foto} />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>Precio: ${product.precio}</Card.Text>
              <Link to={`/item/${product.id}`}>
                <Button variant="primary">Comprar</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      )}
    </section>
  );
};

export default ItemListContainer;
