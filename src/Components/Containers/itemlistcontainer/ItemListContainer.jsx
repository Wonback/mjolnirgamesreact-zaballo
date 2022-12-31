import { useState, useEffect, React } from "react";
import Loading from "../../Loading/Loading";
import ItemList from "../../ItemList/ItemList.jsx";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const id = useParams();

  useEffect(() => {
    const dataBase = getFirestore();
    const queryCollection = collection(dataBase, "productos");
    const queryFiltrada = query(queryCollection, where("categoria", "==", id));
    getDocs(queryCollection)
      .then((respuesta) =>
        setProductos(
          respuesta.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        )
      )
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [id]);

  return (
    <section>
      {loading ? <Loading /> : <ItemList product={productos} />}
    </section>
  );
};

export default ItemListContainer;
