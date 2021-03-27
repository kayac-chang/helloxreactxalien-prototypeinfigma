export default function fetchUser({ count }) {
  return fetch(`https://randomuser.me/api/?results=${count}`)
    .then((res) => res.json())
    .then(({ results }) => results);
}
