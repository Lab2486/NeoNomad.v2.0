import "./ItemList.css";
import Item from "../Item/Item";
import { ropa } from "../../data/ropa";

function ItemList() {
  return (
    <div className="itemList">
      {ropa.map((objeto) => (
        <Item key={objeto.id} {...objeto} />
      ))}
    </div>
  );
}

export default ItemList;
