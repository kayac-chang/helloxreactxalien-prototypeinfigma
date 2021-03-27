import * as Register from "pages/Register";
import LoggerOut from "pages/LoggerOut";
import Login from "pages/Login";
import Discover from "pages/Discover";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* <LoggerOut /> */}
      {/* <Register.Step1 /> */}
      {/* <Register.Step2 /> */}
      {/* <Login /> */}
      <Discover />
    </div>
  );
}

export default App;
