import { useState, useEffect } from "react";
import { getAllProducts } from "../../../../helper/helper";
import BestSellingProducts from "../../../../layout/BestSellingProducts/BestSellingProducts";
import CartItem from "../../../../components/CartItem/cartItem";

function BestSellingProduct() {
  const [bestSellingProducts, setbestSellingProducts] = useState();

  useEffect(() => {
    getAllProducts(4, 4).then((resp) => setbestSellingProducts(resp.products));
  }, []);
  return (
    <>
      {bestSellingProducts?.length === 0 ? (
        <h1>There are no any products</h1>
      ) : bestSellingProducts === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <BestSellingProducts>
          {bestSellingProducts.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              title={el.title}
              thumbnail={el.thumbnail}
              price={el.price}
              discountPercentage={el.discountPercentage}
            />
          ))}
        </BestSellingProducts>
      )}
    </>
  );
}

export default BestSellingProduct;
