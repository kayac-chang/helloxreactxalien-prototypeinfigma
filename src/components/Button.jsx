import clsx from "clsx";

export function Default({ children = "", className }) {
  return (
    <button
      className={clsx("border-2 border-black rounded-lg p-4 w-full", className)}
    >
      {children}
    </button>
  );
}

export function Black({ children = "", className }) {
  return (
    <Default className={clsx("bg-black text-white", className)}>
      {children}
    </Default>
  );
}
