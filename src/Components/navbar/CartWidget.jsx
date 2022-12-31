import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { cantidadTotal } = useCartContext();
  return (
    <div>
      <FaShoppingCart></FaShoppingCart>{" "}
      {cantidadTotal() !== 0 && cantidadTotal()}
    </div>
  );
};

export default CartWidget;
