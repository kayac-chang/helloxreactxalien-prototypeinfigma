import fetchPhoto from "api/photo";
import fetchUser from "api/user";
import initContext from "./base";

function User({ picture, name, login }) {
  return {
    id: `@${login.username}`,
    name: `${name.first} ${name.last}`,
    avatar: picture.thumbnail,
  };
}

const { Provider: PostProvider, useHook: usePosts } = initContext(() => {
  const count = 30;
  const size = 1200;

  return Promise.all([fetchPhoto({ count }), fetchUser({ count })]).then(
    ([photos, users]) =>
      photos.map((photo, index) => ({
        ...User(users[index]),
        photo: `https://picsum.photos/id/${photo.id}/${size}`,
      }))
  );
});

export { PostProvider, usePosts };
export default usePosts;
