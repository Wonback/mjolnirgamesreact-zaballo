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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();
    const queryCollection = collection(dataBase, "productos");

    if (id) {
      const queryFiltrada = query(
        queryCollection,
        where("categoria", "==", id)
      );
      getDocs(queryFiltrada)
        .then((respuesta) =>
          setProducts(
            respuesta.docs.map((products) => ({
              id: products.id,
              ...products.data(),
            }))
          )
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((respuesta) =>
          setProducts(
            respuesta.docs.map((products) => ({
              id: products.id,
              ...products.data(),
            }))
          )
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <section>
      {loading ? <Loading /> : <ItemList productos={products} />}
    </section>
  );
};

export default ItemListContainer;
