import { useEffect, useState } from "react";
import fetchPhoto from "api/photo";

export default function usePosts() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const count = 30;
    const size = 1200;

    fetchPhoto({ count })
      .then((photos) =>
        photos.map((photo) => `https://picsum.photos/id/${photo.id}/${size}`)
      )
      .then(setPhotos);
  }, []);

  return photos;
}
