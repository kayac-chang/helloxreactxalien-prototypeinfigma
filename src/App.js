import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

import { useState } from "react";

function ChatBox({ image, message, right }) {
  const elements = [
    <div>
      <img className="rounded-full w-48" src={image} alt="lorem" />
    </div>,
    <p className="bg-gray-200 p-4 rounded-lg">{message}</p>,
  ];

  return (
    <div className="flex space-x-4">
      {right ? elements.reverse() : elements}
    </div>
  );
}

function ChatRoom({ messages }) {
  return (
    <div className="px-4 py-4 space-y-8">
      {messages.map((msg, index) => (
        <ChatBox image={msg.image} message={msg.message} right={index % 2} />
      ))}
    </div>
  );
}

function App() {
  const [messages, setMessage] = useState([
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    },
  ]);

  return (
    <div>
      <Header title="James" canBack />

      <ChatRoom messages={messages} />

      <BottomNav
        onPlusClick={() => {
          setMessage([
            ...messages,
            {
              image: "https://picsum.photos/seed/picsum/200",
              message:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
            },
          ]);
        }}
      />
    </div>
  );
}

export default App;
