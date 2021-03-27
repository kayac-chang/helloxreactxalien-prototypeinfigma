export default function fetchPhoto({ count }) {
  return fetch(`https://picsum.photos/v2/list?limit=${count}`).then((res) =>
    res.json()
  );
}
