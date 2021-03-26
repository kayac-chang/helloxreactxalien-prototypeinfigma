import BG_IMG from "assets/login-background.jpg";
import { LOGO } from "components/Icon";
import { Button } from "components/Button";

function Brand({ children }) {
  return (
    <h1 className="flex justify-center space-x-4 text-5xl font-medium font-comfortaa">
      <LOGO />

      <span>{children}</span>
    </h1>
  );
}

export function LoggerOut() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <main className="relative">
        <img src={BG_IMG} alt={BG_IMG} />

        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <Brand>photo</Brand>
        </div>
      </main>

      <footer className="h-full flex justify-center items-center p-4 space-x-2 text-xs ">
        <Button className="font-bold">LOG IN</Button>
        <Button className="bg-black text-white font-bold">REGISTER</Button>
      </footer>
    </div>
  );
}
