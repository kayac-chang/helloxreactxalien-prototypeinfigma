import { ReactComponent as BACK_ICON } from "../assets/icon/chevron.svg";

export default function Header({ title, canBack = false }) {
  return (
    <header className="border-b py-2 flex justify-center relative">
      {canBack && (
        <button className="px-2 absolute left-0">
          <BACK_ICON className="w-3" />
        </button>
      )}

      <h1 className="text-md">{title}</h1>
    </header>
  );
}
