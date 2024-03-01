import { Link } from 'react-router-dom';

export default function Header() {
  const menus = ['home', 'catelog', 'cart'];
  return (
    <div className="bg-pink-100 flex justify-center">
      {menus &&
        menus.map((item) => {
          return (
            <Link to={`/${item}`} className="p-2 hover:bg-pink-200">
              {item.toUpperCase()}
            </Link>
          );
        })}
    </div>
  );
}
