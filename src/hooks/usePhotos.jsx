import initContext from "./base";
import fetchPhoto from "api/photo";

const { Provider: PhotoProvider, useHook: usePhotos } = initContext(() => {
  const count = 30;
  const size = 1200;

  return fetchPhoto({ count }).then((photos) =>
    photos.map((photo) => `https://picsum.photos/id/${photo.id}/${size}`)
  );
});

export { PhotoProvider, usePhotos };
export default usePhotos;
