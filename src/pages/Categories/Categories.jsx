import React, { useEffect, useState } from "react";
import CategoriesLayout from "./Layouts/CategoriesLayout";
import CategoryContainer from "./Components/CategoryContainer";
import "./Categories.css";
import { getCategoriesList } from "../../helper/helper";
const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategoriesList(0, 9).then((resp) => setCategories(resp));
  }, []);

  return (
    <div className="categories-page">
      <CategoriesLayout>
        {categories === undefined ? (
          <h1>Loading...</h1>
        ) : (
          categories.map((category) => (
            <CategoryContainer
              category={category.name}
              slug={category.slug}
              key={category.slug}
            />
          ))
        )}
      </CategoriesLayout>
    </div>
  );
};

export default Categories;
