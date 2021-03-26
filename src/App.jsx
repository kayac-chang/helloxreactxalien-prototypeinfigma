import { LoggerOut } from "pages/LoggerOut";
import * as Register from "pages/Register";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* <LoggerOut /> */}
      {/* <Register.Step1 /> */}
      <Register.Step2 />
    </div>
  );
}

export default App;
