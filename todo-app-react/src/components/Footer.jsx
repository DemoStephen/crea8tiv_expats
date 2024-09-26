export default function Footer({
  listItems,
  onClearCompletedItems,
  displayState,
  onChangeDisplayState,
}) {
  let activeItemsCount = 0;

  for (const item of listItems) {
    if (!item.isChecked) activeItemsCount++;
  }

  return (
    <footer className="footer">
      <p>
        {activeItemsCount} {`${activeItemsCount <= 1 ? "item" : "items"}`} left
      </p>
      <div className="items-display-mode">
        <button
          className={`${displayState === "all" ? "active" : ""}`}
          onClick={() => onChangeDisplayState("all")}
        >
          All
        </button>
        <button className={`${displayState === "active" ? "active" : ""}`}
          onClick={() => onChangeDisplayState("active")}
          >
          Active
        </button>
        <button className={`${displayState === "completed" ? "active" : ""}`}
          onClick={() => onChangeDisplayState("completed")}
          >
          Completed
        </button>
      </div>
      <button onClick={onClearCompletedItems}>Clear Completed</button>
    </footer>
  );
}
