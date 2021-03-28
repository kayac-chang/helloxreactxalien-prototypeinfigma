import * as Register from "pages/Register";
import LoggerOut from "pages/LoggerOut";
import Login from "pages/Login";
import Discover from "pages/Discover";
import Search from "pages/Search";
import Profile from "pages/Profile";
import * as Chat from "pages/Chat";

import useLocation from "hooks/useLocation";
import { UserProvider } from "hooks/useUsers";
import { PhotoProvider } from "hooks/usePhotos";
import { PostProvider } from "hooks/usePosts";

function App() {
  const location = useLocation();

  return (
    <div className="w-screen h-screen flex flex-col">
      <UserProvider>
        <PhotoProvider>
          <PostProvider>
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
          </PostProvider>
        </PhotoProvider>
      </UserProvider>
    </div>
  );
}

export default App;
