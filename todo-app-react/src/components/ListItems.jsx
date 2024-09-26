import ListItem from "./ListItem";

export default function ListItems({
  displayState,
  listItems,
  onToggleCheckbox,
  onDeleteItem,
}) {
  const activeItems = listItems.filter(({ isChecked }) => isChecked === false);
  const completedItems = listItems.filter(
    ({ isChecked }) => isChecked === true
  );

  return (
    <ul className="list-items">
      {displayState === "all" &&
        listItems.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            isChecked={item.isChecked}
            onToggleCheckbox={onToggleCheckbox}
            onDeleteItem={onDeleteItem}
          />
        ))}
      {displayState === "active" &&
        activeItems.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            isChecked={item.isChecked}
            onToggleCheckbox={onToggleCheckbox}
            onDeleteItem={onDeleteItem}
          />
        ))}
      {displayState === "completed" &&
        completedItems.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            isChecked={item.isChecked}
            onToggleCheckbox={onToggleCheckbox}
            onDeleteItem={onDeleteItem}
          />
        ))}
    </ul>
  );
}
