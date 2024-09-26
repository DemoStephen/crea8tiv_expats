import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import ListItems from "./ListItems";

export default function Main({ onChangeTheme }) {
  // stores {id, name, isChecked}
  const [listItems, setListItems] = useState([]);
  const [displayState, setDisplayState] = useState("all");

  function handleDisplayState(state) {
    if (displayState === state) return;

    setDisplayState(state);
  }

  function handleAddListItem(id, name, isChecked) {
    setListItems((prevItems) => [...prevItems, { id, name, isChecked }]);
  }

  function handleListItemCheckedState(id) {
    setListItems((prevItems) => {
      const index = prevItems.findIndex(({ id: itemId }) => itemId === id);
      const newListItems = [...prevItems];
      newListItems[index] = {
        ...newListItems[index],
        isChecked: !newListItems[index].isChecked,
      };

      return newListItems;
    });
  }

  function handleDeleteItem(id) {
    setListItems((prevItems) => {
      const newListItems = prevItems.filter(({ id: itemId }) => itemId !== id);

      return newListItems;
    });
  }

  function handleClearCompletedItems() {
    setListItems((prevItems) => {
      const newItems = prevItems.filter(({ isChecked }) => isChecked === false);

      return newItems;
    });
  }

  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="header-title">TODO</h1>
          <button className="theme-controller" onClick={onChangeTheme}></button>
        </header>
        <Form onAddListItem={handleAddListItem} />
        <section className="list-items-container">
          <ListItems
            displayState={displayState}
            listItems={listItems}
            onToggleCheckbox={handleListItemCheckedState}
            onDeleteItem={handleDeleteItem}
          />
          <Footer
            listItems={listItems}
            displayState={displayState}
            onChangeDisplayState={handleDisplayState}
            onClearCompletedItems={handleClearCompletedItems}
          />
        </section>
      </div>
    </main>
  );
}
