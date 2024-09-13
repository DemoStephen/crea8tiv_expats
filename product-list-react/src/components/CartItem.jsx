import deleteBtnImg from "../assets/images/icon-remove-item.svg";

export default function CartItem({ name, quantity, price, onDeleteItem }) {
  return (
    <div className="cart-item">
      <p>
        <span className="cart-item-title"> {name} </span>
        <span className="cart-item-flex">
          <span className="cart-item-quantity">{quantity}x</span>
          <span className="cart-item-price">@${price.toFixed(2)}</span>
          <span className="cart-item-sum">
            ${(quantity * price).toFixed(2)}
          </span>
        </span>
      </p>
      <button type="button" onClick={() => onDeleteItem(name)}>
        <img src={deleteBtnImg} alt="delete" />
      </button>
    </div>
  );
}
