import { useEffect, useState } from "react";

function User({ picture, name, login }) {
  return {
    id: `@${login.username}`,
    name: `${name.first} ${name.last}`,
    avatar: picture.thumbnail,
  };
}

function fetchPhoto({ count }) {
  return fetch(`https://picsum.photos/v2/list?limit=${count}`).then((res) =>
    res.json()
  );
}

function fetchUser({ count }) {
  return fetch(`https://randomuser.me/api/?results=${count}`)
    .then((res) => res.json())
    .then(({ results }) => results);
}

export default function usePosts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const count = 30;
    const size = 1200;

    Promise.all([fetchPhoto({ count }), fetchUser({ count })])
      .then(([photos, users]) =>
        photos.map((photo, index) => ({
          ...User(users[index]),
          photo: `https://picsum.photos/id/${photo.id}/${size}`,
        }))
      )
      .then(setPost);
  }, []);

  return post;
}
