import deleteImgIcon from "../assets/images/icon-cross.svg";

export default function ListItem({
  id,
  name,
  isChecked,
  onToggleCheckbox,
  onDeleteItem,
}) {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={isChecked}
        onChange={() => onToggleCheckbox(id)}
      />
      <label htmlFor={id}>
        <span className="list-item-checkbox"></span>
        <span className="list-item-title">{name}</span>
      </label>
      <button
        id="btn_${item.id}"
        className="list-item-button"
        onClick={() => onDeleteItem(id)}
      >
        <img src={deleteImgIcon} alt="delete item" />
      </button>
    </li>
  );
}
