const desserts = Array.from(document.querySelectorAll("[data-dessert]"));
// const desserts = document.querySelectorAll("[data-dessert]");
const itemSum = document.querySelector("[data-items-sum]");
const emptyCartState = document.querySelector("[data-empty]");
const cartOrders = document.querySelector("[data-cart-orders]");
const cartItems = document.querySelector("[data-cart-items]");
const priceTotal = document.querySelector("[data-price-total]");
const modal = document.querySelector("[data-modal]");
const confirmOrderBtn = document.querySelector("[data-confirm-btn]");
const receipt = document.querySelector("[data-receipt]");
const receiptTotal = document.querySelector("[data-total]");
const resetButton = document.querySelector("[data-reset]");

// stores [{title, price, quantity, imgSrc}]
let orders = [];

for (const dessert of desserts) {
  const addToCartBtn = dessert.querySelector("[data-add-to-cart-btn]");
  const quantityControl = dessert.querySelector("[data-quantity-control]");
  const quantity = dessert.querySelector("[data-quantity]");
  const increment = dessert.querySelector("[data-increment]");
  const decrement = dessert.querySelector("[data-decrement]");
  const title = dessert.querySelector("[data-dessert-title]");
  const price = dessert.querySelector("[data-dessert-price]");
  const imgSrc = dessert.querySelector("[data-dessert-image]").src;

  function changeButtonState() {
    this.classList.add("d-none");
    quantityControl.classList.remove("d-none");

    const order = {
      title: title.dataset.dessertTitle.trim(),
      price: +price.dataset.dessertPrice.trim(),
      quantity: +quantity.innerText.trim(),
      imgSrc,
    };

    orders.push(order);
    updateCart();
  }
  addToCartBtn.addEventListener("click", changeButtonState);

  function incrementQuantity() {
    quantity.innerText = +quantity.innerText + 1;

    let name = title.dataset.dessertTitle.trim();

    const index = orders.findIndex(({ title }) => title === name);

    orders[index] = {
      ...orders[index],
      quantity: orders[index].quantity + 1,
    };

    updateCart();
  }
  increment.addEventListener("click", incrementQuantity);

  function decrementQuantity() {
    if (quantity.innerText.trim() === "1") return;

    quantity.innerText = +quantity.innerText - 1;

    let name = title.dataset.dessertTitle.trim();

    const index = orders.findIndex(({ title }) => title === name);

    orders[index] = {
      ...orders[index],
      quantity: orders[index].quantity - 1,
    };

    updateCart();
  }
  decrement.addEventListener("click", decrementQuantity);
}

function updateCart() {
  if (orders.length <= 0) {
    emptyCartState.classList.remove("d-none");
    cartOrders.classList.add("d-none");
    cartItems.innerHTML = "";
    itemSum.innerText = `(0)`;
    priceTotal.innerText = "$0.00";
    return;
  }

  emptyCartState.classList.add("d-none");
  cartOrders.classList.remove("d-none");

  let sum = 0;
  let costTotal = 0;

  cartItems.innerHTML = "";
  for (const order of orders) {
    sum = sum + order.quantity;
    costTotal = costTotal + order.quantity * order.price;

    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML = `
      <p>
        <span class="cart-item-title">${order.title} </span>
        <span class="cart-item-flex">
            <span class="cart-item-quantity">${order.quantity}x</span>
            <span class="cart-item-price">@$${order.price.toFixed(2)}</span>
            <span class="cart-item-sum">$${(
              order.quantity * order.price
            ).toFixed(2)}</span>
        </span>
    </p>
        <button type="button" data-delete-button="${order.title}">
        <img src="./assets/images/icon-remove-item.svg" alt="" />
        </button>
      `;

    cartItems.appendChild(item);
  }

  itemSum.innerText = `(${sum})`;
  priceTotal.innerText = `$${costTotal.toFixed(2)}`;

  const deleteButtons = document.querySelectorAll("[data-delete-button]");

  for (const deleteBtn of deleteButtons) {
    const title = deleteBtn.dataset.deleteButton.trim();
    deleteBtn.addEventListener("click", () => deleteItem(title));
  }
}

function deleteItem(title) {
  const newOrders = orders.filter(
    ({ title: orderTitle }) => orderTitle !== title
  );

  orders = [...newOrders];
  updateCart();

  const dessertItem = desserts.find((dessert) => {
    const dessertTitle = dessert
      .querySelector("[data-dessert-title]")
      .dataset.dessertTitle.trim();

    return title === dessertTitle;
  });

  dessertItem
    .querySelector("[data-add-to-cart-btn]")
    .classList.remove("d-none");
  dessertItem.querySelector("[data-quantity-control]").classList.add("d-none");
  dessertItem.querySelector("[data-quantity]").innerText = "1";

  // for (const dessert of desserts) {
  //   const addToCartBtn = dessert.querySelector("[data-add-to-cart-btn]");
  //   const quantityControl = dessert.querySelector("[data-quantity-control]");
  //   const quantity = dessert.querySelector("[data-quantity]");
  //   const dessertTitle = dessert
  //     .querySelector("[data-dessert-title]")
  //     .dataset.dessertTitle.trim();

  //   if (title === dessertTitle) {
  //     addToCartBtn.classList.remove("d-none");
  //     quantityControl.classList.add("d-none");
  //     quantity.innerText = "1";
  //   }
  // }
}

function displayReceipt() {
  let sum = 0;

  receipt.innerHTML = "";
  for (const order of orders) {
    sum = sum + order.quantity * order.price;
    const item = document.createElement("div");
    item.classList.add("receipt-item");
    item.innerHTML = `
        <div class="receipt-block">
            <img src=${order.imgSrc} alt=${order.title} />
            <p class="receipt-flex">
              <span class="receipt-title">${order.title}</span>
              <span class="receipt-flex2">
                <span class="receipt-quantity">${order.quantity}x</span>
                <span class="receipt-price">@$${order.price.toFixed(2)}</span>
              </span>
            </p>
          </div>
          <p class="receipt-sum">$${(order.quantity * order.price).toFixed(
            2
          )}</p>
        `;

    receipt.appendChild(item);
  }

  receiptTotal.innerText = `$${sum.toFixed(2)}`;
  modal.showModal();
}
confirmOrderBtn.addEventListener("click", displayReceipt);

function reset() {
  for (const order of orders) {
    const dessertItem = desserts.find((dessert) => {
      const dessertTitle = dessert
        .querySelector("[data-dessert-title]")
        .dataset.dessertTitle.trim();

      return order.title === dessertTitle;
    });

    dessertItem
      .querySelector("[data-add-to-cart-btn]")
      .classList.remove("d-none");
    dessertItem
      .querySelector("[data-quantity-control]")
      .classList.add("d-none");
    dessertItem.querySelector("[data-quantity]").innerText = 1;
  }

  orders = [];
  updateCart();

  modal.close();

  // for (const dessert of desserts) {
  //   dessert.querySelector("[data-add-to-cart-btn]").classList.remove("d-none");
  //   dessert.querySelector("[data-quantity-control]").classList.add("d-none");
  //   dessert.querySelector("[data-quantity]").innerText = 1;
  // }
}
resetButton.addEventListener("click", reset);
modal.addEventListener("close", reset);
