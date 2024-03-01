import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="m-20 grid grid-cols-3">
      {cart &&
        cart.map((cartItem) => {
          return (
            <div className="m-2 hover:scale-105 cursor-pointer shadow-lg p-5">
              <div>
                <img src={cartItem.thumbnail} width={100} height={100} />
              </div>
              <div className="font-bold">{cartItem.title}</div>
              <div>{cartItem.brand}</div>
              <button onClick={() => dispatch(removeFromCart(cartItem.id))}>
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}
