import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { id } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.imageUrl} alt={item.productName} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.productName}</p>
          <div className={styles.buttons}>
            <button onClick={() => AddItemToCart(item)}>AGREGAR + 1</button>
            <button onClick={() => DeleteItemToCart(id)}>ELIMINAR -1</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
