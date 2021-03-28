import fetchUser from "api/user";
import initContext from "./base";

function User({ picture, name, location }) {
  return {
    name: name.last,
    avatar: picture.large,
    location: `${location.city}, ${location.state}`,
  };
}

const { Provider: UserProvider, useHook: useUsers } = initContext(() => {
  const count = 30;

  return fetchUser({ count }).then((list) => list.map(User));
});

export { UserProvider, useUsers };
export default useUsers;
