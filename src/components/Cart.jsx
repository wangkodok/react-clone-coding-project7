import { useContext } from "react";

import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import { currencyFormatter } from "../utils/formatting";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>장바구니</h2>
      <ul>
        {cartCtx.items.map((item) => (
          // <CartItem key={item.id} {...item} />
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          취소
        </Button>
        <Button onClick={handleCloseCart}>결제하기</Button>
      </p>
    </Modal>
  );
}
