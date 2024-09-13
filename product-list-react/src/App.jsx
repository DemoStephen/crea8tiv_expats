import Desserts from "./components/Desserts.jsx";
import Cart from "./components/Cart.jsx";
import Modal from "./components/Modal.jsx";

import { useState } from "react";
import products from "./util/products.js";

function App() {
  const [desserts, setDesserts] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let orders = [];
  let itemSum = 0;
  let priceSum = 0;

  for (const dessert of desserts) {
    if (dessert.isSelected) {
      orders.push(dessert);
      itemSum = itemSum + dessert.quantity;
      priceSum = priceSum + dessert.quantity * dessert.price;
    }
  }

  function handleDisplayQtyCtrl(index) {
    setDesserts((prevDesserts) => {
      const newDesserts = [...prevDesserts];

      newDesserts[index] = {
        ...newDesserts[index],
        isSelected: true,
      };

      return newDesserts;
    });
  }

  function handleIncrement(index) {
    setDesserts((prevDesserts) => {
      const newDesserts = [...prevDesserts];

      newDesserts[index] = {
        ...newDesserts[index],
        quantity: newDesserts[index].quantity + 1,
      };

      return newDesserts;
    });
  }

  function handleDecrement(index) {
    setDesserts((prevDesserts) => {
      if (prevDesserts[index].quantity <= 1) return prevDesserts;

      const newDesserts = [...prevDesserts];

      newDesserts[index] = {
        ...newDesserts[index],
        quantity: newDesserts[index].quantity - 1,
      };

      return newDesserts;
    });
  }

  function handleDeleteItem(name) {
    setDesserts((prevDesserts) => {
      const newDesserts = [...prevDesserts];

      const index = newDesserts.findIndex(
        ({ name: dessertName }) => dessertName === name
      );

      newDesserts[index] = {
        ...newDesserts[index],
        quantity: 1,
        isSelected: false,
      };

      return newDesserts;
    });
  }

  function handleReset(dialog) {
    setIsModalOpen(false);
    setDesserts(products);

    dialog.current.close()
  }

  return (
    <>
      <main className="main">
        <Desserts
          desserts={desserts}
          onDisplayQtyCtrl={handleDisplayQtyCtrl}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <Cart
          onDeleteItem={handleDeleteItem}
          orders={orders}
          itemSum={itemSum}
          priceSum={priceSum}
          onDisplayModal={() => setIsModalOpen(true)}
        />
      </main>
      <Modal
        orders={orders}
        priceSum={priceSum}
        isModalOpen={isModalOpen}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
