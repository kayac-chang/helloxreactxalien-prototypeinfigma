import * as Template from "components/templates";
import * as Button from "components/Button";
import useUsers from "hooks/useUsers";
import usePhotos from "hooks/usePhotos";
import Gallery from "components/Gallery";

function Avatar({ user }) {
  return (
    <section className="flex flex-col items-center py-8 space-y-8">
      <img className="rounded-full w-32" src={user.avatar} alt="user avatar" />

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-comfortaa">{user.name}</h1>
        <p className="text-sm font-bold">{user.location}</p>
      </div>
    </section>
  );
}

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
      <Gallery resources={photos} />

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
    return <Template.Main />;
  }

  return (
    <Template.Main>
      <Avatar user={user} />

      <Control user={user} />

      <Photos photos={photos} />
    </Template.Main>
  );
}
