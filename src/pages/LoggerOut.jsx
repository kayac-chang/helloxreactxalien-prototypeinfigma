import BG_IMG from "assets/login-background.jpg";
import * as Icon from "components/Icon";
import * as Button from "components/Button";
import Link from "components/Link";

function Brand({ children }) {
  return (
    <h1 className="flex justify-center space-x-4 text-5xl font-medium font-comfortaa">
      <Icon.Logo />

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
        <Link className="flex-1" to="/login">
          <Button.Default className="font-bold">LOG IN</Button.Default>
        </Link>

        <Link className="flex-1" to="/register/step1">
          <Button.Black className="font-bold">REGISTER</Button.Black>
        </Link>
      </footer>
    </>
  );
}
