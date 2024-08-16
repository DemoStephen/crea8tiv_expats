import pos from "../assets/illustration-thank-you.svg";

export default function ResultSection({value, onReset}) {
  return (
    <section className="thank-you-state">
      <div className="return" onClick={() => onReset()}>
        <i className="fa-solid fa-arrow-left return-icon"></i>
      </div>
      <div className="pos">
        <img src={pos} alt="POS Machine" />
      </div>
      <p className="result text-center">You selected {value} out of 5</p>
      <h1 className="text-center">Thank You!</h1>
      <p className="text text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </section>
  );
}
