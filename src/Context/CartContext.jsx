import { useContext, useState, createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => {
  useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (product) => {
    const idx = cartList.findIndex((prod) => prod.id === product.id);

    if (idx !== -1) {
      cartList[idx].cant += product.cant;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, product]);
    }
  };

  return (
    <CartContext.Provider value={{ cartList, agregarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
