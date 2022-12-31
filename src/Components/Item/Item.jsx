import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./item.css";
const Item = ({ product }) => {
  return (
    <div className="itemlistsection">
      <Card style={{ width: "18rem" }} key={product.id}>
        <Card.Img variant="top" src={product.foto} className="card-img-top" />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>Precio: ${product.precio}</Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="primary">Comprar</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
