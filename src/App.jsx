import ItemListContainer from "./Components/Containers/itemlistcontainer/ItemListContainer";
import NavBar from "./Components/navbar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CartContainer from "./Components/Containers/CartContainer/CartContainer";
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./Context/CartContext";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
