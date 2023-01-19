import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./item.css";
const Item = ({ productos }) => {
  return (
    <div className="itemlistsection" key={productos.id}>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={productos.foto} className="card-img-top" />
        <Card.Body>
          <Card.Title>{productos.nombre}</Card.Title>
          <Card.Text>Precio: ${productos.precio}</Card.Text>
          <Link to={`/item/${productos.id}`}>
            <Button variant="primary">Comprar</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
