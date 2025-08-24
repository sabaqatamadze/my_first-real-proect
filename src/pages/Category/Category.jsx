import ProductsLayout from "./../../layout/ProductsLayout/ProductsLayout";
import { getCategoryProducts } from "./../../helper/helper";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
import CartItem from "../../components/CartItem/cartItem";
const Category = () => {
  const { category_id } = useParams();

  const [categoryProducts, setCategoryProducts] = useState();
  useEffect(() => {
    getCategoryProducts(category_id).then((resp) =>
      setCategoryProducts(resp.products)
    );
  }, []);
  return (
    <div className="category-page">
      <p>
        Category &#10095; <b>{category_id}</b>
      </p>
      <ProductsLayout>
        {categoryProducts === undefined ? (
          <h1>Loading...</h1>
        ) : (
          categoryProducts.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              title={el.title}
              category={el.category}
              thumbnail={el.thumbnail}
              price={el.price}
              discountPercentage={el.discountPercentage}
            />
          ))
        )}
      </ProductsLayout>
    </div>
  );
};

export default Category;