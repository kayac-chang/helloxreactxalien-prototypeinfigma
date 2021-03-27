import * as Register from "pages/Register";
import LoggerOut from "pages/LoggerOut";
import Login from "pages/Login";
import Discover from "pages/Discover";
import Search from "pages/Search";
import Profile from "pages/Profile";
import * as Chat from "pages/Chat";

import useLocation from "hooks/useLocation";

function App() {
  const location = useLocation();

  return (
    <div className="w-screen h-screen flex flex-col">
      {{
        "/": <LoggerOut />,
        "/register/step1": <Register.Step1 />,
        "/register/step2": <Register.Step2 />,
        "/login": <Login />,
        "/discover": <Discover />,
        "/search": <Search />,
        "/profile": <Profile />,
        "/chat": <Chat.List />,
        "/chat/room": <Chat.Room />,
      }[location.pathname] || <></>}
    </div>
  );
}

export default App;
