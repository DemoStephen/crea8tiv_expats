import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import carbonNeutralImg from "../assets/images/icon-carbon-neutral.svg";
import CartItem from "./CartItem";

export default function Cart({
  onDeleteItem,
  orders,
  itemSum,
  priceSum,
  onDisplayModal
}) {
  return (
    <aside className="cart">
      <h1>
        Your Cart<span>({itemSum})</span>
      </h1>

      {orders.length <= 0 ? (
        <div>
          <img src={emptyCartImg} alt="empty cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-orders">
          <div className="cart-items">
            {orders.map((order) => (
              <CartItem
                key={order.name}
                name={order.name}
                quantity={order.quantity}
                price={order.price}
                onDeleteItem={onDeleteItem}
              />
            ))}
          </div>

          <div className="cart-footer">
            <p className="cart-order-total">
              <span>Order Total</span>
              <span className="cart-footer-total">${priceSum.toFixed(2)}</span>
            </p>
            <p className="carbon-neutral">
              <img src={carbonNeutralImg} alt="" />
              <span>
                This is a <strong>carbon-neutral</strong> delivery
              </span>
            </p>
            <button type="button" onClick={onDisplayModal}>Confirm Order</button>
          </div>
        </div>
      )}
    </aside>
  );
}
