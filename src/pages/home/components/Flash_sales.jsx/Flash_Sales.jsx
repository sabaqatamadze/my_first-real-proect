import  { useState, useEffect } from "react";
import { getAllProducts } from '../../../../helper/helper'
import FlashSales from "../../../../layout/FlashSales/FlashSales";
import CartItem from "../../../../components/CartItem/cartItem";

function Flash_Sales() {
    const [flashSales, setFlashSales] = useState()

    useEffect(() => {
        getAllProducts(0,4).then((resp) => setFlashSales(resp.products));
        
    }, [])
  return (
    <>
      {flashSales?.length === 0 ? (
        <h1>There are no any products</h1>
      ) : flashSales === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <FlashSales>
          {
          flashSales.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              thumbnail={el.thumbnail}
              title={el.title}
              price={el.price}
              discountPercentage={el.discountPercentage}
              />
          ))}
        </FlashSales>
      )}

    </>
  )
}

export default Flash_Sales