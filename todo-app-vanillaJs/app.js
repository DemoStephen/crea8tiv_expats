const form = document.querySelector("[data-form]");
const checkbox = document.querySelector("[data-form-checkbox]");
const textInput = document.querySelector("[data-form-text-input]");

const listItemsParent = document.querySelector("[data-list-items]");
const itemsCount = document.querySelector("[data-items-count]");
const clearCompletedBtn = document.querySelector("[data-delete-completed]");


const allItemsBtn = document.querySelector("[data-all-items-btn]");
const activeItemsBtn = document.querySelector("[data-active-items-btn]");
const completedItemsBtn = document.querySelector("[data-completed-items-btn]");

const themeController = document.querySelector("[data-theme-controller]");
const pictureSrc = document.querySelector("[data-source]");
const pictureImg = document.querySelector("[data-img]");

let isLightMode = false;

let displayState = "all";

//stores  {id, name, isChecked}
let listItems = [];

themeController.addEventListener("click", toggleTheme);
function toggleTheme() {
  isLightMode = !isLightMode;

  if (isLightMode) {
    document.body.classList.add("light");
    pictureSrc.srcset = "./images/bg-desktop-light.jpg";
    pictureImg.src = "./images/bg-mobile-light.jpg";
  } else {
    document.body.classList.remove("light");
    pictureSrc.srcset = "./images/bg-desktop-dark.jpg";
    pictureImg.src = "./images/bg-mobile-dark.jpg";
  }
}

allItemsBtn.addEventListener("click", function () {
  allItemsBtn.classList.add("active");
  activeItemsBtn.classList.remove("active");
  completedItemsBtn.classList.remove("active");

  displayState = "all";

  determineDisplayState(false);
});

activeItemsBtn.addEventListener("click", function () {
  allItemsBtn.classList.remove("active");
  activeItemsBtn.classList.add("active");
  completedItemsBtn.classList.remove("active");

  displayState = "active";

  determineDisplayState(false);
});

completedItemsBtn.addEventListener("click", function () {
  allItemsBtn.classList.remove("active");
  activeItemsBtn.classList.remove("active");
  completedItemsBtn.classList.add("active");

  displayState = "completed";

  determineDisplayState(false);
});

function resetForm() {
  checkbox.checked = false;
  textInput.value = "";
}

// form values will be reset if reset === true
function determineDisplayState(reset) {
  switch (displayState) {
    case "all":
      renderAllItems(reset);
      break;

    case "active":
      renderActiveItems(reset);
      break;

    case "completed":
      renderCompletedItems(reset);
      break;

    default:
      renderAllItems(reset);
  }
}

clearCompletedBtn.addEventListener("click", deleteCompletedItems);
function deleteCompletedItems() {
  let newListItems = listItems.filter(({ isChecked }) => isChecked === false);

  listItems = newListItems;

  determineDisplayState(false);
}

function renderAllItems(reset) {
  if (reset) resetForm();

  let count = 0;

  listItemsParent.innerHTML = "";
  for (const item of listItems) {
    if (!item.isChecked) count++;

    const li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = `
      <input type="checkbox" name="${item.name}" id="${item.id}" ${
      item.isChecked ? "checked" : ""
    }/>
              <label for="${item.id}">
                <span class="list-item-checkbox"></span>
                <span class="list-item-title ${item.isChecked ? "checked" : ""}"
                  >${item.name}
                </span>
              </label>
              <button id="btn_${item.id}" class="list-item-button">
                <img src="./images/icon-cross.svg" alt="delete item" />
              </button>
      `;

    listItemsParent.appendChild(li);

    const input = document.getElementById(item.id);
    const btn = document.getElementById(`btn_${item.id}`);

    input.addEventListener("change", () => toggleCheckbox(item.id));
    btn.addEventListener("click", () => deleteItem(item.id));
  }

  itemsCount.innerText = `${count} ${count === 1 ? "item" : "items"} left`;
}

function renderActiveItems(reset) {
  if (reset) resetForm();

  let count = 0;

  listItemsParent.innerHTML = "";
  for (const item of listItems) {
    if (!item.isChecked) {
      count++;

      const li = document.createElement("li");
      li.classList.add("list-item");
      li.innerHTML = `
      <input type="checkbox" name="${item.name}" id="${item.id}" ${
        item.isChecked ? "checked" : ""
      }/>
              <label for="${item.id}">
                <span class="list-item-checkbox"></span>
                <span class="list-item-title ${item.isChecked ? "checked" : ""}"
                  >${item.name}
                </span>
              </label>
              <button id="btn_${item.id}" class="list-item-button">
                <img src="./images/icon-cross.svg" alt="delete item" />
              </button>
      `;

      listItemsParent.appendChild(li);

      const input = document.getElementById(item.id);
      const btn = document.getElementById(`btn_${item.id}`);

      input.addEventListener("change", () => toggleCheckbox(item.id));
      btn.addEventListener("click", () => deleteItem(item.id));
    }
  }

  itemsCount.innerText = `${count} ${count === 1 ? "item" : "items"} left`;
}

function renderCompletedItems(reset) {
  if (reset) resetForm();

  let count = 0;

  listItemsParent.innerHTML = "";
  for (const item of listItems) {
    if (!item.isChecked) count++;

    if (item.isChecked) {
      const li = document.createElement("li");
      li.classList.add("list-item");
      li.innerHTML = `
      <input type="checkbox" name="${item.name}" id="${item.id}" ${
        item.isChecked ? "checked" : ""
      }/>
              <label for="${item.id}">
                <span class="list-item-checkbox"></span>
                <span class="list-item-title ${item.isChecked ? "checked" : ""}"
                  >${item.name}
                </span>
              </label>
              <button id="btn_${item.id}" class="list-item-button">
                <img src="./images/icon-cross.svg" alt="delete item" />
              </button>
      `;

      listItemsParent.appendChild(li);

      const input = document.getElementById(item.id);
      const btn = document.getElementById(`btn_${item.id}`);

      input.addEventListener("change", () => toggleCheckbox(item.id));
      btn.addEventListener("click", () => deleteItem(item.id));
    }
  }

  itemsCount.innerText = `${count} ${count === 1 ? "item" : "items"} left`;
}

function toggleCheckbox(itemId) {
  const index = listItems.findIndex(({ id }) => id === itemId);

  let newListItems = [...listItems];
  newListItems[index] = {
    ...newListItems[index],
    isChecked: !newListItems[index].isChecked,
  };

  listItems = newListItems;

  determineDisplayState(false);
}

function deleteItem(itemId) {
  const newListItems = listItems.filter(({ id }) => id !== itemId);

  listItems = newListItems;

  determineDisplayState(false);
}

form.addEventListener("submit", addListItem);
function addListItem(event) {
  event.preventDefault();
  if (!textInput.value.trim()) return;

  const name = textInput.value.trim();

  const id = `${name.replaceAll(" ", "")}_${Math.random()}_${Math.random()}`;

  listItems.push({ id, name, isChecked: checkbox.checked });

  determineDisplayState(true);
}
