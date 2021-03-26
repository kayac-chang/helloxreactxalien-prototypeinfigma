import clsx from "clsx";

export function Button({ children = "", className }) {
  return (
    <button
      className={clsx("border-2 border-black rounded-lg p-4 w-full", className)}
    >
      {children}
    </button>
  );
}

export default { Button };
