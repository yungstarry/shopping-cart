import "../styles/ShopingCat.css";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingCart = ({
  cart,
  setCart,
  amountInCart,
  setAmountInCart,
  totalPrice,
}) => {
  const [productIds, setProductIds] = useState([]);

  useEffect(() => {
    const ids = cart.map(() => uniqid());
    setProductIds(ids);
  }, [cart]);

  const handleIncreaseQuantity = (item) => {
    item.quantity += 1;
    setAmountInCart(amountInCart + 1);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 0) return;
    item.quantity -= 1;
    setAmountInCart(amountInCart - 1);
  };

  const handleDelete = (item) => {
    setAmountInCart(amountInCart - item.quantity);
    let newCart = cart.filter((e) => e !== item);
    setCart(newCart);
  };

  const handleCartChange = useCallback(
    (newCart) => setCart(newCart),
    [setCart]
  );

  return (
    <div className="shopping-cart">
      {amountInCart < 1 && (
        <div className="empty-cart mb-[16rem]">
          <p>Your cart is empty</p>
          <p>Fill it up with our collection!</p>
          <Link to="/shop">Shop</Link>
        </div>
      )}
      {amountInCart > 0 && (
        <ul>
          <h1>My cart ({amountInCart} items)</h1>
          {cart.map((item, index) => {
            if (item.quantity === 0) return handleDelete(item);
            return (
              <li key={productIds[index]}>
                <Link to={`/shop/${productIds[index]}`}>
                  <img src={item.product.image} alt="product-image" />
                </Link>
                <div className="description">
                  <Link to={`/shop/${productIds[index]}`}>
                    <p className="name">{item.product.name}</p>
                  </Link>
                  <p className="size">{item.size}</p>
                  <div
                    className="delete"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                    <p>Remove</p>
                  </div>
                </div>
                <div className="add-and-remove">
                  <button onClick={() => handleDecreaseQuantity(item)}>
                    −
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(item)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
          <div className="total-price">
            <h3>Total</h3>

            <div className="sub-total">
              <p>Sub-total</p>
              <div>{totalPrice.toFixed(2)}</div>
            </div>
            <div className="shipping">
              <p>Shipping</p>
              <div>FREE</div>
            </div>
            <div className="total">
              <p>Total (VAT incl.)</p>
              <div>USD {totalPrice.toFixed(2)}</div>
            </div>
            <Link to="/404">ORDER</Link>
          </div>
          <div className="payment-method">
            <h3>We accept</h3>
            <div className="icons">
              <img
                src={require("../../assets/credit-card-logos.png")}
                alt="credit cards"
              />
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
