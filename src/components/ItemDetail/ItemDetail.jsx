import "./ItemDetail.css";
import CarouselDetail from "../CarouselDetail/CarouselDetail";
function ItemDetail({ id, name, image, description, price }) {
  return (
    <div key={id} className="ItemDetailWrapper">
      <div className="detailImgCont">
        <img className="detailImg" src={image} alt={name} />
      </div>
      <div className="detailBody">
        <div className="detailHeader">
          <p className="productDetailName">{name}</p>
          <p className="productDetailPrice">€ {price}</p>
        </div>
        <div className="detailInfo">
          <div className="productDescription">
            <p>{description}</p>
          </div>
          <div className="tallesBtns">
            <button className="tallesBtn">S</button>
            <button className="tallesBtn">M</button>
            <button className="tallesBtn">L</button>
            <button className="tallesBtn">XL</button>
          </div>
        </div>
        <div className="detailFooter">
          <button>agregar al carrito</button>
          <p>Aca va el contador</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
