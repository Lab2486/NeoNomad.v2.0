import React from "react";
import CategoryCards from "../CategoryCards/CategoryCards";
import "./CategoryCardContainer.css";

const categoriImgs = [
  { title: "Remeras", imagen: "/ci1.jpg", link: "/remeras" },
  { title: "Buzos", imagen: "/ci2.jpg", link: "/buzos" },
  { title: "Pantalones", imagen: "/ci3.jpg", link: "/pantalones" },
  { title: "Accesorios", imagen: "/ci4.jpg", link: "/accesorios" },
];

function CategoryCardContainer() {
  return (
    <div className="HomeCardCont">
      {categoriImgs.map((category, index) => (
        <CategoryCards
          key={index}
          title={category.title}
          imagen={category.imagen}
          link={category.link}
        />
      ))}
    </div>
  );
}

export default CategoryCardContainer;
