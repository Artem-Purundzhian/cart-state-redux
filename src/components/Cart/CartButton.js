import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsCount = useSelector( state => state.items);

  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount.reduce((n, {quantity}) => n + quantity, 0)}</span>
    </button>
  );
};

export default CartButton;
