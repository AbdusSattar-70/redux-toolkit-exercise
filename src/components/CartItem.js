import React from 'react';
import { useDispatch } from 'react-redux';

import { ChevronDown, ChevronUp } from '../icons';
import { increase, decrease, removeItem } from '../features/cart/cartSlice';

const CartItem = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    id, img, title, price, amount,
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  } = props.item;

  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(removeItem(id))} type="button" className="remove-btn">remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button onClick={() => dispatch(increase({ id }))} type="button" className="amount-btn">
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
          type="button"
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
