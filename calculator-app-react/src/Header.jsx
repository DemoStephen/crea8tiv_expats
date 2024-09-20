export default function Header({ onSelectTheme }) {
  return (
    <header className="header">
      <h3 className="header-title">calc</h3>
      <div className="header-theme-control">
        <p className="header-theme-text">THEME</p>
        <div className="header-theme-controller">
          <p>
            <span onClick={() => onSelectTheme("")}>1</span>
            <span onClick={() => onSelectTheme("theme-2")}>2</span>
            <span onClick={() => onSelectTheme("theme-3")}>3</span>
          </p>
          <div className="header-theme-indicator">
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}
