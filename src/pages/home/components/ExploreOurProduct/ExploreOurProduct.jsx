import  { useState, useEffect } from "react";
import { getAllProducts } from '../../../../helper/helper'
import CartItem from "../../../../components/Cartitem/cartitem";
import ExploreOurProducts from "../../../../layout/ExploreOurProducts/ExploreOurProducts";

function ExploreOurProduct() {
    const [ExploreOurProduct, setExploreOurProduct] = useState()

    useEffect(() => {
        getAllProducts(4,8).then((resp) => setExploreOurProduct(resp.products)
        )
    }, [])
  return (
    <>
      {ExploreOurProduct?.length === 0 ? (
        <h1>There are no any products</h1>
      ) : ExploreOurProduct === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <ExploreOurProducts>
          {
          ExploreOurProduct.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              title={el.title}
              thumbnail={el.thumbnail}
              price={el.price}
              discountPercentage={el.discountPercentage}
            />
          ))}
        </ExploreOurProducts>
      )}

    </>
  )
}

export default ExploreOurProduct