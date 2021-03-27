import fetchUser from "api/user";
import { useEffect, useState } from "react";

function User({ picture, name, location }) {
  return {
    name: name.last,
    avatar: picture.large,
    location: `${location.city}, ${location.state}`,
  };
}

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser({ count: 1 })
      .then((list) => list.map(User))
      .then(setUsers);
  }, []);

  return users;
}
