import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
//import styles from "./styles.module.scss";
import accounting from "accounting";
import "./Products.css";

const Products = ({ product }) => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);

  const { imageUrl, productName, stars, listPrice, price, installments } =
    product;

  return (
    <div className="main">
      <article className="container-products">
        <div className="product">
          <div className="imgproduct">
            <img src={imageUrl} alt="pic" />
          </div>
          <div className="container-hover">
            <div className="name">
              <h6>{productName}</h6>
              <div className="rating">
                {Array(stars)
                  .fill()
                  .map((_, i) => (
                    <span>&#9733;</span>
                  ))}
              </div>
              <p>
                <br />
                {listPrice && (
                  <span className="listprice">de $ {listPrice}</span>
                )}
                <br />
              </p>
              <p className="price">
                por {accounting.formatMoney(parseFloat(price))}
              </p>

              {installments[0] && (
                <span className="installments">
                  {" "}
                  o en {installments[0]?.quantity} X de R${" "}
                  {installments[0]?.value}
                </span>
              )}
            </div>
            <div className="btn-shop">
              <button className="btn" onClick={() => AddItemToCart(product)}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Products;
