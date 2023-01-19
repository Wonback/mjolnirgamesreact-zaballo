import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState, React } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetail";
import Loading from "../../Loading/Loading";

const ItemDetailContainer = () => {
  const [DetalleProduct, setDetalleProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();
    const queryDoc = doc(dataBase, "productos", id);
    getDoc(queryDoc)
      .then((respuesta) =>
        setDetalleProduct({ id: respuesta.id, ...respuesta.data() })
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? <Loading /> : <ItemDetail DetalleProduct={DetalleProduct} />}
    </>
  );
};

export default ItemDetailContainer;
