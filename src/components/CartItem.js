import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    img, title, price, amount,
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  } = props.item;
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        {/* remove button */}
        <button type="button" className="remove-btn">remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button type="button" className="amount-btn">
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button type="button" className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
