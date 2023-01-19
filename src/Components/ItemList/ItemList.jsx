import Item from "../Item/Item";
import "./itemlist.css";
const ItemList = ({ productos }) => {
  return (
    <div className="itemlist">
      {productos.map((productos) => (
        <Item key={productos.id} productos={productos} />
      ))}
    </div>
  );
};

export default ItemList;
