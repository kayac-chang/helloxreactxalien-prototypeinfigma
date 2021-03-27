import * as Template from "components/templates";
import * as Icon from "components/Icon";
import Link from "components/Link";
import useUsers from "hooks/useUsers";

function ChatBox({ user, children, right = false }) {
  const elements = [
    <div key="avatar" className="w-52">
      <img
        className="rounded-full w-full"
        src={user.avatar}
        alt="user avatar"
      />
    </div>,
    <p key="message" className="bg-gray-100 rounded-lg p-4 text-xs">
      {children}
    </p>,
  ];

  return (
    <div className="flex space-x-4">
      {right ? elements.reverse() : elements}
    </div>
  );
}

export function Room() {
  const users = useUsers(10);

  return (
    <Template.Main>
      <header className="flex justify-center items-center py-4 relative border-b">
        <Link to="/chat" className="absolute left-0 p-2">
          <Icon.Chevron className="w-3 text-black" />
        </Link>

        <h1 className="font-bold">Room</h1>
      </header>

      <div className="px-4 py-8 space-y-4">
        {users.map((user, index) => (
          <ChatBox key={index} user={user} right={index % 2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptatum placeat assumenda repudiandae possimus veritatis
            temporibus sapiente eveniet odio. Quibusdam suscipit consectetur
            nobis ipsa aliquam asperiores! Dolor at repellendus repellat?
          </ChatBox>
        ))}
      </div>
    </Template.Main>
  );
}
