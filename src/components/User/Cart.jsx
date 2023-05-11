import React, { useState, useEffect} from "react";
import "./Cart.css";
import { useUserContext } from "../Context/useUserContext";
import Loading from "../Home/Loading";

const Cart = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const {userDetails} = useUserContext();
  const [cartQuantity, setCartQuantity] = useState(
    cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsPending(true);
    fetch(`http://localhost:3000/tsir/purchase/cart/${userDetails._id}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        for (let i in data) {
          data[i].quantity = 1;
        }
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [userDetails._id]);

  useEffect(() => {
    setTotal(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const handleIncreaseQuantity = (item) => {
    item.quantity += 1;
    setCartQuantity(cartQuantity + 1);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartQuantity(cartQuantity - 1);
    }
  };

  const removeFromCart = async (item) => {
    try {
      const res = await fetch(
        `http://localhost:3000/tsir/purchase/cart/remove/${userDetails._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productIds: [item._id] }),
        }
      );
      const data = await res.json();
      setCartItems(data);
      setTotal(
        data.reduce((total, item) => total + item.price * item.quantity, 0)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      {isPending && <Loading />}
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div className="cart-item" key={item._id}>
          <img src={item.img} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.pname}</h3>
            <p>Price: ${item.price}</p>
            <div className="quantity">
              <button onClick={() => handleDecreaseQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
}
export default Cart;