import * as Template from "components/templates";
import * as Button from "components/Button";
import * as Avatar from "components/Avatar";
import useUsers from "hooks/useUsers";
import usePhotos from "hooks/usePhotos";
import Gallery from "components/Gallery";

function Control({ user }) {
  return (
    <section className="text-xs space-y-4">
      <Button.Black className="uppercase font-bold">
        FOLLOW {user.name}
      </Button.Black>

      <Button.Default className="font-bold">MESSAGE</Button.Default>
    </section>
  );
}

function Photos({ photos }) {
  return (
    <section className="py-8 space-y-8">
      <Gallery>
        {photos.map((photo) => (
          <div key={photo}>
            <img src={photo} alt="img" className="object-cover h-80" />
          </div>
        ))}
      </Gallery>

      <section>
        <Button.Default className="text-xs font-bold">SEE MORE</Button.Default>
      </section>
    </section>
  );
}

export default function Profile() {
  const user = useUsers()[0];
  const photos = usePhotos();

  if (!user) {
    return <Template.Main className="px-4" />;
  }

  return (
    <Template.Main className="px-4">
      <Avatar.Big user={user} />

      <Control user={user} />

      <Photos photos={photos} />
    </Template.Main>
  );
}
