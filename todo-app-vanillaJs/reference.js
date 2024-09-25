const form = document.getElementById("form");
const formText = document.getElementById("formText");
const formCheckBox = document.getElementById("formCheckbox");
const tasks = document.getElementById("tasks");
const allState = document.getElementById("all");
const activeState = document.getElementById("active");
const completedState = document.getElementById("completed");

let currentDisplayState = "all";

// {id, name, isCompleted}
let tasksArr = [];

function resetForm() {
  formText.value = "";
  formCheckBox.checked = false;
}

allState.addEventListener("click", function () {
  allState.classList.add("selected");
  activeState.classList.remove("selected");
  completedState.classList.remove("selected");

  currentDisplayState = "all";

  determineDisplay(false);
});

activeState.addEventListener("click", function () {
  allState.classList.remove("selected");
  activeState.classList.add("selected");
  completedState.classList.remove("selected");

  currentDisplayState = "active";

  determineDisplay(false);
});

completedState.addEventListener("click", function () {
  allState.classList.remove("selected");
  activeState.classList.remove("selected");
  completedState.classList.add("selected");

  currentDisplayState = "completed";

  determineDisplay(false);
});

// form values will be reset if reset === true
function determineDisplay(reset) {
  switch (currentDisplayState) {
    case "all":
      renderAllTasks(reset);
      break;

    case "active":
      renderActiveTasks(reset);
      break;

    case "completed":
      renderCompletedTasks(reset);
      break;

    default:
      renderAllTasks(reset);
  }
}

function renderAllTasks(reset) {
  if (reset) resetForm();

  tasks.innerHTML = "";
  for (const task of tasksArr) {
    const div = document.createElement("div");
    div.innerHTML = `
    <input type="checkbox" name="${task.name.replaceAll(" ", "-")}" id="${
      task.id
    }" ${task.isCompleted ? "checked" : ""} />
      <label for="${task.id}" class="${
      task.isCompleted ? "line-through" : ""
    }">${task.name}</label>
    <button id="btn_${task.id}">delete</button>
    `;
    tasks.appendChild(div);

    const input = document.getElementById(task.id);
    const btn = document.getElementById(`btn_${task.id}`);

    input.addEventListener("change", () => toggleCheckbox(task.id));
    btn.addEventListener("click", () => deleteTask(task.id));
  }
}

function renderActiveTasks(reset) {
  if (reset) resetForm();

  const activeTasks = tasksArr.filter(
    ({ isCompleted }) => isCompleted === false
  );

  tasks.innerHTML = "";
  for (const task of activeTasks) {
    const div = document.createElement("div");
    div.innerHTML = `
    <input type="checkbox" name="${task.name.replaceAll(" ", "-")}" id="${
      task.id
    }" ${task.isCompleted ? "checked" : ""} />
      <label for="${task.id}" class="${
      task.isCompleted ? "line-through" : ""
    }">${task.name}</label>
    <button id="btn_${task.id}">delete</button>
    `;
    tasks.appendChild(div);

    const input = document.getElementById(task.id);
    const btn = document.getElementById(`btn_${task.id}`);

    input.addEventListener("change", () => toggleCheckbox(task.id));
    btn.addEventListener("click", () => deleteTask(task.id));
  }
}

function renderCompletedTasks(reset) {
  if (reset) resetForm();

  const completedTasks = tasksArr.filter(
    ({ isCompleted }) => isCompleted === true
  );

  tasks.innerHTML = "";
  for (const task of completedTasks) {
    const div = document.createElement("div");
    div.innerHTML = `
    <input type="checkbox" name="${task.name.replaceAll(" ", "-")}" id="${
      task.id
    }" ${task.isCompleted ? "checked" : ""} />
      <label for="${task.id}" class="${
      task.isCompleted ? "line-through" : ""
    }">${task.name}</label>
    <button id="btn_${task.id}">delete</button>
    `;
    tasks.appendChild(div);

    const input = document.getElementById(task.id);
    const btn = document.getElementById(`btn_${task.id}`);

    input.addEventListener("change", () => toggleCheckbox(task.id));
    btn.addEventListener("click", () => deleteTask(task.id));
  }
}

function toggleCheckbox(id) {
  const index = tasksArr.findIndex(({ id: taskId }) => taskId === id);

  const newTasks = [...tasksArr];

  newTasks[index] = {
    ...newTasks[index],
    isCompleted: !newTasks[index].isCompleted,
  };

  tasksArr = newTasks;
  determineDisplay(false);
}

function deleteTask(id) {
  const newTasks = tasksArr.filter(({ id: taskId }) => taskId !== id);
  tasksArr = newTasks;
  determineDisplay(false);
}

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (!formText.value.trim()) return;

  const name = formText.value.trim();
  const id = `${name.replaceAll(" ", "")}_${Math.random()}_${Math.random()}`;
  const isCompleted = formCheckBox.checked;

  tasksArr.push({ id, name, isCompleted });

  determineDisplay(true);
}
