import Dessert from "./Dessert";

export default function Desserts({
  desserts,
  onDisplayQtyCtrl,
  onIncrement,
  onDecrement,
}) {
  return (
    <section className="desserts">
      <h1 className="desserts-header">Desserts</h1>
      <div>
        {desserts.map((dessert, index) => (
          <Dessert
            key={index}
            index={index}
            imageSrc={dessert.imageSrc}
            name={dessert.name}
            category={dessert.category}
            price={dessert.price}
            quantity={dessert.quantity}
            isSelected={dessert.isSelected}
            onDisplayQtyCtrl={onDisplayQtyCtrl}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </section>
  );
}
