import React from "react";
import "./CategoryContainer.css";
import { Link } from "react-router-dom";
const CategoryContainer = ({ category, slug }) => {
  return (
    <div className="category-container">
      <Link to={`/category/${slug}`} className="link">
        {category}
      </Link>
    </div>
  );
};

export default CategoryContainer;
