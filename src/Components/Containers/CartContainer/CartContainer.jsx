import { useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import "./cart.css";

const CartContainer = () => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [id, setId] = useState("");
  const [dataForm, setFormData] = useState({
    name: "",
    phone: "",
    email1: "",
    email2: "",
  });

  const {
    cartList,
    vaciarCarrito,
    precioTotal,
    eliminarPorItem,
    cantidadTotal,
  } = useCartContext();

  //////////////////////////////////////////

  const addOrder = async (e) => {
    e.preventDefault();
    const order = {};
    order.compra = dataForm;
    order.precio = precioTotal();
    order.items = cartList.map(({ id, precio, nombre, cantidad }) => ({
      id,
      precio,
      nombre,
      cantidad,
    }));

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    await addDoc(orderCollection, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => console.log("Finalizado"));

    const queryCollection = collection(db, "productos");
    const actualizarStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(actualizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setFormData({
          name: "",
          phone: "",
          email1: "",
          email2: "",
        });
        vaciarCarrito();
      });
    batch.commit();
  };

  ////////////////////////////////////

  const handleOnChange = (e) => {
    setFormData({ ...dataForm, [e.target.name]: e.target.value });
    setEmail(e.target.value);
    if (regex.test(email) === true) {
      setError("Ingrese los datos correctos");
    } else {
      setError("");
      return false;
    }
  };

  const submit = () => {
    if (email != "") {
      setMensaje(", el detalle de su compra fue enviada a " + email);
    } else {
      setError("Ingrese los datos correctos");
    }
  };

  return (
    <div className="carrito">
      {cartList.length !== 0 ? (
        <div>
          {cartList.map((prod) => (
            <div key={prod.id}>
              <div className="w-50">
                <img src={prod.foto} alt="" className="w-25" />
              </div>
              {prod.nombre} - Categoria: {prod.categoria} - Precio: $
              {prod.precio} - Cantidad: {prod.cantidad}
              <button
                onClick={() => eliminarPorItem(prod.id)}
                className="btn btn-danger"
              >
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"></path>
                </svg>{" "}
              </button>
            </div>
          ))}
          <button className="btn btn-danger" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
          <div className="card col-md-4 mt-5 m-auto">
            <form className="formulario" onSubmit={addOrder}>
              <h4 className="fuente-formulario">Resumen de tu compra</h4>

              <h5 className="fuente-formulario">
                Productos totales: {cantidadTotal()}
              </h5>
              <h5 className="fuente-formulario">
                Precio Total: ${precioTotal()}
              </h5>
              <h6 className="fuente-formulario">Ingrese sus datos:</h6>
              <input
                className="form-control"
                type="text"
                onChange={handleOnChange}
                name="name"
                value={dataForm.name}
                placeholder="Ingrese su nombre"
              />

              <input
                className="form-control"
                type="text"
                onChange={handleOnChange}
                name="phone"
                value={dataForm.phone}
                placeholder="Ingrese teléfono"
              />

              <input
                className="form-control"
                type="text"
                onChange={handleOnChange}
                name="email1"
                value={dataForm.email1}
                placeholder="Ingrese email"
              />

              <input
                className="form-control"
                type="text"
                onChange={handleOnChange}
                name="email2"
                value={dataForm.email2}
                placeholder="Reingrese email"
              />

              {regex.test(email) === true &&
              dataForm.email1 === dataForm.email2 &&
              dataForm.name != "" &&
              dataForm.phone != "" ? (
                <button className="btn btn-success" onClick={submit}>
                  Finalizar y comprar
                </button>
              ) : (
                <h6 className="text-danger validMail">{error}</h6>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h2>Carrito vacio, vuelva al home</h2>
          {id !== "" && `El numero de orden de compra es : ${id} ${mensaje}`}
          <Link to="/">
            {" "}
            <button type="button" className="btn-seguir btn btn-secondary">
              Home
            </button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
