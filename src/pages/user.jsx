import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState();

  if (id) {
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((result) => setUser(result))
        .catch((err) => console.log(err));
    }, [id]);
    return (
      <div>
        <div>{user && user.name}</div>
        <div>{user && user.email}</div>
      </div>
    );
  }
}
