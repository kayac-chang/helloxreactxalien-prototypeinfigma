import ChatRoom from "../components/ChatRoom";

export default function Main() {
  const rooms = [
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello, everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello, everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello, everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello, everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello, everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello, everyone",
    },
  ];

  return (
    <div className="px-4 py-2 divide-y">
      {rooms.map((room) => (
        <ChatRoom
          image={room.image}
          username={room.username}
          message={room.lastMessage}
        />
      ))}
    </div>
  );
}
