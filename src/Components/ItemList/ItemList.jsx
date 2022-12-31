import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";
const ItemList = ({ product }) => {
  return (
    <div className="itemlist">
      {product.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
