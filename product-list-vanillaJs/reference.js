const desserts = document.querySelectorAll("[data-dessert]");
const emptyCartState = document.querySelector("[data-empty]");
const summaryState = document.querySelector("[data-summary]");
const orderNumber = document.querySelector("[data-orders]");
const cartItems = document.querySelector("[data-cartItems]");
const orderTotal = document.querySelector("[data-orderTotal]");
const confirmOrderBtn = document.querySelector("[data-confirmBtn]");
const modal = document.querySelector("[data-modal]");
const receipt = document.querySelector("[data-receipt]");
const total = document.querySelector("[data-total]");
const resetBtn = document.querySelector("[data-reset]");

let orders = [];

for (const dessert of desserts) {
  const dessertImg = dessert.querySelector("[data-dessert-image]");
  const addToCartBtn = dessert.querySelector("[data-add-to-cart-btn]");
  const quantityControl = dessert.querySelector("[data-quantityControl]");
  const increment = dessert.querySelector("[data-increment]");
  const decrement = dessert.querySelector("[data-decrement]");
  const quantity = dessert.querySelector("[data-quantity]");
  const dishTitle = dessert.querySelector("[data-dishName]");
  const dishPrice = dessert.querySelector("[data-price]");

  addToCartBtn.addEventListener("click", function () {
    this.classList.add("d-none");
    quantityControl.classList.remove("d-none");

    const title = dishTitle.dataset.dishname.trim();
    const price = +dishPrice.dataset.price.trim();
    const order = {
      title,
      price,
      quantity: 1,
      imgSrc: dishImg.src,
    };
    orders.push(order);
    updateBill();
  });

  increment.addEventListener("click", function () {
    let val = +quantity.innerText.trim();
    quantity.innerText = `${val + 1}`;

    const name = dishTitle.dataset.dishname.trim();
    const index = orders.findIndex(({ title }) => title === name);
    orders[index] = {
      ...orders[index],
      quantity: orders[index].quantity + 1,
    };
    updateBill();
  });

  decrement.addEventListener("click", function () {
    let val = +quantity.innerText.trim();
    if (val <= 1) return;
    quantity.innerText = `${val - 1}`;

    const name = dishTitle.dataset.dishname.trim();
    const index = orders.findIndex(({ title }) => title === name);
    orders[index] = {
      ...orders[index],
      quantity: orders[index].quantity - 1,
    };
    updateBill();
  });
}

function updateBill() {
  if (orders.length <= 0) {
    emptyCartState.classList.remove("d-none");
    summaryState.classList.add("d-none");
    cartItems.innerHTML = "";
    orderTotal.innerText = "$0.00"
    orderNumber.innerText = "(0)"
    return;
  }

  emptyCartState.classList.add("d-none");
  summaryState.classList.remove("d-none");

  let itemsTotal = 0;
  let priceTotal = 0;

  for (const order of orders) {
    itemsTotal = itemsTotal + order.quantity;
    priceTotal = priceTotal + order.quantity * order.price;
  }
  orderNumber.innerText = `(${itemsTotal})`;
  orderTotal.innerText = `$${priceTotal}`;

  cartItems.innerHTML = "";
  for (const order of orders) {
    const item = document.createElement("div");
    item.innerHTML = `
    <div data-item="${order.title}">
        <p>${order.title}</p>
        <p>${order.quantity}x @ $${order.price} $${
      order.quantity * order.price
    }</p>
    <button data-remove="${order.title}">remove</button>
    </div>
    `;
    cartItems.appendChild(item);
  }

  const deleteBtns = document.querySelectorAll("[data-remove]");
  for (const deleteBtn of deleteBtns) {
    const item = deleteBtn.dataset.remove.trim();
    deleteBtn.addEventListener("click", () => deleteItem(item));
  }
}

function deleteItem(itemTitle) {
  const newOrders = orders.filter(({ title }) => title !== itemTitle);

  orders = [...newOrders];

  updateBill();

  for (const dish of dishes) {
    const dishTitle = dish.querySelector("[data-dishName]");
    const title = dishTitle.dataset.dishname.trim();

    if (title === itemTitle) {
      const addToCartBtn = dish.querySelector("[data-addToCart]");
      const quantityControl = dish.querySelector("[data-quantityControl]");
      const quantity = dish.querySelector("[data-quantity]");

      addToCartBtn.classList.remove("d-none");
      quantityControl.classList.add("d-none");
      quantity.innerText = "1";
    }
  }
}

function confirmOrder() {
  const priceSum = orders.reduce((accumulator, { price, quantity }) => {
    return accumulator + price * quantity;
  }, 0);
  total.innerText = priceSum;

  receipt.innerHTML = "";
  for (const order of orders) {
    const item = document.createElement("div");
    item.innerHTML = `
    <img src="${order.imgSrc}"/>
    <p>${order.title}</p>
        <p>${order.quantity}x @ $${order.price} $${
      order.quantity * order.price
    }</p>
    `;
    receipt.appendChild(item);
  }
  modal.showModal();
}
confirmOrderBtn.addEventListener("click", () => confirmOrder());

function reset() {
  orders = [];
  updateBill();

  for (const dish of dishes) {
    const addToCartBtn = dish.querySelector("[data-addToCart]");
    const quantityControl = dish.querySelector("[data-quantityControl]");
    const quantity = dish.querySelector("[data-quantity]");

    addToCartBtn.classList.remove("d-none");
    quantityControl.classList.add("d-none");
    quantity.innerText = "1";
  }

  receipt.innerHTML = "";
  total.innerText = "";
  modal.close();
}
resetBtn.addEventListener("click", () => reset());
