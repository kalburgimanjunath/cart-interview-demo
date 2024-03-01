import { useEffect, useLayoutEffect, useState } from 'react';
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
export default function Catelog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
      });
    setLoading(false);
  }, [products]);
  useLayoutEffect(() => {
    setLoading(true);
  }, []);
  if (products.length < 0) {
    return <div className="m-20">Loading...</div>;
  }
  return (
    <div className="m-20 grid grid-cols-3">
      {products &&
        products.length > 0 &&
        products.map((item) => {
          return (
            <div className="m-2 hover:scale-105 cursor-pointer shadow-lg p-5">
              <div>
                <img src={item.thumbnail} width={100} height={100} />
              </div>
              <div className="font-bold">{item.title}</div>
              <div>{item.brand}</div>
              <button
                className="bg-blue-200  p-2 shadow-md rounded-lg"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      {loading && (
        <div className="absolute top-0 bottom-0 left-0 opacity-1 text-center items-center align-items-center">
          loading...{' '}
        </div>
      )}
    </div>
  );
}
