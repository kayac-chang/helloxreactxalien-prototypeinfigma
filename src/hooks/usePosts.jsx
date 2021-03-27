import { useEffect, useState } from "react";
import fetchPhoto from "api/photo";
import fetchUser from "api/user";

function User({ picture, name, login }) {
  return {
    id: `@${login.username}`,
    name: `${name.first} ${name.last}`,
    avatar: picture.thumbnail,
  };
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
