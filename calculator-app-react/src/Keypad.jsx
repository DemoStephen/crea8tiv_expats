export default function Keypad({
  onAppendNumber,
  onDeleteNumber,
  onReset,
  onSelectOperator,
  onComputeResult,
}) {
  return (
    <section className="keypad">
      <button type="button" onClick={() => onAppendNumber(7)}>
        7
      </button>
      <button type="button" onClick={() => onAppendNumber(8)}>
        8
      </button>
      <button type="button" onClick={() => onAppendNumber(9)}>
        9
      </button>
      <button type="button" className="del" onClick={onDeleteNumber}>
        DEL
      </button>
      <button type="button" onClick={() => onAppendNumber(4)}>
        4
      </button>
      <button type="button" onClick={() => onAppendNumber(5)}>
        5
      </button>
      <button type="button" onClick={() => onAppendNumber(6)}>
        6
      </button>
      <button type="button" onClick={() => onSelectOperator("+")}>
        +
      </button>
      <button type="button" onClick={() => onAppendNumber(1)}>
        1
      </button>
      <button type="button" onClick={() => onAppendNumber(2)}>
        2
      </button>
      <button type="button" onClick={() => onAppendNumber(3)}>
        3
      </button>
      <button type="button" onClick={() => onSelectOperator("-")}>
        -
      </button>
      <button type="button" onClick={() => onAppendNumber(".")}>
        .
      </button>
      <button type="button" onClick={() => onAppendNumber(0)}>
        0
      </button>
      <button type="button" onClick={() => onSelectOperator("/")}>
        /
      </button>
      <button type="button" onClick={() => onSelectOperator("x")}>
        x
      </button>
      <button type="button" className="span-2 reset" onClick={onReset}>
        RESET
      </button>
      <button type="button" className="span-2 equals" onClick={onComputeResult}>
        =
      </button>
    </section>
  );
}
