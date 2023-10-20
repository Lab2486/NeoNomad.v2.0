import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
function CategoryCards({ title, imagen, link }) {
  return (
    <Link
      to={link}
      className="card"
      style={{
        backgroundImage: `url(${imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="cateCardTitle">{title}</h2>
    </Link>
  );
}

export default CategoryCards;
