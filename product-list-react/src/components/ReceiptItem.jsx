export default function ReceiptItem({name, price, quantity, imageSrc}) {
    return<div className="receipt-item">
         <div className="receipt-block">
        <img src={imageSrc} alt={name} />
        <p className="receipt-flex">
          <span className="receipt-title">{name}</span>
          <span className="receipt-flex2">
            <span className="receipt-quantity">{quantity}x</span>
            <span className="receipt-price">@${price.toFixed(2)}</span>
          </span>
        </p>
          </div>
          <p className="receipt-sum">${(quantity * price).toFixed(
        2
          )}</p>
    </div>
}