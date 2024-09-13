import addToCartBtnImg from "../assets/images/icon-add-to-cart.svg";

export default function Dessert({
  index,
  imageSrc,
  name,
  category,
  price,
  quantity,
  isSelected,
  onDisplayQtyCtrl,
  onDecrement,
  onIncrement,
}) {
  return (
    <article className="dessert">
      <figure>
        <img className="dessert-image" src={imageSrc} alt={name} />
        {!isSelected ? (
          <button
            className="dessert-cart-btn"
            type="button"
            onClick={() => onDisplayQtyCtrl(index)}
          >
            <img src={addToCartBtnImg} alt="add to cart" />
            <span>Add to Cart</span>
          </button>
        ) : (
          <div className="dessert-quantity-control">
            <button
              className="dessert-decrement"
              type="button"
              onClick={() => onDecrement(index)}
            >
              -
            </button>
            <p className="dessert-quantity">{quantity}</p>
            <button
              className="dessert-increment"
              type="button"
              onClick={() => onIncrement(index)}
            >
              +
            </button>
          </div>
        )}
        <figcaption>{category}</figcaption>
      </figure>

      <p className="dessert-title">{name}</p>
      <p className="dessert-price">${price.toFixed(2)}</p>
    </article>
  );
}
