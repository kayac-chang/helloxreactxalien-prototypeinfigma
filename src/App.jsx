import * as Register from "pages/Register";
import LoggerOut from "pages/LoggerOut";
import Login from "pages/Login";
import Discover from "pages/Discover";
import Search from "pages/Search";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* <LoggerOut /> */}
      {/* <Register.Step1 /> */}
      {/* <Register.Step2 /> */}
      {/* <Login /> */}
      {/* <Discover /> */}
      <Search />
    </div>
  );
}

export default App;
