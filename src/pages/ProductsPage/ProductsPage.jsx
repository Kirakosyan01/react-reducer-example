import React, { useState } from "react";
import "./ProductsPage.css";
import { MdDeleteForever } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import AnimationPageProducts from "../../components/AnimationPage/AnimationPageProducts";
import { Link, Outlet } from "react-router-dom";

export default function ProductsPage({ productsData, dispatch }) {

  return (
    <AnimationPageProducts>
      <section className="products_section">
        <div className="filterDiv">
        <button onClick={() => dispatch({type: "sortProductsByPrice"})} className="priceFilter">By Price <span>&#8593;</span></button>
        <button onClick={() => dispatch({type: "sortProductsByPriceToDown"})} className="priceFilter">By Price <span>&#8595;</span></button>
        <button onClick={() => dispatch({type: "sortProductsByRating"})} className="priceFilter">By Rating <span>&#8593;</span></button>
        <button onClick={() => dispatch({type: "sortProductsByRatingToDown"})} className="priceFilter">By Rating <span>&#8595;</span></button>
        </div>
        {productsData.map((product) => {
          return (
            <div key={product.id} className="product_div">
              <div>
              <button
                onClick={() =>
                  dispatch({ type: "deleteProduct", payload: product.id })
                }
                className="deleteBtn"
              >
                <MdDeleteForever className="deleteIcon" />
              </button>
              <img src={product.image} alt="Product image" className="imgBx" />
              <h3>{product.title}</h3>
              <p><span>Category:{' '}</span>{product.category}</p>
              <p><span>Price:{' '}</span>{product.price}{' '}$</p>
              <p><span>Rating:{' '}</span>{product.rating.rate}</p>
              </div>
              <Link to={`${product.id}`} className="seeMoreLink">Update Data<CiCircleMore className="seeMoreSvg"/></Link>
            </div>
          );
        })}
      </section>
    </AnimationPageProducts>
  );
}
