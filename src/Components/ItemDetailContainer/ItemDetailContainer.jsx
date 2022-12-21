import React from "react";
import { useEffect, useState } from "react";
import { mostrarproductos } from "../itemlistcontainer/Fetch";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    mostrarproductos()
      .then((respuestaProducto) =>
        setProduct(respuestaProducto.find((prod) => prod.id == id))
      )
      .catch((error) => console.log(error));
  });
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
          <ItemCount></ItemCount>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
