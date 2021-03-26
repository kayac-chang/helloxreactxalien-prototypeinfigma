import BG_IMG from "assets/login-background.jpg";
import { Logo } from "components/Icon";
import * as Button from "components/Button";

function Brand({ children }) {
  return (
    <h1 className="flex justify-center space-x-4 text-5xl font-medium font-comfortaa">
      <Logo />

      <span>{children}</span>
    </h1>
  );
}

export default function LoggerOut() {
  return (
    <>
      <main className="relative">
        <img src={BG_IMG} alt={BG_IMG} />

        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <Brand>photo</Brand>
        </div>
      </main>

      <footer className="h-full flex justify-center items-center px-4 space-x-2 text-xs">
        <Button.Default className="font-bold">LOG IN</Button.Default>
        <Button.Black className="font-bold">REGISTER</Button.Black>
      </footer>
    </>
  );
}
