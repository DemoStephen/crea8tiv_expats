export default function Screen({ currentOperand, previousOperand, operator }) {
  return (
    <section className="screen">
      <p className="previous-operand">
        {previousOperand} {operator}
      </p>
      <p className="current-operand">{currentOperand}</p>
    </section>
  );
}
