import * as Template from "components/templates";
import Link from "components/Link";
import useUsers from "hooks/useUsers";

export function List() {
  const users = useUsers(4);

  return (
    <Template.Main>
      <header className="flex justify-center py-4 border-b">
        <h1>Chats</h1>
      </header>

      <div>
        {users.map((user, index) => (
          <Link
            key={index}
            to="/chat/room"
            className="flex h-24 space-x-4 px-4 py-4 border-b"
          >
            <img className="rounded-full" src={user.avatar} alt="user avatar" />

            <div className="flex flex-col text-xs space-y-2">
              <h2 className="font-bold">{user.name}</h2>

              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis maiores veniam quia suscipit et velit, dolore aliquid
                deserunt at minima laborum accusantium? Repellat, exercitationem
                quae! Nobis ea ut ad?
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Template.Main>
  );
}
