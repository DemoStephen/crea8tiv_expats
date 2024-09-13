import { createPortal } from "react-dom";
import greenCheckmarkImg from "../assets/images/icon-order-confirmed.svg";
import ReceiptItem from "./ReceiptItem";

import { useRef } from "react";

export default function Modal({ orders, priceSum, isModalOpen, onReset }) {
  const dialog = useRef();

  if (isModalOpen) dialog.current.showModal();

  return createPortal(
    <dialog ref={dialog} className="dialog" onClose={() => onReset(dialog)}>
      <img src={greenCheckmarkImg} alt="green checkmark" />
      <h1 className="dialog-header">Order Confirmed</h1>
      <p className="dialog-text">We hope you enjoy your food!</p>

      <div className="receipt">
        {orders.map((order) => (
          <ReceiptItem
            key={order.name}
            name={order.name}
            quantity={order.quantity}
            price={order.price}
            imageSrc={order.imageSrc}
          />
        ))}
      </div>

      <p className="dialog-order-total">
        <span>Order Total</span>
        <span className="dialog-sum">${priceSum.toFixed(2)}</span>
      </p>

      <button type="button" onClick={() => onReset(dialog)}>
        start new order
      </button>
    </dialog>,
    document.getElementById("modal")
  );
}
