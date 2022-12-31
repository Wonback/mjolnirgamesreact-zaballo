import { useContext, useState, createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

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

  const precioTotal = () =>
    cartList.reduce(
      (contador, producto) => (contador += producto.precio * producto.stock),
      0
    );

  // monto total
  const cantidadTotal = () =>
    cartList.reduce((contador, producto) => (contador += producto.stock), 0);

  // vaciar todo el carro
  const vaciarCarrito = () => {
    setCartList([]);
  };

  //eliminar individual
  const eliminarPorItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        precioTotal,
        cantidadTotal,
        vaciarCarrito,
        eliminarPorItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
