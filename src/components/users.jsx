import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Users() {
  const [users, setUsers] = useState([]);
  // https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result) => setUsers(result))
      .catch((err) => console.log(err));
  }, [users]);
  if (users.length < 1) {
    return <div>No records found</div>;
  }
  return (
    <div className="grid grid-cols-3 ">
      {users &&
        users.map((item) => {
          return (
            <Link className="p-2 border-2" to={`user/${item.id}`}>
              {item.name}
            </Link>
          );
        })}
    </div>
  );
}
