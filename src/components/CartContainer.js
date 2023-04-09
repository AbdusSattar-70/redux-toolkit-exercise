import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag </h2>
          <h4 className="empty-cart">is currently empty </h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <div>
          {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} type="button" className="btn clear-btn">Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
